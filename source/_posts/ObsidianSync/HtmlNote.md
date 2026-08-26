---
title: 前端学习笔记
date: 2020-12-11 09:39:55
cover: https://i.loli.net/2021/03/05/ToeXROj4ihCBIWt.png
tags: 
	- 前端
	- HTML
	- CSS
	- JavaScript
	- Vue
---





{% note info %}
今天写着某实例，突然想起还有这个暂存的笔记·····啊··鸽了
那就重新开始更新吧！  <a href="#_position" style="text-decoration: none;">跳转到</a>
{% endnote %}

### 基础环境搭建

使用vscode进行代码编写，推荐使用以下插件！

- `open in browser` - 右键添加在浏览器中打开项目
- `Auto Rename Tag `- 自动重命名HTML + Xml 标签
- `JS-CSS-HTML Formatter `- 格式化代码

### 标签语义

`<!DOCTYPE>`标签 ： 文档类型声明标签

`<html lang="zh-CN">` 浏览器根据其内容识别是何种语言网站，此处为中文，将采取中文来显示

`<meta charset="utf-8">` 字符集 ，此处采取utf-8存储文字信息，必须写 否则乱码

> 以上三条语句在vscode中均会自动生成，需理解其作用

---
<i id="_position"></i>

{% note success %}
重新开始更新，过去一些内容已经删除了，仅记录个人学习中的一些经历····,实践中发现的小技巧，关于标签使用的内容手动查询文档即可
{% endnote %}

---
### HTML | CSS 复习

> 🌼 重拾 , 也供速查参考

#### 表格 | 列表

**合并单元格**
- 跨行合并 - rowspan="合并单元格的个数" - 代码写在最上侧目标单元格
- 跨列合并 - colspan="合并单元格的个数" - 代码写在最左侧目标单元格
合并后删除不需要的单元格

**无序列表 #  Unordered List element**
\<ul\> \<li\><\\li><\\ul>
无序
规范 : ul中只能存放li标签
li相当于一个容器 , 可以放任何元素

**有序列表 # Ordered list**
<ol\>\\<li\><\\li><\\ol\>
li 有顺序

