---
title: Live2d应用到Hexo 看板娘
date: 2020-08-14 14:03:23
cover: https://cdn.jsdelivr.net/gh/freexmelody/cdn@master/imgGo/bg814.jpg
tags: 
  - Hexo
  - Live2d
---
{% note default %}
Live2d配置搭建已更新，详细查看[移动端因Live2d造成的访问卡顿解决方案](https://fxlabtinystar.cn/2020/08/15/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%9B%A0Live2d%E9%80%A0%E6%88%90%E7%9A%84%E8%AE%BF%E9%97%AE%E5%8D%A1%E9%A1%BF%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/)
{% endnote %}
## 前言

  前俩天在逛Blog的时候看到了一只超可爱的看板娘，直接心动...遂往自己的blog中加入了经轻微改动的血小板！
  以下提供2中不同的方法...可自行选择！
## 安装
插件安装：
```
 npm install --save hexo-helper-live2d
```
模型安装：</br>
模型的选择可以是自己制作的或是网上下载的，[这里](https://github.com/xiazeyu/live2d-widget-models)提供了作者的模型...</br>
详细配置设置可以在Github项目查看 [>传送<](https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md)

## 第二选择
// 如果只需要显示看板娘而不需要其他的功能的话...使用以上方法就够了.
</br>
啊当然...如果需要一些功能，比如打招呼...对一些行为事件作出反应，就需要用到其他方法...
</br>
> 这个方法不需要安装 hexo-helper-live2d ...</br>
以下我将通过操作复述作者原话( emmmm....实际参考dalao的Github就可以完成...</br>
### 0 × 01 准备
先到dalao的[Github](https://github.com/galnetwen/Live2D)下载整理后的Live2d代码，解压到</br>
> \themes\’主题‘\source 

</br>
目录下,重命名文件夹为Live2d

### 0 × 02 修改配置
我们不修改主题文件，所以在主题配置文件中外挂样式、脚本</br>
inject配置项 bottom 中插入代码并确认路径正确：
``` 
 - <link rel="stylesheet" href="live2d.css路径 如：/live2d/css/live2d.css" /><div id="landlord"> <div class="message" style="opacity:0"></div> <canvas id="live2d" width="280" height="250" class="live2d"></canvas> <div class="hide-button"><font color="#FFFFFF">隐藏</font></div></div>
```
接下来引入脚本并确认路径：</br>
message 路径：
```
 - <script type="text/javascript"> var message_Path = '/live2d/live2d'</script> 
```
主页配置 此处修改为你的域名，必须带斜杠
```
- <script type="text/javascript"> var home_Path = '你的blog/' </script>
```
live2d.js路径
```
- <script type="text/javascript" src="/live2d/live2d/js/live2d.js"></script>
```
message.js
```
- <script type="text/javascript" src="/live2d/live2d/js/message.js"></script>
```
模型json路径
```
- <script type="text/javascript"> loadlive2d("live2d", "/live2d/live2d/model/XueXiaoban/XueXiaoban.model.json"); </script>
```
> 至此，就搭建好看板娘啦...至于模型动作 事件回应需要另外手动配置...

于模型.json中配置看板娘的动作···
message.json中配置事件回应···
js中拓展你所需要的功能...( 对应节日的提醒什么的
</br>
什么！你想让看板娘有玩游戏，换装的功能？
可以使用 [live2d-widget](https://github.com/stevenjoezhang/live2d-widget) , 要使用非官方模型需要搭建后台API····我还太菜:(

