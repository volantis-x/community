---
layout: docs
group: docs-volantis-latest
order: 301
title: 主题配置
short_title: 3. 主题配置
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /
---

## 创建主题配置文件

主题目录下的 `_config.yml` 文件通常负责主题相关配置，我们强烈建议您使用代替的主题配置文件以防止自己的配置丢失。那么如何使用代替主题配置文件呢？

{% timeline %}

{% timenode 第 1/2 步：创建配置文件 %}

在博客根目录的 `_config.yml` 文件旁边新建一个文件： `_config.volantis.yml` ，这个文件中的配置信息优先级高于主题文件夹中的配置文件。


{% endtimenode %}

{% timenode 第 2/2 步：覆盖自定义配置 %}

当您需要修改某项内容时，例如导航栏菜单，那么您需要在主题配置文件中找到相关内容，复制进自己创建的配置文件中：

```yaml blog/_config.volantis.yml
navbar:
  visiable: auto # always, auto
  logo: # choose [img] or [icon + title]
    img: volantis-static/media/org.volantis/blog/Logo-NavBar@3x.png # https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png
    icon:
    title:
  menu:
    - name: 博客
      icon: fa-solid fa-rss
      url: /
```

{% noteblock idea yellow %}
**小提示**
使用「`npm i hexo-theme-volantis`」方式安装的主题，主题配置文件在「`blog/node_modules/hexo-theme-volantis/_config.yml`」
使用传统方式安装的主题，主题配置文件在「`blog/themes/volantis/_config.yml`」
{% endnoteblock %}

{% endtimenode %}

{% endtimeline %}


## 自定义主题外观

### 最大布局宽度

```yaml blog/_config.volantis.yml
custom_css:
  ...
  max_width: 1080px # Sum of body width and sidebar width
```

网页所呈现的内容的最大宽度，即 body 和 sidebar 的宽度之和。

### 抗锯齿

```yaml blog/_config.volantis.yml
custom_css:
  ...
  font_smoothing: true # font-smoothing for webkit
```

### 自定义光标样式

```yaml blog/_config.volantis.yml
custom_css:
  ...
  cursor:
    enable: true
    text: volantis-static/media/cursor/text.png # https://cdn.jsdelivr.net/gh/inkss/common@1/cursor/text.png
    pointer: volantis-static/media/cursor/pointer.png # https://cdn.jsdelivr.net/gh/inkss/common@1/cursor/pointer.png
    default: volantis-static/media/cursor/left_ptr.png # https://cdn.jsdelivr.net/gh/inkss/common@1/cursor/left_ptr.png
    not-allowed: volantis-static/media/cursor/circle.png # https://cdn.jsdelivr.net/gh/inkss/common@1/cursor/circle.png
    zoom-out: volantis-static/media/cursor/zoom-out.png # https://cdn.jsdelivr.net/gh/inkss/common@1/cursor/zoom-out.png
    zoom-in: volantis-static/media/cursor/zoom-in.png # https://cdn.jsdelivr.net/gh/inkss/common@1/cursor/zoom-in.png
    grab: volantis-static/media/cursor/openhand.png # https://cdn.jsdelivr.net/gh/inkss/common@1/cursor/openhand.png
```


### 导航栏样式

您可以设置导航栏的高度以及视觉特效，视觉特效目前可选的有：
- **shadow**：卡片阴影。
- **floatable**：当鼠标移动到容器内时，呈现出浮起来的效果。
- **blur**：背景模糊效果（毛玻璃），当浏览器不支持时显示为不透明。

```yaml blog/_config.volantis.yml
custom_css:
  ...
  navbar:
    height: 64px
    width: auto # auto, max
    effect: [shadow, blur] # [shadow, floatable, blur]
```

### 滚动条样式

```yaml blog/_config.volantis.yml
custom_css:
  ...
  scrollbar:
    size: 4px
    border: 2px
    color: '#2196f3'
    hover: '#ff5722'
```

### 侧边栏样式

视觉特效参数同上，值得注意的是：卡片的 `floatable` 效果和 `blur` 效果相冲突。
```yaml blog/_config.volantis.yml
custom_css:
  ...
  sidebar:
    effect: [shadow] # [shadow, floatable, blur]
```

### 正文区域样式

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
```

### 布局间距

您可以设置几种标题的布局间距 h2/h3/h4、段落间距 line、区块内部的段落间距 inline。
```yaml blog/_config.volantis.yml
custom_css:
  ...
  gap:
    h2: 48px # Spacing above H2 (only px unit)
    h3: 24px # Spacing above H3 (only px unit)
    h4: 16px # Spacing above H4 (only px unit)
    p: 1em # Paragraph spacing between paragraphs
    line_height: 1.6 # normal, 1.5, 1.75, 2 ...
```

### 自定义字体

您可以自定义正文和代码字体。
```yaml blog/_config.volantis.yml
custom_css:
  ...
  fontfamily:
    logofont:
      fontfamily: '"Varela Round", "PingFang SC", "Microsoft YaHei", Helvetica, Arial'
      name: 'Varela Round'
      url: volantis-static/media/fonts/VarelaRound/VarelaRound-Regular.ttf # https://cdn.jsdelivr.net/gh/volantis-x/cdn-fonts/VarelaRound/VarelaRound-Regular.ttf
      weight: normal
      style: normal
    bodyfont:
      fontfamily: 'UbuntuMono, "Varela Round", "PingFang SC", "Microsoft YaHei", Helvetica, Arial'
      name: 'UbuntuMono'
      url: volantis-static/media/fonts/UbuntuMono/UbuntuMono-Regular.ttf # https://cdn.jsdelivr.net/gh/volantis-x/cdn-fonts/UbuntuMono/UbuntuMono-Regular.ttf
      weight: normal
      style: normal
    codefont:
      fontfamily: 'Menlo, UbuntuMono, Monaco'
      # name: 'Monaco'
      # url: volantis-static/media/fonts/Monaco/Monaco.ttf # https://cdn.jsdelivr.net/gh/volantis-x/cdn-fonts/Monaco/Monaco.ttf
      # weight: normal
      # style: normal
