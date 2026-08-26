---
title: MarkDown语法参考...
date: 2020-12-03 09:12:08
tags: "MarkDown"
description: "Markdown的一些基础语法，帮助写作~"
cover: https://cdn.jsdelivr.net/gh/freexmelody/cdn@master/imgGo/MarkdownPic.png
---
> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。

## 标题

```
# page title level 1 #
## page title level 2 ##
### page title level 3 ###
#### page ....level 4 ####
##### level 5 more than 6...下面就不写了 顶多六级标题 ##
```
### 指定标题ID

一些 Markdown 引擎支持为标题指定 ID，另一些 Markdown 引擎是自动添加 ID 的。标题 ID 的作用是允许其他地方通过锚点直接跳转到该标题。标题指定 ID 的语法是在标题后面通过花括号包裹 ID。

```
### 这是一个标题 {#custom-id}
```

渲染结果：

<h3 id="custom-id">这是一个标题</h3>

## 注释

```
<!-- 注释语法 不会显示在浏览器中 -->
<!-- shortcuts Ctrl + / -->
```
```
[comment]:<> "hack方法：利用markdown的解析原理来实现注释的。 语法就是这样。。。[name]:<> & #"
[comment]:# "comments....."
```
## 代办事项
```
- [×] Task One `task content...`
- [√] Task Two `task content...`  
```
## 字体属性
```
*斜体*  _斜体_
**粗体**  
***加粗斜体***  
~~删除线~~    
<u>下划线</u>   
```
## 代码块 (```)
```ruby {.line-numbers}
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
## MarkDown 区块
<!-- 嵌套区块 -->
可嵌套
```
> level 1
> > level 2
> > > level3  
```
效果:
> level 1
> > level 2
> >
> > > level3  

## 链接地址_
```
>文字套链接 bilibili链接   [bilibili](bilibili.com)  
>直接使用链接<bilibili.com>
>高级链接 调用变量访问[哔哩哔哩][BZ]
(这里的解释器似乎不支持)
>这是一个emoji网站 点击即可复制 🤣 [Emoji](http://emojihomepage.com/)
```
## MarkDown pic
```
>![zhihu.com](https://static.zhihu.com/heifetz/assets/logo.f6eef033.png)  
```
## 表格
使用短横线 --- 来分隔表头和表身，使用竖线 | 来分隔列，每行开头和结尾的竖线是可选的。

如果需要左对齐、居中对齐或者右对齐表格内容，可以通过在 `---` 中添加冒号 `:` 实现。冒号仅出现在左边表示左对齐，出现在两边表示居中对齐，仅出现在右边表示右对齐。

```
| Left | Middle | Right |
| :--- | :----- | :---- |
| 1    | 2      | 3     |
```
渲染效果：
| Left | Middle | Right |
| :--- | :----- | :---- |
| 1    | 2      | 3     |
```
| Shortcuts            | Functionality              |
| :------------------- | :------------------------- |
| cmd-k v or ctrl-k v  | Open preview to the Side   |
| cmd-shift-v or       | ctrl-shift-v	Open preview|
| ctrl-shift-s         | Sync preview / Sync source |
| shift-enter          | Run Code Chunk             |
| ctrl-shift-enter     | Run all Code Chunks        |
| cmd-= or cmd-shift-= | Preview zoom in            |
| cmd-- or cmd-shift-_ | Preview zoom out           |
| cmd-0                | Preview reset zoom         |
| esc                  | Toggle sidebar TOC         |
```
>**Markdown Preview Enhanced Shotcuts  ☝**
### 表格内容排版

表格中的内容也可以进行排版，比如加粗、强调文本，插入超链接等。但仅限于使用“行级元素”进行排版，不能使用“块级元素”，比如不能使用标题、块引用、列表、分隔线等。

### 表格内容转义竖线

如果需要在表格内容中使用竖线 `|`，那就需要对其进行转义。可以使用 `\|` 转义，但更稳妥的做法是写竖线的 HTML 实体表示 `|`，因为有的 Markdown 引擎不能正确处理表格内容中的 `\|`。

## 脚注

> HEXO 似乎不支持，但可以通过插件hexo-renderer-markdown-it x渲染添加脚注

脚注用于在文末添加细节说明或者参考，这样文章的正文部分看上去会更加简洁清晰。创建脚注后，正文中引用脚注的地方会出现一个上标数字链接，读者点击后跳转到文末脚注定义的对应位置。

脚注引用通过 `[^标识符]` 创建，标识符部分可以是数字或者文本，但不能包含空格或者制表符。标识符仅用于关联引用和定义，在渲染时会自动根据脚注定义顺序进行数字递增渲染。不过这也不是绝对的，某些 Markdown 引擎也会将标识符部分用于渲染。

脚注定义使用 `[^标识符]:` 来创建，冒号后面就是需要添加的细节说明或者参考。脚注定义不一定非要放在整个 Markdown 文本的末尾，夹在段落、列表或者块引用之间也是可以工作的。
```
这里是一个脚注引用[^1]，这里是另一个脚注引用[^bignote]。

[^1]: 第一个脚注定义。
[^bignote]: 脚注定义可使用多段内容。

    缩进对齐的段落包含在这个脚注定义内。
    还有其他行级排版语法，比如**加粗**和[链接](https://b3log.org)。
```
渲染结果:
这里是一个脚注引用[^1]，这里是另一个脚注引用[^bignote]。

[^1]: 第一个脚注定义。
[^bignote]: 脚注定义可使用多段内容。
缩进对齐的段落包含在这个脚注定义内。
还有其他行级排版语法，比如**加粗**和[链接](https://b3log.org)。





## 声明

本文部分转载自 [链滴]( https://ld246.com/article/1583305480675) ....
