---
layout: docs
title: 'tag-plugins: image'
sidebar: [docs-latest, toc]
---

Image 标签是一种针对单个图片应用场景的标签，支持图片描述文字和指定宽度。

```md 本插件最后更新于 <u>4.0</u> 版本
{% image 链接, width=宽度（可选）, height=高度（可选）, alt=描述（可选）, bg=占位颜色（可选） %}
```

## 演示效果

添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, alt=每天下课回宿舍的路，承载了太多记忆。 %}

指定宽度：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=300px %}

指定宽度并添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=300px, alt=每天下课回宿舍的路，承载了太多记忆。 %}

设置占位背景色：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=414px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}



## 上述示例的源码

```md example:
添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}

指定宽度：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=400px %}

指定宽度并添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=400px, alt=每天下课回宿舍的路，没有什么故事。 %}

设置占位背景色：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=400px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}
```

## 可以支持的参数


### 图片宽高度

```md example:
width=300px, height=32px
```

### 图片描述

```md example:
alt=图片描述
```

### 占位背景色

```md example:
bg=#f2f2f2
```
