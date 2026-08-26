---
title: PowerShell Step by Step
date: 2021-01-30 09:57:34
tags: 
- PowerShell
- Terminal
cover: https:/s2.loli.net/2022/04/07/VOe6EUnKDi4mNCA.png
---

~~本文基于 `PowerShell 3.0` 发布~~
Windows是一个面向API的操作系统

## Getting started with PowerShell

> 一个脚本的平均寿命始于提示符，终结于字符

`Cmd + C# + .net = PowerShell`

 `cmdlets construction : Verb + Noun`

分号`;`  可以使多条命令并行输出

## Help System in PowerShell
我们并不可能去牢记所有的命令，这不仅仅是存在的cmdlets太多的问题，除非真的可以记住它们(?。。。)
作为一名啃文档症重度患者，查看一件事物的帮助手册是一个很好的解决方案！
以下指令用以获取PowerShell cmdlets的官方文档.
  <i class="iconfont">&#xe61f; 语法：</i>

``` PowerShell
Get-Help [[-Name] <string>]  [<CommonParameters>]
```
> The Parameter parameter displays only the descriptions of the specified parameters. If you specify only the asterisk (*) wildcard character, it displays the descriptions of all parameters. When Parameter specifies a parameter name such as GroupBy, information about that parameter is shown.

当使用`星号（*）`通配符时，若为其指定参数名，ps将列出所有与它相关的 cmdlets：

e.g.

```powershell
Get-Help *service*
# 它将列出前后包含 service 的相关 cmdlets

Get-Help g*service*
# 将列出以 g 开头并包含 service 的相关 cmdlets
```
如果想列出某 cmdlet 的完整文档：
```powershell
Get-Help [cmdlet] -Detailed
# Display more information for a cmdlet
Get-Help [cmdlet] -full
# full 的文档与 detailed 相似，更完整的内容对学习'管道'很有帮助
```
对于一个cmdlet,使用``` -example``` 参数将显示所有官方给出相关实例。

为了防止工作流混乱，可以使用`-showwindow` 属性显示一个单独的帮助窗口来查看帮助文档。

关于帮助文档中的语法结构 ， 这里有一个概念 `位置参数` , 即在参数列表中已经固定位置，不需要再输入形参名来指定参数，直接输入传递参数即可，如以下代码示例：
```powershell
get-service -name bits
# 这条指令可以简化为
get-service bits
&& 利用别名那就更短了
gsv bits
```

嘛，其实我还是更习惯在ms官网看这些文档，ps也确实提供了一条捷径来获取这一帮助，更利于查找所需命令的文档，以下命令可以快速转到`线上文档`：
```powershell
 get-help cmdlet -online
#  -online 参数将跳转到在线帮助文档
```

---

## Usage of pipeline
Powershell 中的重要的概念 -- `管道` , 简单的说，一组命令中，输出的命令结果将`作为下一个命令的参数`执行，
e.g.

```powershell
get-service | export-csv -path F:\services.csv
# 这组命令将 获取所有服务 并 将其导出到 F盘 services.csv文件中
```
将获取的数据导出到本地：
```powershell
gal | ConvertTo-Html | Out-File f:\Alias.html
# 这组命令将导出所有的别名及其所有属性到 Alias.html 文件中

gal | ConvertTo-Html -Property resolvedCommandname,displayname| Out-File f:\Alias.html
# 这组命令将导出 存在resolvedCommandname,displayname属性的别名 到 F:\Alias.html 中
```

<div style="border-color: #FFB937; border-style: dotted none; border-width: 1px; text-align: center; font-size: 10px; color: #C88200; margin: 20px 0;" class="faa-float animated faa-slow">
    ✏️ ———— 手动分割线 ——————
</div>
另外 ，.在使用管道进行命令组测试时，有时候我们并不清楚这条命令组将会带来的效应。
比如输入以下命令组

```powershell
get-service | stop-service
# 这一命令组将关闭所有的的服务.这可能会导致各种问题 ， 但问题在于 powershell 不会告诉你这条命令安不安全
(嗯。。 powershell 的 “自雷式”编程)
```
所以使用类似这样的命令组之前，可以使用 `-whatif` 来测试，看看命令组究竟会进行哪些操作。
还可以使用 `-confirm` , 不过此参数是告诉 `某指令会怎么做(即指令目标target)` 和 `你是否要这样做` , 注意ps不会为你做出任何选择 

