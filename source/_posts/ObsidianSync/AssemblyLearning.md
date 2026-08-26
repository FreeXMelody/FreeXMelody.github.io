---
title: ASM PROJECT
date: 2021-09-17 08:24:55
cover: https://i.loli.net/2021/09/17/CfiyHp6RdIWcTJa.png
description: 汇编基础
tags:
  - 汇编
---
<!-- 强行适配.. -->

<div style="height:385px; width:100%; overflow:hidden; position:relative; top:-30px;" >
<img src="https://i.loli.net/2021/09/17/CfiyHp6RdIWcTJa.png" width=700;>
</div>

<div style="float:left; margin-left:22%;"><img src="https://img.shields.io/badge/Based%20on-Assembly_Edition_4-blue?&style=for-the-badge" ></div>
<div style="float:left; margin-left:10px;"><img src="https://img.shields.io/badge/Based%20on-Interest_&_Love-green?&style=for-the-badge"></div>

---
### Basic Part

#### Memory Segmentation in 8086 Microprocessor

REF ....whatever..//

##### **General-Purpose Registers (GPR | 通用寄存器 ) - 16-bit naming conventions** 

The 8 GPRs are as follows:

1. Accumulator register (AX). Used in arithmetic operations
2. Counter register (CX). Used in shift/rotate instructions and loops.
3. Data register (DX). Used in arithmetic operations and I/O operations.
4. Base register (BX). Used as a pointer to data (located in segment register DS, when in segmented mode).
5. Stack Pointer register (SP). Pointer to the top of the stack.
6. Stack Base Pointer register (BP). Used to point to the base of the stack.  -- The address in SS register is combined with the offset in BP to get the location of the parameter. BP can also be combined with DI and SI as base register for special addressing.
7. Source Index register (SI). Used as a pointer to a source in stream operations.
8. Destination Index register (DI). Used as a pointer to a destination in stream operations.

#### 存储器 、存储单元

`存储器` 也就是我们平时所说的`内存` 。 负责为CPU提供指令和数据 , 在一台PC机中内存的作用仅次于CPU,存储器被划分为若干个`存储单元`, 每个存储单元从0开始顺序编号. 一般微型机的存储器的存储单元可以存储一个`Byte`,即一个字节(8个二进制位) - `微机存储器容量的最小单位`。

一般应具有 存储数据 和 读写数据 的功能， 每个单元有一个地址，是一个整数 编码 ，可以表示为 二进制 整数。

磁盘不同于内存,磁盘上的数据或程序不读取到内存中就无法被CPU使用

#### CPU对存储器的读写 - 各总线概念解释

> 25.1.20 注: 通常情况下，CPU的**字长**会决定数据总线和地址总线的宽度。

存储单元在存储器中顺序编号，这些编号可以看作存储单元在存储器中的地址。

计算机中 连接 CPU 与其他芯片的导线被称作是 `"总线"` , 
根据传输信息的不同， 其从逻辑上可分为三类 : 

- **地址总线** (CPU通过地址总线来指定存储器单元)
「传送地址信息，用于告诉内存或 IO：我要访问哪一个地址！」 e.g.
```
- CPU 把地址 `0x1000` 放上地址总线
    
- 同时发出控制信号(控制总线)：我要读内存！
    
- 内存模块会在地址 `0x1000` 返回对应的数据
```
  CPU通过地址总线来指定存储单元 ，决定了CPU可以对多少个存储单元进行寻址。

  地址总线的宽度`(位数)决定了CPU寻址的最大空间大小,假设一个CPU有10根地址总线,其寻址最大数为2^10 = 1024个`  最小数为0,最大数为1023

>**✨注:**  在现代 64 位系统中（如 Win11 x64），虽然理论地址总线是 64 位，但操作系统/CPU 实际通常只启用了部分位数（例如 48 位物理地址线 → 可寻址 256 TB 内存）。

  **地址总线可寻到的内存单元构成了这个CPU的`内存地址空间`。**

- **控制总线**

  控制总线的宽度决定了CPU对外部器件的控制能力。  \[即位宽, 位宽指的是控制信号线的数量。这些控制信号线用于管理和协调CPU与其他组件之间的通信 ]

---



- **数据总线**

  数据总线的宽度决定了`CPU与外界的数据传输速度` , 8根数据总线可以一次传送8位二进制数据 (即1Byte),

  后注: 8086CPU数据总线宽度为16 ,寄存器为16位, 即一次最大可从内存中读取或写入`一个字`的数据大小
  
  注:
```
  🎯 数据总线是硬件层的传输能力：

- **64位数据总线**：代表 CPU 与内存之间一次最多可以传输 **64位 = 8字节** 的数据。
    
- 它决定了**单次读/写操作**中能够搬运多少“货物”。
    
- 类比：数据总线就像一辆卡车，一次能拉多少箱子是它的载重量。
    

---

🧠 而线程是软件层的逻辑控制：

- **线程**是 CPU 执行的指令序列。每个线程会使用自己的寄存器集、栈等，**共享**某些资源（比如内存）。
    
- 多线程 ≠ 数据总线变宽。
    
- 多线程 ≈ 多个搬运工可以排队用同一辆卡车。
```
  

> 稍稍拓展一下啦 , 如现在我的64位的CPU , 意味着其地址总线有64根，因此它的最大寻址能力是2^64。这意味着CPU可以直接访问的内存地址空间是**2^64个字节**，也就是**16EB（艾字节）**。但是，实际上，由于各种硬件和软件的限制，实际可用的内存通常远小于这个理论值。例如，Windows操作系统通常只支持到128GB或更少的物理内存。此外，某些地址被保留用于特殊用途，如内存映射的I/O设备，因此不能用于常规内存。

#### 内存地址空间

CPU操作存储器(**RAM(Random Access Memory 我们常说的内存条，临时存数据，断电就消失。**) ROM 带有BIOS的**ROM - (比如 BIOS 所在的存储芯片，是写好后不经常改动的程序，掉电也保留。)**)时将他们看作内存来对待,将他们总的看作一个`由若干个存储单元组成的逻辑存储器`. 这个逻辑存储器就是所说的内存空间地址.

附加理解 : 

CPU 看它们(RAM ROM)不是“分开的”，而是“统一的地址空间”

- 在汇编或者底层编程中，CPU 并不关心具体数据存在哪块 RAM 或 ROM。
- 它通过一个统一的**“地址空间”**访问数据 —— 你给我个地址（比如 0x7FFEF000），我就去那里取/存数据。
> 🌐 这就叫做：**将 RAM 和 ROM 抽象为一个“逻辑存储器”**。

什么是**逻辑存储器** ？
- 可以想象为：一个**连续编号的巨大仓库**（编号 = 地址），CPU 可以随机读取或写入任意位置。
- 每一个存储单元（最小粒度）通常就是 **1字节（8位）**。
- 所以说：**内存空间是一个地址从 0 开始，每个位置对应一个字节的逻辑数组**。


每一个物理存储器在这个逻辑存储器中占有一个地址段,即一段`地址空间`,对于CPU来说,在这段地址空间中进行数据读写 , 实际也就是对对应的物理存储器进行读写.

因为内存空间地址与存储单元相关,其大小受到CPU地址总线宽度的限制,例如8086CPU的地址总线为`20`,则其可以传送`2^20`个不同的地址信息`(0 ~ 2^20-1)`,也就是可以定位`2^20`个内存单元,则其内存地址空间大小为 `2^20 bytes, 或 1024^2 bytes` , 即 `1MB`

在基于一个计算机硬件进行系统编程时,必须知道这个系统中内存地址的分配情况, 在对某类存储器进行数据读写时,必须知道它的第一个单元的地址和最后一个单元的地址,才能保证读写操作是在预期的存储器中进行的.

### 寄存器

CPU由运算器 \ 寄存器 \ 控制器 等器件组成,这些器件靠内部的总线相连..

内部总线实现CPU内部各个器件之间的联系, 外部总线实现CPU和主板上其他器件的联系

#### 🚩 字在寄存器中的存储

> 25.1.20 注: 字在寄存器中的存储和数据总线的宽度有关吧 , 比如64位cpu中 一个字64bit , 也就是 8个字节, 一个字（64位）的高位字节和低位字节分别占据4个字节 (即32位)

字(记为`word`) ,在8086CPU中 , 其数据单元宽度为16位,   即一个字由`2个字节`组成 这两个字节分别称为这个字的`高位字节`和`低位字节`.

> 对于64位CPU , 在计算机体系结构中，**64位**意味着一个字（word）的大小为**64位**，也就是**8个字节**。详细解释一下：
>
> - **64位**指的是**数据总线的宽度**，表明一次最大可从内存中读取或写入的数据大小
> - 一个**64位字**由**64个二进制位**组成，等于**8个字节**。
> - 64位CPU和算术逻辑单元（ALU）的设计基于64位大小的寄存器、地址总线或数据总线，支持64位宽度的整数运算和逻辑操作。

