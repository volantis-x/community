---
layout: docs
group: docs-volantis-latest
order: 517
short_title: false
title: 'tag-plugins: radio'
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---

```md 最后更新于 <u>2.6</u> 版本
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```

## 演示效果

{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}

## 上述示例的源码

```md example:
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```

## 可以支持的参数

### 颜色

```
red, yellow, green, cyan, blue
```

### 选中状态

```
checked
```