```

### 自定义颜色

{% btn solid large center, 多彩配色方案, https://mhg-lab.github.io/pages/color/ , fad fa-paper-plane %}

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

### 自定义右键菜单

```yaml blog/_config.volantis.yml
# 自定义右键菜单
rightmenu:
  enable: true
  faicon: fa              # 公共图标类型 fa fal fa-solid fa-duotone
  # hr: 分割线, music: 音乐控制器
  layout: [home, hr, help, examples, contributors, hr, source_docs, source_theme, hr, print, darkmode, reading, music]
  ### 可选功能项 ###
  print:                  # 只有文章页才允许自定义打印
    name: 打印页面
    icon: fa fa-print
  darkmode:        # 需开启 plugins.darkmodejs
    name: 暗黑模式
    icon: fa fa-moon
  reading:
    name: 阅读模式
    icon: fa fa-book-open
  customPicUrl:    # 右键的图片复制：只有 Chrome 支持，且只支持 PNG 格式的图片。
    enable: false  # 如果使用了对象存储且开启了自适应 Webp，那么可以提供额外的链接用以替换图片的访问地址
    old: #https://static.inkss.cn/img/article/
    new: #https://cdn.jsdelivr.net/gh/inkss/inkss-cdn@master/img/article/
  music:           # 当设定全局音乐播放器时，是否一直显示音乐控制菜单。false：仅当音乐播放时启用
    alwaysShow: true
  ### 自定义菜单 ###
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

## 设置网站导航栏

### 导航栏配置

导航栏分为 logo、menu、search 三个区域设置，其中 logo 区域如果设置了图片，则不能显示图标和标题， menu 区域的设置可以写在一个单独的文件中。
```yaml blog/_config.volantis.yml
# 注意事项：建议规范全站路径 URL 最后带一个 "/" 例如 "about/"
navbar:
  visiable: auto # always, auto
  logo: # choose [img] or [icon + title]
    img: volantis-static/media/org.volantis/blog/Logo-NavBar@3x.png # https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png
    icon:
    title:
  menu:
    - name: 博客
      icon: fa-solid fa-rss
      url: /
    - name: 分类
      icon: fa-solid fa-folder-open
      url: categories/
    - name: 标签
      icon: fa-solid fa-tags
      url: tags/
    - name: 归档
      icon: fa-solid fa-archive
      url: archives/
    - name: 友链
      icon: fa-solid fa-link
      url: friends/
    - name: 关于
      icon: fa-solid fa-info-circle
      url: about/
  search: Search...   # Search bar placeholder
```

### 菜单嵌套

导航栏菜单支持嵌套，嵌套的属性名为 `rows` ，写法示例：
```yaml
...
- name: 更多
  icon: fa-solid fa-ellipsis-v
  rows:
    - name: 主题源码
      url: https://github.com/volantis-x/hexo-theme-volantis/
    - name: 更新日志
      url: https://github.com/volantis-x/hexo-theme-volantis/releases/
    - name: hr
    - name: 有疑问？
      rows:
        - name: 看 FAQ
          url: faqs/
        - name: 看 本站源码
          url: https://github.com/volantis-x/volantis-docs/
        - name: 提 Issue
          url: https://github.com/volantis-x/hexo-theme-volantis/issues/
    - name: hr
    - name: 公告和测试博文
      url: archives/
    - name: 示例博客
      url: examples/
    - name: 特别感谢
      url: contributors/
```

### 分割线

在子菜单中，新增一个只有 `name: hr` 的“菜单”就会被渲染成一个分割线。
```yaml
- name: hr
```

### 小标题

在子菜单中，新增一个只有 `name: 小标题内容`（也可以有 `icon: 小标题的图标`）的“菜单”就会被渲染成一个小标题。
```yaml
...
- name: 近期
  icon: fa-solid fa-clock
  url: /
  rows:
    - name: 热门文章
      icon: fa-solid fa-fire
    - name: ProHUD 开源库的设计思路
      url: blog/2019-08-27-prohud/
    - name: ValueX：实用的安全对象类型转换库
      url: blog/2019-08-29-valuex/
    - name: 心率管家 App 的设计与开发
      url: blog/2019-07-23-heartmate/
```

### 播放器

在子菜单中，新增一个 `icon: fa-solid fa-compact-disc` 的“菜单”就会被渲染成一个 APlayer 播放器。
```yaml
- name: 背景音乐
  icon: fa-solid fa-compact-disc
```


## 设置网站页脚

您通过 `layout` 可以自由布局网站页脚内容 `aplayer`, `social`, `license`, `info`, `copyright`。
```yaml blog/_config.volantis.yml
site_footer:
  # layout of footer: [aplayer, social, license, info, copyright]
  layout: [aplayer, social, license, info, copyright]
  social:
    - icon: fas fa-rss
      url: atom.xml
    - icon: fas fa-envelope
      url: mailto:me@xaoxuu.com
    - icon: fab fa-github
      url: https://github.com/xaoxuu
    - icon: fas fa-headphones-alt
      url: https://music.163.com/#/user/home?id=63035382
  copyright: '[Copyright © 2017-2021 XXX](/)'
  # You can add your own property here. (Support markdown, for example: br: '<br>')
  br: '<br>'
```
其中，`aplayer` 需要在插件部分设置中启用。您可以新增文字属性，用于展示其它文字信息，例如：
```yaml blog/_config.volantis.yml
site_footer:
  layout: [..., br, hello, ...]
  ...
  # You can add your own property here. (Support markdown, for example: br: '<br>')
  br: '<br>'
  hello: '[Hello World](/)'
```


## 网站与文章封面

### 封面高度

```yaml blog/_config.volantis.yml
cover:
  height_scheme: full # full, half
  ...
```

目前主题提供两种首页封面高度方案，其它页面均为半屏幕高度。