`字单元`,即存放一个字型数据(8086CPU - 16位)的内存单元,由两个地址连续的内存单元组成, `高地址内存单元`中存放字型数据的`高位字节` , `低地址内存单元`中存放字型数据的`低位字节`.

由此可见8086CPU采取了`小端模式 `

> 所谓的小端模式（Little-endian），是指数据的高字节保存在内存的高地址中，而数据的低字节保存在内存的低地址中，这种存储模式将地址的高低和数据位权有效地结合起来，高地址部分权值高，低地址部分权值低，和我们的逻辑方法一致.  记忆: 地址的增长顺序与值的增长顺序相同

一个十六进制数 = 四位二进制数 , 遂 一个字节需要以两个十六进制数来表示

#### 几条汇编指令与8086CPU给出物理地址的方式

在进行数据传送或运算时,要注意两个操作对象的位数应当是一致的. 高低位对应

```
add ax,bx
add al.bl
add ah,bh
```

	`8086CPU`有20位地址总线,可以传送20位地址,寻址能力` 2^20 (bytes) = 1024^2 (bytes) = 1024kb = 1MB` ,( BIT - BYTE - KB -MB - GB - TB - PB - EB -ZB - YB  )

>1. **Kilobyte (KB)**: 1024 Bytes
>     
> 2. **Megabyte (MB)**: 1024 Kilobytes
>     
> 3. **Gigabyte (GB)**: 1024 Megabytes
>     
> 4. **Terabyte (TB)**: 1024 Gigabytes
>     
> 5. **Petabyte (PB)**: 1024 Terabytes
>     
> 6. **Exabyte (EB)**: 1024 Petabytes
>     
> 7. **Zettabyte (ZB)**: 1024 Exabytes
>     
> 8. **Yottabyte (YB)**: 1024 Zettabytes
>     
> 
> 以此类推。每个单位都是以1024倍递增，这样的命名方式来源于国际单位制的前缀。

内部采用2个16位地址合成的方法来形成一个20位的物理地址(一个称为`段地址 `, 一个称为`偏移地址`)

段地址和偏移地址通过内部总线被送入一个称作`地址加法器`的部件中,`由它将两个16位的地址组合为20位的物理地址`

地址加法器通过`物理地址 = 段地址 × 16(d) + 偏移地址`的方式合成物理地址`(5位十六进制数 , 即20位二进制数)`

---

`段地址 × 16` 常用说法 `左移4位`(指二进制位) , 相当于 乘 `2^4`

基础地址( 即将 段地址 x 16(d) 看作基础地址 ) + 偏移地址 = 物理地址

关于8086CPU的物理地址的五位十六进制数表示方式:

因为其寻址能力为1MB , 一位十六进制数相当于4位二进制数 , 所以五位十六进制数 = 4*5 = 20位 = 2^20 = 1MB 正好符合了8086CPU的寻址能力范围.	

#### 🔓 测验题解 - 2.2

有意思的题目...

> 有一数据存放在内存20000H单元中，现给定段地址为SA，若想用偏移地址寻到此单元。则SA应满足的条件是：最小为 ? 最大为 ?

最大值: 比较好求, 设SA为x, 则 EA为 `0000H`, x = 20000H / 16 = 2000H , 即二进制位右移四位

最小值: EA 最大 为`FFFF`, 则段地址为 2 0000H - FFFF 后右移4位(逆向) 结果 1000H,但是经过验算结果非20000H 而是 `1FFFF`,初见这我也觉得很奇怪... (我的计算器绝对没有问题.jpg) 但其实`1FFFF即段地址1000H的最大寻址范围` , 与所需求内存单元就差 1 , 所以1000H + 1 = `1001H` 这才是正确的值.`也即是最小满足SA条件的值`

---

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-bottom:25px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Refer</span>
<a href="https://blog.csdn.net/frost_soda/article/details/78450545" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">CSDN</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Assembly Quiz 2.2"
</span>
</div>


好怪但雀氏

```
(20000H-ffffH)/16
=(10001)/16
这里如果不按传统算数先算括号里，而是把括号打开再算。结果就对了
20000H / 16 - FFFFH / 16
2000H - 0FFFH = 1001H
```

#### 段寄存器

8086CPU有四个主要的段寄存器 : CS `Code Segment` \ DS `Data Segment`\ SS `Stack Segment`\ ES `Extra Segment 附加段寄存器`

CS:IP 是8086CPU中最关键的俩个寄存器 , 它们指示了 CPU 当前要读取指令的地址

CS为`代码段寄存器 (Code Section)`  IP为指令`指针寄存器 (Instruction Pointer)`

`CS * 16 + IP = 物理地址`

#### 关于 IP / CS 的修改

注: 8086CPU并不提供修改 CS IP的指令 , Debug中`r`指令可修改CS : IP , 这是通过调试手段实现

能改变IP / CS 内容的指令被统称为`转移指令`, 目前可以用一个简单的指令来修改它们 :`jmp 指令`

指令形如 `jmp 段地址:偏移地址`, 将CS修改为段地址, IP修改为偏移地址

或者使用 `jmp 合法寄存器`来修改`IP`的内容

e.g.  `jmp ax => mov IP,ax`  

### 寄存器与内存访问

`DS寄存器(数据段寄存器 ,  data segment register)`通常用来存储要访问数据的`段地址`

#### 🚩 CPU提供的栈机制

栈 -- 拥有特殊访问方式的存储空间 --  `LIFO | Last In First Out后进先出`, CPU提供的最基本两个指令是 `PUSH(入栈) 和 POP(出栈)`,它们的操作都是以`字`为单位进行的

SS \ SP 寄存器 -- `( Stack Segement ) / ( Stack Pointer )`,通过两者定义栈段,`任意时刻 SS:SP都指向栈顶`,CPU将从此处取得`栈顶`的地址  , 注意 CPU 只记录栈顶,栈空间的大小需要自己管理

#### pop / push 的执行过程

> 执行push时.CPU的两步操作是: 先改变SP, 后向SS:SP处传送, 执行 pop时, CPU的两步操作是:先读取SS:SP处的数据,后改变SP

#### ⭐ 栈综述

将一段内存当作栈段, 这是我们自己在编程中的安排, 想要pop / push 等栈操作指令访问我们定义的栈段,就得将`SS:SP`指向我们定义的栈段

一个栈段的最大容量为`64KB`

栈满时继续压栈将导致**`栈顶环绕 | 即 栈溢出`**

- 当栈已满时，再次执行入栈操作会导致栈顶环绕，即数据从栈顶重新回到栈底。
- **栈顶环绕的影响**：
  - 栈顶环绕可能导致数据被覆盖。新的数据会覆盖最早入栈的数据。
  - 这可能会导致程序错误、崩溃或不可预测的行为。
- **避免栈顶环绕**：
  - 为了避免栈顶环绕，程序员需要确保栈的容量足够大，或者在使用栈时谨慎处理数据。
  - 在编写汇编程序或其他语言的代码时，需要注意栈的使用，以避免栈溢出问题。




❤️ 务必注意, 当栈空时, SS:SP将指向`栈底的后一个内存单元`.

> **When the stack is empty ,SP Point to the address of the next memory unit at the bottom of the stack , namely SP = At the bottom of the stack +1.**

- 栈用于保存函数调用的现场（例如寄存器的值、局部变量 , 函数调用和返回地址等）。

- 当函数返回时，栈上的数据被弹出，恢复到调用函数之前的状态。

出栈和入栈操作不会影响到内存中的数据，只是在栈中进行了数据的移动和临时存储。

#### ⭐ 关于32位架构中为什么不能以内存到内存的形式传递数据

> The answer involves a fuller understanding of RAM. Simply stated, RAM can only be in two states, read mode or write mode. If you wish to copy one byte in ram to another location, you *must* have a temporary storage area outside of RAM as you switch from read to write.
>
> It is certainly possible for the architecture to have such a  RAM to RAM instruction , but it would be a high level instruction that in microcode would translate to copying of data from RAM to a register then back to RAM. Alternatively, it could be possible to extend the RAM controller to have such a temporary register *just* for this copying of data, but it wouldn't provide much of a benefit for the added complexity of CPU/Hardware interaction.


<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-bottom:25px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Refer</span>
<a href="https://stackoverflow.com/questions/11953352/why-ia32-does-not-allow-memory-to-memory-mov" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">Stackoverflow</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Why IA32 does not allow memory to memory mov?"
</span>
</div>
1. **指令设计和硬件限制**：
   - 汇编语言的指令集是由硬件架构和设计决策所决定的。
   - 大多数汇编指令都是为了从寄存器到内存、内存到寄存器、立即数到寄存器等进行数据传输而设计的。
   - 直接从一个内存位置复制数据到另一个内存位置的指令并不常见，因为这样的操作通常需要更复杂的指令序列。
   
2. **间接传输**：

   - 虽然没有直接的内存到内存传输指令，但可以通过使用寄存器作为中介来实现间接的内存到内存传输。
   - 例如，您可以将数据从一个内存位置加载到寄存器，然后将寄存器的内容存储到另一个内存位置。

