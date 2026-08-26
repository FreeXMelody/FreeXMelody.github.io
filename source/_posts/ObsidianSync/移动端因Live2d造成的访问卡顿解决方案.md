---
title: 移动端因Live2d造成的访问卡顿解决方案
date: 2020-08-15 05:39:53
cover: https://cdn.jsdelivr.net/gh/freexmelody/cdn@master/imgGo/bannerBG.jpg
tags:
    - Live2d
    - 优化
---
## 前言
在实现Live2d应用到Hexo博客后，通过移动端对网页的访问，发现Live2d并不在移动端显示，但网页载入速度堪忧，滑动屏幕有明显卡顿 经过搜索查询后，得知看板娘虽然不显示，但是其<code>JS</code>和<code>CSS</code>文件仍会加载，占用大量资源而造成的问题。</br>
主要参考：https://cangshui.net/3518.html</br>
感谢原作者的分享。

## 开始配置
将之前所配置的<code>Inject</code>项清除。

与自己的live2d目录JS文件夹下新建一个JS文件(文件名自定)

写入JS文件:
```JavaScript
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {} else {
        document.write('<link rel="stylesheet" href="/live2d/live2d/css/live2d.css" /><div id="landlord"> <div class="message" style="opacity:0.5"></div> <canvas id="live2d" width="280" height="250" class="live2d"></canvas> <div class="hide-button"><font color="#FFFFFF">隐藏</font></div></div>');
        document.write('<script type="text/javascript"> var message_Path = "/live2d/live2d/"</script>');
        document.write('<script type="text/javascript"> var home_Path = "https://fxlabtinystar.cn/" </script>');
        document.write('<script type="text/javascript" src="/live2d/live2d/js/live2d.js"></script>');
        document.write('<script type="text/javascript" src="/live2d/live2d/js/message.js"></script>');
        document.write('<script type="text/javascript"> loadlive2d("live2d", "/live2d/live2d/model/XueXiaoban/XueXiaoban.model.json");</script>');
    }
}
browserRedirect();
```

注意路径正确····改成自己的

然后在<code>Inject.Bottom</code>项中引用此JS即可完成配置:

```javascript
- '<script data-pjax src="/live2d/live2d/js/index.js"></script>'
```