### 封面布局方案

```yaml blog/_config.volantis.yml
cover:
  ...
  scheme: dock # search (搜索), dock (坞), featured (精选), focus (焦点)
  ...
```

{% table %}
| 布局方案 | 适合场景 |
| :-- | :-- |
| search | 注重搜索 |
| dock | 入口选项比较多 |
| featured | 选项在4个左右 |
| focus | 选项在4个左右 |
{% endtable %}


### 默认显示设置

```yaml blog/_config.volantis.yml
cover:
  ...
  display:
    home: true
    archive: false
    others: false # can be written in front-matter 'cover: true'
```

由于主页、归档是 hexo 自动生成的，您需要在主题配置文件中设置是否显示封面，而其它页面则可以在 `front-matter` 中通过设置 `cover: true/false` 来决定显示封面或者不显示封面。


## 文章布局配置

```yaml
# 文章布局
article:
  # 文章列表页面的文章卡片布局方案
  preview:
    scheme: landscape # landscape
    # pin icon for post
    pin_icon: https://cdn.jsdelivr.net/gh/twitter/twemoji@13.0/assets/svg/1f4cc.svg
    # auto generate title if not exist
    auto_title: true # false, true
    # auto generate excerpt if not exist
    auto_excerpt: true # false, true
    # show split line or not
    line_style: solid # hidden, solid, dashed, dotted
    # show readmore button
    readmore: auto # auto, always
  # 文章详情页面的文章卡片本体布局方案
  body:
    # 文章顶部信息
    # 从 meta_library 中取
    top_meta: [author, category, date, counter]
    # ----------------
    # 文章页脚组件
    footer_widget:
      # ----------------
      # 参考资料、相关资料等 (for layout: post/docs)
      references:
        title: 参考资料
        icon: fas fa-quote-left
        # 在 front-matter 中:
        #   references:
        #     - title: 某篇文章
        #       url: https://
        # 即可显示此组件。
      # ----------------
      # 相关文章，需要安装插件 (for layout: post)
      # npm i hexo-related-popular-posts
      related_posts:
        enable: false
        title: 相关文章
        icon: fas fa-bookmark
        max_count: 5
        # 设为空则不使用文章头图
        placeholder_img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/046.jpg
      # ----------------
      # 版权声明组件 (for layout: post/docs)
      copyright:
        enable: true
        permalink: '本文永久链接是：'
        content:
          - '博客内容遵循 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 协议'
          - permalink
      # ----------------
      # 打赏组件 (for layout: post/docs)
      donate:
        enable: false
        images:
          - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
          - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
    # 文章底部信息
    # 从 meta_library 中取
    bottom_meta: [updated, tags, share]
    # meta library
    meta_library:
      # 默认文章作者（可在 front-matter 中覆盖）
      author:
        avatar:
        name: 请设置文章作者
        url: /
      # 文章创建日期
      date:
        icon: fas fa-calendar-alt
        title: '发布于：'
        format: 'll' # 日期格式 http://momentjs.com/docs/
      # 文章更新日期
      updated:
        icon: fas fa-edit
        title: '更新于：'
        format: 'll' # 日期格式 http://momentjs.com/docs/
      # 文章分类
      category:
        icon: fas fa-folder-open
      # 文章浏览计数
      counter:
        icon: fas fa-eye
        unit: '次浏览'
      # 文章字数和阅读时长
      wordcount:
        icon_wordcount: fas fa-keyboard
        icon_duration: fas fa-hourglass-half
      # 文章标签
      tags:
        icon: fas fa-hashtag
      # 分享
      share:
        - id: qq
          img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/qq.png
        - id: qzone
          img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/qzone.png
        - id: weibo
          img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/weibo.png
        - id: # qrcode # 当id为qrcode时需要安装插件  npm i hexo-helper-qrcode
          img: # https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/wechat.png
        - id: # telegram
          img: # https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/telegram.png

```
其中 `top_meta` 和 `bottom_meta` 部分的取值自 `meta_library` 库。


## 侧边栏配置

侧边栏小组件与 meta 库不同的是：除了现有的 widget ，您可以很轻易地创建自己的 widget ，然后放在需要的地方。此外，您还可以将 widget 写在单独的文件中。

{% folding 查看所有相关配置 %}

```yaml blog/_config.volantis.yml
sidebar:
  # 主页、分类、归档等独立页面
  for_page: [blogger, category, tagcloud, qrcode]
  # layout: docs/post 这类文章页面
  for_post: [toc]
  # 侧边栏组件库
  widget_library:
    # ---------------------------------------
    # blogger info widget
    blogger:
      class: blogger
      display: [desktop, mobile] # [desktop, mobile]
      avatar: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png
      shape: rectangle # circle, rectangle
      url: /about/
      title:
      subtitle:
      jinrishici: true # Poetry Today. You can set a string, and it will be displayed when loading fails.
      social: true
    # ---------------------------------------
    # toc widget (valid only in articles)
    toc:
      class: toc
      display: [desktop, mobile] # [desktop, mobile]
      header:
        icon: fas fa-list
        title: 本文目录
      list_number: false
      min_depth: 2
      max_depth: 5
    # ---------------------------------------
    # category widget
    category:
      class: category
      display: [desktop] # [desktop, mobile]
      header:
        icon: fas fa-folder-open
        title: 文章分类
        url: /blog/categories/
    # ---------------------------------------
    # tagcloud widget
    tagcloud:
      class: tagcloud
      display: [desktop, mobile] # [desktop, mobile]
      header:
        icon: fas fa-tags
        title: 热门标签
        url: /blog/tags/
      min_font: 14
      max_font: 24
      color: true
      start_color: '#999'
      end_color: '#555'

    # ---------------------------------------
    # qrcode widget
    donate:
      class: qrcode
      display: [desktop, mobile] # [desktop, mobile]
      height: 64px  # Automatic height if not set
      images:
        - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
        - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
    # ---------------------------------------
    # webinfo widget
    webinfo:
      class: webinfo
      display: [desktop]
      header:
        icon: fas fa-award
        title: 站点信息
      type:
        article:
          enable: true
          text: '文章数目：'
          unit: '篇'
        runtime:
          enable: true
          data: '2020/01/01'    # 填写建站日期
          text: '已运行时间：'
          unit: '天'
        wordcount:
          enable: true
          text: '本站总字数：'   # 需要启用 wordcount
          unit: '字'
        siteuv:
          enable: true
          text: '本站访客数：'   # 需要启用 busuanzi
          unit: '人'
        sitepv:
          enable: true
          text: '本站总访问量：' # 需要启用 busuanzi
          unit: '次'
        lastupd:
          enable: true
          friendlyShow: true    # 更友好的时间显示
          text: '最后活动时间：'
          unit: '日'
```
{% endfolding %}

