---
layout: page
group: docs-latest
order: 505
title: Hexo 内置标签
short_title: 5-5 Hexo 内置标签
meta:
  header: [centertitle]
sidebar: [docs-latest, toc, repos]
mathjax: true
---

## 文章摘要和截断

在文章中使用 `<!-- more -->`，那么 `<!-- more -->` 之前的文字将会被视为摘要。首页中将只出现这部分文字，同时这部分文字也会出现在正文之中。详见 Hexo 官方文档：

{% link 标签插件, https://hexo.io/zh-cn/docs/tag-plugins, https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/logo/hexo.jpg %}


## 引用块

引用书上的句子

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

## 代码块

```md
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

### 指定语言

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

```md example.md:
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

### 附加说明

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

```md example.md:
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

### 行标、高亮

{% codeblock lang:python line_number:true mark:3,5,8 %}
n=eval(input())
if n==0:
   print("Hello World")
elif n>0:
   print("He\nll\no \nWo\nrl\nd")
else:
   for c in "Hello World":
   print(c)
{% endcodeblock %}

```md example.md:
{% codeblock lang:python line_number:true mark:3,5,8 %}
n=eval(input())
if n==0:
   print("Hello World")
elif n>0:
   print("He\nll\no \nWo\nrl\nd")
else:
   for c in "Hello World":
   print(c)
{% endcodeblock %}
```

## Pull Quote
在文章中插入 Pull quote
```md example.md:
{% pullquote [class] %}
content
{% endpullquote %}
```

## jsFiddle
在文章中嵌入 jsFiddle
```md example.md:
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

## Gist
在文章中嵌入 Gist，<u>注意</u>：在国内无法加载。
```md example.md:
{% gist gist_id [filename] %}
```

## iframe
在文章中插入 iframe
```md example.md:
{% iframe url [width] [height] %}
```

## Image
在文章中插入指定大小的图片。
```md example.md:
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

## Link
在文章中插入链接，并自动给外部链接添加 `target="_blank"` 属性。
```md example.md:
{% link text url [external] [title] %}
```

## Include Code
插入 `source/downloads/code` 文件夹内的代码文件。`source/downloads/code` 不是固定的，取决于你在配置文件中 `code_dir` 的配置。
```md example.md:
{% include_code [title] [lang:language] [from:line] [to:line] path/to/file %}
```

{% folding 示例 %}

嵌入 `test.js` 文件全文
```md
{% include_code lang:javascript test.js %}
```
只嵌入第 3 行
```md
{% include_code lang:javascript from:3 to:3 test.js %}
```
嵌入第 5 行至第 8 行
```md
{% include_code lang:javascript from:5 to:8 test.js %}
```
嵌入第 5 行至文件结束
```md
{% include_code lang:javascript from:5 test.js %}
```
嵌入第 1 行至第 8 行
```md
{% include_code lang:javascript to:8 test.js %}
```

{% endfolding %}

## 引用文章

引用其他文章的链接。

```md
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

{% folding 示例 %}

引用这篇文章：{% post_link news/2020-02-22 %}

```md example.md:
引用这篇文章：{% post_link news/2020-02-22 %}
```
{% endfolding %}

<br><br>{% btn solid large center, 向开发者反馈问题, https://github.com/volantis-x/hexo-theme-volantis/issues/ , fas fa-paper-plane %}
