---
layout: docs
title: 自定义主题外观
group: docs-volantis-latest
order: 302
short_title: 3-2 自定义主题外观
sidebar: [repos, docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---

## 最大布局宽度

```yaml blog/_config.volantis.yml
custom_css:
  ...
  max_width: 1080px # Sum of body width and sidebar width
```

网页所呈现的内容的最大宽度，即 body 和 sidebar 的宽度之和。

## 抗锯齿

```yaml blog/_config.volantis.yml
custom_css:
  ...
  font_smoothing: true # font-smoothing for webkit
```

## 自定义光标样式

```yaml blog/_config.volantis.yml
custom_css:
  ...
  cursor:
    enable: true
    text: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/text.png
    pointer: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/pointer.png
    default: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/left_ptr.png
    not-allowed: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/circle.png
    zoom-out: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/zoom-out.png
    zoom-in: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/zoom-in.png
    grab: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/openhand.png
```


## 导航栏样式

您可以设置导航栏的高度以及视觉特效，视觉特效目前可选的有：
- **shadow**：卡片阴影。
- **floatable**：当鼠标移动到容器内时，呈现出浮起来的效果。
- **blur**：背景模糊效果（毛玻璃），当浏览器不支持时显示为不透明。

```yaml blog/_config.volantis.yml
custom_css:
  ...
  navbar:
    height: 64px
    effect: [shadow, blur] # [shadow, floatable, blur]
```

## 滚动条样式

```yaml blog/_config.volantis.yml
custom_css:
  ...
  scrollbar:
    size: 4px
    border: 2px
    color: '#2196f3'
    hover: '#ff5722'
```

## 侧边栏样式

视觉特效参数同上，值得注意的是：卡片的 `floatable` 效果和 `blur` 效果相冲突。
```yaml blog/_config.volantis.yml
custom_css:
  ...
  sidebar:
    effect: [shadow] # [shadow, floatable, blur]
```

## 正文区域样式

视觉特效参数同上，值得注意的是：卡片的 `floatable` 效果和 `blur` 效果相冲突。您可以在 `language: true` 这里设置代码块显示语言名称。`text_align` 可以设置 h1/h2/h3/h4/p 的文字对齐方向。
```yaml blog/_config.volantis.yml
custom_css:
  ...
  body:
    effect: [shadow] # [shadow, floatable, blur]
    highlight:
      language: true # show language of codeblock
      copy_btn: true
    text_align: # left, right, justify, center
      h1: left
      h2: left
      h3: left
      h4: left
      p: justify
    note: # style for default note: {% note text %}
      icon: '\f054'
      color: ''
```

## 布局间距

您可以设置几种标题的布局间距 h2/h3/h4、段落间距 line、区块内部的段落间距 inline。
```yaml blog/_config.volantis.yml
custom_css:
  ...
  gap:
    h2: 48px # Spacing above H2 (only px unit)
    h3: 32px # Spacing above H3 (only px unit)
    h4: 16px # Spacing above H4 (only px unit)
    paragraph: 1rem # Paragraph spacing between paragraphs
    row: .5rem # Paragraph spacing between other elements
```

## 自定义字体

您可以自定义正文和代码字体。
```yaml blog/_config.volantis.yml
custom_css:
  ...
  fontfamily:
    logofont:
      fontfamily: '"Varela Round", "PingFang SC", "Microsoft YaHei", Helvetica, Arial'
      name: 'Varela Round'
      url: https://cdn.jsdelivr.net/gh/volantis-x/cdn-fonts/VarelaRound/VarelaRound-Regular.ttf
      weight: normal
      style: normal
    bodyfont:
      fontfamily: 'UbuntuMono, "PingFang SC", "Microsoft YaHei", Helvetica, Arial'
      name: 'UbuntuMono'
      url: https://cdn.jsdelivr.net/gh/volantis-x/cdn-fonts/UbuntuMono/UbuntuMono-Regular.ttf
      weight: normal
      style: normal
    codefont:
      fontfamily: 'Menlo, Monaco'
      name: 'Monaco'
      url: https://cdn.jsdelivr.net/gh/volantis-x/cdn-fonts/Monaco/Monaco.ttf
      weight: normal
      style: normal
```

## 自定义颜色

```yaml blog/_config.volantis.yml
color_scheme:
  # ------------
  # 通用颜色
  common:
    # 主题色
    theme: '#44D7B6'
    # 链接色
    link: '#2196f3'
    # 按钮色
    button: '#44D7B6'
    # 鼠标放到交互元素上时的色
    hover: '#ff5722'
    # 主题色块内部的文字颜色
    inner: '#fff'
    # 选中区域文字的背景颜色
    selection: 'alpha(#2196f3, 0.2)'
  # ------------
  # 亮色主题（默认）
  light:
    # 网站背景色
    site_bg: '#f4f4f4'
    # 网站背景上的文字
    site_inner: '#fff'
    # 网站页脚文字
    site_footer: '#666'

    # 卡片背景色
    card: '#fff'
    # 卡片上的普通文字
    text: '#444'

    # 区块和代码块背景色
    block: '#f6f6f6'
    # 代码块高亮时的背景色
    codeblock: '#FFF7EA'
    # 行内代码颜色
    inlinecode: '#D56D28'

    # 文章部分
    h1: '#444'
    h2: '#444'
    h3: '#444'
    h4: '#444'
    h5: '#444'
    h6: '#444'
    p: '#444'

    # 列表文字
    list: '#666'
    # 列表 hover 时的文字
    list_hl: 'mix($color-theme, #000, 80)'
    # 辅助性文字
    meta: '#888'
  # ------------
  # 暗色主题
  dark:
    # 网站背景色
    site_bg: '#222'
    # 网站背景上的文字
    site_inner: '#eee'
    # 网站页脚文字
    site_footer: '#aaa'
    # 卡片背景色
    card: '#444'
    # 卡片上的普通文字
    text: '#eee'

    # 区块和代码块背景色
    block: '#3a3a3a'
    # 代码块高亮时的背景色
    codeblock: '#343a3c'
    # 行内代码颜色
    inlinecode: '#D56D28'

    # 文章部分
    h1: '#eee'
    h2: '#eee'
    h3: '#ddd'
    h4: '#ddd'
    h5: '#ddd'
    h6: '#ddd'
    p: '#bbb'

    # 列表文字
    list: '#aaa'
    # 列表 hover 时的文字
    list_hl: 'mix($color-theme, #fff, 80)'
    # 辅助性文字
    meta: '#888'
    # 夜间图片亮度
    brightness: 70%
```

## 自定义右键菜单

```yaml blog/_config.volantis.yml
rightmenu:
  enable: true
  # hr: 分割线, music: 音乐控制器
  layout: [home, help, examples, contributors, hr, source_docs, source_theme, hr, print, hr, music]
  # 可选功能项
  print:
    name: 打印页面
    icon: fa fa-print
    onclick: document.execCommand('print')
  # 自定义菜单的格式如下
  help:
    name: 常见问题
    icon: fa fa-question
    url: https://volantis.js.org/faqs/
  examples:
    name: 示例博客
    icon: fa fa-rss
    url: https://volantis.js.org/examples/
  contributors:
    name: 加入社区
    icon: fa fa-fan fa-spin
    url: https://volantis.js.org/contributors/
  source_docs:
    name: 本站源码
    icon: fa fa-code-branch
    url: https://github.com/volantis-x/volantis-docs/
  source_theme:
    name: 主题源码
    icon: fa fa-code-branch
    url: https://github.com/volantis-x/hexo-theme-volantis/
```