3. **性能和复杂性考虑**：

   - 直接的内存到内存传输可能涉及到更多的总线操作和更复杂的硬件电路。

   - 这样的操作可能会影响性能，并增加指令的执行时间。



#### ⭐  关于在8086 CPU中，不能直接将立即数传递给**段寄存器**

**段寄存器**：
8086 CPU具有四个段寄存器：CS（代码段）、DS（数据段）、SS（堆栈段）和ES（附加段）。
这些段寄存器用于指示内存中不同段的起始地址。
立即数和段寄存器：
在8086汇编中，不能直接使用立即数来赋值给段寄存器，例如```MOV DS, 1000H```是错误的。
段寄存器的值必须通过其他方式获得，例如从其他寄存器、内存或其他操作数中加载。

不能直接将立即数传递给段寄存器的原因涉及到硬件设计和指令集的考虑。详见解释：

1. **硬件设计**：
   - 8086 CPU的设计中，段寄存器的作用是指示内存中不同段的起始地址。这些段包括代码段、数据段、堆栈段等。
   - 段寄存器的值必须是一个有效的内存地址，而不是一个立即数。
2. **指令集设计**：
   - 8086的指令集并没有直接支持将立即数传递给段寄存器的操作。
   - 指令集中提供了其他方式来加载段寄存器，例如使用其他寄存器、内存地址或其他操作数。



#### ⭐ 关于汇编中 十六进制数据前加 '0' 规则

如何做?

> 0～9开头的不用加,  A～F开头的要加

主要是汇编语言编译器的设计者需要用户按这个规则编程, 否则编译器不知道你写的是什么。

因为`标号`不能以0～9的数字开头,但可以以字母开头，

导致无法区分数值与标记

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-bottom:25px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Refer</span>
<a href="https://www.daniweb.com/programming/software-development/threads/293939/hexadecimal-what-is-the-zero-for#post1265073" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">DaniWeb</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Hexadecimal- - what is the zero for?" (Answered by 'Dante Wingates')
</span>
</div>
<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-bottom:25px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Refer</span>
<a href="https://blog.csdn.net/weixin_43272781/article/details/104617910" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">CSDN</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"十六进制数据前加0规则"
</span>
</div>


### ⭐ 8086CPU的工作过程

- 从`CS:IP`指向的内存单元读取指令 , 读取的指令进入指令缓冲器
- `IP`指向下一条指令
- 执行指令 ( 转到步骤 1 , 重复这个过程 )



### 程序执行过程与跟踪