**+.** 若在命令的结尾写上 `|` 管道符号并 Enter, Powershell 将换行 , 用户可以继续输入命令

---

### Pipeline flow control cmdlet "Where-Object "

信息流控制

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-top:10px; margin-bottom:10px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Docs</span>
<a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/where-object?view=powershell-7.2#description" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">Microsoft Docs</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Where-Object(Microsoft.PowerShell.Core)"
</span>
</div>
`alias:` `?` ; `where`

`?` 是 `Where-Object`的别名，它还有另一个别名`where`  ， 主要用于`过滤列表项或输出结果`

### Objects for PowerShell

先来看一组命令：
```powershell
ps | ? -Property handles -gt 900 | sort handles
```
这组命令通过列出所有进程 并给到后面的管道处理 -> 从属性handles中筛选出大于900的 -> 以handles进行排序


这里能够使用属性，因为我们从`get-process (ps)`中得到的并不只是文本，实际是获取了一组对象，对象拥有属性和方法(老相识了)

可以使用`Get-Member(gm)` 查看有哪些属性或方法是可用的

使用`Select-Object(select)`来选择查看哪些属性
```powershell
gal | select Definition,Name
# 查看definition 和 name 属性 ， 即查看cmdlets 和 alias
```

---



## ✨ Tips for PowerShell - 小技巧ˋ ( ° ▽ ° ) 

### History of Instructions - 指令历史记录

要在 PowerShell 中执行历史命令，可以使用以下方法：

1. 使用`Get-History (alias -> ghs / h / history)`命令来查看历史命令记录。该命令会显示包含命令编号、命令文本、执行时间等信息的历史记录。
2. 使用`Invoke-History (alias -> ihy / r)`命令来执行指定编号的历史命令。例如，如果您想要执行编号为`123`的历史命令，可以使用以下命令：`r 123`

### Operating of Directory - 目录操作

`cd [directory]`可以切换工作目录为指定目录, `cd` 不附带参数则会回到默认目录~, 

`cd ..` 回到上层目录 , 

`cd -` 回到上个工作目录 , 

+ 若要回到历史目录 , 可以使用`Get-History`命令结合`Where-Object`命令来过滤出包含`cd`命令的历史记录。`Where-Object`命令用于过滤对象集合，并返回满足指定条件的对象。

  以下是一个例子，演示如何过滤出包含`cd`命令的历史记录：

  ```powershell
  Get-History | Where-Object {$_.CommandLine -like '*cd*'}
  上述命令将会列出所有包含`cd`关键字的历史记录。
  
   ⚠️ 该命令会先使用`Get-History`命令获取所有历史记录，然后使用`Where-Object`命令过滤出包含`cd`命令的历史记录。在`Where-Object`命令中，`$_.CommandLine`表示当前对象的命令行参数，`-like`表示匹配模式，`'*cd*'`表示包含`cd`字符的任意字符串。
  
    执行上述命令后，系统会列出所有包含`cd`命令的历史记录，包括命令编号、执行时间、命令文本等信息。
  
  
  如果您想要执行指定编号的历史命令，可以使用`Invoke-History`命令结合`Where-Object`命令来实现。例如，如果您想要执行最后一个包含`cd`命令的历史记录，可以使用以下命令：
  (Get-History | Where-Object {$_.CommandLine -like '*cd*'} | Select-Object -Last 1).Id | ForEach-Object {Invoke-History $_}
  
   ⚠️ 在这个命令中，Get-History命令获取所有历史记录，Where-Object命令过滤包含cd命令的历史记录，Select-Object命令选取最后一个历史记录，最后使用ForEach-Object命令将该历史记录的编号传递给Invoke-History命令来执行该历史命令。
   
   $_ 是一个特殊的变量，它代表管道中的当前值。在 PowerShell 3.0 及更高版本中，它也被称为 $PSItem

```

## 💡 Terminal Solutions 

{% note info %}
此标题内容下将记录一些使用终端程序时发现的解决方案。
{% endnote %}

### 于 Windows Terminal 中使用 系统环境变量
<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Refer</span>
<a href="https://github.com/microsoft/terminal/issues/7239" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">ISSUE #7239</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Environment changes are only picked up upon full restart"
</span>
</div>