每一个小部件都有 `class` 和 `display`，前者代表这个小部件是什么，后者代表这个小部件在什么桌面和移动平台中是否显示，如果在移动平台显示，由于屏幕宽度有限，侧边栏的小部件则会被移动到正文区域下方，因此部分侧边栏小部件便失去意义，建议设置为仅桌面端显示。

```yaml
小部件名:
  class: 小部件类别
  display: [小部件在桌面端是否显示, 小部件在移动设备是否显示]
  pjaxReload: true # 是否 pjax 重载 默认 true; 设置为 false 时 确保所有页面都含有该小部件
```

### 博主信息部件
```yaml blog/_config.volantis.yml
blogger:
  class: blogger
  display: [desktop] # [desktop, mobile]
  avatar: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png
  title:
  subtitle:
  jinrishici: true # Poetry Today. You can set a string, and it will be displayed when loading fails.
  social: true
```
其中，今日诗词 `jinrishici` 如果设置为一个字符串，这个字符串会变成占位文字，加载失败时显示。如果不需要，就请设置为 `jinrishici: false`。`social` 的具体内容请在网站页脚部分设置。

### 文章目录部件
```yaml blog/_config.volantis.yml
toc:
  class: toc
  display: [desktop, mobile] # [desktop, mobile]
  header:
    icon: fas fa-list
    title: 本文目录
  list_number: false
  min_depth: 2
  max_depth: 5
```
这个部件只能放置在侧边栏，并且在文章中有效。在移动设备中预览时，手指向上滑动时，导航栏右边会出现 TOC 按钮，点击即可展开 TOC 部件。如果您需要显示章节序号，请设置 `list_number`。 `min_depth` 和 `max_depth` 代表 TOC 支持的标题层级，最大范围是2～6。

### 文章分类部件
```yaml blog/_config.volantis.yml
category:
  class: category
  display: [desktop] # [desktop, mobile]
  header:
    icon: fas fa-folder-open
    title: 文章分类
    url: /blog/categories/
```
这个部件可以直接显示所有文章分类，如果您希望有一个独立的页面来展示，需要自己创建一个文件，具体操作在「页面」部分文档中。

### 标签云部件
```yaml blog/_config.volantis.yml
tagcloud:
  class: tagcloud
  display: [desktop] # [desktop, mobile]
  header:
    icon: fas fa-tags
    title: 热门标签
    url: /blog/tags/
  min_font: 14
  max_font: 24
  color: true
  start_color: '#999'
  end_color: '#555'
```
这个部件可以直接显示所有文章的标签，如果您希望有一个独立的页面来展示，需要自己创建一个文件，具体操作在「页面」部分文档中。


### 二维码部件
```yaml blog/_config.volantis.yml
donate:
  class: qrcode
  display: [desktop, mobile] # [desktop, mobile]
  height: 64px  # Automatic height if not set
  images:
    - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
    - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
```
您可以放置在文章页脚用于展示打赏图片，也可以放置在侧边栏。

### 通用文本部件
```yaml blog/_config.volantis.yml
repos:
  class: text
  display: [desktop] # [desktop, mobile]
  header:
    icon: fab fa-github
    title: 点个赞吧
    url: https://github.com/xaoxuu/
  content:
    - '您的赞对我来说很重要，如果您喜欢本主题，希望能够给下面的项目点个赞来支持一下。'
    - '[<img src="https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/prohud/logo.png" height="50px">](https://github.com/xaoxuu/ProHUD)'
    - '[<img src="https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/valuex/logo.png" height="50px">](https://github.com/xaoxuu/ValueX)'
    - '[<img src="https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/proj/inspire/logo.png" height="50px">](https://github.com/xaoxuu/Inspire)'
```
您可以创建用于展示任何文本内容的文本部件。

### 通用列表部件
```yaml blog/_config.volantis.yml
wiki-hexo-theme:
  class: list
  display: [desktop, mobile] # [desktop, mobile]
  header:
    icon: fas fa-chevron-left
    title: Hexo Themes
    url: /wiki/
  rows:
    - name: Volantis for Hexo
      url: /wiki/volantis/
    - name: Resume for Hexo
      url: /wiki/resume/
```
您可以创建用于展示任何链接列表的列表部件。列表的 `rows` 中的每一项支持的属性有： `name`、`url`、`icon`、`img`、`avatar`，其中 `img` 是方形图片的链接，`avatar` 是圆形图片的链接。

#### 组索引

这个部件的布局继承自 list 部件，用于展示文章所属的分组的文章列表。请将您的 Volantis 升级至 <u>2.5</u> 版本以上使用。

```yaml blog/_config.volantis.yml
group-1:
  class: group
  display: [desktop, mobile] # [desktop, mobile]
  header:
    icon: fab fa-github
    title: Git
    url: /wiki/git/
```

在文章的 front-matter 中设置：
```yaml front-matter
group: group-1
order: 16
sidebar: [group-1, toc]
```

「group-1」卡片将会以列表的形式显示所有设置了 `group: group-1` 的文章，顺序按照 `order` 从小到大排列。

