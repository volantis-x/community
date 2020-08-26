---
layout: docs
title: 'tag-plugins: noteblock'
sidebar: [docs-latest, toc]
---

NoteBlock 是 Blockquote 的增强版，在左边显示图标，并且可以自定颜色。而 Note 是 NoteBlock 的简便写法。

```md 最后更新于 <u>2.3</u> 版本
{% noteblock 样式参数 %}
文本段落
{% endnoteblock %}
```

## 演示效果

可以在区块中放置一些复杂的结构，支持嵌套。

{% noteblock %}

{% p subtitle, 小标题 %}

Windows 10不是為所有人設計,而是為每個人設計

{% p subtitle, 嵌套测试 %}
{% noteblock done %}
请坐和放宽，我正在帮你搞定一切...
{% endnoteblock %}

{% p subtitle, Folding 测试 %}
{% folding yellow, 点击查看更多 %}

{% note warning, 不要说我们没有警告过你 %}
{% noteblock bug red %}
我们都有不顺利的时候
{% endnoteblock %}

{% endfolding %}
{% endnoteblock %}

## 上述示例的源码

```md example:
{% noteblock %}

{% p subtitle, 小标题 %}

Windows 10不是為所有人設計,而是為每個人設計

{% p subtitle, 嵌套测试 %}
{% noteblock done %}
请坐和放宽，我正在帮你搞定一切...
{% endnoteblock %}

{% p subtitle, Folding 测试 %}
{% folding yellow, 点击查看更多 %}

{% note warning, 不要说我们没有警告过你 %}
{% noteblock bug red %}
我们都有不顺利的时候
{% endnoteblock %}

{% endfolding %}
{% endnoteblock %}
```

## 可以支持的参数

样式参数位置可以写图标和颜色，多个样式参数用空格隔开。

### 图标

```md 彩色的
quote, info, warning, done/success, error/danger
```

```md 灰色的，也可以指定颜色
radiation, bug, idea, link, paperclip, todo, message, guide, download, up, undo
```

### 颜色

```md 指定颜色
clear, light, gray, red, yellow, green, cyan, blue
```
