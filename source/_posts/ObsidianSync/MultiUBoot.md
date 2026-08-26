---
title: 多引导系统启动盘制作
cover: https://i.loli.net/2021/05/26/6WZeraY8fySUNlF.png
date: 2021-05-19 10:35:56
tags: 系统
---
### 前言
‘这是一个简单的过程，当然也有其他的实现方式。’
嗯，其实早在这之前就有整多引导盘的想法了，不过当时没有合适的U盘来做 <span style="font-family:sans-serif">:3 </span>
这几天还正好想把家里笔记本的系统恢复为在训练处的系统（毕竟自己将常用的一些东西也都装到上面了嘛…. ) 而且….. 光盘引导不知发什么神经了= =||…. 引导过程中总会出现一些问题。光盘还是得好好保管啊….

为了存储备份的系统，我还特意准备了一个拥有更大储存空间的U盘！

<div style="text-align: center;">
<img  src="https://i.loli.net/2021/05/26/hADguStZrCMQeXs.jpg" alt="有点小贵，但很快乐 😳"  width="30" style="display: inline;"> 
<span style="display: block; color: darkgray; font-size: 5px; font-style: italic; margin-top: -20px;">有点小贵，但很快乐</span>
</div>

于是我就用这个U盘来恢复系统啦、 还阔以根据自己的喜好或需要选择不同的PE、、

### 准备时
- 🌼 自行选择合适的PE系统
- 🌻 本期主角 <a target="_blank" rel="noopener" href="https://github.com/ventoy/Ventoy/releases/download/v1.0.44/ventoy-1.0.44-windows.zip">Ventoy</a> ( 1.0.44 Release )
- 🌴 一个U盘 （并不需要很大 哪怕是1G也没关系，根据需要就行  <span style="font-family:sans-serif">:3 </span>）

### 进行时
执行`ventoy` ，在 设备 下拉选项框中选择需要安装的U盘 ， 注意后续需要格式化，所以要做好U盘文件的备份工作喔、随后就执行安装吧。

安装完毕后，U盘将被重命名为`Ventoy`，此时就可以将备用的PE系统或系统镜像扔到U盘里边啦、`『 注意不要扔到ventoy的引导盘中 』`
也可以放入一个新建文件夹中，便于管理。

重启系统 `进入BIOS并更改『 BIOS 启动序列 』` ， 将刚刚安装ventoy的U盘移至首位, 保存设置并重启。
然后，然后就可以看到ventoy的启动面啦、🥳

<div style="text-align: center;">
<img src="https://i.loli.net/2021/05/27/SaPlEoRqZH9zNIk.jpg" alt="启动界面 "  width="50%" style="display: inline;"> 
<span style="display: block; color: darkgray; font-size: 5px; font-style: italic; margin-top: -20px;">Ventoy 启动界面，依旧是根据自己的需要选择 👋 ( 学校滴电脑，又把它重装了:x 嘘~</span>
</div>