### 通用网格部件
```yaml blog/_config.volantis.yml
feedback:
  class: grid
  display: [desktop, mobile]
  header:
    icon: fas fa-headset
    title: 联系开发者
    url: https://github.com/volantis-x/hexo-theme-volantis
  fixed: true # 固定宽度
  rows:
    - name: 反馈BUG
      icon: fas fa-bug
      url: https://github.com/volantis-x/hexo-theme-volantis/issues/
    - name: 疑问求助
      icon: fas fa-question-circle
      url: https://github.com/volantis-x/hexo-theme-volantis/issues/
    - name: 提个建议
      icon: fas fa-lightbulb
      url: https://github.com/volantis-x/hexo-theme-volantis/issues/
```
您可以创建用于展示任何链接列表的网格部件。网格默认根据文字长度自动确定每一个格子的宽度，如果文字长短不一，建议通过设置 `fixed: true` 来固定宽度，此时文字过长的格子中的文字会换行显示。

### 通用页面部件
```yaml blog/_config.volantis.yml
test:
  class: page
  display: [desktop, mobile]
  pid: haha
  content: excerpt # excerpt, more, content
```
您可以把整个页面的md内容作为一个小部件渲染显示出来。只需要设置小部件里的 `pid` 属性和文章的 `front-matter` 中设置一样的 `pid` 即可。 `content` 代表这个部件显示的内容，可选 `excerpt`，`more`，`content` 分别对应文章的摘要、摘要后面的内容、全文。

### 音乐部件
```yaml blog/_config.volantis.yml
music:
  class: music
  display: [desktop, mobile] # [desktop, mobile]
  pjaxReload: false
```

## 选择评论系统

目前共支持 13 款评论系统：

artalk, giscus, beaudar, utterances, twikoo, waline, disqus, disqusjs, gitalk, vssue, livere, isso, hashover

```yaml blog/_config.volantis.yml
comments:
  title: <i class='fas fa-comments'></i> 评论
  subtitle:
  service: giscus
```

------

{% folding cyan :: GitHub Discussions 系列 %}

{% tabs comments-github-discussions , 1 %}

<!-- tab giscus -->

