---
layout: docs
group: docs-v4
order: 501
title: 标签插件
short_title: 5. 标签插件
sidebar: [docs-v4, toc]
disqus:
  path: /
plugins:
  - snackbar: oldversion
---

为了兼容老用户，旧的标签插件在重构之前依然沿用旧的格式，即「英文逗号+空格」作为参数分隔符，而部分新增标签插件是「空格+英文竖线+空格」，请注意区分。

> 我们也在探索哪种分隔符既简单又不容易引起冲突，所以可能存在多种格式，具体以对应文档描述为准。

## text

这是一些文本样式标签：

带 {% u 下划线 %} 的文本
```md example.md:
带 {% u 下划线 %} 的文本
```

带 {% emp 着重号 %} 的文本
```md example.md:
带 {% emp 着重号 %} 的文本
```


带 {% wavy 波浪线 %} 的文本
```md example.md:
带 {% wavy 波浪线 %} 的文本
```


带 {% del 删除线 %} 的文本
```md example.md:
带 {% del 删除线 %} 的文本
```

键盘样式的文本 {% kbd command %} + {% kbd D %}
```md example.md:
键盘样式的文本 {% kbd command %} + {% kbd D %}
```

密码样式的文本：{% psw 这里没有验证码 %}
```md example.md:
密码样式的文本：{% psw 这里没有验证码 %}
```

<br>

## span

```md 本插件最后更新于 <u>2.5</u> 版本
{% span 样式参数, 文本内容 %}
```

### 彩色文字

在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。

### 超大号文字

文档「开始」页面中的标题部分就是超大号文字。

{% span center logo large, Volantis %}
{% span center small, A Wonderful Theme for Hexo %}

### 上述示例的源码

```md example:
#### 彩色文字

在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。

#### 超大号文字

文档「开始」页面中的标题部分就是超大号文字。

{% span center logo large, Volantis %}
{% span center small, A Wonderful Theme for Hexo %}
```

### 可以支持的参数

样式参数位置可以写颜色、大小和对齐方向，多个样式参数用空格隔开。

#### 字体

```
logo, code
```

#### 颜色

```
red, yellow, green, cyan, blue, gray
```

#### 大小

```
small, h4, h3, h2, h1, large, huge, ultra
```

#### 对齐方向

```
left, center, right
```

<br>

## p

```md 本插件最后更新于 <u>2.5</u> 版本
{% p 样式参数, 文本内容 %}
```

### 演示效果

#### 彩色文字

在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。

#### 超大号文字

文档「开始」页面中的标题部分就是超大号文字。

{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}

### 上述示例的源码

```md example:
#### 彩色文字

在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。

#### 超大号文字

文档「开始」页面中的标题部分就是超大号文字。

{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}
```

### 可以支持的参数

样式参数位置可以写颜色、大小和对齐方向，多个样式参数用空格隔开。

#### 字体

```
logo, code
```

#### 颜色

```
red, yellow, green, cyan, blue, gray
```

#### 大小

```
small, h4, h3, h2, h1, large, huge, ultra
```

#### 对齐方向

```
left, center, right
```


<br>

## note

NoteBlock 是 Blockquote 的增强版，在左边显示图标，并且可以自定颜色。而 Note 是 NoteBlock 的简便写法。

```md 最后更新于 <u>2.3</u> 版本
{% note 样式参数, 文本内容 %}
```

### 演示效果

#### 经典用法

{% note, 可以在配置文件中设置默认样式，为简单的一句话提供最的简便写法。 %}
{% note quote, note quote 适合引用一段话 %}
{% note info, note info 默认主题色，适合中性的信息 %}
{% note warning, note warning 默认黄色，适合警告性的信息 %}
{% note danger, note error/danger 默认红色，适合危险性的信息 %}
{% note success, note done/success 默认绿色，适合正确操作的信息 %}

#### 更多图标