<div style="border-color: #FFB937; border-style: dotted none; border-width: 1px; text-align: center; font-size: 10px; color: #C88200; margin: 20px 0;" class="faa-float animated faa-slow">
    ✏️ ———— 手动分割线 ——————
</div>


在添加完`环境变量`后使用Windows Terminal 时，使用`cd(Set-Location)`无法即时进入目录或打开程序，解决方案即将 Windows Terminal `重启`即可，访问设置的环境变量目录:

```PowerShell
Set-Location -Path $env:SystemRoot
```
此问题已在 #7239 添加`issue-Bug`标签，Merged issue 来自 [#7243](https://github.com/microsoft/terminal/pull/7243)

若是VSCode 或是 VS 中的终端，与上同理

### [New] 关于Windows Terminal 中的权限提升
<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Refer</span>
<a href="https://github.com/microsoft/terminal/issues/632" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">ISSUE #632</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Configuring Windows Terminal profile to always launch elevated"
</span>
</div>


**[Obsoleted]**  ~~由于在一个未使用管理员模式的窗口中使用了一个拥有管理员权限的命令行...使应用程序存在安全漏洞，开发团队正在寻找一个安全的解决方案。~~

已经可以以管理员权限启动WT.

在体验Windows 11 期间 , 我发现`Windows Terminal V2.0`已经集成到 Windows 11 且成为默认终端.. `Win + x` 可见"Windows Terminal (Administrator)" 

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-bottom:25px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Docs</span>
<a href="https://docs.microsoft.com/zh-cn/windows/terminal/" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">Windows Terminal | Microsoft Docs</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Windows Terminal Overview"
</span>
</div>


<br>

**💡 几个小特性**