<i class='fas fa-comment-dots fa-fw'></i> A comments system powered by GitHub Discussions.
<i class='fas fa-globe fa-fw'></i> [https://giscus.app/](https://giscus.app/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: giscus
  ...
  # giscus
  # https://giscus.app
  # https://github.com/laymonage/giscus
  giscus:
    # 以下配置按照 yml 格式增删填写即可
    # repo: xxx/xxx
    # repo-id: xxx
    # category: xxx
    # category-id: xxx
    # mapping: "pathname"
    # reactions-enabled: "1"
    # emit-metadata: "0"
    # lang: "zh-CN"
    # 以上配置按照 yml 格式增删填写即可
    theme:
      light: "light" # https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/css/giscus/light.css
      dark: "dark" # https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/css/giscus/dark.css
```

<!-- endtab -->

{% endtabs %}

{% endfolding %}

{% folding green:: GitHub Issues 系列 %}

{% tabs comments-github-issues , 1 %}

<!-- tab beaudar -->

<i class='fas fa-comment-dots fa-fw'></i> Beaudar 名称源于粤语“表达”的发音，是 Utterances 的中文版本。
<i class='fas fa-globe fa-fw'></i> [https://beaudar.lipk.org/](https://beaudar.lipk.org/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: beaudar
  ...
  # beaudar
  # https://beaudar.lipk.org/
  beaudar:
    repo: xxx/xxx
    issue-term: pathname
    issue-number:
    branch: main
    position: top
    order: desc
    theme:
      light: github-light
      dark: github-dark
    label: ✨💬✨
```

<!-- endtab -->

<!-- tab utterances -->

<i class='fas fa-comment-dots fa-fw'></i> A lightweight comments widget built on GitHub issues.
<i class='fas fa-globe fa-fw'></i> [https://utteranc.es/](https://utteranc.es/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: utterances
  ...
  # utterances
  # https://utteranc.es/
  utterances:
    repo: xxx/xxx
    issue-term: pathname
    issue-number:
    theme:
      light: github-light
      dark: github-dark
    label: ✨💬✨
```

<!-- endtab -->

<!-- tab Vssue -->

<i class='fas fa-comment-dots fa-fw'></i> Vue 驱动的、基于 Issue 的评论插件
<i class='fas fa-globe fa-fw'></i> [https://vssue.js.org/zh/](https://vssue.js.org/zh/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: vssue
  ...
  vssue:
    owner:
    repo:
    clientId:
    clientSecret:
```

<!-- endtab -->

<!-- tab Gitalk -->

<i class='fas fa-comment-dots fa-fw'></i> A modern comment component based on Github Issue and Preact.
<i class='fas fa-globe fa-fw'></i> [https://gitalk.github.io/](https://gitalk.github.io/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: gitalk
  ...
  gitalk:
    clientID:
    clientSecret:
    repo:
    owner:
    admin: # []
```

clientID 和 clientSecret 的获取方法可自行搜索教程，这里仅简单描述一下步骤：
1. 点击 GitHub -> Settings `https://github.com/settings/profile`
2. 点击 Developer settings `https://github.com/settings/developers`
3. 点击 New OAuth App `https://github.com/settings/applications/new`
4. 填写信息：
**Application name** 随便填，我的是：`xaoxuu.com`
**Homepage URL** 和 **Authorization callback URL** 都写你的网址，我的是：`https://xaoxuu.com`

**可以通过设置 gitalk.id 实现多个页面共用一个评论框。**

```yaml front-matter
---
gitalk:
  id: /wiki/volantis/
---
```

<!-- endtab -->

{% endtabs %}

{% endfolding %}



{% folding yellow:: Disqus 系列 %}

{% tabs comments-disqus , 1 %}

<!-- tab Disqus -->

<i class='fas fa-comment-dots fa-fw'></i> Disqus - The #1 way to build an audience on your website.
<i class='fas fa-globe fa-fw'></i> [https://disqus.com/](https://disqus.com/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: disqus
  ...
  disqus:
    shortname:
```

**可以通过设置 disqus.path 实现多个页面共用一个评论框。**

```yaml front-matter
---
disqus:
  path: /wiki/volantis/
---
```

<!-- endtab -->

<!-- tab DisqusJS -->

<i class='fas fa-comment-dots fa-fw'></i> Render Disqus comments in Mainland China using Disqus API
<i class='fas fa-globe fa-fw'></i> [https://github.com/SukkaW/DisqusJS](https://github.com/SukkaW/DisqusJS)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: disqusjs
  ...
  # DisqusJS
  # https://github.com/SukkaW/DisqusJS
  disqusjs:
    path: # 全局评论地址
    # 配置项按照yml格式继续填写即可 除了 [siteName url identifier] 选项
    #shortname:
    #api:
    #apikey:
    #admin:
    #nesting:
```

<!-- endtab -->


<!-- tab Isso -->

<i class='fas fa-comment-dots fa-fw'></i> A commenting server similar to Disqus.
<i class='fas fa-globe fa-fw'></i> [https://posativ.org/isso/](https://posativ.org/isso/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: isso
  ...
  isso:
    url: https://example.com/(path/)
    src: https://example.com/(path/)js/embed.min.js
```

<!-- endtab -->


{% endtabs %}

{% endfolding %}



{% folding blue:: Valine 衍生系列 %}

{% note error :: Valine 在 5.0 版本被移除,具体原因可参考[hexo-theme-next#188#issuecomment-766578906](https://github.com/next-theme/hexo-theme-next/issues/188#issuecomment-766578906) %}

以下是在解决 valine 遗留问题同一时期产生的评论系统故归为一类, 然在其社区issue中也报告了类似的攻击事件(eg: [twikoo#157](https://github.com/imaegoo/twikoo/issues/157) [waline#424](https://github.com/walinejs/waline/issues/424) [waline#430](https://github.com/walinejs/waline/issues/430)),故请谨慎选择.

{% tabs comments-valine , 1 %}

<!-- tab discuss -->

<i class='fas fa-comment-dots fa-fw'></i> 一款简单，安全，免费的评论系统 | A simple, safe, free comment system
<i class='fas fa-globe fa-fw'></i> [https://discuss.js.org](https://discuss.js.org)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: discuss
  ...
  # Discuss
  # https://discuss.js.org
  discuss:
    js: https://cdn.jsdelivr.net/npm/discuss/dist/Discuss.js # 建议锁定版本
    serverURLs: # Discuss server address url
    # https://discuss.js.org/Quick-Start.html#path
```

其中，`placeholder` 支持在 front-matter 中设置。

```yaml front-matter
---
discuss:
  placeholder: 你觉得xxx怎么样呢？
---
```

也可以通过设置 `discuss.path` 实现多个页面共用一个评论框。

```yaml front-matter
---
discuss:
  path: /
---
```

<!-- endtab -->

<!-- tab twikoo -->

<i class='fas fa-comment-dots fa-fw'></i> 一个简洁、安全、免费的静态网站评论系统 | A simple, safe, free comment system.
<i class='fas fa-globe fa-fw'></i> [https://twikoo.js.org/](https://twikoo.js.org/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: twikoo
  ...
  twikoo:
    js: https://cdn.jsdelivr.net/npm/twikoo@latest # 建议锁定版本
    path: # 全局评论地址
    # 其他配置项按照yml格式继续填写即可 除了 [el path] 选项
    envId: xxxxxxxxxxxxxxx # 腾讯云环境id
```

其中，`placeholder` 支持在 front-matter 中设置。

```yaml front-matter
---
twikoo:
  placeholder: 你觉得xxx怎么样呢？
---
```

也可以通过设置 `twikoo.path` 实现多个页面共用一个评论框。

```yaml front-matter
---
twikoo:
  path: /
---
```

<!-- endtab -->

<!-- tab Waline -->

<i class='fas fa-comment-dots fa-fw'></i> 一个简洁、安全、免费的静态网站评论系统 | A simple, safe, free comment system.
<i class='fas fa-globe fa-fw'></i> [https://waline.js.org/](https://waline.js.org/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: waline
  ...
  # Waline
  # https://waline.js.org/
  waline:
    js: https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js
    path: # 全局评论地址 目前设置全局评论地址后visitor失效,这是waline的问题
    placeholder: 快来评论吧~  # 评论占位提示
    imageHosting: https://7bu.top/api/upload # 图床api（默认使用去不图床）
    # 其他配置项按照yml格式继续填写即可 除了 [el path placeholder uploadImage] 选项
    serverURL: xxxxxxxxxxxxxxx # Waline 的服务端地址（必填） 测试用地址: https://waline-ruddy.vercel.app
    ... 可选配置项详见源码
```


其中，`placeholder` 支持在 front-matter 中设置。

```yaml front-matter
---
waline:
  placeholder: 你觉得xxx怎么样呢？
---
```

也可以通过设置 `waline.path` 实现多个页面共用一个评论框。

```yaml front-matter
---
waline:
  path: /
---
```

<!-- endtab -->

{% endtabs %}

{% endfolding %}


{% folding red:: Others 其他系列 %}

{% tabs comments-others , 1 %}

<!-- tab Artalk -->

<i class='fas fa-comment-dots fa-fw'></i> 一款简洁的自托管评论系统 | A Selfhosted Comment System.
<i class='fas fa-globe fa-fw'></i> [https://artalk.js.org/](https://artalk.js.org/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: artalk
  ...
  artalk:
    js: https://cdn.jsdelivr.net/npm/artalk@2.1.3/dist/Artalk.js
    css: https://cdn.jsdelivr.net/npm/artalk@2.1.3/dist/Artalk.css
    server: http://127.0.0.1:8080/api    # 修改为自建的后端服务地址
```

其中，`placeholder` 支持在 front-matter 中设置。

```yaml front-matter
---
artalk:
  placeholder: 你觉得xxx怎么样呢？
---
```

也可以通过设置 `artalk.path` 实现多个页面共用一个评论框。

```yaml front-matter
---
artalk:
  path: /
---
```

<!-- endtab -->


<!-- tab Livere -->

<i class='fas fa-comment-dots fa-fw'></i> Communication makes better world.
<i class='fas fa-globe fa-fw'></i> [https://www.livere.com/](https://www.livere.com/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: livere
  ...
  livere:
    uid: #你的livere的uid
```

在这里查看你的 uid：`https://livere.com/insight/myCode`，在【代码管理 -> 一般网站】中找到如下这段代码，其中 `data-uid` 中的内容就是你的 `livere_uid`。

```html
<!-- 来必力City版安装代码 -->
<div id="lv-container" data-id="city" data-uid="你的livere的uid">
...
```

<!-- endtab -->

<!-- tab Hashover -->


<i class='fas fa-comment-dots fa-fw'></i> A free and open source PHP comment system designed to allow completely anonymous comments and easy theming.
<i class='fas fa-globe fa-fw'></i> [https://www.barkdull.org/software/hashover](https://www.barkdull.org/software/hashover)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: hashover
  ...
  hashover:
    src: https://example.com/(path/)comments.php
```

<!-- endtab -->

<!-- tab More... -->


```plain blog/themes/volantis/layout/_third-party/comments/评论系统名称/layout.ejs
这里写布局代码
```

```plain blog/themes/volantis/layout/_third-party/comments/评论系统名称/script.ejs
这里要写加载 js 的代码
```

{% btn large center, 收录更多评论系统, https://github.com/volantis-x/ , fas fa-plus %}

<!-- endtab -->

{% endtabs %}

{% endfolding %}

------

**可以通过在 front-matter 设置 config 实现在特定页面修改评论系统的相关配置。**

**支持的有(按字母顺序): giscus, gitalk, twikoo, waline**

```yaml front-matter
---
gitalk:
  config:
    id: /233/
---
```

## 站内搜索

```yaml blog/_config.volantis.yml
search:
  enable: true
  service: hexo  # hexo
  js: https://cdn.jsdelivr.net/xxxxxxxx/js/search/hexo.js
```
默认配置为 Hexo 搜索，但是需要安装插件才能使用：
```sh
npm i -S hexo-generator-json-content
```

{% note error :: 原 google,  algolia,  azure,  baidu 站内搜索 系祖传代码, 且文档丢失, 不便后续维护 在 5.0 版本移除 %}

## 插件库

### 概述
Volantis 为丰富的插件提供了兼容性优化。大部分插件您只需开启和关闭，无需进行设置。
### 幻灯片背景(视差滚动效果)

{% note error :: jquery.backstretch 在 5.0 版本 移除, 被 parallax 替代 %}

```yaml blog/_config.volantis.yml
plugins:
  ...
  parallax:
    enable: true
    position: cover       # cover: sticky on the cover.   fixed: Fixed as background for the site.
    shuffle: true         # shuffle playlist
    duration: 10000       # Duration (ms)
    fade: 1500            # fade duration (ms) (Not more than 1500)
    images:               # For personal use only. At your own risk if used for commercial purposes !!!
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg
      ...
```
幻灯片背景图片显示的位置可以选择粘贴在封面上，跟随封面一起滑动，也可以选择固定作为网页背景图片。

### highlight.js
```yaml blog/_config.volantis.yml
plugins:
  ...
  # 代码高亮
  code_highlight: highlightjs # highlightjs or prismjs
  # highlight.js
  highlightjs:
    copy_code: true
    # 如果开启 js, hexo.config.highlight.enable 需要设置为 false
    js: #https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.1.0/build/highlight.min.js # Please set hexo.config.highlight.enable = false !!!
    css: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.1.0/build/styles/default.min.css
    # more: https://www.jsdelivr.com/package/npm/highlight.js?path=styles
```
如果需要使用 highlight.js 进行语法高亮，请将站点配置文件中的 `highlight.enable` 设置为 `false` 否则不会加载插件。您可以在 <u>94</u> 种 [语法高亮主题](https://www.jsdelivr.com/package/npm/highlight.js?path=styles) 中挑选喜爱的主题，然后替换上面的 css 链接。

{% note warning, 如果您使用 highlight.js 请确保没有使用 hexo 官方的 codeblock 标签，否则会报错。 %}
{% note bug red, 经测试，使用 highlight.js 的情况下，部分容器内的代码可能仍然会被渲染甚至报错。 %}

### APlayer 音乐播放器
```yaml blog/_config.volantis.yml
plugins:
  ...
  # APlayer is only available in mainland China.
  # APlayer config: https://github.com/metowolf/MetingJS
  aplayer:
    enable: true
    js:
      aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js
      meting: https://cdn.jsdelivr.net/npm/meting@2.0/dist/Meting.min.js
    # Required
    server: netease   # netease, tencent, kugou, xiami, baidu
    type: playlist    # song, playlist, album, search, artist
    id: 3175833810    # song id / playlist id / album id / search keyword
    # Optional
    fixed: false      # enable fixed mode
    theme: '#1BCDFC'  # main color
    autoplay: false   # audio autoplay
    order: list       # player play order, values: 'list', 'random'
    loop: all         # player loop play, values: 'all', 'one', 'none'
    volume: 0.7       # default volume, notice that player will remember user setting, default volume will not work after user set volume themselves
    list_max_height: 320px # list max height
    list_folded: true
```

{% note warning, APlayer播放器只可以在中国大陆地区使用。相关文档： [APlayer](https://aplayer.js.org/) | [MetingJS](https://github.com/metowolf/MetingJS) %}

### 暗黑模式

```yaml blog/_config.volantis.yml
plugins:
  ...
  # 暗黑模式 darkmode
  # 开关按钮：在 navbar.menu 中添加：
  # - name: 暗黑模式 # 可自定义
  #   icon: fas fa-moon # 可自定义
  #   toggle: darkmode
  darkmode:
    enable: true
```

### 结束支持

```yaml blog/_config.volantis.yml
plugins:
  ...
  # 旧版 Internet Explorer 淘汰行动
  # https://www.microsoft.com/zh-cn/WindowsForBusiness/End-of-IE-support
  # 本主题不支持Internet Explorer的任何版本!!!
  killOldVersionsOfIE:
    enable: true

  # 禁用JavaScript提示
  # 本页面需要浏览器支持（启用）JavaScript
  # 主题中的某些插件必须启用JavaScript才能正常工作，例如开启scrollreveal如果禁用JavaScript会导致卡片消失
  killNoScript:
    enable: true
```

### Artitalk
```yaml blog/_config.volantis.yml
plugins:
  ...
  # Artitalk https://artitalk.js.org
  # 配置过程请参考：https://artitalk.js.org/doc.html
  # 使用过旧版本的请修改Leancloud shuoshuo class部分列名：https://artitalk.js.org/release.html
  # 除appID和appKEY外均为选填项
  artitalk:
    # Set `plugins: ["artitalk"]` to enable in front-matter
    # 不支持 Pjax
    # 配置项按照yml格式继续填写即可
    appId: ogP8qj3veMh0LFpFWMPOyF0X-MdYXbMMI # your appID
    appKey: nHXLd3N3Jgh460t2iRQKWAtr # your appKEY
    # serverURL:  #leancloud绑定的api访问域名，使用国际版的话不需要填写
    # lang: # 语言设置，zh为汉语，en为英语，es为西班牙语。默认为汉语
    # pageSize: #每页说说的显示数量
    # shuoPla: #在编辑说说的输入框中的占位符
    # avatarPla: #自定义头像url的输入框的占位符
    # motion: #加载动画的开关，1为开，0为关，默认为开
    # bgImg: #说说输入框背景图片url
    # color1: #说说背景颜色1&按钮颜色1
    # color2: #说说背景颜色2&按钮颜色2
    # color3: #说说字体颜色
    # cssUrl: #自定义css接口
```

### BBtalk
```yaml blog/_config.volantis.yml
plugins:
  ...
  # BBtalk https://bb.js.org
  bbtalk:
    # Set `plugins: ["bbtalk"]` to enable in front-matter
    # 支持 Pjax
    js: https://cdn.jsdelivr.net/npm/bbtalk@0.1.5/dist/bbtalk.min.js # BBtalk.js
    appId: 0KzOX4vC7Jsk6vzUGNeEiUaI-gzGzoHsz # your appID
    appKey: HwCiWuxfpvKiLm4teCUgTIba # your appKEY
    serverURLs: https://bbapi.heson10.com # Request Api 域名
```

### Tidio
```yaml blog/_config.volantis.yml
plugins:
  ...
  # 聊天功能
  chat_service: tidio # tidio or gitter

  # Tidio
  # https://www.tidio.com/
  tidio:
    id: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 友链朋友圈
```yaml blog/_config.volantis.yml
plugins:
  ...
  # 友链朋友圈 hexo-circle-of-friends
  # https://github.com/Rock-Candy-Tea/hexo-circle-of-friends
  # https://zfe.space/post/friend-link-circle.html
  fcircle:
    # Set `plugins: ["fcircle"]` to enable in front-matter
    # 支持 Pjax
    api: '' # api 地址
    max_number: 20 # 页面展示文章数量
    add_number: 10 # 每次加载增加的篇数
    opentype: '_blank' # '_blank'打开新标签,'_self'本窗口打开
    nofollow: true # 禁止搜索引擎抓取
    # loadingCutom: # 自定义loading图 例如: <i class="fa fa-spinner fa-spin"></i> | <img src="你的图片地址" alt="加载中...">
```

### 消息提示
```yaml blog/_config.volantis.yml
plugins:
  ...
  # 消息提示 
  # izitoast@1.4.0
  message:
    enable: true
    css: volantis-static/libs/izitoast/dist/css/iziToast.min.css
    js: volantis-static/libs/izitoast/dist/js/iziToast.min.js
    icon:     # 默认图标，支持对图标添加颜色，可选值：see：/source/css/_style/_plugins/fontcolor.styl
      default: fa-solid fa-info-circle light-blue
      quection: fa-solid fa-question-circle light-blue
    time:     # 默认持续时间
      default: 5000
      quection: 20000
    position: 'topRight'                 # 弹出位置 可选值：topRight, bottomRight, bottomLeft, topLeft, topCenter, bottomCenter, center
    transitionIn: 'bounceInLeft'         # 弹窗打开动画 可选值：bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, flipInX
    transitionOut: 'fadeOutRight'        # 弹窗关闭动画 可选值：fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
    titleColor: 'var(--color-text)'      # 标题颜色
    messageColor: 'var(--color-text)'    # 消息颜色
    backgroundColor: 'var(--color-card)' # 默认背景色
    zindex: 2147483647                   # 层级
    copyright:                           # 是否在复制时弹出版权提示，影响范围：ctrl+c、代码块复制按钮、右键复制选项
      enable: true
      title: '知识共享许可协议'
      message: '请遵守 CC BY-NC-SA 4.0 协议。'
      icon: 'far fa-copyright light-blue'
    aplayer:                              # 是否开启音乐通知；播放、暂停、失败 时的图标
      enable: true
      play: fa-solid fa-play
      pause: fa-solid fa-pause
    rightmenu:                            
      enable: true                        # 是否开启右键模块的消息通知
      notice: true                        # 唤醒原右键菜单的通知 
```

### 轮播标签

使用方法参见：[swiper](/v5/tag-plugins/#swiper)

```yaml blog/_config.volantis.yml
swiper:
  enable: true
  css: https://unpkg.com/swiper@6/swiper-bundle.min.css
  js: https://unpkg.com/swiper@6/swiper-bundle.min.js
```