这些都是默认样式，可以手动加上颜色：

{% note radiation, note radiation 默认样式 %}
{% note radiation yellow, note radiation yellow 可以加上颜色 %}
{% note bug red, note bug red 说明还存在的一些故障 %}
{% note link green, note link green 可以放置一些链接 %}
{% note paperclip blue, note paperclip blue 放置一些附件链接 %}
{% note todo, note todo 待办事项 %}
{% note guide clear, note guide clear 可以加上一段向导 %}
{% note download, note download 可以放置下载链接 %}
{% note message gray, note message gray 一段消息 %}
{% note up, note up 可以说明如何进行更新 %}
{% note undo light, note undo light 可以说明如何撤销或者回退 %}

### 上述示例的源码

```md example:
#### 经典用法

{% note, 可以在配置文件中设置默认样式，为简单的一句话提供最的简便写法。 %}
{% note quote, note quote 适合引用一段话 %}
{% note info, note info 默认主题色，适合中性的信息 %}
{% note warning, note warning 默认黄色，适合警告性的信息 %}
{% note danger, note error/danger 默认红色，适合危险性的信息 %}
{% note success, note done/success 默认绿色，适合正确操作的信息 %}

#### 更多图标

这些都是默认样式，可以手动加上颜色：

{% note radiation, note radiation 默认样式 %}
{% note radiation yellow, note radiation yellow 可以加上颜色 %}
{% note bug red, note bug red 说明还存在的一些故障 %}
{% note link green, note link green 可以放置一些链接 %}
{% note paperclip blue, note paperclip blue 放置一些附件链接 %}
{% note todo, note todo 待办事项 %}
{% note guide clear, note guide clear 可以加上一段向导 %}
{% note download, note download 可以放置下载链接 %}
{% note message gray, note message gray 一段消息 %}
{% note up, note up 可以说明如何进行更新 %}
{% note undo light, note undo light 可以说明如何撤销或者回退 %}
```

### 可以支持的参数

样式参数位置可以写图标和颜色，多个样式参数用空格隔开。

#### 图标

```md 彩色的
quote, info, warning, done/success, error/danger
```

```md 灰色的，也可以指定颜色
radiation, bug, idea, link, paperclip, todo, message, guide, download, up, undo
```

#### 颜色

```md 指定颜色
clear, light, gray, red, yellow, green, cyan, blue
```
<br>

## noteblock

NoteBlock 是 Blockquote 的增强版，在左边显示图标，并且可以自定颜色。而 Note 是 NoteBlock 的简便写法。

```md 最后更新于 <u>4.0</u> 版本
{% noteblock 样式参数（可选）, 标题（可选） %}
文本段落
{% endnoteblock %}
```

### 演示效果

可以在区块中放置一些复杂的结构，支持嵌套。

{% noteblock, 标题（可选） %}

Windows 10不是為所有人設計,而是為每個人設計

{% noteblock done %}
嵌套测试： 请坐和放宽，我正在帮你搞定一切...
{% endnoteblock %}

{% folding yellow, Folding 测试： 点击查看更多 %}

{% note warning, 不要说我们没有警告过你 %}
{% noteblock bug red %}
我们都有不顺利的时候
{% endnoteblock %}

{% endfolding %}
{% endnoteblock %}

### 上述示例的源码

```md example:
{% noteblock, 标题（可选） %}

Windows 10不是為所有人設計,而是為每個人設計

{% noteblock done %}
嵌套测试： 请坐和放宽，我正在帮你搞定一切...
{% endnoteblock %}

{% folding yellow, Folding 测试： 点击查看更多 %}

{% note warning, 不要说我们没有警告过你 %}
{% noteblock bug red %}
我们都有不顺利的时候
{% endnoteblock %}

{% endfolding %}
{% endnoteblock %}
```

### 可以支持的参数

样式参数位置可以写图标和颜色，多个样式参数用空格隔开。