程序由`Shell`(操作系统的外壳程序,用户使用Shell来操作计算机系统进行工作  (如DOS中的`command.com`就是一个Shell) 加载入内存

 之后Shell将设置`CS:IP`来指向程序的`入口点`, 然后暂停运行, 将程序交给CPU执行.

待任务执行完毕后, 控制返回到Shell , 屏幕显示由当前盘符和当前路径组成的提示符,等待用户输入.(返回到加载者)

### 📌 实验三 - 编程|编译|连接|跟踪 	- - 分析 

>  debug 跟踪以下程序执行过程 , 记录每步执行后相关寄存器中内存和栈顶内容

```assembly
assume cs:codesg

codesg segment
    mov ax,2000H
    mov ss,ax ; ss = ax = 2000H
    mov sp,0
    add sp,10 ; sp = AH
    ;; 注意pop执行顺序 , 首先将栈顶内容送入对应寄存器 , 再更新SP(栈指针)
    pop ax  ; 内存追踪 ax = 076cH , SP 新指向下个字开始处 = SP + 2 = C  ,   新栈顶 2000:C
    pop bx ;  bx = 01a4H , SP = SP + 2 = E 新栈顶 2000:E
    
    ;; 执行顺序与pop相反 , 优先处理SP , 再处理压栈操作
    push ax ; sp = sp - 2 = C , 将 ax 入栈 到 2000:C(D) => 01A4H => 076CH(结果)
    push bx ; sp = sp -2 = A , bx 入栈 至 2000:A(B) => 01A4H => 01A4H
    
    pop ax ; 出栈 , ax = 01A4H , sp = sp + 2 = C 
    pop bx ; 出栈 , bx = 076CH , sp = E

    mov ax,4c00h ; ax = 4c00H
    int 21h ; p
codesg ends

end
```

✨

### Base Register[bx] And "Loop" instruction

`[bx]`(base, 基址寄存器 , 常用于地址索引 )实际为一个偏移地址EA , 段地址SA默认存放在`DS`中

LOOP 指令格式 :` loop 标号` ,  通过loop指令实现循环功能 , 通过 `CX ( count )寄存器`控制循环次数 

执行顺序 : 

- (CX) = (CX) -1
- 判断 若 CX > 0 , 则向前转至 `标号` 处执行 , 若 CX = 0 , 则继续向下执行

值得注意的是, 这里跳转到 标号 处,相当于高级语言中常见的 for \ while 等 循环中常见的 条件循环 , 汇编实现为 jle,jmp,jne等. 或许之后会详细提到

总体程序框架:

```assembly
mov cx,循环次数
s: ; 标号:需要循环的程序段
loop s ; loop label
```

**Pseudo code**

```Pesudo
CX = CX - 1
if CX <> 0 then
jump to label
else
no jump, continue
```

*`🍃更新:`* 

loop所跳转的标号 , 实际表示的是一个偏移地址.



#### ⚠️ Debug和汇编编译器MASM对指令的不同处理 | [idata]

若处理以`[]`包含的指令时, 型如`[idata]`,它们的处理结果如下

Debug 将`[idata]`视作一个内存单元, 将内部`idata`作为内存单元的偏移地址 , 其段地址为 `DS`

编译器将`[idata]`解释作`idata`

`如果要让编译器将其解释为一个 内存单元, 则必须在[]前显式的给出段地址DS`

#### (Concept)段前缀 

用于**显式指明**内存单元的段地址的`"DS:","CS:","SS:","ES:"`, 在汇编语言中被称为 `段前缀`

### 📌 实验四 - [bx]与Loop的使用 (3) 	- - 分析 

> 补全程序 , 将 mov ax,4c00H 之前的指令复制到内存 0:200中

```assembly
assume cs:code
code segment
; quiz3
; cx = 001BH = 27D NOTE
; 23 bytes before mov ah,4cH , i.e. Hexadecimal as 17H

    ; when a programm was loaded to the memory , cs:ip will initialized as the first address of the program
    mov ax,cs	; # 补全1
    mov ds,ax
    mov ax,0020H    ;  = 0020:0 = 00200 = es
    ; init target
    mov es,ax   ; es extra segment register ( also refers to a segment in the memory which is another data segment in the memory.)
    ; es stores the segment address of purpose

    mov bx,0
    mov cx,17H   ; 从 0 ~ cs:16H # 补全2

    s:mov al,[bx]   ; ds:[bx]
    mov es:[bx],al  ; es:[bx] = 20:bx = (20H*16+bx)
    inc bx
    loop s

    mov ah,4cH
    int 21H
code ends
end

; copy the instructions before mov ax,4c00h to 0:200
; 23 bytes , 从debug中得之第一条指令到 mov ah,4ch 之前的指令占据23bytes的空间
```

通过debug获取 程序的总字节量, 计算于 mov ax,4c00H之前的字节量.( 且注意debug中以十六进制表示的数据)

可以发现需要获取的数据在`076C:0017之前`,也就是从偏移地址`0~16H`总共`23(17H)`个字节

![image-20220317111236284](https://s2.loli.net/2022/03/17/R9hmx5IPWtUeobj.png)

<!--
<span style="display: block; color: darkgray; font-size: 5px; font-style: italic; margin-top: -20px; margin-left:30%;">结果</span>
--->

### 包含多个段的程序 \ dw \ end

##### dw | end

在代码段中使用数据: 可以使用**`dw(define word)`**定义字型数据.

利用**end**的一个作用是:`通知编译器 程序的入口点在何处`,可以使用`Start` 标号指明程序入口点

> `END START` 的含义是：程序结束，并且程序的入口点是 `START` 标签所指示的位置。
>
> 这样的结尾是合理的，因为它明确指定了程序的入口点，并告知汇编器程序的结束位置。

#### 🍊 程序分析 6.3

```assembly
assume cs:code

code segment
    dw 0123h,0456h,0789h,0abch,0defh,0fedh,0cbah,0987h ; 8 words = 16bytes
    ; 预期的内存空间 cs:0 ~ cs:F
    dw 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0	; 16 words = 32bytes
    
　　 ; 共 48 bytes ( 即 0~47 共 2F个数据 , 初始为空栈 , SS:SP应指向其后面一个数据 即 2F+1 = 30H) 
; REFER : When the stack is empty ,SP Point to the address of the next memory unit at the bottom of the stack , namely SP = At the bottom of the stack +1.

 start:mov ax,cs
    mov ss,ax
    mov sp,30h   
    
    mov bx,0
    mov cx,8
 s:push cs:[bx]	; 数据入栈 sp -= 2
    add bx,2   
    loop s    
    
    mov bx,0
    mov cx,8
 s0:pop cs:[bx]   
    add bx,2
    loop s0   
    
    mov ax,4c00h
    int 21h
    
code ends

end start
```

---

#### 编写多段程序

##### Assume | 段名

**利用`assume`伪指令将定义的段和相关的寄存器联系起来** , 对于不同的段, 要有不同的**`段名`**

**段名就相当于一个标号,它代表了一个段的段地址** , 编译器会把它处理为一个表示段地址的值

注意在8086CPU`不允许直接将数值传入段寄存器中`, 所以要将定义的段程序赋给特定的寄存器时需要一个寄存器作中转.

CPU如何处理所定义的段的内容, 当作指令执行或是数据访问, 亦或是栈空间... 完全取决于程序中具体的汇编指令 , 及汇编指令中对`CS:IP` `SS:SP` `DS `等寄存器的设置决定

##### 段定义伪指令

段使用 **段名 + segment 关键字** 来定义 , 代表段的开始

**段名 + ends 关键字**  , 代表段的结束

### 📌 实验五 - 编写与调试多段程序 	- - 分析 

编译链接并跟踪调试

```ASM
; Experiment 5
assume cs:code,ds:data,ss:stack
; 数据段定义
data segment
    dw 0123h,0456h ; ,0789h,0abch,0defh,0fedh,0cbah,0987h ; 16bytes
data ends
; 栈段定义
stack segment
    dw 0,0 ; ,0,0,0,0,0,0
stack ends

code segment
start: 
    mov ax,stack
    mov ss,ax
    mov sp,16   ; 指向第四个字型数据

    mov ax,data
    mov ds,ax

    push ds:[0]
    push ds:[2]
    pop ds:[2]
    pop ds:[0]
    
    mov ah,4cH
    int 21H

code ends
end start

;---------------

; Experiment 5 quiz 4
assume cs:code,ds:data,ss:stack
; 数据段定义

code segment
start: 
    mov ax,stack
    mov ss,ax
    mov sp,16   ; 指向第四个字型数据

    mov ax,data
    mov ds,ax

    push ds:[0]
    push ds:[2]
    pop ds:[2]
    pop ds:[0]
    
    mov ah,4cH
    int 21H

code ends

data segment
    dw 0123h,0456h ; ,0789h,0abch,0defh,0fedh,0cbah,0987h ; 16bytes
data ends
; 栈段定义
stack segment
    dw 0,0 ; ,0,0,0,0,0,0
stack ends

end start
```

<!-- 实验五 -->

#### **Experiment 5 Quiz 1**

- 程序返回前, data段中数据为 23 01 56 04... 共16个字节 , **剩下部分用00补全**

- 程序返回前, **CS = 076E	SS = 076D	DS = 076C**

- 程序加载后, 设Code段的段地址为X , 则data 段的段地址为 `X-2` , stack段的段地址为 `X-1`

- 对于如下定义的段:

```assembly
name segment
...
name ends
```

如果段中的数据占N个字节,则程序加载后 , 该段实际占有的空间为 (N / 16 + 1 )**N小于16,则向下取整** * 16 个字节 , **若N大于16 , 则向上取整** ... 

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-bottom:25px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Refer</span>
<a href="https://bbs.csdn.net/topics/390585699" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">CSDN</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"关于 (N / 16 + 10) * 16"
</span>
</div>

- ⚠️ 若将伪指令 **end start** 改为 **end** (即不指明程序的入口点) . 程序均可正常执行 , 只是不再从指定的入口点开始执行,而是从程序开始的程序段处开始执行, 若此程序段为数据段或栈段, 编译器会将其处理为汇编指令并执行.

<!-- 实验五 第五题 -->

#### **Experiment 5 Quiz 5**

> 将a段和b段数据依次相加 , 结果存在cg段

```asm
assume cs:code
a segment
; define byte
    db 1,2,3,4,5,6,7,8
; a segment occpied 8 bytes in memory
a ends

b segment
    db 1,2,3,4,5,6,7,8
b ends

cg segment
    db 0,0,0,0,0,0,0,0
cg ends

; 实现: 两次循环 分别用寄存器指向 a,c 及 b,c即可
code segment
; main
start:
    ; change ES point target
    ; DS point to C
    mov ax,cg
    mov ds,ax
    ; ES point to A
    mov ax,a
    mov es,ax
    ; bx - excursion address
    mov bx,0
    mov cx,8
    s1:
    mov al,es:[bx]
    add [bx],al
    inc bx
    loop s1
	
	; ES point to B
    mov ax,b
    mov es,ax
    mov bx,0
    mov cx,8
    s2:
    mov al,es:[bx]
    add [bx],al
    inc bx
    loop s2

    mov ah,4c
    int 21h
code ends
end start

; outcome : 02 04 06 08 0A 0C 0E 10
```

<!-- 实验五 第六题 -->

#### **Experiment 5 Quiz 6**

> 用push指令将 A 段中的前8个字型数据逆向存储到B段中

```asm
; E5q6
assume cs:code
a segment
    dw 1,2,3,4,5,6,7,8,9,0ah,0bh,0ch,0dh,0eh,0fh,0ffh
a ends

b segment
    dw 0,0,0,0,0,0,0,0
b ends

code segment
    ; main
    start:
    mov ax,a
    mov es,ax
    
    mov ax,b
    mov ss,ax   ; b段 段地址 赋值给栈段 作栈空间
    mov sp,10H

    mov cx,8
    mov bx,0
    s:
    push es:[bx]
    add bx,2 ; what stored is a word
    loop s

    mov ah,4cH
    int 21h

code ends
end start
```

![运行结果](https://s2.loli.net/2022/03/29/gw7UOLXoJSEbRQr.png)

<!-- Chapter 7 -->

### 更灵活的定位内存地址的方法

> 如果一个问题的解决方案，使我们陷入一种矛盾之中。那么，很可能是我们考虑问题的出发点有了问题，或是说，我们起初运用的规律并不合适。

#### AND 与 OR 指令

与基本逻辑`与 &` `或 |` 相同 , 只是汇编中皆按位进行运算

`AND`: 逻辑与指令, 按位进行与运算 , 通过该指令将操作对象相应位设为 0 ,其他位不变

`OR`: 逻辑或指令, 按位进行或运算 , 通过该指令将操作对象相应位设为 1 ,其他位不变

#### 以字符形式给出的数据

在汇编程序中 , 可以使用形如 `'....'`的方式指明数据是以字符的形式给出的 , 编译器会将其转换为相应的 ASCII 码

E.G.

```assembly
db 'unIX' ; 相当于 db 75H,6EH,49H,58H 与字符的 ascii码相对应
```

#### [ BX + IDATA ]

可以以此方式来灵活的表明一个内存单元 ， 即 `[bx + idata]`表示一个内存单元，偏移地址为 `(bx) + idata` , 段地址 于`DS`中

E.G.

```assembly
mov ax,[bx+200] ; 将一个内存单元存入AX , 这个内存单元占2个字节， 即存放一个字，偏移地址为 bx的值 + 200 , 段地址在ds中
; 即 [(ds)*16 + (bx) + 200]

; ✨ 也可写作：
mov ax,[200+bx]
mov ax,[bx].200
mov ax,200[bx]
```

#### SI (Source Index Register) & DI (Destination Index Register)

`SI`和`DI`都是`变址寄存器(Index Register)` , 且都是16位的寄存器

> 它们主要用于存放存储单元在段内的偏移量，用它们可实现多种存储器操作数的寻址方式，为以不同的地址形式访问存储单元提供方便。作为通用寄存器，也可存储算术逻辑运算的操作数和运算结果。它们可作一般的存储器指针使用。在字符串操作指令的执行过程中，对它们有特定的要求，而且还具有特殊的功能。

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-bottom:25px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: sans-serif; margin-right: 4px; ">Refer</span>
<a href="https://baike.baidu.com/item/%E5%8F%98%E5%9D%80%E5%AF%84%E5%AD%98%E5%99%A8/7680616" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">Baike.Baidu</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"变址寄存器"
</span>
</div>

#### 不同寻址方式的灵活应用

不同的寻址方式:

`[idata]` 用一个常量来表示地址, 可用于直接定位一个内存单元.`直接寻址`

`[bx]`用一个变量来表示内存地址，可用于间接定位一个内存单元. `寄存器间接寻址`

`[bx+idata]`用一个变量和常量表示地址，可在一个起始地址的基础上用变量间接定位一个内存单元.`寄存器相对寻址`

`[bx+si]`用两个变量表示地址. `基址变址寻址`

`[bx+si+idata]`用两个变量和一个常量表示地址。`相对基址变址寻址`

自顶向下逐渐可以用更灵活的寻址方式来定位一个内存单元的地址 。这使得数据在使用者的角度可以以`结构化`的角度看待。



#### 关于数据的暂存 

有时会遇到需要数据暂存的情况 , 如嵌套循环的CX , 作为计数器使用 . 由于寄存器的数量有限, 且每个程序使用的寄存器不一样 , 遂需要更为通用的方案

在不考虑使用寄存器的情况下

- 可以将要暂存的数据存放到内存空间中,需要的时候再从内存单元中恢复. 但是当数据量多的时候，这样的存储方式需要记住哪个数据放到 了哪个单元。容易引起程序混乱。
- 将需要暂存的数据存入栈中 ， 利用压栈出栈与 栈顶指向 控制栈空间的数据

### 📌 实验六 - 灵活定位内存地址并修改值 	- - 分析调试

> 将datasg段中的每个单词的前四个字母改为大写字母

```asm
; Experiment 6
; initialize regiter's point address
assume cs:codesg,ss:stacksg,ds:datasg

stacksg segment
    dw 0,0,0,0,0,0,0,0 ; 16 bytes
stacksg ends

datasg segment
    db '1. display      '
    db '2. brows        '
    db '3. replace      '
    db '4. modify       '
datasg ends

codesg segment
    ; main
    start:
    ; associate register with segment name
    mov ax,stacksg
    mov ss,ax
    mov ax,datasg
    mov ds,ax

    mov bx,3    ; start point of string
    mov sp,10H	; init stack pointer

    mov cx,4
    ; external loop statement
    s0:
    mov si,0
    push cx ; store cx(external) to stack temporarily

    ; internal  loop statement ; refresh cx when external loop each time
    mov cx,4	; 4 letters
    s1:
    mov al,[bx+si]
    and al,11011111B ; 6th number of Binary set to ZERO => capital letter
    mov [bx+si],al
    inc si
    loop s1

    ; restore external CX value
    pop cx
    add bx,10H ; point to next string 

    loop s0

    mov ah,4CH
    int 21h
codesg ends 

end start
```

### ✨  数据处理的两个基本问题 何处? 多长?

- 要处理的数据在何处
- 要处理的的数据有多长

#### 于汇编中数据位置的表达

- 立即数`idata`,在汇编中直接给出的数据
- 寄存器 , 汇编指令中需给出相应的寄存器名
- 段地址(SA) 和 偏移地址(EA) , 汇编中可用`[x]`形式给出EA , SA存在于某个段寄存器中

#### 指明要处理的数据长度 - x ptr

8086CPU可处理两种长度的数据 Byte 和 Word ,在指令中需要指明需要处理的数据的尺寸.

- 可以通过寄存器名来指明数据的尺寸.
- 在没有寄存器名的情况下,可以使用形如`X ptr` 来指明内存单元的长度 , `X` 在汇编中可以为`word`或是`byte` .
  如 `mov word ptr ds:[0],1`  `inc word ptr [bx]` 这俩指令使用 `word ptr` 指明了指令访问的内存单元是一个`字单元` .

注意有的指令就不要指明内存单元的长度了 , 像是`push \ pop`,其只能进行字操作.

#### div Instruction 除法指令

语法

```asm
div divisor
```

除法指令 , 需要注意几个问题

- 除数 的两种情况 : `8bit` & `16bit` , 在一个`寄存器或是内存单元`中
- 被除数 默认放在`AX`中 或是 `DX 和 AX`中 , 情况如下
  - 若除数为 8位 , 被除数则为 `16位 `, 此时被除数默认存放在 `AX`中
  - 若除数为16位 , 被除数则为 `32位 `, 此时被除数被存放在 `DX和AX`中 ,**DX中存放高16位 , AX中存放低16位**

- 对于计算结果的存储
  - 若除数为 8位 , 则 `AL` 将存储 除法操作的 `商` , `AH`中存储的则是`余数`
  - 若除数为 16位 , 则 `AX` 中将存储 除法操作的 `商` , `DX` 中存储的是`余数`

一般寄存器的存储主要是关于被除数 和 结果.

> ✨ 拓展: 
>
> 在x86汇编中，如果你使用的是8位的除数，那么被除数通常是16位的。同样，如果你使用的是16位的除数，那么被除数通常是32位的。这是因为在进行除法操作时，结果的商和余数都需要有足够的空间来存储。
>
> 在x86汇编语言中，如果你使用的是16位的除数，那么它的理论最大值可以是2^16，也就是65536。
>
> 在x86汇编语言中，被除数的最大理论长度确实可以达到32位。这意味着被除数的最大值可以是2^32，也就是4294967296。



实例:

```assembly
; 1001 / 100 div calculation
; quizzes about div instruction

assume cs:codesg

codesg segment
    ; cuz the dividend's HEX = 3E9H , a 16bits register is suitable,it stored into AX register. And the divisor needs a 8bits register to store.
    
    mov ax,3E9H
    mov bl,64H
    div bl ; al = quotient , ah = remainder

    ; result: AX = 010AH ; al  = 0AH ; ah = 01H

    mov ah,4CH
    int 21h
codesg ends

end
```



####　伪指令 - dd (define dword)

 `dd`用来定义`双字` 型数据 , 占用`32`位 , 需要`2个16位寄存器`来分别存储其高低16为位

#### dup Operator

dup是一个操作符 , 和 `db \ dw \ dd` 一样, 其也是由编译器识别处理的符号 , 与他们(数据定义指令等伪指令)配合使用 , 用以进行`数据的重复`.

示例如下:

```assembly
db 3 dup (0) ; 定义了3个字节 , 他们的值都是 0  , 相当于db 0,0,0
; 或者这样解释 : 定义了字节"0",重复了3次, 相当于 db 0,0,0

db 3 dup (0,2,3) ; 定义了9个字节 , 他们的值都是 0,2,3 , 相当于 db 0,2,3,0,2,3,0,2,3
db 3 dup ('abc','ABC')
;定义了I8个字节，它们是abcABCabcABCabcABC,相当于db'abcABCabcABCabcABC。
```

可见，dup的使用格式如下:

- `db 重复的次数 dup（重复的字节型数据）`
- `dw 重复的次数 dup（重复的字型数据）`
- `dd 重复的次数 dup（重复的双字型数据）`

### 📌 实验七 - 寻址方式在结构化数据访问中的应用 	- - 分析调试

; 比较综合的一个实验, 融合之前的知识 	 可以结合C语言结构体进行类比. 

>  将 data 段中的数据按照以下指定格式写入 table段

![存储格式](https://s2.loli.net/2022/04/12/dNZf4MG1zna7lws.png)

```assembly
assume cs:codesg

data segment
	db '1975','1976','1977','1978','1979','1980','1981','1982','1983'
	db '1984','1985','1986','1987','1988','1989','1990','1991','1992'
	db '1993','1994','1995'
	;以上是表示21年的21个字符串，每个占4字节
	dd 16,22,382,1356,2390,8000,16000,244486,50065,97479,140417,197514
	dd 345980,590827,803530,1183000,1843000,2759000,3753000,4649000,5937000
	;以上是表示21年公司总收入的21个双字型数据，每个占四字节
	dw 3,7,9,13,28,38,130,220,476,778,1001,1442,2258,2793,4037,5635,8226
	dw 11542,14430,15257,17800
	;以上是表示21年公司雇员人数的21个字型数据
data ends

table segment
    db 21 dup ('year sume ne ?? ')  ; 正好十六字节
table ends

stacksg segment
    db 10H dup (0)
stacksg ends

; write a year's all data in every loop
codesg segment
    start:
    ; Initilize all data register
    ; es 指向 data , ds 指向 table
    mov ax,data
    mov es,ax
    mov ax,table
    mov ds,ax

    mov ax,stacksg
    mov ss,ax
    mov sp,10H

    mov bx,0   ; 索引table中的列(字节单位)
    mov di,0   ; year 字节型 一个字符串4个字节
    mov si,54H ; point to income in DATA SEGMENT 双字型
    mov bp,168 ; point to staff in DATA SEGMENT 字型
    
    mov cx,21
    s:
    ; 同样也是一次处理一行的数据 , ax作中转寄存器
    ; bx 将每行看作一个结构型数据 , 用.idata 定位每个数据项(年份 \ 收入 \ 员工 等.. )
    ; NOTE  copy year
    mov ax,es:[di]
    mov [bx].0,ax
    add di,2 ; 注意x86架构采用的是小端存储模式(高字节保存在内存的高地址中，而数据的低字节保存在内存的低地址中) , 所以此指令执行将指向高位字节(高16位)

    mov ax,es:[di]
    mov [bx].2,ax ; idata更新 , 在内存中存储 高十六位
    add di,2 ; 指向下一年
    ; 至此年份处理完毕

    ; 处理收入
    mov ax,es:[si] ; si所指向的结构型数据 => 收入 , 此处同样以字的方式进行数据处理
    push ax ; 将 ax 存入栈中, 以便后续进行人均收入的计算 , 低16位
    mov [bx].5,ax
    add si,2
    ; NOTE 处理高16位
    mov ax,es:[si]
    push ax ; 将其高16位入栈
    mov [bx].7,ax
    add si,2 ; 指向下一个收入数据
    ; 至此 收入部分处理结束

    ; NOTE 开始处理雇员结构数据 字型数据处理
    mov ax,es:[bp]
    mov [bx].0AH,ax
    ; 至此雇员结构数据处理完毕
    pop dx
    pop ax
    div word ptr [bx].0AH
    mov [bx].0dH,ax
    add bp,2 ; 指向下一个雇员数据

    add bx,10H	; 指向下一行

    loop s

    mov ah,4CH
    int 21h    

    ; average of income
    ; divisor(staff) is a Word(16bits) , therefore the dividend(total income) should be a dword(32bits)
    ; staff is divisor while total income is dividend 
codesg ends

end start
```

### ✨ 转移指令及其原理

> 可以修改IP , 或同时修改 CS和IP的指令统称为 **转移指令**
>

针对8086CPU来说, 其`转移行为`有以下几类:

- 只修改IP时 , 为`段内转移`
- 同时修改CS和 IP 时 , 为`段间转移`

针对转移指令对IP修改范围的不同, 段内转移还分为: `短转移  (IP修改范围: -128 ~ 127)`和 `近转移 (IP修改范围: -32768 ~ 32767)`   (前后八位的区别吗 ( 字节范围和字范围 )) , 负数向前转移 , 正数向后转移



#### 操作符 Offset

操作符`offset`在汇编语言中是由编译器处理的符号 , 它的功能是`取得标号的偏移地址`

#### Jmp 指令

`Jmp`指令为**无条件转移指令** , `可以只修改IP , 或同时修改 CS和IP`

此指令需要给出两种信息:

- 转移的距离 ( `段间`转移 \ `段内 短`转移 \ `段内 近`转移 )
- 转移的目的地址


##### ✨ 依据位移(Displacement)进行转移的 JMP 指令 +. 补码

`Jmp short 标号 ( 转到标号处执行指令 )`

>  此格式的 JMP指令 实现的是段内短转移 , 对`IP`的修改范围为 -128 ~ 127 , 即向前转移最多越过 128个字节 , 向后转移最多越过 127个字节 , "Short" 说明了其进行得是短转移 ,间接说明Short类型为8位 ,  "标号"存在于代码段中 , 是指令转移的目的地

注意 在`jmp short 标号`指令所对应的机器码中,并不包含转移的 `目的地址`,而包含的是`转移`



`的位移`, 此位移是编译器根据汇编指令中的 标号 计算出来的。

![位移计算方法,请忽略图上标注](https://s2.loli.net/2022/05/19/cKqeIENwYpX75Qu.png)

`jmp short 标号`的功能实际为 : `(IP) =  (IP) + 8位位移`

- **8位位移 = 标号处的地址 ( 标号指令起始地址 ) - jmp指令后的第一个字节的地址( 指令起始地址 )**
- 🌼 `short`指明此处的位移为8位位移
- 8位位移的范围为-128~127，用`补码`表示 , 8位的最大最小值 ( 即IP最多向前移动128字节 , 向后移动 127字节, 若不在范围内会引发`转移位移超界`的问题 )
- 8位位移由编译程序在编译时算出。

可得在 `jmp short`指令的机器指令中 , 包含的是跳转到目标指令的相对位置 偏移量(即位移 , 以`补码`形式存储) , 而不是转移的目标地址

> 补码 Two's Complement Review:
>
> 以8位数据表示 有符号数  , 其最高位表符号 , 1 为负 , 0 为正 . 用其他位表示数值
>
> 正数的原码反码补码均相同
>
> 补码的基本思想:先确定用 0000 0000b ~ 0111 1111b表示0 ~ 127，然后再用它们按位取反加1后的数据表示负数。
>
> 补码方案特性:
>
> - 最高位为1表示负数
>
> - 正数的二进制值(原码)取反加1后，为其对应的负数(相反数)的 二进制数 ：负数的补码取反加1后，为其绝对值。
>
> 
>
> 由于一个负数的补码不太容易看出它所表示的数据 , 但是利用补码的特性将其 按位取反再加1 后可得其 绝对值 的二进制数, 则负数的值取相反数即可.
>
> 补码可以让正数与负数之间进行加法运算 , 即所有减法都可转化为加一个负数的形式 :
>
> A - B  = A + (-B)
>
> 顺便一提 , `计算机都是以补码的形式存储数据的`

`段内近转移: jmp near ptr 标号`

- 16位位移 = 标号处的地址 - jmp指令后的第一个字节的地址
- 🌼 `near`指明此处的位移为16位位移
- 16位位移的范围为-32768~32767，用`补码`表示 , 16位的最大最小值
- 16位位移由编译程序在编译时算出。



`jmp far ptr 标号` 实现的是`段间`转移  , 又称为`远`转移

`far ptr` 指明了指令用标号的段地址和偏移地址修改**`CS和IP`** , 在机器码中 , **`高地址部分存放段地址  , 低地址存放偏移地址`** , 顺序遵循小端存储模式

> Recommend to refer : 汇编编译器(MASM.exe) 对 jmp 指令的相关处理



##### **转移地址在寄存器中的JMP指令**

格式 :

```asm
jmp 16bit reg	; 格式
(ip) = (16bit reg)	; 功能 将IP修改为传递的16位寄存器的内容
```



##### 🛠️转移地址在内存中的JMP指令

两种格式 : 

```asm
1.
jmp word ptr 内存单元地址 (段内转移)
; 从内存单元地址开始处存放着一个字 , 这个字的数据就是转移的 目的偏移地址(IP)

;	e.g. 
mov ax,0123h
mov ds:[0],ax
jmp word ptr ds:[0]	; 注意以字类数据长度 进行传输
; 执行后 (IP) = 0123H


2.
jmp dword ptr 内存单元地址 (段间转移)
; 从内存开始处存放2个字 , 高地址处的字是转移目的地的 段地址 ,  低地址的是 偏移地址
; e.g.
mov ax,0123H
mov [bx],ax
mov word ptr [bx+2],0
jmp dword ptr [bx]
; 执行后 (cs)=0 (IP)=0123H

```

##### jcxz指令 (Jump if CX equals Zero)

所有的`有条件跳转指令`都属于[短转移](#依据位移进行转移的 JMP 指令 +. 补码)(段内短转移),其在机器码中包含的是转移的`位移`(位移这个概念还是很重要的*Refer Chapter 9.9* ),而非目的地址

格式:

```asm
jcxz flag	
; 如果 (cx) == 0 , 则跳转到标号处 , 否则(cx!=0)继续向下执行
; flag = 标号

(类C描述)相当于:
if ((cx)==0) jmp short 标号;
```



#### loop 指令

循环指令, 注: 所有的循环指令都是 `短转移`  , 其机器码中 同样包含的是 相对目的地址的`位移`而非偏移地址

格式:

```asm
loop 标号

(类C描述)相当于:
(cx)--;
if ((cx)!=0) jmp short 标号;                                                                                                          
```

### 📌 实验八 - 分析奇怪的程序 (jmp 与 位移) 	- - 分析调试

分析以下程序是否会正常返回

```asm
assume cs:codesg

codesg segment

            mov ax,4c00h
            int 21h

start:      mov ax,0
    s:      nop
            nop
      
            mov di,offset s
            mov si,offset s2
            mov ax,cs:[si]
            mov cs:[di],ax
      
   s0:      jmp short s

   s1:      mov ax,0
            int 21h
            mov ax,0
   
   s2:      jmp short s1
            nop

codesg ends
      
end start
```

![详细の分析](https://s2.loli.net/2022/06/22/DQOW1bi6EIhJt5r.png)

 

### 📌 实验九 - 根据材料编程 (彩色字符显示)  分析调试 与 显示缓冲区

![image](https://s2.loli.net/2022/06/30/gj2fJtrLxAaneHd.png)

![image](https://s2.loli.net/2022/06/30/GYFJmSlhf8buxOW.png)

```assembly
assume cs:codesg,ds:data,ss:stacksg

data segment
    db 'welcome to masm!'   ; 需要写到内存的文字
    db 01110001b,00100100b,00000010b    ; 注意写成2进制吧
    ; 绿色 , 绿底红色 , 白底蓝色
data ends

stacksg segment
    dw 48 dup(0) ; 48个字 = 96字节
                 ; 字符串总共48字节 * 2(因为每个字节都有对应的属性值) = 96字节
stacksg ends

codesg segment
    start:
    mov ax,data
    mov ds,ax

    mov ax,stacksg
    mov ss,ax

    mov sp,60H  ; 96d

    mov cx,3    ; 构建外层循环 , 倒序正好可以使用CX作为寻址的一个变址
    mov si,0    ; index register
    s1:
        mov dx,cx   ; 保存 cx的值

        ; init data IN EVERY ITERATION
        mov bx,10H
        mov cx,10H
        s2:
            dec bx  ; 注意指向最后一个字符(从0索引 , 所以在 10H-1 = FH)

            ; 合并字符与属性值 并压入栈
            ; 低位 ASCII码 , 高位 字符属性.
            mov al,[bx] 
            mov ah,ds:[10H].[si]
            push ax
        loop s2
        inc si  ; 索引至下一个属性值
        mov cx,dx
    loop s1

    mov ax,0b800h
    mov ds,ax

    ; 索引大致的居中位置
    mov bx,6e0H ; first address offset of Row
    mov cx,3    ; 出栈循环 , 此处表 三行字符串
    s3:
        mov dx,cx
        mov cx,10H
        mov di,0    ; 字符列 出栈偏移
        s4:
            pop [bx+40h].[di]    ; 行 偏移40H 即可居中
            add di,2
        loop s4

        mov cx,dx
        add bx,0A0H ; next row
    loop s3

    mov ah,4cH
    int 21h

codesg ends
      
end start
```

注意 : `每行 80列`(即每行可存储80个字符 ) , 占 `160个字节` (A0H) 每个字符占用2字节 ( 字符の ASCII码  + 字符属性 )



### CALL 和 RET 指令

`CALL`和`RET`都是`转移指令`,常用来实现子程序的设计.

<span style="display:block; margin-left:40%; font-family: Georgia, serif;">1. ret 和 retf</span>

`ret`使用栈中的数据修改`IP` , 实现近转移

`retf`使用栈中的数据修改`IP`和`cs` , 实现远转移

以汇编语法解释这两条指令相当于:

```asm
ret:
	pop IP
retf:
	pop IP
	pop CS
	; 注意出栈顺序 
```

`LIFO`, 同时注意压栈的顺序 , 先压栈`CS`,再是`IP`



<span style="display:block; margin-left:40%; font-family: Georgia, serif;">2. call 指令</span>

`call`的执行进行两步操作

- 将当前`IP`   或 将当前`CS和IP`压入栈中
- 转移

注意`call无法实现`短转移 , 其实现转移的方法和`jmp`指令原理相同 , 即`位移`

根据位移进行转移 , 语法:

```asm
call 标号
;CPU执行的操作:
(sp) = (sp) - 2
((ss)*16 + (sp)) = (IP)
(IP) = (IP) + 16位位移

; 汇编描述相当于
push ip
jmp near ptr 标号
```

转移的目的地址在`指令`中的CALL指令:

```assembly
call far ptr 标号	; 实现的是段间转移 (同时改变了CS IP)

```

![image-20220630004439883.png](https://s2.loli.net/2022/06/30/m4duEc5s2ITHtXa.png)

转移目的地址在`寄存器`中 :

```asm
call 16bitReg ; 以十六位寄存器内容作爲轉移目的IP
```

  相当于:

```asm
push IP
jmp 16位reg (  (IP) = (16位寄存器)  )
```

转移地址在`内存`中的CALL  , 存在两种格式 ,

与 [🛠️转移地址在内存中的jmp指令](#🛠️转移地址在内存中的jmp指令) 类似 , 可参考

 1:

```asm
call word ptr 内存單元地址	; 以内存單元処的字單元作爲目的地址IP

相当于:
push ip
先将ip入栈
jmp word ptr 内存单元地址
再跳转到内存单元地址处
```

2:

```asm
call dword ptr 内存单元地址	; 段间转移 ,低地址存放偏移地址   高地址存放段地址 

即相当于 (注意先后入栈顺序, 依旧是先入栈cs , 再是ip):
push cs
push ip
jmp dword ptr 内存单元地址
```



### mul Instruction 乘法指令

格式

```asm
mul reg 
&
mul 内存单元
```

使用`mul`指令 , 需要注意两点:
<span style="display:block; margin-left:40%; font-family: Georgia, serif;">1. 两乘数</span>

两个相乘的数要么都是8位 , 要么都是16位

- 8位的情况下 , 一个乘数默认放在`AL`中 , 另一个放在`一个8位的reg中 或 内存字节单元中`
- 16的情况下,默认的乘数将放在`AX`中, 另一个放在`一个16位的reg中 或 内存字单元中`

(注意是`reg与内存单元中`而非立即数 , 不允许直接提供立即数(idata)进行运算)

<span style="display:block; margin-left:40%; font-family: Georgia, serif;">2 结果</span>

- 8位的情况下 , 结果默认存放在`AX`中
- 16位的情况下, 结果的高位存放在`DX`中 , 低位存放在`AX`中



> 对现实问题进行分析时,把它转化成为相互联系 \ 不同层次的子问题 , 是必须的解决方法

### 汇编模块化程序设计 - 以栈进行的参数传递

除了以`寄存器`和`内存单元`来进行对参数的存储外 , 也可使用栈存储

因为这种技术和高级语言编译器的工作原理密切相关, ( 很难不想到编译原理... ) 所以简单记录一下

其原理:

> 调用者将需要传递给子程序的参数压入栈中, 子程序从栈中取得参数.

指令`ret n `的含义 , 以汇编指令描述为:

```asm
pop ip
add sp,n	; 一般忽略后续栈内数据(仅用以参数传递的数据已经不再需要)
```

#### 子程序中 [ 寄存器冲突 ] 问题 解决方案

未避免子程序中寄存器冲突. 即在编写子程序时不需要考虑 调用者 使用了哪些寄存器

将使用以下子程序编写标准框架:

```text
子程序开始:子程序中使用的寄存器入栈
		 子程序代码块
		 ...
		 子程序中使用的寄存器出栈
		 返回(ret \ retf)
		 
; 注意入栈出栈顺序

```

### 📌 实验十 - 编写子程序

```asm
; 显示字符串
assume cs:code

data segment
    db 'Hello world!',0
data ends

code segment
    ; main
    start: 
    mov dh,8    ; 行号 0-24
    mov dl,10    ; 列号 0-79 按照显示区域的偏移 
    mov cl,2    ; 颜色
    mov ax,data
    mov ds,ax
    mov si,0    ; si用以索引字符
    call show_str
        
    mov ah,4cH
    int 21h



; subroutine
show_str:
    push dx
    push cx
    push ax

    ; 记录段地址
    mov ax,0b800h
    mov es,ax

    ; 行
    mov al,0a0H
    mul dh
    mov di,ax   ; 计算行偏移

    ; 列
    add dl,dl   ; 因为一个字符在显示内存占2字节, 所以应*2才是对应的偏移地址

    ; 相对于显示区域的首个字符处 , 存储在 di 中
    mov dh,0    ; 由于行号计算完成 , 清零以计算总偏移
    add di,dx

    mov bl,cl   ; bl 暂存字符属性 , cl用于jcxz判断

    change:
        mov cl,ds:[si]
        jcxz ok
        mov al,ds:[si]
        mov ah,bl
        
        mov es:[di],ax
        add di,2
        inc si
        jmp short change

        ok:
        pop ax
        pop cx
        pop dx
        ret
code ends
end start
```

`2略`

3.

![image-20220720201447437](https://s2.loli.net/2022/07/22/qzGEmXCKHZYP9o8.png)

### 🔦  综合设计 1 

:TODO

#### 标志寄存器(Flag)

为16位寄存器 , 按位起作用, 每一位都有专门的含义, 记录特定的信息. 其中`1\3\5\12-15 位是没有使用的标志位 , 不具有任何意义`

##### ZF 标志(Zero Flag)

处于标志寄存器的`第六位`, `零标志位`,记录相关指令执行后, 其结果是否为0 , `若结果为0 , 则ZF = 1, 反之 ZF = 0`

---

>使用某条指令的时候 , 要注意这条指令的全部功能 , 包括其执行结果对于标志寄存器的标志位造成的影响

##### PF 标志(Parity Flag)

处于标志寄存器的`第二位`, `奇偶标志位`,记录相关指令执行后, 其结果所有bit位中1的个数是否为偶数 , `若1的个数为偶数 , 则PF = 1, 反之 PF = 0`

##### SF 标志(Sign Flag)

Flag的`第七位`, 符号标志位 . 记录相关指令执行后 , `其结果是否为负 . 若为负 , 则 SF = 1, 反之 SF = 0`

> 对于同一个二进制数据, 计算机可以将它当作无符号数据来运算, 也可以当作有符号数据来运算.

SF标志仅是对有符号数运算结果的记录 , 所以若是将数据作为有符号数 , 则 SF 有意义 , 若作为无符号数 , 则没有意义.(取决于程序功能实现, 见机行事)

##### CF 标志 (Carry Flag - Usually indicated as the  C flag)

处于`第零位`, 进位标志位 , 在进行`无符号数运算`的时候, 它记录了运算结果的最高有效位向更高位的进位值(即加法) , 或是从更高位的借位值(减法情况)

一图胜千言.jpg

![image-20220804002246407](https://s2.loli.net/2022/08/04/VFATilCkaPUEHfj.png)

##### OF 标志 (Overflow Flag)

溢出标志位 , 处于`第11位`, 在进行`有符号运算`时, 如果结果超出了机器所能表示的范围即溢出 ,则OF为1 , 若无溢出 , 则为0

##### ADC and SBB instructions

这两个指令可用来处理任意大的数之间的加减运算 ,利用了进位与借位值 ,与`CF`的关系密不可分 

指令格式分别与add与sub相同

##### cmp Instruction

`cmp`指令的执行将对标志寄存器产生影响 , 其他相关指令可以通过`识别标志寄存器的值`来得知比较的结果

指令格式 :

`cmp 操作对象1,操作对象2`

根据 `操作对象1 - 操作对象2`计算结果并对标志寄存器进行设置 , 不保存结果

##### 检测比较结果的条件转移指令

"转移"指指令可修改`IP` , 条件即决定是否修改ip

所有转移指令的位移都是`[-128,127]`

大多条件转移指令都通过检测`cmp指令所影响的标志位`的检测结果来决定是否修改IP

![image-20220903163926073](C:\Users\28366\AppData\Roaming\Typora\typora-user-images\image-20220903163926073.png)





##### DF标志( Direction Flag ) 和 串传送指令 move String instructions

DF标志是 Flag中的第10位 ,`"方向标志位"` 在串处理指令中 , 控制每次操作后 ( 即`串指令执行完毕后` )   `si与di的增减`

`df=0 每次操作后 si \ di 递增`  

`df=1 每次操作后 si \ di 递减`



数据单位与串传送指令相关 , 若为movsb (string byte) 则为1字节 , SW ( string word ) 则为一个字



##### cld & std Instructions

`CLD : Clears the DF flag in the EFLAGS register. When the DF flag is set to 0, string operations increment the index registers  (ESI and/or EDI)`

`STD : Sets the direction flag to 1, causing all subsequent string operations to decrement the index registers, (E)SI and/or (E)DI, used during the operation.`



**MOVS/MOVSB/MOVSW**:

> This instruction **copies a byte(movsb) or a word(movsw)** from a location in the data segment **[DS:SI]** to a location in the extra segment **[ES:DI]**. The offset in the data segment for the source is to be stored in the `SI(Source Index)` register and the offset for the destination in the extra segment is to be stored in the `DI(Destination Index)` register.
>
> For multiple byte/word movement, the value stored in the `CX register` by the user functions as a counter. After each move, SI and DI are automatically adjusted to point to the next source and destination respectively.

以上指令通常和`Rep`指令(Repeat while equal)共同使用 , 类似的还有`repnz` (repeat while nonzero) or `repz` (repeat while zero) , 此类指令为`Repeat String Operation`

**Description refer :** 

> Use the rep (repeat while equal), repnz (repeat while nonzero) or repz (repeat while zero) prefixes in conjunction with string operations. Each prefix causes the associated string instruction to repeat until the count register (CX) or the zero flag (ZF) matches a tested condition.


##### PUSHF & POPF

前者将标志寄存器的值压入栈中 后者将栈中弹出数据并送入标志寄存器中



### 🔖 学习路径说明 - Explanation Update

以下 为 Chapter 12 - 17  , 12-13 为复习与巩固. 实际学习路径有变化 , 将跟随课程学习

![Learning Path](https://s2.loli.net/2022/11/27/g8D32fdTFN4nhXx.jpg)





**Chap 14**

### 移位指令

逻辑左移 `Shift Logical Bit Left`   `SHL OPR,CNT `    REF:[SHL](http://www.c-jump.com/CIS77/ASM/Flags/F77_0140_shl_sal_instructions.htm)

循环左移 `ROL OPR,CNT ` 

注: `less-significant bit (LSB) 最低位`  \ `The most-significant bit (MSB) 最高位 `

注意如果移动位数**大于1**的时候  , 则必须将移动位数放在 `cl `中



### +. Chap 16 🔖 描述内存单元的标号 - [ 数据标号 ]  与 地址标号


不同于只表示地址的`地址标号` ,    `数据标号`标记了`存储数据的单元的地址和长度` , 加上段地址就可以表示一个内存地址

```assembly
; e.g.
assume cs:code

code segment
	a db 1,2,3,4	; 此处 a,b 为其地址值 相当于取代了segment , 且之后使用的内存单位都是字节
	b dw 0,1	; 之后使用的内存单位都是字
segment ends

; .main
	mov al,a[si]	; 即 cs: mov al,[si + 0000]
	add b,ax		; 即 cs: add [0008],ax | add code:8,ax
					; 注: 前方cs: 由编译器表明 a,b属于cs段
	
```

注意 形如:

```assembly
a db 1,2
b dw 0
c dw a,b

a db 1,2
b dw 0
c dd a,b
```

相当于

```assembly
c dw offset a,offset b
&
c dd offset a,seg a,offset b,seg b	; 双字类型 偏移地址处于低字 , 段地址在高字
; 注 : seg操作符 取标号处段地址
```

存储的是 a \ b 标号所在的偏移地址 ,  ╰(*°▽°*)╯ 若说以上a , b 像指针 , 那 c 就有点类似与 C语言 中的`二级指针`.....



注意后面加有`":"`的`地址标号只能在代码段(cs)中使用`, 不能在其他段中使用



### 直接定址表

利用`表(Table)`,在两个数据集合之间建立一种`映射关系(mapping)`使我们可以用查表的方法根据给出的数据(作索引)得到其在另一集合中的对应数据

空间换时间的做法(方案)....

其主要目的一般有:

- 为了算法的清晰和简洁
- 加快运算速度
- 是程序易于扩充

主要分为`数据的直接定址表`和  `代码的直接定址表`(与函数指针类似 , 能看见程序模块化的影子了  *使程序结构清晰, 便于扩充 , 若要加入新的功能子程序 , 只需要在直接定址表中添加子程序的入口地址即可*)



### 🏷️[ 标记起始点 ]  🔖 内中断

>  此处中断的意思是指:CPU不再接着(刚执行完的指令)向下执行,而是转去处理中断信息.

`产生中断信息的事件`,即中断信息的来源 简称为`中断源` , 有着对应的`中断类型码,为一个字节型数据` , 即可以表示256种中断信息的来源

*<对中断的初见让我认为其和异常类似...实际上不然 , 中断属于异常的一类 [REF](https://blog.csdn.net/qyf__123/article/details/100025721) , ..嗯..计组的内容 >*



当CPU收到中断信息后需要对其进行处理 , 用来处理中断信息的程序为`中断处理程序` , 一般需要对不同的中断信息编写不同的处理程序 , 要跳转到中断处理程序执行, 则需要得知对应的入口地址(即对应CS:IP, 程序第一条指令的地址)

#### 中断向量表 Interrupt Vector Table

所谓中断向量,就是`中断处理程序的入口地址`.

则中断向量表 , 就是中断处理程序入口地址的列表 , 其在内存中保存

8086CPU规定内存`0000:0000 ~ 0000:03FF`的1024个单元中存放中断向量表 , 共`1KB`

向量表中可存放`256个中断源对应的中断程序的入口` , 每个表项占`2个字`
`(高地址字存放段地址, 低地址字存放偏移地址)` `256×2×2=1024b=1kb`

#### 中断处理程序和 iret 指令 (Interrupt Return)

中断处理程序的编写方法和子程序的比较相似，下面是常规的步骤：

1. 保存用到的寄存器

2. 处理中断：

3. 恢复用到的寄存器：

4. 用`iret`指令返回。

iret指令的功能用汇编语法描述为：
```assembly
pop IP
pop Cs
popf
```

注意中断处理程序常驻内存 , 应存放在内存的确定位置

*对于8086CPU , 由于系统实际要处理的中断事件远没有达到256个 , 如从EA(0200 - 02FF) 这段内存空间是中断向量表的空闲单元 , 可用以存储额外的中断处理程序*

#### 中断过程

中断过程由`CPU硬件`自动完成 ：  由中断类型码找中断向量 ， 用其设置CS:IP指向 。 



#### 设置中断向量

中断向量表表项`index` , 当完成对中断程序的安装后 , 则需要将中断程序的入口地址写入中断向量表中.

注意过程以字为单位进行 ,  - 段地址和偏移地址都是16位 , `低地址存放偏移地址 , 高地址存放段地址`

`Syntax:`

```asm
    mov word ptr es:[index*4],EA
    mov word ptr es:[index*4+2],SA
```



#### 单步中断 & TF Flag ( Trap Flag )

> Ref to WiKi :  A **trap flag** permits operation of a [processor](https://en.wikipedia.org/wiki/Computer_processor) in single-[step](https://en.wikipedia.org/wiki/Stepping_(debugging)) mode. If such a flag is available, [debuggers](https://en.wikipedia.org/wiki/Debugger) can use it to step through the execution of a [computer program](https://en.wikipedia.org/wiki/Computer_program).
>

CPU执行完一条指令后, 若检测到标志寄存器TF位为1 , 则产生单步中断(此中断类型码为1) , 并引发中断过程 

CPU提供单步中断功能为单步跟踪程序的执行过程提供了实现机制.



### INT instruction

> INT is an assembly language instruction for x86 processors that generates a software interrupt.

int指令的格式 为 `int n ` n 为中断类型码. 其功能为 `引发中断过程`

" 实际int指令的功能和 call指令类似 , 都是调用一段程序  "

注意`cs ip `的先后入栈顺序





### 端口

`端口 ` 可被 CPU 直接读写

对于端口的访问, CPU通过端口地址定位端口

 与内存的读写指令( mov \ push  \ pop )区分开 ,  `in` \ `out` 为端口读写指令  , 分別用于从端口读取(访问端口)或写入数据

端口地址和内存地址一樣 , 通过总线来传送
