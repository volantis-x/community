---
layout: page
group: docs-v3
order: 501
title: 文本和段落标签
short_title: 5-1 文本和段落标签
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
mathjax: true
---


## 行内小标签

请将您的 Volantis 升级至 <u>3.0</u> 版本以上使用。

{% tabs kbd-psw, 3 %}

<!-- tab 语法格式 -->

{% p subtitle, 带下划线的文本 %}

```md
{% u 带下划线的文本 %}
```

{% p subtitle, 带着重号的文本 %}

```md
{% emp 带着重号的文本 %}
```

{% p subtitle, 带波浪线的文本 %}

```md
{% wavy 波浪线 %}
```

{% p subtitle, 带删除线的文本 %}

```md
{% del 带删除线的文本 %}
```

{% p subtitle, 键盘样式的文本 %}

```md
{% kbd 键盘样式的文本 %}
```

{% p subtitle, 密码样式的文本 %}

```md
{% psw 密码样式的文本 %}
```

<!-- endtab -->

<!-- tab 示例写法 -->

{% p subtitle, 带下划线的文本 %}

```md example.md:
带 {% u 下划线 %} 的文本
```

{% p subtitle, 带着重号的文本 %}

```md example.md:
带 {% emp 着重号 %} 的文本
```

{% p subtitle, 带波浪线的文本 %}

```md example.md:
带 {% wavy 波浪线 %} 的文本
```

{% p subtitle, 带删除线的文本 %}

```md example.md:
带 {% del 删除线 %} 的文本
```

{% p subtitle, 键盘样式的文本 %}

```md example.md:
收藏页面：{% kbd command %} + {% kbd D %}
```

{% p subtitle, 密码样式的文本 %}