#### 图标

```md 彩色的
quote, info, warning, done/success, error/danger
```

```md 灰色的，也可以指定颜色
radiation, bug, idea, link, paperclip, todo, message, guide, download, up, undo
```

#### 颜色

```md 指定颜色
clear, light, gray, red, yellow, green, cyan, blue
```


<br>

## checkbox

```md 最后更新于 <u>2.6</u> 版本
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```

### 演示效果

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

### 上述示例的源码

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

### 可以支持的参数

#### 颜色

```
red, yellow, green, cyan, blue
```

#### 样式

```
plus, minus, times
```

#### 选中状态

```
checked
```


<br>

## radio

```md 最后更新于 <u>2.6</u> 版本
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```

### 演示效果

{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}

### 上述示例的源码

```md example:
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```

### 可以支持的参数

#### 颜色

```
red, yellow, green, cyan, blue
```

#### 选中状态

```
checked
```

<br>

## timeline

```md 最后更新于 <u>3.0</u> 版本
{% timeline 时间线标题（可选） %}

{% timenode 时间节点（标题） %}

正文内容

{% endtimenode %}

{% timenode 时间节点（标题） %}

正文内容

{% endtimenode %}

{% endtimeline %}
```

### 演示效果

{% timeline %}

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

### 上述示例的源码

