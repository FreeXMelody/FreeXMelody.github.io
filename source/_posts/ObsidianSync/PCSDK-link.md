---
title: PCSDK建立控制器连接进行文件传输
date: 2020-9-10 14:38:46
cover: https://cdn.jsdelivr.net/gh/freexmelody/cdn@master/imgGo/logo.png
tags: 
	- C#
	- ABB RAPID
---

{% note info %}
项目已开源，可在[Github](https://github.com/FreeXMelody/RapidController)查看
{% endnote %}

## PCSDK 二次开发 数据传输

首次使用PCSDK进行二次开发，上位机需安装PCSDK，于vs引用dll,替换App.config文件

### 添加引用:

```c#
using ABB.Robotics;
using ABB.Robotics.Controllers;
using ABB.Robotics.Controllers.Discovery;   
using ABB.Robotics.Controllers.EventLogDomain;
using ABB.Robotics.Controllers.FileSystemDomain;
using ABB.Robotics.Controllers.MotionDomain;
using ABB.Robotics.Controllers.RapidDomain;
```

### 0 × 01 配置网线：

接入网线，上位机IP改为自动获取

### 0 × 02 代码实现：

界面设计略过~ （并没有好康的UI -w-

**其余功能基于以下方法实现**······

```c#
private NetworkScanner scanner = null;
private Controller controller = null;
```

扫描控制器：

```c#
public void scanNetwork()
{
    scanner = new NetworkScanner();
    scanner.Scan();
    controllers = scanner.Controllers;
    // listBox1.Items.Clear();
    ListViewItem listViewItem1;
    listView1.Items.Clear();
    foreach (ControllerInfo info in controllers)
    {
        // INDEX: SysName/ IP / ControllerName / SysInfo  / ID / Port
        listViewItem1 = new ListViewItem(info.SystemName);
        listViewItem1.SubItems.Add(info.IPAddress.ToString());
        listViewItem1.SubItems.Add(info.ControllerName);
        listViewItem1.SubItems.Add(info.Version.ToString());
        listViewItem1.SubItems.Add(info.SystemId.ToString());
        listViewItem1.SubItems.Add(info.WebServicesPort.ToString());
        listView1.Items.Add(listViewItem1);
    }
}
```

连接到控制器：

```c#
public void connectController()
{
    foreach (ControllerInfo info in controllers)
    {
        if (controller != null) // 登出
        {
            controller.Logoff();
            label2_INFO.Text = "已断开连接。";
            Text = "已断开连接....";
            setInfoColor();
            controller.Dispose();
            controller = null;
            button_connect.Text = "     连接";
        }
        else // 登入
        {
            Guid a = new Guid();
            a = Guid.Parse(listView1.SelectedItems[0].SubItems[4].Text);
            controller = Controller.Connect(a, ConnectionType.Standalone);
            controller.Logon(UserInfo.DefaultUser);
            Text = "当前已连接：" + listView1.SelectedItems[0].Text;
            label2_INFO.Text = "已连接。";
            setInfoColor();
            ShowNewMessage("已连接到控制器：" + listView1.SelectedItems[0].Text);
            button_connect.Text = "     断开";
        }
    }
}

```



