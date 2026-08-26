'use strict';

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripQuotes(value) {
  return String(value || '').replace(/^['"]|['"]$/g, '');
}

hexo.extend.tag.register('gallery', function legacyGallery(args, content) {
  const rendered = hexo.render.renderSync({ text: content || '', engine: 'markdown' });
  return '<div class="legacy-gallery">' + rendered + '</div>';
}, { ends: true });

hexo.extend.tag.register('galleryGroup', function legacyGalleryGroup(args) {
  const values = args.map(stripQuotes);
  const title = values[0] || '相册';
  const description = values[1] || '';
  const link = values[2] || '#';
  const image = values[3] || '';
  return [
    '<a class="legacy-gallery-group" href="' + escapeHtml(link) + '">',
    image ? '<img src="' + escapeHtml(image) + '" alt="' + escapeHtml(title) + '" loading="lazy">' : '',
    '<span class="legacy-gallery-group__body">',
    '<strong>' + escapeHtml(title) + '</strong>',
    description ? '<small>' + escapeHtml(description) + '</small>' : '',
    '</span></a>'
  ].join('');
});

hexo.extend.tag.register('hideInline', function legacyHideInline(args) {
  const values = args.join(' ').split(',');
  const content = values[0] || '';
  const label = values[1] || '查看';
  return '<details class="legacy-hide legacy-hide--inline"><summary>' +
    escapeHtml(label) + '</summary><span>' + escapeHtml(content) + '</span></details>';
});

hexo.extend.tag.register('hideToggle', function legacyHideToggle(args, content) {
  const label = (args.join(' ').split(',')[0] || '点击查看').trim();
  const rendered = hexo.render.renderSync({ text: content || '', engine: 'markdown' });
  return '<details class="legacy-hide"><summary>' + escapeHtml(label) +
    '</summary><div class="legacy-hide__content">' + rendered + '</div></details>';
}, { ends: true });

hexo.extend.tag.register('meting', function disabledLegacyMeting(args) {
  const playlistId = stripQuotes(args[0] || '');
  const href = playlistId
    ? 'https://music.163.com/#/playlist?id=' + encodeURIComponent(playlistId)
    : 'https://music.163.com/';
  return '<p class="legacy-music-link">旧音乐播放器已停用。<a href="' +
    escapeHtml(href) + '" target="_blank" rel="noopener">在网易云音乐中打开歌单</a></p>';
});

hexo.extend.filter.register('before_post_render', function convertObsidianEmbeds(data) {
  if (!data || typeof data.content !== 'string') return data;

  data.content = data.content.replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (_, target, option) {
    const cleanTarget = target.trim().replace(/^assets[\\/]/i, '');
    const encodedPath = cleanTarget.split(/[\\/]/).map(encodeURIComponent).join('/');
    const alt = option && !/^\d+$/.test(option.trim()) ? option.trim() : cleanTarget.replace(/\.[^.]+$/, '');
    const width = option && /^\d+$/.test(option.trim()) ? ' width="' + option.trim() + '"' : '';
    return '<img src="/assets/obsidian/' + encodedPath + '" alt="' + escapeHtml(alt) + '"' + width + '>';
  });

  data.content = data.content.replace(/\[\[#([^\]]+)\]\]/g, function (_, heading) {
    const label = heading.trim();
    const anchor = label.toLowerCase().replace(/\s+/g, '-');
    return '[' + label + '](#' + encodeURI(anchor) + ')';
  });

  return data;
});

hexo.extend.filter.register('before_post_render', function convertRelativeObsidianAssets(data) {
  if (!data || typeof data.content !== 'string') return data;

  data.content = data.content.replace(/\]\(\.\/assets\/([^\)]+)\)/g, function (_, target) {
    const encodedPath = target.trim().split(/[\\/]/).map(encodeURIComponent).join('/');
    return '](/assets/obsidian/' + encodedPath + ')';
  });

  data.content = data.content.replace(
    /\]\(file:\/\/\/[^\)\r\n]*000_Shader[^\)\r\n]*\.pdf\)/g,
    '](/assets/obsidian/000_Shader%20Node%20PDF%20Merge%5B001-100%5D%20.pdf)'
  );

  return data;
});

hexo.extend.filter.register('before_post_render', function neutralizeLegacyEmbeds(data) {
  if (!data || typeof data.content !== 'string') return data;

  data.content = data.content.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, function (block) {
    return /live2d|loadlive2d|message_Path/i.test(block) ? escapeHtml(block) : block;
  });

  data.content = data.content.replace(/<link\b[^>]*live2d[^>]*>/gi, function (tag) {
    return escapeHtml(tag);
  });

  data.content = data.content.replace(/<div\b[^>]*class=['"][^'"]*aplayer[^'"]*['"][^>]*><\/div>/gi, '');

  return data;
});