```md example:
{% timeline %}

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


<br>

## link

```md 最后更新于 <u>3.0</u> 版本
{% link 标题, 链接, 图片链接（可选） %}
```

### 演示效果

{% link 如何参与项目, https://volantis.js.org/contributors/, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets@master/logo/256/safari.png %}

### 上述示例的源码

```md example:
{% link 如何参与项目, https://volantis.js.org/contributors/, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets@master/logo/256/safari.png %}
```


<br>

## button

{% note warning, 这个页面的标签将会在不久后重构 %}

### 基础按钮

请将您的 Volantis 升级至 <u>2.4</u> 版本以上使用。

{% tabs btn, 4 %}

<!-- tab 语法格式 -->

```
{% btn 样式参数（可选）, 标题, 链接, 图标（可选） %}
```

{% note warning, 可选的参数可以省略，但是前后顺序不能乱。 %}

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 样式参数 %}

```
regular, large, center
```

{% p subtitle, 图标 %}

第1个或者第2个参数包含 `fa-` 的那个被识别为图标。


<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
不设置任何参数的 {% btn 按钮, / %} 适合融入段落中。

regular 按钮适合独立于段落之外：

{% btn regular, 示例博客, https://xaoxuu.com, fas fa-play-circle %}

large 按钮更具有强调作用，建议搭配 center 使用：

{% btn center large, 开始使用, https://volantis.js.org/v3/getting-started/, fas fa-download %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% p subtitle, 行内按钮 %}

不设置任何参数的 {% btn 按钮, / %} 适合融入段落中。

{% p subtitle, 空心按钮 %}

{% btn regular, 示例博客, /, fas fa-rss %} {% btn regular, 示例博客, , fas fa-rss %}

{% btn regular large, 示例博客, /, fas fa-rss %} {% btn regular large, 示例博客, , fas fa-rss %}

居中：

{% btn center large, 开始使用, https://volantis.js.org/v3/getting-started/, fas fa-download %}

{% p subtitle, 实心按钮 %}

{% btn solid, 示例博客, /, fas fa-rss %} {% btn solid, 示例博客, , fas fa-rss %}

{% btn solid large, 示例博客, /, fas fa-rss %} {% btn solid large, 示例博客, , fas fa-rss %}

居中：

{% btn solid center large, 开始使用, https://volantis.js.org/v3/getting-started/, fas fa-download %}

<!-- endtab -->

{% endtabs %}


### 富文本按钮

请将您的 Volantis 升级至 <u>2.3</u> 版本以上使用。

{% tabs btns, 4 %}

<!-- tab 语法格式 -->

```
{% btns 样式参数 %}
{% cell 标题, 链接, 图片或者图标 %}
{% cell 标题, 链接, 图片或者图标 %}
{% endbtns %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

样式参数位置可以写图片样式、布局方式，多个样式参数用空格隔开。

{% p subtitle, 圆角样式 %}

默认为方形

```
rounded, circle
```


{% p subtitle, 布局方式 %}

默认为自动宽度，适合视野内只有一两个的情况。

{% table %}
| 参数 | 含义 |
| :-- | :-- |
| wide | 宽一点的按钮 |
| fill | 填充布局，自动铺满至少一行，多了会换行。 |
| center | 居中，按钮之间是固定间距。 |
| around | 居中分散 |
| grid2 | 等宽最多2列，屏幕变窄会适当减少列数。 |
| grid3 | 等宽最多3列，屏幕变窄会适当减少列数。 |
| grid4 | 等宽最多4列，屏幕变窄会适当减少列数。 |
| grid5 | 等宽最多5列，屏幕变窄会适当减少列数。 |
{% endtable %}

{% p subtitle, 增加文字样式 %}

可以在容器内增加 `<b>标题</b>` 和 `<p>描述文字</p>`

<!-- endtab -->

<!-- tab 示例写法 -->

如果需要显示类似「团队成员」之类的一组含有头像的链接：

```md example.md:
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% endbtns %}
```

或者含有图标的按钮：

```md example.md:
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}
```

圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中

```md example.md:
{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p red, 专业版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p green, 免费版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
{% endbtns %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

如果需要显示类似「团队成员」之类的一组含有头像的链接：
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% endbtns %}

或者含有图标的按钮：
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}


圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中
{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p red, 专业版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p green, 免费版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
{% endbtns %}

<!-- endtab -->

{% endtabs %}


<br>

## ghcard

```md 最后更新于 <u>4.0</u> 版本
{% ghcard 用户名, 其它参数（可选） %}
{% ghcard 用户名/仓库, 其它参数（可选） %}
```

### 用户信息卡片

| {% ghcard xaoxuu %} | {% ghcard xaoxuu, theme=vue %} |
| -- | -- |
| {% ghcard xaoxuu, theme=buefy %} | {% ghcard xaoxuu, theme=solarized-light %} |
| {% ghcard xaoxuu, theme=onedark %} | {% ghcard xaoxuu, theme=solarized-dark %} |
| {% ghcard xaoxuu, theme=algolia %} | {% ghcard xaoxuu, theme=calm %} |

上述示例的源码：

```md example:
| {% ghcard xaoxuu %} | {% ghcard xaoxuu, theme=vue %} |
| -- | -- |
| {% ghcard xaoxuu, theme=buefy %} | {% ghcard xaoxuu, theme=solarized-light %} |
| {% ghcard xaoxuu, theme=onedark %} | {% ghcard xaoxuu, theme=solarized-dark %} |
| {% ghcard xaoxuu, theme=algolia %} | {% ghcard xaoxuu, theme=calm %} |
```

### 仓库信息卡片

| {% ghcard volantis-x/hexo-theme-volantis %} | {% ghcard volantis-x/hexo-theme-volantis, theme=vue %} |
| -- | -- |
| {% ghcard volantis-x/hexo-theme-volantis, theme=buefy %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-light %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=onedark %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-dark %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=algolia %} | {% ghcard volantis-x/hexo-theme-volantis, theme=calm %} |

上述示例的源码：

```md example:
| {% ghcard volantis-x/hexo-theme-volantis %} | {% ghcard volantis-x/hexo-theme-volantis, theme=vue %} |
| -- | -- |
| {% ghcard volantis-x/hexo-theme-volantis, theme=buefy %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-light %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=onedark %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-dark %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=algolia %} | {% ghcard volantis-x/hexo-theme-volantis, theme=calm %} |
```

### 更多参数选择

{% link GitHub 卡片 API 参数, https://github.com/anuraghazra/github-readme-stats %}


<br>

## site


网站卡片可以显示网站截图、logo、标题、描述，使用方法和友链标签一模一样，唯一的区别是数据文件名称为 `sites.yml`，可以和友链数据混用，通过分组过滤实现不一样的效果。

```md 示例写法
{% sites only:community_team %}
```

{% folding sites only:community_team %}
{% sites only:community_team %}
{% endfolding %}


<br>

## dropmenu

{% note warning, 这个页面的标签将会在不久后重构 %}

### 下拉菜单

请将您的 Volantis 升级至 <u>3.0</u> 版本以上使用。

{% tabs menu, 3 %}

<!-- tab 语法格式 -->

{% p subtitle, 容器 %}

```md
{% menu 前缀（可省略）, 标题, 后缀（可省略） %}
菜单内容
{% endmenu %}
```

{% p subtitle, 菜单内容 %}

菜单项

```md
{% menuitem 文本, 链接, 图标 %}
```

分割线

```md
{% menuitem hr %}
```

子菜单

```md
{% submenu 嵌套菜单, 图标 %}
菜单内容
{% endsubmenu %}
```

<!-- endtab -->

<!-- tab 示例写法 -->

{% p subtitle, 示例1 %}

```md
{% menu 下拉菜单 %}
{% menuitem 主题源码, https://github.com/volantis-x/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/volantis-x/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/volantis-x/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}
```

{% p subtitle, 示例2 %}

```md
{% menu 这个是, 下拉菜单 %}
（同上）
{% endmenu %}
```

{% p subtitle, 示例3 %}

```md
{% menu 这个是, 下拉菜单, 的示例效果。 %}
（同上）
{% endmenu %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% p subtitle, 示例1 %}

{% menu 下拉菜单 %}
{% menuitem 主题源码, https://github.com/volantis-x/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/volantis-x/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/volantis-x/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}

{% p subtitle, 示例2 %}

{% menu 这个是, 下拉菜单 %}
{% menuitem 主题源码, https://github.com/volantis-x/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/volantis-x/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/volantis-x/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}

{% p subtitle, 示例3 %}

{% menu 这个是, 下拉菜单, 的示例效果。 %}
{% menuitem 主题源码, https://github.com/volantis-x/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/volantis-x/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/volantis-x/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}

<!-- endtab -->

{% endtabs %}


<br>

## tab

此插件移植自 [NexT #tabs](https://theme-next.org/docs/tag-plugins/tabs)

```md 最后更新于 <u>2.1</u> 版本
{% tabs 页面内不重复的ID %}
<!-- tab 栏目1 -->
内容
<!-- endtab -->
<!-- tab 栏目2 -->
内容
<!-- endtab -->
{% endtabs %}
```

### 演示效果

{% tabs tab-id %}

<!-- tab 栏目1 -->

。。。

<!-- endtab -->

<!-- tab 栏目2 -->

！！！

<!-- endtab -->

{% endtabs %}

### 上述示例的源码

```md example:
{% tabs tab-id %}

<!-- tab 栏目1 -->

。。。

<!-- endtab -->

<!-- tab 栏目2 -->

！！！

<!-- endtab -->

{% endtabs %}
```


<br>

## folding

```md 最后更新于 <u>2.3</u> 版本
{% folding 参数（可选）, 标题 %}
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endfolding %}
```

### 演示效果

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

### 上述示例的源码

```md example:
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

### 可以支持的参数

参数位置可以填写颜色和状态，多个参数用空格隔开。

#### 颜色

```
blue, cyan, green, yellow, red
```

#### 状态

状态填写 `open` 代表默认打开。


<br>

## inlineimage

Inlineimage 标签是一种行内图片标签，可以用来在一段话中间插入表情。

```md 本插件最后更新于 <u>4.0</u> 版本
{% inlineimage 图片链接, height=高度（可选） %}
```

### 演示效果

这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。


### 上述示例的源码

```md example:
这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。
```

### 可以支持的参数

#### 高度

```
height=20px
```


<br>

## image

Image 标签是一种针对单个图片应用场景的标签，支持图片描述文字和指定宽度。

```md 本插件最后更新于 <u>4.0</u> 版本
{% image 链接, width=宽度（可选）, height=高度（可选）, alt=描述（可选）, bg=占位颜色（可选） %}
```

### 演示效果

添加描述：

{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}

指定宽度：

{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=300px %}

指定宽度并添加描述：

{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=300px, alt=每天下课回宿舍的路，没有什么故事。 %}

设置占位背景色：

{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=414px, bg=#224855, alt=优化不同宽度浏览的观感 %}



### 上述示例的源码

```md example:
添加描述：

{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}

指定宽度：

{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px %}

指定宽度并添加描述：

{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, alt=每天下课回宿舍的路，没有什么故事。 %}

设置占位背景色：

{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}
```

### 可以支持的参数


#### 图片宽高度

```md example:
width=300px, height=32px
```

#### 图片描述

```md example:
alt=图片描述
```

#### 占位背景色

```md example:
bg=#f2f2f2
```



<br>

## gallery

Gallery 标签是一种针对一组图片应用场景的标签。

```md 本插件最后更新于 <u>3.0</u> 版本
{% gallery 参数, 列数 %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
{% endgallery %}
```

### 演示效果

一行一个图片
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endgallery %}

一行多个图片（不换行）
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
{% endgallery %}

多行多个图片（每行2～8个图片）
{% gallery stretch, 8 %}
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/001.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/002.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/003.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/004.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/005.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/006.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/007.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/008.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/009.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/010.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/011.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/012.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/013.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/014.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/015.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/016.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/017.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/018.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/019.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/020.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/021.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/022.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/023.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/024.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/026.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/027.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/028.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/030.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/031.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/032.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/033.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/034.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/035.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/036.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/037.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/038.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/039.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/040.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/041.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/042.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/043.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/044.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/045.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/046.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/047.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/048.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/049.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/050.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/051.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/052.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/053.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/054.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/055.jpg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/056.jpg)
{% endgallery %}

### 上述示例的源码

一行一个图片

```md example.md:
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endgallery %}
```

一行多个图片（不换行）

```md example.md:
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
{% endgallery %}
```

多行多个图片（每行2～8个图片）

```md example.md:
{% gallery stretch, 4 %}
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
{% endgallery %}
```

### 可以支持的参数

#### 对齐方向

```
left, center, right
```

#### 缩放

```
stretch
```

#### 列数

逗号后面直接写列数，支持 2 ～ 8 列。设定列列数之后就是「多行多图」布局，此时图片默认左对齐。为了避免图片大小不一，建议搭配 `stretch` 来时图片放大填充。



<br>

## audio

```md 本插件最后更新于 <u>2.4</u> 版本
{% audio 音频链接 %}
```

### 演示效果

{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}



### 上述示例的源码

```md example:
{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}
```


<br>

## video

```md 本插件最后更新于 <u>2.3</u> 版本
{% video 视频链接 %}
```

### 演示效果


100%宽度

{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}

50%宽度

{% videos, 2 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

25%宽度

{% videos, 4 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

### 上述示例的源码

100%宽度

```md example.md:
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
```

50%宽度

```md example.md:
{% videos, 2 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```

25%宽度

```md example.md:
{% videos, 4 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```

### 可以支持的参数


#### 对齐方向

```
left, center, right
```

#### 列数

逗号后面直接写列数，支持 1 ～ 4 列。


<br>

## frame

这是一个能够将图片或者视频套入设备框架中的标签，可以用来更优雅地显示截图、录屏。

```md 本插件最后更新于 <u>4.0</u> 版本
{% frame 框架名 | img=图片链接 | alt=图片描述（可选） | part=top/bottom（可选） %}
{% frame 框架名 | video=视频链接 | part=top/bottom（可选） %}
```

<br>


{% frame iphone11 | img=https://7.dusays.com/2020/09/28/baa33914a34ec.jpg | video=https://7.dusays.com/2020/09/28/39db723f1e200.mp4 | part=top %}


```
{% frame iphone11 | img=https://7.dusays.com/2020/09/28/baa33914a34ec.jpg | video=https://7.dusays.com/2020/09/28/39db723f1e200.mp4 | part=top %}
```

在这个示例中同时出现了 `img` 和 `video` 那么它就是一个带有封面的视频，在视频加载完成之前会先显示视频封面。

### 设备框架

目前支持的有：

```
iphone11
```

如果您有以下其它设备框架图(svg)，欢迎 PR 兼容。

```
android, ipad, macbook, watch
```

### 剪裁

通过设置 `part=top` 或者 `part=bottom` 来显示上半部分或者下半部分，否则将显示完整的框架及其中的图片/视频。


<br>

## aplayer

主题对 APlayer 插件的样式进行了兼容。安装插件：

```sh
npm i -S hexo-tag-aplayer
```

使用方法：

{% link hexo-tag-aplayer, https://github.com/MoePlayer/hexo-tag-aplayer %}


<br>

## issues

```md 最后更新于 <u>4.0</u> 版本
{% issues type | api=url | group=key:value1,value2（可选） %}
```

### 类型

根据需求不同，会将 issues 内容解析成不同的 HTML 标签，目前支持的类型有：

- **timeline**: 解析成 timeline 标签，issue 的标题对应 timeline 的时间， issue 的内容对应 timeline 的内容。
- **sites**: 解析成 sites 标签，需要有 JSON 代码块：
  ```json
  {
      "title": "",
      "screenshot": "",
      "url": "",
      "avatar": "",
      "description": "",
      "keywords": ""
  }
  ```

### API

传可以调得通的 URL ，例如：
```
api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active
api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active
```

### 分组

sites 类型的 issues 默认不分组，如果需要分组，可指定分组依据「key」，和分组白名单「value1」「value2」等，例如：

```
group=version:v4,v3,v2
```

这个参数的作用就是，筛选出 JSON 中包含 `"version": "v4"` 或者 `"version": "v3"` 或者 `"version": "v2"` 的数据，并分组显示。


### 示例

#### 时间线

```
{% issues timeline | api=https://gitee.com/api/v5/repos/xaoxuu/timeline/issues?state=open&creator=xaoxuu&sort=created&direction=desc&page=1&per_page=100 %}
```


对应的仓库链接：

{% link Gitee: xaoxuu/timeline, https://gitee.com/xaoxuu/timeline/issues %}


#### 友链

```
{% issues sites | api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
{% issues sites | api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
```

上例中的 `labels=active` 参数可以控制默认的 issue 不显示，只有自己审核通过添加了 `active` 标签之后才会显示。上述示例对应的仓库链接：

{% link GitHub: xaoxuu/friends, https://github.com/xaoxuu/friends/issues %}

#### 分组

这是主题官网的「示例博客」页面的数据：

```
{% issues sites | api=https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=version:版本：^4.0,版本：^3.0,版本：^2.0 %}
```

上述示例对应的仓库链接：

{% link GitHub: volantis-x/examples, https://github.com/volantis-x/examples/issues %}



## Hexo 通用标签

在文章中使用 `<!-- more -->`，那么 `<!-- more -->` 之前的文字将会被视为摘要。首页中将只出现这部分文字，同时这部分文字也会出现在正文之中。详见 Hexo 官方文档：

{% link Hexo 官方文档 #标签插件, https://hexo.io/zh-cn/docs/tag-plugins %}
