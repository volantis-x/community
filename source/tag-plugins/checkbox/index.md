---
layout: docs
group: docs-volantis-latest
order: 516
short_title: false
title: 'tag-plugins: checkbox'
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /
---

```md 最后更新于 <u>2.6</u> 版本
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```

## 演示效果

{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}

## 上述示例的源码

```md example:
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
```

## 可以支持的参数

### 颜色

```
red, yellow, green, cyan, blue
```

### 样式

```
plus, minus, times
```

### 选中状态

```
checked
```
