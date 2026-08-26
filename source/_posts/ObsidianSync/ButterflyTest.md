---
title: ButterflyTest 🔎
date: 2020-08-10 09:13:10
tags: "Hexo"
cover: https://cdn.jsdelivr.net/gh/freexmelody/cdn@master/imgGo/butterflyDeployTest.png
---
> <li>这些可以用在MarkDown中···· ，所以评论的时候也可以应用喔！😉</li>

## Note 标注 提示块标签 ##

{% note default %}
default 提示块标签
{% endnote %}

```Code
{% note default %}
default 提示块标签
{% endnote %}
```

{% note primary no-icon %}
primary 提示块标签
{% endnote %}

```Code
{% note primary no-icon %}
primary 提示块标签
{% endnote %}
```

{% note success %}
success 提示块标签
{% endnote %}

```Code
{% note success %}
success 提示块标签
{% endnote %}
```

{% note info %}
info 提示块标签
{% endnote %}

```Code
{% note info %}
info 提示块标签
{% endnote %}
```

{% note warning %}
warning 提示块标签
{% endnote %}

```Code
{% note warning %}
warning 提示块标签
{% endnote %}
```

{% note danger %}
danger 提示块标签
{% endnote %}

```Code
{% note danger %}
danger 提示块标签
{% endnote %}
```



## tag-hide ##

{% hideInline content,display,bg,color %}

哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人? {% hideInline 闪 %}

 ```Code
{% hideInline content,display,bg,color %}
哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}
 门里站着一个人? {% hideInline 闪 %}
 ```
{% hideToggle 点击查看,#FF7242,#fff %}
如果你需要展示的内容太多，可以把它隐藏在收缩框里，需要时再把它展开。
{% endhideToggle %}

```Code
{% hideToggle 点击查看,#FF7242,#fff %}
如果你需要展示的内容太多，可以把它隐藏在收缩框里，需要时再把它展开。
{% endhideToggle %}
```

{% hideToggle display,bg,color %}
content
{% endhideToggle %}

{% hideToggle 点击查看说明 %}
此部分默认不展开，可以是代码块

{% endhideToggle %}

```Code
{% hideToggle display,bg,color %}
content
{% endhideToggle %}

{% hideToggle 点击查看说明 %}
此部分默认不展开，可以是代码块

{% endhideToggle %}
```

## Tabs ##

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

```Code
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```



{% note success %} 这真是太Cool了 {% endnote %}