- 若一个新的终端标签以权限提升启动,则其他存在的标签将转换为同等权限启动.
- 可以使用批处理文件来初始化终端的配置文件
- 从[Windows 终端预览版 v1.12.2922.0](https://github.com/microsoft/terminal/releases/tag/v1.12.2922.0)开始,可以使用 [firstWindowPreference](https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/startup#behavior-when-starting-a-new-terminal-session-preview)全局设置关闭终端会话时保存窗口窗格布局

### 使用 PowerShell 添加永久的环境变量

`更改完毕后重启Windows Terminal 即可生效`

基于.NET 5  `Environment`类中的 `SetEnvironmentVariable`方法
```powershell
### Modify a system environment variable ###
[Environment]::SetEnvironmentVariable
     ("Path", $env:Path, [System.EnvironmentVariableTarget]::User)
```
#### SetEnvironmentVariable(String, String, EnvironmentVariableTarget) - 重载 - 
创建、修改或删除当前进程中或者为当前用户或本地计算机保留的 Windows 操作系统注册表项中存储的环境变量。
```c#
public static void SetEnvironmentVariable (string variable, string? value, EnvironmentVariableTarget target);
```
<div style="overflow: hidden; margin-bottom: 10px;">
<span style="font-weight: 600; font-size: 12px; background-color: #f2f2f2; color: #585858; padding:0 6px 2px; line-height: 160%; font-family: sans-serif;">variable</span>
<span style="text-decoration: none; font-size: 14px; font-family: Georgia, serif; ">String</span>
<span style="display: block; margin: 5px 0px 0px 4px;font-size: 14px; ">环境变量名。</span>
</div>
<div style="overflow: hidden; margin-bottom: 10px;">
<span style="font-weight: 600; font-size: 12px; background-color: #f2f2f2; color: #585858; padding:0 6px 2px; line-height: 160%; font-family: sans-serif;">value</span>
<span style="text-decoration: none; font-size: 14px; font-family: Georgia, serif; ">String</span>
<span style="display: block; margin: 5px 0px 0px 4px;font-size: 14px; ">要分配给<span style="font-size: 12px; background-color: #f2f2f2; font-family: sans-serif;">variable</span>的值</span>
</div>
<div style="overflow: hidden; margin-bottom: 10px;">
<span style="font-weight: 600; font-size: 12px; background-color: #f2f2f2; color: #585858; padding:0 6px 2px; line-height: 160%; font-family: sans-serif;">target</span>
<span style="text-decoration: none; font-size: 14px; font-family: Georgia, serif; ">EnvironmentVariableTarget</span>
<span style="display: block; margin: 5px 0px 0px 4px;font-size: 14px; ">一个用于指定环境变量的位置的枚举值。</span>
</div>


<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Docs</span>
<a href="https://docs.microsoft.com/zh-cn/dotnet/api/system.environment.setenvironmentvariable?view=net-5.0#System_Environment_SetEnvironmentVariable_System_String_System_String_System_EnvironmentVariableTarget_" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">Microsoft Docs</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Environment.SetEnvironmentVariable 方法 (System)"
</span>
</div>

---

### 关于路径中对于文件名中出现 中括号 `[square brackets`] 无法识别的问题




## 🎁 Instances IN Practices

### Get process ID though port which was occupied

```powershell
Get-NetTCPConnection -LocalPort 443 | ft LocalPort,OwningProcess
```

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-top:10px; margin-bottom:10px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Docs</span>
<a href="https://docs.microsoft.com/zh-cn/powershell/module/nettcpip/get-nettcpconnection?view=winserver2012r2-ps&redirectedfrom=MSDN#examples" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">Microsoft Docs</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Get-NetTCPConnection(NetTCPIP)"
</span>
</div>


以上命令将获取占用`443端口`的`PID`

通过`pipeline`传递给`ft`,将所选属性的结果以表格形式输出

`ft` => `Format-Table`



### 删除环境变量

<span style="display:block; margin-left:40%; font-family: Georgia, serif;">1. Remove-Item</span>

`Remove-Item (Alias as del / erase / rd / ri / rm / rmdir)` 

```powershell
Remove-Item Env:\MyTestVariable
```

<span style="display:block; margin-left:40%; font-family: Georgia, serif;">2. SetEnvironmentVariable</span>

使用`.NET`框架组件 , 将变量值设为`$null`

```powershell
[Environment]::SetEnvironmentVariable("MyTestVariable",$null,"User")
```





### 关于将Windows系统变量暂时注释以禁用此变量

![image-20230318164948588](https://s2.loli.net/2023/03/18/6JxzWUcmIepXVYB.png)

### 使用类Unix命令`which`的替代命令 `Get-Command (gcm)` 获取可执行命令的目录

Find Executables – Windows ‘which’ Equivalent

Find the location of an executable command using Windows command-line prompt (`CMD`):

```cmd
C:\> where command_name
```

Find the path of an executable command using `Windows PoweShell`

```powershell
PS C:\> Get-Command command_name
```



### ⚙️ mklink 创建软链接及深入理解

先看看在`Cmd`中的操作

使用**mklink**命令来创建软链接，它是一个内置的windows命令，不需要安装额外的软件。mklink有以下几种参数：

- **/D**：创建目录符号链接，也就是软链接，它可以跨分区或磁盘。
- **/H**：创建文件硬链接，它只能在同一个分区或磁盘上，且不能用于目录。
- **/J**：创建目录联接，也就是目录的硬链接，它只能在同一个分区或磁盘上。

```cmd
mklink [参数] 链接 目标

其中，链接是你要创建的软链接的名称，目标是你要链接的文件或目录的路径。例如，如果你想把C盘下的一个文件夹test软链接到D盘下的一个文件夹link，可以这样输入：

mklink /D D:\link C:\test
```

软链接本质上是一个文件，它的内容是指向另一个文件或目录的路径。因此，软链接在内存中的表示就是一个文件的表示，包括文件头、文件名、文件属性、文件数据等。**文件数据就是软链接的内容**，也就是指向的**路径**。



<span style="display:block; margin-left:40%; font-family: Georgia, serif;">PowerShell 实现</span>

<p>在 Windows 上创建 <code>SymbolicLink</code> 类型需要以管理员身份运行PowerShell。 但是，启用了开发人员模式的 Windows 10（内部版本 14972 或更高版本）不再需要提升权限来创建符号链接。</p>

使用 PowerShell 的 **`New-Item`** 命令

````powershell
ni -ItemType SymbolicLink -Path [] -Target []
````

> **Target** is an alias for the **Value** parameter. The target of the symbolic link can be a relative path. Prior to PowerShell v6.2, the target must be a fully-qualified path ( 即绝对路径 ).

> Beginning in PowerShell 7.1, you can now create to a **SymbolicLink** to a folder on Windows using a **relative path**.