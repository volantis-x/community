---
layout: page
group: docs-latest
order: 503
title: 容器类标签
short_title: 5-3 容器类标签
meta:
  header: [centertitle]
sidebar: [docs-latest, toc, repos]
mathjax: true
---


## Tab

此插件移植自 [NexT #tabs](https://theme-next.org/docs/tag-plugins/tabs) 。请将您的 Volantis 升级至 <u>2.1</u> 版本以上使用。

{% tabs tab-id %}

<!-- tab 语法格式 -->

```md
{% tabs tab-id %}

<!-- tab tab-name -->

![](https://i.loli.net/2020/03/18/f5PQlWisvm9zbgK.jpg)

<!-- endtab -->

<!-- tab tab-name -->

这里面写内容，支持的语法格式有限，请尽量<u>不要</u>写太过复杂的东西。

<!-- endtab -->

{% endtabs %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, tab-id %}

必填，如果一个页面有多个 tabs 时，tab-id 不能重复。

{% p subtitle, tab-name %}

标签文本。

<!-- endtab -->

{% endtabs %}


## Folding

请将您的 Volantis 升级至 <u>2.3</u> 版本以上使用。

{% tabs folding, 4 %}

<!-- tab 语法格式 -->

```md
{% folding 参数（可选）, 标题 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

参数位置可以填写颜色和状态，多个参数用空格隔开。

{% p subtitle, 颜色 %}

```
blue, cyan, green, yellow, red
```

{% p subtitle, 状态 %}

状态填写 `open` 代表默认打开。

<!-- endtab -->

<!-- tab 示例写法 -->

```
{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}

{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}

```md
{% folding green, 查看代码测试 %}

查看代码测试

{% endfolding %}
```

{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}

<!-- endtab -->

{% endtabs %}
