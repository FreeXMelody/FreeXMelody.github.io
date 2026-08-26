---
title: Python 练习
date: 2020-08-19 00:22:45
cover: https://cdn.jsdelivr.net/gh/freexmelody/cdn@master/imgGo/PythonPic.png
tags: "Python"
description: "针对Python学习的一些小练习。"
---
## 基础复习
> ✒️ 此标题下将进行简单的基础概念描述与代码演示。

元组：可以视为一个只读型的列表，`不允许修改数据`
集合：与数学中集合概念相似 , 一个元素只能出现一次，就算写了多个 编译器也会自动删除多余的个数

### 集合	
取出两个集合都有的元素（求**并集**)   👇
```python
# Intersection
set1 = {1,2,3,4,5}
set2 = {1,2,3,6,7}
print(set1 & set2) # {1,2,3}
```
**并集 Union** , 求两个集合总共有哪些元素 , 不重复 使用 | 运算符

```python
# Union
set1 = {1,2,3,4,5}
set2 = {1,2,3,6,7}
print(set1 | set2)  # {1,2,3,4,5,6,7}
```
**差集 Difference**  求set1和set2的差集，将返回在set1中但不在set2中的元素（左操作数）。 使用 - 运算符实现

```python
# Union
set1 = {1,2,3,4,5}
set2 = {1,2,3,6,7}
print(set1 - set2)  # {4,5}
```
**对称差集 Symmetric Difference** ， 求set1和set2的对称差集时，将返回不同时存在set1和set2中的元素

```python
set1 = {1,2,3,4,5}
set2 = {1,2,3,6,7}
print(set1 ^ set2)  # {4,5,6,7}
```

### Enumerate() 函数
<div style="border: olivedrab solid 1px; border-radius:2px; width: 100%; display: inline-block; padding-bottom: 3px; padding-left: 6px;">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: Georgia, serif; margin-right: 4px; ">Refer</span>
<a href="https://www.runoob.com/python/python-func-enumerate.html" style="background-color: #8BBA2E; color: #EDEDED; padding:5px 10px; font-size: 14px;">RUNOOB</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif; font-size:10px; ">"enumerate() 函数用于将一个可遍历的数据对象(如列表、元组或字符串)组合为一个索引序列，同时列出数据和数据下标，一般用在 for 循环当中。"
</span>
</div>

### 类，Python中的OOP
`__init__` 函数 ， 用于初始化一些类字段，但第一个参数必须是`self` ，这是规定
self 实际就是指实例对象本身，类中定义方法的时候，内部访问self参数也必须将self参数写到第一个参数位置

## Python 阿姆斯特朗数 (水仙花数) 提高题

阿姆斯特朗数：一个n位的正整数等于各位数字n次幂的和，则该数就为阿姆斯特朗数。

例如1^3 + 5^3 + 3^3 = 153 则153为阿姆斯特朗数。

写一个程序，检测输入数字是否为阿姆斯特朗数。

### 代码实现

```python
import math
# math.pow(x,y) 求x的y次幂
num= input("输入一个数····")
g_num = 0
index =[]
rec = []
for i in str(num):  # 取到各个数位上的数字并加入index列表
    index.append(int(i))
  #  print(index)
  # 获取列表长度
length = len(index)
for a  in range(0,length):
     rec.append(int(math.pow(index[a],length)))
for i in range(0,length):
     g_num  += rec[i]
print("结果为%d"%g_num)
if not g_num == int(num):
    print("这是一个阿姆斯特朗数·· ")
else:
    print("输入的数值非阿姆斯特朗数.....")
```

接下来看看百科上给出的例子供参考：

```python
# 方法1
def narcissistic_number_1(num):
    length = len(str(num))
    count = length
    num_sum = 0
    while count:
        num_sum += ((num // 10 ** (count - 1)) % 10) ** length # 注意运算符的优先级
        count -= 1
    if num_sum == num:
        print("%d is %d bit narcissistic_number" % (num, length))
    else:
        print("is not a narcissistic number")

# 方法2
def narcissistic_number_2(num):
    s = str(num)
    length = len(s)
    sum_num = 0
    for i in s:
        sum_num += int(i)**length
    if sum_num == num:
        print("%d is a %d bit narcissistic_number" % (num, length)
              
max_num = int(input('请输入最大范围'))
# 获取小于指定数的阿姆斯特朗数
for num in range(0, max_num):
    narcissistic_number_1(num)        #调用方法一,方法二均可
```

## 一些进阶小技巧
### 切片赋值
列表的切片赋值操作可以当作插入元素来使用
```python
# 将 [3,4,5,6,'Hello'] 列表插入到 2，3之间
i = [1,2,3]
i[2:2] = [3,4,5,6,'Hello']
```

