---
layout: docs
group: docs-volantis-latest
order: 541
short_title: false
title: 'tag-plugins: inlineimage'
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---

Inlineimage 标签是一种行内图片标签，可以用来在一段话中间插入表情。

```md 本插件最后更新于 <u>4.0</u> 版本
{% inlineimage 图片链接, height=高度（可选） %}
```

## 演示效果

这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。


## 上述示例的源码

```md example:
这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。
```

## 可以支持的参数

### 高度

```
height=20px
```