**自定义列表 # <dl\>: The Description List element**
The **`<dl>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element represents a description list. The element encloses a list of groups of terms (specified using the [`<dt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt) element) and descriptions (provided by [`<dd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd) elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
![[dl 自定义列表 - 描述列表.png]]

注意dl内部只能包含 dt 和 dd , dd 和 dt 中可以放任意标签

#### 表单

表单通常由 **表单域 ( form标签 ), 表单控件(元素) , 和 提示信息** 三部分组成
elements that are used when creating forms: [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend), [`<meter>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter), [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup), [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option), [`<output>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output), [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

##### \<input type="radio"\>
注意 对于 input type = **radio** ( 单选控件 ) 来说 , 需要给相同的name属性才能实现多选一
> They are called radio buttons because they look and operate in a similar manner to the push buttons on old-fashioned radios

**定义多个单选框组**
A radio group is defined by giving each of radio buttons in the group the same [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name). Once a radio group is established, selecting any radio button in that group automatically deselects any currently-selected radio button in the same group.

You can have as many radio groups on a page as you like, as long as each has its own unique `name`.


---


### CSS游历记

#### 关于伪元素before & after 的显示方式
图上元素(li为父元素)右上角的 '减' 就是使用伪元素实现的 需要添加到另一个li的时候只需要加入一个类名即可 ,这样子就不需要在html中添加其他的元素了
![beforeAfter.png](https://i.loli.net/2021/08/21/qHiQJFK56ubGvcU.png)
实例得`::before` 将位于 `::after`的下层
由此使用before伪元素制作下层的三角边框,after伪元素作为文字层即可
e.g.

```css
.recommend::before {
    content: '';
    margin: auto;
    display: inline-block;
    color: #fff;
    height: 7px;
    line-height: 5px;
    width: 0;
    text-align: center;

    position: absolute;
    top: 0;
    right: 0;

    border-width: 6px 7px;
    border-style: solid;
    border-color:#589d5a #589d5a transparent #589d5a;
}

.recommend::after {
    content: '减';
    color: #fff;
    position: absolute;
    top: -2px;
    right: 1px;
    background-color: transparent;
}
```

<div style="border-color: #FFB937; border-style: dotted none; border-width: 1px; text-align: center; font-size: 10px; color: #C88200; margin:20px 0;" class="faa-float animated faa-slow">
    ✏️ ———— 手动分割线 —————— 
</div>


#### BFC 与外边距(margin)塌陷问题



<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: Georgia, serif; margin-right: 4px; ">Ref</span>
<a href="#" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">Zhihu </a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"CSS中外边距（margin）塌陷和合并的问题"
</span>
</div>



###  🥰 个人练习样式 记录 ✨

{% note success %}
这里将记录我自己写的一些样式！欢迎交流学习，发在博客的基本都是使用的CSS`行内样式表`, 可能写得不是很好，·····嘛，其实自己觉得还是蛮好看的啦😂,以后整好了pug [ 说实话挺需要这类教程的 ] 会加进预设标签内，到时就可以直接使用啦。呃···名称什么的，随便取的😝···· 随缘更新吧
{% endnote %}

<div style="text-align: center;">
<span style="background-color:rgba(14, 139, 211,.7); color: #fff; padding: 4px 10px;  width: 200px; ">✨  可跳转式类标签&nbsp;&nbsp;还有个动效的不过和博客不适配=.=</span>
<div style="margin:5px 0; ">👇</div>
</div>

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: Georgia, serif; margin-right: 4px; ">Title</span>
<a href="#" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">Link #0001</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"这里填写内容"
</span>
</div>

---

<div style="text-align: center;">
<span style="background-color:rgba(14, 139, 211,.7); color: #fff; padding: 4px 10px;  width: 200px; ">✨  描述式按钮&nbsp;&nbsp;</span>
<div style="margin:5px 0; ">👇</div>
</div>

<div style="text-align: center; ">
<a href="#">
<div style="display: inline-block; box-shadow:  0 0 4px rgba(0, 0, 0, .3);">
    <span style="display: inline-block; color: white; font-family: Microsoft YaHei ; font-size: 12px; background: #0078E7; padding:5px 10px;">✍️ Title</span>
    <span style="display: inline-block; color: #5F5F5F; font-family: Microsoft YaHei; font-size: 12px; padding:4px 10px;border:1px solid #0078E7; margin-left: -5px; ">Link desc</span>
</div>
</a>
</div>


## JavaScript 笔记

`ECMAScript \ DOM \ BOM`

### 基础学习

- `数组` - 在`Javascript`中,数组中的数组元素的数据类型不受约束,可以是任意类型.
和其他多数编程语言一样,index总是从0开始
JS中追加数组元素的方式 可以直接通过`修改索引号`实现, 在循环中可以直接使用 `arrary.length;` 来实现不断往后添加新元素

- `函数`返回一个结果,如果想返回多个值可以利用数组,如果函数无返回值,则返回`undefined`
对比break和continue ,`return`不仅可以退出循环,还可以结束函数.

`Arguments 对象` 以`伪数组`的形式展现.存储了传递到函数的所有实参.
 [126] 伪数组并非真正意义上的数组
 - 伪数组不具有数组的`length属性`
 - 按照索引的方式存储
 - 没有数组的一些方法 pop() push() 等...

函数的另一种声明方法 -  `函数表达式(匿名函数)` 

内部函数访问外部函数的变量采用`链式查找`的方式决定取值 , 此结构即`作用域链` - 遵循就近原则

- JavaScript 的预解析 , 浏览器会预先解析`function` 和 `var`, 将其声明或定义提升到当前作用域的顶部(除了变量的定义.) ,



#### 关于[数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)操作

- ##### 添加或删除数组元素
  
  - `Array.unshift()`方法,在数组头部插入一个新元素
  - `Array.push()`,在数组末尾追加一个新元素
  - `Array.pop()`,删除数组中最后一个元素
  - `Array.shift()`,删除数组中第一个元素

这些方法都会改变原数组长度, 且`pop()`与`shift()`存在返回值,将返回被删除的那个数组元素.

不太一样的方法:

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。



-  翻转数组
  
  - `Array.reverse();`方法将翻转数组,改变了数组，并返回该数组的引用。
  
  

- 数组元素获取

  - `arr.indexOf(searchElement[, fromIndex])`获取指定首个元素的索引号,第二个参数可选,指定开始查找的位置.

```js
// 数组去重案例

var oldArr = ['c','a','z','a','x','a','x','c','b'];
// indexOf() 注意大小写
// 方法1 : 
function delDuplicate(arr) {
    var tempArr = arr;   
    for (var a = 0; a< tempArr.length; a++) {
        var first = tempArr.indexOf(tempArr[a]);
        var sec = tempArr.lastIndexOf(tempArr[a]);
        if (first != sec) {
            tempArr.splice(a,1);
            delDuplicate(tempArr);
        }
        else { continue; }
    }
    return tempArr;
}

console.log(delDuplicate(oldArr));

// 方法 2 (来自pink老师) :
function unique (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length ; i++) {
        if (newArr.indexOf(arr[i] == -1)) { // 若不存在,则插入元素
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(unique(oldArr));
```



-  数组转字符串

  - `toString()`方法将数组转换为字符串
  - `arr.join([separator])`方法,将数组转换为字符串并可以选择为其添加分隔符



#### [字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)对象

字符串的字面量即 `单引号` 和`双引号`

字符出现次数实例:

```js

var string = "abcoefoxyozzopp";
// 方法1:
var count = 0;
var allIndex = [];
function getIndex(date,target,start) {
    i = date.indexOf(target,start);
    if (i != -1) {
        count++;
        allIndex.push(i);
        getIndex(date,target,i+1);
    }
}

getIndex(string,'o',0);
console.log("出现的次数是" + count + '\n其索引号分别为:' + allIndex);
count=0;

// 方法2 (来自pink老师) 噗我写好像比较复杂.. // :
var index = string.indexOf('o');
var num = 0;
while(index!=-1) {
    console.log(index);
    num++;
    index = string.indexOf('o',index+1);
}
console.log('o出现的次数是' + num);
```

#### 根据位置返回字符

可以像数组那样访问字符串字符,每个字符对应一个索引

- `str.charAt(index)`方法从一个字符串中返回指定的字符。
- `str.charCodeAt(index)`方法返回 `0` 到 `65535` 之间的整数，表示给定索引处的 UTF-16 代码单元



#### 拼接及截取字符串

- `str.concat(str2, [, ...strN])`方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。(强烈建议使用[赋值操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)（`+`, `+=`）代替 `concat` 方法。)
- `str.substring(indexStart[, indexEnd])`方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

#### 其他一些方法

- `str.replace(regexp|substr, newSubStr|function)`方法返回一个由替换值（`replacement`）替换部分或所有的模式（`pattern`）匹配项后的新字符串。模式可以是一个字符串或者一个[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。**如果`pattern`是字符串，则仅替换第一个匹配项。**

  原字符串不会改变。

#### 关于在字符串中插入变量 (**模板字符串**)

当涉及到在字符串中插入变量时，JavaScript 和其他编程语言使用不同的语法。让我来详细解释一下：

1. **JavaScript 中的模板字符串**：
    
    - 在 JavaScript 中，我们使用**模板字符串（Template String）** 来插入变量。模板字符串使用反引号（`）标识，而不是单引号或双引号。这使得字符串插值更加方便。
    - 在模板字符串中，你可以使用 `${}` 语法来嵌入变量。具体来说：
        - `${expression}` 表示将 `expression` 的值插入到字符串中。
        - 这样的语法使得字符串拼接更清晰、更易读。例如：
            
            ```javascript
            const name = "Alice";
            console.log(`Hello, ${name}!`); // 输出："Hello, Alice!"
            ```
            
2. **其他语言中的字符串插值**：
    
    - 不同编程语言有不同的字符串插值方式：
        - 在 Bash 或 Shell 脚本中，你可以使用 `$` 符号来引用变量。例如：`$your_variable`。
        - 在 C# 中，使用 `$` 符号来表示内插字符串。你可以在字符串中使用 `${variable}` 来插入变量，也支持表达式和方法的执行。例如：`$"{id}"`。
        - 在其他语言中，可能会使用类似的语法，但具体细节会有所不同。

总之，如果你在 JavaScript 中想要在字符串中插入变量，确保使用模板字符串（反引号）和 `${}` 语法。如果你在其他编程语言中操作字符串，查看该语言的文档以了解正确的插值方式。😊


#### 分支语句 if..else.. | 三元运算符 ? : |  switch case break

注: 几类Javascript语句 : 顺序语句 , 分支语句 , 循环语句

当涉及到条件控制和分支语句时，JavaScript 提供了几种不同的方式来处理不同的情况。让我们逐一来看一下这些方法：

1. **if…else 语句**：
    
    - `if...else` 是最常见的条件语句。它允许你根据某个条件的真假执行不同的代码块。基本语法如下：
        
        ```javascript
        if (condition) {
            // 如果条件为真，执行这里的代码
        } else {
            // 如果条件为假，执行这里的代码
        }
        ```
        
    - 示例：
        
        ```javascript
        const age = 26;
        if (age >= 21) {
            console.log("可以喝啤酒！");
        } else {
            console.log("只能喝果汁！");
        }
        ```
        
2. **三元运算符**：
    
    - 三元运算符是一种简洁的条件表达式，通常用于在一个语句中根据条件选择不同的值。它的语法如下：
        
        ```javascript
        condition ? exprIfTrue : exprIfFalse;
        ```
        
    - 示例：
        
        ```javascript
        const age = 26;
        const beverage = age >= 21 ? "Beer" : "Juice";
        console.log(beverage); // 输出："Beer"
        ```
        
3. **switch…case 语句**：
    
    - `switch...case` 语句用于根据不同的条件执行不同的代码块。它适用于多个固定值的比较。基本语法如下：
        
        ```javascript
        switch (expression) {
            case value1:
                // 执行 value1 对应的代码
                break;
            case value2:
                // 执行 value2 对应的代码
                break;
            // ...
            default:
                // 如果没有匹配的值，执行默认代码
        }
        ```
        
    - 示例：
        
        ```javascript
        const num = 10;
        switch (num) {
            case 0:
                console.log("0");
                break;
            case 5:
                console.log("5");
                break;
            default:
                console.log("其他");
        }
        ```
        
- 使用 `if...else` 语句来处理灵活的条件判断。
- 三元运算符适用于简单的条件选择。
- `switch...case` 语句适用于多个固定值的比较。

### Object

- JavaScript 创建对象 : 
- - 可以利用字面量创建对象 , 即 `{} 大括号` , 嗯....`属性`采用键值对的形式,与python的字典较为相似,方法的写法利用匿名函数. 多个属性与方法之间用逗号隔开,最后一个不用写
```javascript
// new object
var obj = {
	name:'A',
	age:'18',
	sex:'male',
	sayHi:function () {
		console.log('Hi!');
	}
}
// 也可以这样调用属性
console.log(obj['age']);

// 另一种创建对象的方法 new (跟c#一样..):
var obj = new Object();
// 随后可以在后面追加属性
obj.name = 'TinyStar';
obj.age = '18';
obj.sex = 'male';
// 追加方法也是如此
obj.SayHi = function () {
	console.log('Hi');
}
```
与'类'相似,访问对象属性直接 `obj.propName` , 方法 `obj.funcName()`

#### JavaScript中的构造函数

总体与'类'相似....无需返回值 , 返回object

利用构造函数来处理具有相同属性或方法的对象.

```javascript
// 基本语法格式
function ConstructorName () {
    this.prep = value;
    this.Method = funciton () {}
}
new ConstructorName(); // call
```

访问对其内部属性和方法格式即对对象的访问方式

#### 利用 for ... in  b遍历对象
```javascript
var obj = {
	name:'Alice',
    age:'17',
    sex:'f',
    /*
    fn:fuction () {
    
	}
	*/
}
for (var i in obj ) {
    console.log(i); // 输出属性名
	console.log(obj[i]); // 输出属性值
}
```

#### JavaScript 的标准内置对象

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: Georgia, serif; margin-right: 4px; ">Ref</span>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">JavaScript | MDN</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"标准内置对象"
</span>
</div>

#### JavaScript中的原型和原型链

.....个人感觉这个标题下内容 和 OOP中的基类和继承链的关系相似...

> 原型链是实现继承的主要方法。 其基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。 每个构造函数都有一个prototype属性，指向原型对象。 原型对象都包含一个指向构造函数的指针（constructor）。

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; margin-bottom:10px; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: Georgia, serif; margin-right: 4px; ">Ref</span>
<a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">JavaScript | MDN</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"对象原型"
</span>
</div>
<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: Georgia, serif; margin-right: 4px; ">Ref</span>
<a href="https://zhuanlan.zhihu.com/p/62903507" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">知乎</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"JavaScript中的原型与原型链"
</span>
</div>
---

#### 简单数据类型和复杂数据类型

相当于值类型和引用类型

简单数据类型存储在栈中,作为参数传递时传递的是数据的拷贝,不会被改变值, 

复杂数据类型存放在堆`Heap`中

### WebAPIs

`Web API`是浏览器提供的一套操作`浏览器功能(BOM - browser object model)`和`页面元素(DOM - document object model)`的API

#### DOM树

DOM 是什么？ DOM 是一种用于表示和操作 HTML、XML 和 XHTML 文档的编程接口。它将整个文档解析为一个由**节点**组成的树结构，每个节点代表文档中的一个元素、属性、文本或其他类型的内容。简而言之，DOM 是一个让我们通过编程方式访问和修改网页内容、结构和样式的工具

![](https://tse3-mm.cn.bing.net/th/id/OIP-C.jT5hS8c0Snf9Mu7UsSdJHgHaED?w=318&h=180&c=7&r=0&o=5&pid=1.7)

- `文档` 一个页面就是一个文档,DOM中使用`document`表示
- `元素` 页面中的所有标签都是元素,DOM中使用`element`表示
- `节点` 网页的所有内容都是节点(标签|属性|文本|注释等),DOM中使用node表示

---

##### 获取元素

根据ID获取,使用`getElementById()`方法,此方法返回一个`element对象`:

```js
var element = document.getElementById(id);	
```

获取一类标签元素 , 可使用`getElementsByTagName()`方法,将返回一个动态的HTML集合 [`HTMLCollection`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection),其以伪数组的方式存储,这代表着它可以被遍历,若查找的元素根本不存在,则返回一个空的伪数组,且其length属性为0

注意父元素必须为单个元素对象,获取的时候不包括父元素自身.

`Document` 接口表示任何在浏览器中载入的网页，并作为网页内容的入口，也就是[DOM 树](https://developer.mozilla.org/en-?US/docs/Using_the_W3C_DOM_Level_1_Core)。DOM 树包含了像
\[<body>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body) 、
[<table>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table)
这样的元素，以及[大量其他元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)。它向网页文档本身提供了全局操作功能，能解决如何获取页面的 URL ，如何在文档中创建一个新的元素这样的问题。

---

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: Georgia, serif; margin-right: 4px; ">Ref</span>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">MDN</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"Document - WebApI接口参考"
</span>
</div>

---

##### 特殊元素获取

- `<body>`: 使用语句 `document.body`
- `<html>`: 使用语句 `document.documentElement`

##### 事件

事件三要素:

- 事件源: 触发事件的对象
- 事件类型: 如何触发 如:鼠标点击 \ 键盘按下某键
- 事件处理程序: 通过函数赋值的方式完成

执行事件的步骤:

- 获取事件源
- 注册事件 / 绑定事件
- 添加事件处理程序 / 采用匿名函数



##### 事件的冒泡与捕获及其阻止

> 事件冒泡和事件捕获分别由微软和网景公司提出，这两个概念都是为了解决页面中事件流（事件发生顺序）的问题。

🔖 简单来说 事件冒泡将从最内层元素开始发生 , 一直向上传播 直到 document对象
事件捕获则相反 , 从document对象开始,直到具体的元素.

<div style="border: olivedrab solid 1px; border-radius:2px;  height: 34px; width: 100%; display: inline-block; ">
<i class="iconfont" style="font-size:18px;font-weight:700;color: olivedrab;  padding-left: 5px; vertical-align: middle; padding-bottom:-2px; position:relative; bottom:2px;">
&#xe683;   
</i>
<span style="color: olivedrab; font-size: 15px; font-family: Georgia, serif; margin-right: 4px; ">Ref</span>
<a href="https://www.cnblogs.com/zhuzhenwei918/p/6139880.html" style="background-color: #8BBA2E; color: #EDEDED; padding: 5px 10px; font-size: 13px; ">JavaScript事件传播</a>
<span style="text-align: center; color: #5D654E; border-left: olivedrab 1px solid; padding-left: 10px; margin-left:10px; font-family: Georgia, serif;">"JavaScript中捕获/阻止捕获、冒泡/阻止冒泡"
</span>
</div>

有关函数:

- `event.preventDefault();`
- `event.stopPropagation()`
- `event.stopImmediatePropagation()`

#### 关于H5自定义属性

H5规定自定义属性以  `data-` 开头作为名并为其赋值

例如 :

```html
<div data-index = '1'> </div>
```

用自定义属性保存并使用某些数据,就不用将它们存入数据库中了.

使用 `Element.getAttribute()` 和 `Element.setAttribute()`来操作它们

注意利用属性操作元素的样式的时候,操作的是它们的 `style`属性,虽然和这个标题无关,但是今天确实是犯了与其相关的低级错误.

#### H5新增的获取自定义属性的方法

针对基于标准属性 以`data-`开头的自定义属性,可以使用

`Element.dataset.Name` &&

`Element.dataset[Name]`

访问已存在的自定义属性

若自定义属性名有多个`-`链接单词,则获取的时候可以使用`驼峰命名法`

`Element.dataset[dataFirstIndex]`

#### JS执行机制(Event loop)

js为`单线程`语言

同步任务都在主线程上执行, 形成一个`执行栈`

JS的异步是通过`回调函数`来实现的 , 异步任务相关的回调函数将添加到`任务队列(消息队列)`中

在主线程执行栈中发现带有回调函数的任务时则将其插入到任务队列的末尾,主程序执行栈执行完毕后再将任务队列中的任务取到执行栈尾部执行.

##### Web Worker


[Fetching Data#jf8q](https://freegts-my.sharepoint.com/personal/nite07_giantess_eu_org/_layouts/15/download.aspx?UniqueId=93f82e66-517f-4dde-b9df-d13fea91f2db&Translate=false&tempauth=v1.eyJzaXRlaWQiOiI4ZWVjODViNy01MTNlLTRkODAtYjIwZS0xYzU4MGMwZDIyYjUiLCJhcHBfZGlzcGxheW5hbWUiOiJhbGlzdCIsImFwcGlkIjoiZmRkYzBlNjUtNDM2Ny00ZWNiLTkzYjQtMmI2MzgxMmZhYjQ4IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2ZyZWVndHMtbXkuc2hhcmVwb2ludC5jb21AYmI1MGQ3NzAtYzIyOC00M2I4LTk3NjktNzVhOGE2ZDVmZjdlIiwiZXhwIjoiMTcyNTkzNjQxNyJ9.CgoKBHNuaWQSAjY0EgsImKSNy4_RqD0QBRoNMjAuMTkwLjE1MS4zNyosQWZ6NmtDaFBLR0Rva1F5bW5RTUVrQUY0YjBFRmZZS0lJbVBIM1RvSmxZRT0wmQE4AUIQoU68mifQAGBlzcfetArBx0oQaGFzaGVkcHJvb2Z0b2tlblIIWyJrbXNpIl1yKTBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMjcxMWJkOTc5QGxpdmUuY29tegEyggESCXDXULsowrhDEZdpdaim1f9-ogEWbml0ZTA3QGdpYW50ZXNzLmV1Lm9yZ6oBEDEwMDMyMDAyNzExQkQ5NzmyAQ5hbGxmaWxlcy53cml0ZcgBAQ.XYdryI1L-1yZR5P0E0acxwyUDWssmrdlFyE35XIp-zQ&ApiVersion=2.0)


#### Location 对象 (Window.Location)


URL 语法 :`protocol://host[:port]/path/[?query]#fragment`

`URI (uniform resource identifier) 统一资源标识符`通过两种`方式`进行资源表示

- `URL (uniform resource locator) 统一资源定位符`
- `URN (uniform resource name) 统一资源命名符`

URN在理论上来说较为完美,但其实现所需要的解析器难以构建,使得当前URI主要的标识方式为`URL`


## Vue Framework

**Vue.js**（通常简称为 **Vue**）是一款用于构建用户界面的 JavaScript 框架

**Vue.js** 发音类似于 “view”，它是一个渐进式框架，旨在帮助你构建用户界面。与其他一些重量级框架不同，Vue 采用了自底向上的增量开发设计。这意味着你可以轻松地将 Vue 整合到现有项目中，或者与现代化工具链一起使用，以开发功能丰富的单页面应用程序（SPA）

### **核心特性**：

1. **声明式渲染**：Vue 基于标准 HTML 扩展了一套模板语法，使我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。这让我们能够更直观地构建用户界面。
2. **响应性**：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM。这意味着你不必手动处理 DOM 更新，Vue 会帮你处理好这些细节。
3. **组件化**：Vue 鼓励将界面拆分为可复用的组件。每个组件都有自己的状态、模板和样式，使得代码更清晰、可维护性更高。
4. **灵活性**：Vue 可以逐步集成到现有项目中，也可以从无需构建步骤的简单 HTML 页面开始使用。这种灵活性使得 Vue 成为一个渐进式框架

### 虚拟DOM

**虚拟 DOM（Virtual DOM）**是一个在前端框架中广泛使用的概念，Vue.js 也采用了它来提高 DOM 操作的效率和性能。让我们一步步来理解它：

1. **虚拟 DOM 是什么？**
    
    - 虚拟 DOM 是一个轻量级的 JavaScript 对象，用于描述真实 DOM 树的结构。它并不直接与实际的 DOM 进行交互，而是作为一个**中间层**存在。
    
    - 每个 Vue 组件都有一个对应的虚拟 DOM 树。当数据发生变化时，Vue 会通过比较新的虚拟 DOM 与旧的虚拟 DOM 的差异，计算出最小的 DOM 操作量，然后批量更新到实际的 DOM 树上，从而提高性能