```md example.md:
验证码：{% psw 这里没有验证码 %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% p subtitle, 带下划线的文本 %}

带 {% u 下划线 %} 的文本

{% p subtitle, 带着重号的文本 %}

带 {% emp 着重号 %} 的文本

{% p subtitle, 带波浪线的文本 %}

带 {% wavy 波浪线 %} 的文本

{% p subtitle, 带删除线的文本 %}

带 {% del 删除线 %} 的文本

{% p subtitle, 键盘样式的文本 %}

收藏页面：{% kbd command %} + {% kbd D %}

{% p subtitle, 密码样式的文本 %}

验证码：{% psw 这里没有验证码 %}

<!-- endtab -->

{% endtabs %}

## Span & P

请将您的 Volantis 升级至 <u>2.5</u> 版本以上使用。

{% tabs span-p, 4 %}

<!-- tab 语法格式 -->

{% p subtitle, 行内文本 %}

```md
{% span 样式参数, 文本内容 %}
```

{% p subtitle, 独立段落 %}

```md
{% p 样式参数, 文本内容 %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

样式参数位置可以写颜色、大小和对齐方向，多个样式参数用空格隔开。

{% p subtitle, 字体 %}

```
logo, code
```

{% p subtitle, 颜色 %}

```
red, yellow, green, cyan, blue, gray
```

{% p subtitle, 大小 %}

```
small, h4, h3, h2, h1, large, huge, ultra
```

{% p subtitle, 对齐方向 %}

```
left, center, right
```


<!-- endtab -->

<!-- tab 示例写法 -->

{% p subtitle, 彩色文字 %}

```md example.md:
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
```

{% p subtitle, 超大文字 %}

```md example.md:
文档「开始」页面中的标题部分就是超大文字。

{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% p subtitle, 彩色文字 %}

在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。

{% p subtitle, 超大文字 %}

文档「开始」页面中的标题部分就是超大文字。

{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}

<!-- endtab -->

{% endtabs %}

## Note & NoteBlock

NoteBlock 是 Blockquote 的增强版，在左边显示图标，并且可以自定颜色。而 Note 是 NoteBlock 的简便写法。请将您的 Volantis 升级至 <u>2.3</u> 版本以上使用。

{% tabs note, 4 %}

<!-- tab 语法格式 -->

{% p subtitle, Note %}

```md
{% note 样式参数, 文本内容 %}
```

{% p subtitle, NoteBlock %}

```md
{% noteblock 样式参数 %}

文本段落

{% endnoteblock %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

样式参数位置可以写图标和颜色，多个样式参数用空格隔开。

{% p subtitle, 图标 %}

```md 彩色的
quote, info, warning, done/success, error/danger
```

```md 灰色的，也可以指定颜色
radiation, bug, idea, link, paperclip, todo, msg, guide, download, up, undo
```

{% p subtitle, 颜色 %}

```md 指定颜色
clear, light, gray, red, yellow, green, cyan, blue
```

<!-- endtab -->

<!-- tab 示例写法 -->

{% p subtitle, Note %}

```md example.md:
{% note, 为简单的一句话提供的简便写法。 %}

{% note success, 支持同样丰富的参数。 %}
```

{% p subtitle, NoteBlock %}

```md example.md:
可以在区块中放置一些复杂的结构，支持嵌套。

{% noteblock quote %}

{% p subtitle, 小标题 %}

Windows 10不是為所有人設計,而是為每個人設計

{% p subtitle, 嵌套测试 %}
{% noteblock %}
请坐和放宽，我正在帮你搞定一切...
{% endnoteblock %}

{% p subtitle, Folding 测试 %}
{% folding 点击查看更多 %}

{% note warning, 不要说我们没有警告过你 %}
{% noteblock bug red %}
我们都有不顺利的时候
{% endnoteblock %}

{% endfolding %}
{% endnoteblock %}
```
<!-- endtab -->

<!-- tab 示例效果 -->

{% p subtitle, Note %}

{% note, 为简单的一句话提供的简便写法。 %}

{% note success, 支持同样丰富的参数。 %}

{% p subtitle, NoteBlock %}

可以在区块中放置一些复杂的结构，支持嵌套。

{% noteblock quote %}

{% p subtitle, 小标题 %}

Windows 10不是為所有人設計,而是為每個人設計

{% p subtitle, 嵌套测试 %}
{% noteblock %}
请坐和放宽，我正在帮你搞定一切...
{% endnoteblock %}

{% p subtitle, Folding 测试 %}
{% folding 点击查看更多 %}

{% note warning, 不要说我们没有警告过你 %}
{% noteblock bug red %}
我们都有不顺利的时候
{% endnoteblock %}

{% endfolding %}
{% endnoteblock %}

<!-- endtab -->

{% endtabs %}


## Checkbox & Radio

请将您的 Volantis 升级至 <u>2.6</u> 版本以上使用。

{% tabs btn, 4 %}

<!-- tab 语法格式 -->

```
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 颜色 %}

```
red, yellow, green, cyan, blue
```

{% p subtitle, 样式 %}

```
plus, minus, times
```

{% p subtitle, 选中状态 %}

```
checked
```



<!-- endtab -->

<!-- tab 示例写法 -->

{% p subtitle, Checkbox %}

```md example.md:
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

{% p subtitle, Radio %}

```md example.md:
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% p subtitle, Checkbox %}

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

{% p subtitle, Radio %}

{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}

<!-- endtab -->

{% endtabs %}

## Timeline

请将您的 Volantis 升级至 <u>3.0</u> 版本以上使用。

{% tabs timeline, 3 %}

<!-- tab 语法格式 -->

```
{% timeline 时间线标题 %}

{% timenode 时间节点（标题） %}

正文内容

{% endtimenode %}

{% timenode 时间节点（标题） %}

正文内容

{% endtimenode %}

{% endtimeline %}
```

<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
{% timeline 升级小助手 %}

{% timenode 2020-07-24 [2.6.6 -> 3.0](https://github.com/volantis-x/hexo-theme-volantis/releases) %}

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

{% endtimenode %}

{% timenode 2020-05-15 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) %}

不需要额外处理。

{% endtimenode %}

{% timenode 2020-04-20 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) %}

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

{% endtimenode %}

{% endtimeline %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% timeline 升级小助手 %}

{% timenode 2020-07-24 [2.6.6 -> 3.0.0](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/3.0.0) %}

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

{% endtimenode %}

{% timenode 2020-07-24 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) %}

不需要额外处理。

{% endtimenode %}

{% timenode 2020-07-24 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) %}

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

{% endtimenode %}

{% endtimeline %}

<!-- endtab -->

{% endtabs %}
