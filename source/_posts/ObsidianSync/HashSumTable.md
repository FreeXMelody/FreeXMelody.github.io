---
title: HashSumTable
date: 2021-04-02 15:25:05
cover: https://i.loli.net/2021/04/02/NGMJkWtPKLCTnrB.png
description: 过去没有算法知识的情况下写的算法'...供回忆用吧
tags:
	- 算法
---
## 前言
感谢热心的<span>&nbsp;</span> <i style="color:#33ABDE; font-family: Georgia, serif;">Johann.C</i> <span>&nbsp;</span>进行算法测试、
这是今天在帮助实现赛项题目解时所发现的一个算法。我将其命名为`Hash Sum Table` ，为实现`以一和求其多和数` 最优解。这也是根据某算法进行的理论改动。
本人目前算法领域不精，慎阅，也欢迎讨论。

## 题解
### 题目描述
给定整数数组`nums` 和一个整数值 `target`,在数组中找出可组为和`target`的数值。

### 图文解
嗯...根据我当时画出的分析图来吧( 红色部分 )
<div style="text-align: center; ">
<img src="https://i.loli.net/2021/04/02/VQ1HGZv2u3TCq9x.jpg" alt="" style="width: 40%; display:inline-block;">
</div>
上部的`nums`为哈希表中的`V`
下面索引即为`K`
此处测试初始化 `target = 13`
// 此处针对的是从小到大排列的数据集合， 关于去重会在后面解释
将target值减去数组nums中值，得到新值（`如12 ， 13-1=12`）并将数组中被减去的值添加到`HashMap`中与下标对应, 此处即为上部的 `nums` ( 嘛...我确实应该直接把它命名为HashMap...就不需要我来解释了(😓) )
再将新值按照之前步骤重复 ， 如果减到最后得到负值，那就从数组第一个数重新遍历计算，（但是相减得到负值的减数不要加入到HashMap中）如下图,

<div style="text-align: center; ">
<img src="https://i.loli.net/2021/04/02/pTHczlSWoQLKI2F.jpg" alt="" style="width: 40%; display:inline-block;">
</div>

最后计算哈希表中`出现的下标次数 乘 对应的值 其和即为target`

也许你也发现了，这样的算法会出现重复的值，关于去重，即将数组以从大到小的顺序排列，中间遇到负值的情况直接跳过计算下一个数即可 . 可防止重复值的出现。

### 代码实现
附上在下的腊鸡代码      <span style=" font-family: Georgia, serif;">•́ω•̀)</span>
```csharp
public static ICollection HashSumTable(int[] ar, int target)
{
    int total = 0, temp = target;
    Hashtable hashtable = new Hashtable();
    int length = ar.GetLength(0);
    // init HashTable  ;; To exclude duplicating numbers,  sort the table reversed
    for (int i = 0; i < length; i++)
    { hashtable.Add(ar[i].ToString(), 0); total += ar[i]; }
	if (target > total) { Console.WriteLine("No current result...."); }

    for (int j = 0,i=length-1; j <length; j++)
    {
        temp -= ar[j];
        if (temp < 0) { temp = target; i--;  continue; }
        else
        {
            target = temp;
            // Write into HashTable
            hashtable[i.ToString()] = ar[j];
            i--;
        }
    }
	return hashtable.Values;
}
```