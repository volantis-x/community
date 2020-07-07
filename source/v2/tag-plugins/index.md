---
layout: page
group: docs-v2
order: 5
title: 标签插件
short_title: 5. 标签插件
meta:
  header: [title, author, updated]
sidebar: [news, docs-v2, repos, toc]
mathjax: true
---

主题原生支持<b>{% span red, 丰 %}{% span yellow, 富 %}{% span green, 多 %}{% span blue, 彩 %}</b>的标签。

## 文本和段落

### Span & P

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

### Note & NoteBlock

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


### Checkbox & Radio

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


## 按钮和菜单

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

不设置任何参数的 {% btn 按钮, / %} 适合融入段落中。

regular 按钮适合独立于段落之外：

{% btn regular, 示例博客, https://xaoxuu.com, fas fa-play-circle %}

large 按钮更具有强调作用，建议搭配 center 使用：

{% btn center large, 开始使用, https://volantis.js.org/v3/getting-started/, fas fa-download %}

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


### Menu

请将您的 Volantis 升级至 <u>2.4</u> 版本以上使用。

{% tabs menu, 3 %}

<!-- tab 语法格式 -->

{% p subtitle, 容器 %}

```md
{% menu 下拉菜单, 图标 %}
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

```md
{% menu 下拉菜单 %}
{% menuitem 主题源码, https://github.com/theme-volantis/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/theme-volantis/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/theme-volantis/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/theme-volantis/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% menu 下拉菜单 %}
{% menuitem 主题源码, https://github.com/theme-volantis/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/theme-volantis/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/theme-volantis/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/theme-volantis/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}

<!-- endtab -->

{% endtabs %}


## 容器

### Tab

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


### Folding

请将您的 Volantis 升级至 <u>2.3</u> 版本以上使用。

{% tabs folding, 4 %}

<!-- tab 语法格式 -->

```md
{% folding 参数（可选）, 标题 %}

![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

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

![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

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

hahaha <span><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

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

hahaha <span><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}

<!-- endtab -->

{% endtabs %}


## 多媒体

包括图片、音频、视频。

### Image

Image 标签是一种针对单个图片应用场景的标签，支持图片描述文字和指定宽度。请将您的 Volantis 升级至 <u>2.6</u> 版本以上使用。

{% tabs fancybox, 1 %}

<!-- tab 语法格式 -->

```
{% image 链接, 宽度（可选）, 描述（可选） %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 图片宽度 %}

阿拉伯数字 + px

```md example:
300px
```

{% p subtitle, 图片描述 %}

纯文本，不能包含引号。


<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, 每天下课回宿舍的路，承载了太多记忆。 %}

指定宽度：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, 300px %}

指定宽度并添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, 300px, 每天下课回宿舍的路，承载了太多记忆。 %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, 每天下课回宿舍的路，承载了太多记忆。 %}

指定宽度：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, 300px %}

指定宽度并添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, 300px, 每天下课回宿舍的路，承载了太多记忆。 %}

<!-- endtab -->

{% endtabs %}


### Fancybox

Fancybox 标签是一种针对一组图片应用场景的标签。请将您的 Volantis 升级至 <u>2.2</u> 版本以上使用。

{% tabs fancybox, 4 %}

<!-- tab 语法格式 -->

```md
{% fancybox 参数, 列数 %}
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
{% endfancybox %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 对齐方向 %}

```
left, center, right
```

{% p subtitle, 缩放 %}

```
stretch
```

{% p subtitle, 列数 %}

逗号后面直接写列数，支持 2 ～ 8 列。设定列列数之后就是「多行多图」布局，此时图片默认左对齐。为了避免图片大小不一，建议搭配 `stretch` 来时图片放大填充。


<!-- endtab -->

<!-- tab 示例写法 -->

一行一个图片

```md example.md:
{% fancybox %}
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endfancybox %}
```

一行多个图片（不换行）

```md example.md:
{% fancybox %}
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
{% endfancybox %}
```

多行多个图片（每行2～8个图片）

```md example.md:
{% fancybox stretch, 4 %}
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
{% endfancybox %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

一行一个图片
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endgallery %}

一行多个图片（不换行）
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
{% endgallery %}

多行多个图片（每行2～8个图片）
{% gallery stretch, 4 %}
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
{% endgallery %}

<!-- endtab -->

{% endtabs %}

### Audio

请将您的 Volantis 升级至 <u>2.4</u> 版本以上使用。

{% tabs audio, 3 %}

<!-- tab 语法格式 -->

```md example.md:
{% audio 音频链接 %}
```

<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
{% audio https://github.com/theme-volantis/volantis-docs/releases/download/assets/Lumia1020.mp3 %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% audio https://github.com/theme-volantis/volantis-docs/releases/download/assets/Lumia1020.mp3 %}

<!-- endtab -->

{% endtabs %}

### Video

请将您的 Volantis 升级至 <u>2.3</u> 版本以上使用。

{% tabs video, 1 %}

<!-- tab 语法格式 -->

{% p subtitle, 单个视频 %}

```md example.md:
{% video 视频链接 %}
```

{% p subtitle, 多个视频 %}

```md example.md:
{% videos 对齐方向, 列数 %}
{% video 视频链接 %}
{% video 视频链接 %}
{% video 视频链接 %}
{% endvideos %}
```


<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 对齐方向 %}

```
left, center, right
```

{% p subtitle, 列数 %}

逗号后面直接写列数，支持 1 ～ 4 列。

<!-- endtab -->

<!-- tab 示例写法 -->

100%宽度

```md example.md:
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
```

50%宽度

```md example.md:
{% videos, 2 %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```

25%宽度

```md example.md:
{% videos, 4 %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

100%宽度

{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}

50%宽度

{% videos, 2 %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

25%宽度

{% videos, 4 %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/theme-volantis/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

<!-- endtab -->

{% endtabs %}

### APlayer

主题对 APlayer 插件的样式进行了兼容。安装插件：

```sh
npm i -S hexo-tag-aplayer
```

{% note link, 官方文档： [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) %}

## 公式

### MathJax公式

默认是不渲染的，如果文章内有公式，需要在 front-matter 中设置开启。

```md example.md:
---
title: 渲染公式（MathJax）
date: 2020-02-23
mathjax: true # false: 不渲染, true: 渲染, internal: 只在文章内部渲染，文章列表中不渲染
---

$$t+1=2$$

$$
\mbox{积累因子}=\begin{cases}
1+ni & \mbox{单利}\\\\
(1+i)^n & \mbox{复利}
\end{cases}
$$

$$
\begin{equation}
\sum_{i=0}^n F_i \cdot \phi (H, p_i) - \sum_{i=1}^n a_i \cdot ( \tilde{x_i}, \tilde{y_i}) + b_i \cdot ( \tilde{x_i}^2 , \tilde{y_i}^2 )
\end{equation}
$$
$$
\begin{equation}
\beta^*(D) = \mathop{argmin} \limits_{\beta} \lambda {||\beta||}^2 + \sum_{i=1}^n max(0, 1 - y_i f_{\beta}(x_i))
\end{equation}
$$
```


{% folding 示例效果 %}

$$t+1=2$$

$$
\mbox{积累因子}=\begin{cases}
1+ni & \mbox{单利}\\\\
(1+i)^n & \mbox{复利}
\end{cases}
$$

$$
\begin{equation}
\sum_{i=0}^n F_i \cdot \phi (H, p_i) - \sum_{i=1}^n a_i \cdot ( \tilde{x_i}, \tilde{y_i}) + b_i \cdot ( \tilde{x_i}^2 , \tilde{y_i}^2 )
\end{equation}
$$
$$
\begin{equation}
\beta^*(D) = \mathop{argmin} \limits_{\beta} \lambda {||\beta||}^2 + \sum_{i=1}^n max(0, 1 - y_i f_{\beta}(x_i))
\end{equation}
$$

{% endfolding %}

{% note link, 如果公式仍无法正确渲染可以阅读 [@MicDZ](https://www.micdz.cn) 的这篇文章：[《在material-x上使用KaTeX》](https://www.micdz.cn/article/katex-on-volantis/)。 %}

## Hexo 标签

### 引用块

引用书上的句子

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

### 代码块

```md
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

#### 指定语言

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

```md example.md:
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

#### 附加说明

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

```md example.md:
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

#### 行标、高亮

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

### Pull Quote
在文章中插入 Pull quote
```md example.md:
{% pullquote [class] %}
content
{% endpullquote %}
```

### jsFiddle
在文章中嵌入 jsFiddle
```md example.md:
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

### Gist
在文章中嵌入 Gist，<u>注意</u>：在国内无法加载。
```md example.md:
{% gist gist_id [filename] %}
```

### iframe
在文章中插入 iframe
```md example.md:
{% iframe url [width] [height] %}
```

### Image
在文章中插入指定大小的图片。
```md example.md:
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

### Link
在文章中插入链接，并自动给外部链接添加 `target="_blank"` 属性。
```md example.md:
{% link text url [external] [title] %}
```

### Include Code
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

### 引用文章

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

### 文章摘要和截断

在文章中使用 `<!-- more -->`，那么 `<!-- more -->` 之前的文字将会被视为摘要。首页中将只出现这部分文字，同时这部分文字也会出现在正文之中。

{% note link, 更多请见Hexo官方文档：[#标签插件](https://hexo.io/zh-cn/docs/tag-plugins) %}

<br><br>{% btn large center, 向开发者反馈问题, https://github.com/theme-volantis/hexo-theme-volantis/issues/ , fas fa-paper-plane %}
