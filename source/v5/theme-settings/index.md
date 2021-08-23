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
    img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png
    icon:
    title:
  menu:
    - name: 博客
      icon: fas fa-rss
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
    text: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/text.png
    pointer: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/pointer.png
    default: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/left_ptr.png
    not-allowed: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/circle.png
    zoom-out: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/zoom-out.png
    zoom-in: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/zoom-in.png
    grab: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/openhand.png
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
    note: # style for default note: {% note text %}
      icon: '\f054'
      color: ''
```

### 布局间距

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

### 自定义字体

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
  faicon: fa              # 公共图标类型 fa fal fas fad
  # hr: 分割线, music: 音乐控制器
  layout: [home, hr, help, examples, contributors, hr, source_docs, source_theme, hr, print, darkmode, music]
  ### 可选功能项 ###
  print:                  # 只有文章页才允许自定义打印
    name: 打印页面
    icon: fa fa-print
    defaultStyles: true   # 是否使用预制的打印样式
    # js:                 # 自定义 js ，可用于修饰打印样式~， 右键剔除了对 Jquery 的依赖，所以此处你只能使用原生 js
    #  - document.querySelector('article#comments').remove()  # 移除评论
  darkmode:        # 需开启 plugins.darkmodejs
    name: 暗黑模式
    icon: fa fa-moon
  customPicUrl:    # 右键的图片复制：只有 Chrome 支持，且只支持 PNG 格式的图片。
    enable: false  # 如果使用了对象存储且开启了自适应 Webp，那么可以提供额外的链接用以替换图片的访问地址
    old: #https://static.inkss.cn/img/article/
    new: #https://cdn.jsdelivr.net/gh/inkss/inkss-cdn@master/img/article/  
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
  logo: # choose [img] or [icon + title]
    img:
    icon:
    title:
  menu:
    # The following can be written in `blog/source/_data/menu.yml`
    - name: 博客
      icon: fas fa-rss
      url: /
    - name: 分类
      icon: fas fa-folder-open
      url: categories/
    - name: 标签
      icon: fas fa-tags
      url: tags/
    - name: 归档
      icon: fas fa-archive
      url: archives/
    - name: 友链
      icon: fas fa-link
      url: friends/
    - name: 关于
      icon: fas fa-info-circle
      url: about/
  search: 搜索   # Search bar placeholder
```

{% p subtitle, 使用数据文件 %}

建议新建一个文件，专门存放导航栏<u>菜单</u>配置，文件的路径为：
```
blog/source/_data/menu.yml
```
文件的内容为：
```yaml blog/source/_data/menu.yml
- name: 博客
  icon: fas fa-rss
  url: /
...
```

### 菜单嵌套

导航栏菜单支持嵌套，嵌套的属性名为 `rows` ，写法示例：
```yaml blog/source/_data/menu.yml
...
- name: 更多
  icon: fas fa-ellipsis-v
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
  icon: fas fa-clock
  url: /
  rows:
    - name: 热门文章
      icon: fas fa-fire
    - name: ProHUD 开源库的设计思路
      url: blog/2019-08-27-prohud/
    - name: ValueX：实用的安全对象类型转换库
      url: blog/2019-08-29-valuex/
    - name: 心率管家 App 的设计与开发
      url: blog/2019-07-23-heartmate/
```

### 播放器

在子菜单中，新增一个 `icon: fas fa-compact-disc` 的“菜单”就会被渲染成一个 APlayer 播放器。
```yaml
- name: 背景音乐
  icon: fas fa-compact-disc
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
      # 文章评论数量：只支持 valine
      valinecount:
        icon: fas fa-comment-dots
        desc: '' # 条评论
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


## 选择评论系统

目前支持的评论系统有： valine, twikoo, waline, minivaline, disqus, disqusjs, gitalk, vssue, livere, isso, hashover

```yaml blog/_config.volantis.yml
comments:
  title: <i class='fas fa-comments'></i> 评论
  subtitle:
  service: valine # valine, twikoo, waline, minivaline, disqus, disqusjs, gitalk, vssue, livere, isso, hashover
```

{% tabs comments-1, 1 %}

<!-- tab Valine -->

<i class='fas fa-comment-dots fa-fw'></i> 一款快速、简洁且高效的无后端评论系统
<i class='fas fa-globe fa-fw'></i> [https://valine.js.org](https://valine.js.org)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: valine
  ...
  valine:
    # js: https://cdn.jsdelivr.net/npm/valine@1.4/dist/Valine.min.js
    path: # 全局评论地址 目前设置全局评论地址后visitor失效,这是valine的问题
    placeholder: 快来评论吧~  # 评论占位提示
    # 其他配置项按照yml格式继续填写即可 除了 [el path placeholder emojiCDN emojiMaps] 选项
    appId: # your appId
    appKey: # your appKey
    ... 可选配置项详见源码
```

其中，`placeholder` 支持在 front-matter 中设置。

```yaml front-matter
---
valine:
  placeholder: 你觉得xxx怎么样呢？
---
```

也可以通过设置 `valine.path` 实现多个页面共用一个评论框。

```yaml front-matter
---
valine:
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

<!-- endtab -->

<!-- tab waline -->

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

<!-- endtab -->

<!-- tab MiniValine -->

<i class='fas fa-comment-dots fa-fw'></i> 一款快速、简洁且高效的无后端评论系统
<i class='fas fa-globe fa-fw'></i> [https://github.com/MiniValine/MiniValine/](https://github.com/MiniValine/MiniValine/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: minivaline
  ...
  # MiniValine
  # https://github.com/MiniValine/MiniValine
  minivaline:
    js: https://cdn.jsdelivr.net/npm/minivaline@latest
    path: # 全局评论地址
    placeholder: 快来评论吧~  # 全局评论占位提示
    # 更多选项 https://minivaline.js.org/docs/cn/#/Options 按照yml格式继续填写即可 （除了 [el path placeholder] 选项）
    # emoticonUrl 等列表选项 可参考 https://github.com/MiniValine/hexo-next-minivaline
    # 下面是一个例子：
    backend: waline
    serverURL: https://waline.vercel.app
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

<!-- tab ... -->


```plain blog/themes/volantis/layout/_third-party/comments/评论系统名称/layout.ejs
这里写布局代码
```

```plain blog/themes/volantis/layout/_third-party/comments/评论系统名称/script.ejs
这里要写加载 js 的代码
```

{% btn large center, 收录更多评论系统, https://github.com/volantis-x/ , fas fa-plus %}

<!-- endtab -->

{% endtabs %}


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

```yaml blog/_config.volantis.yml
plugins:
  ################ required plugins ################
  # jquery
  globalJquery: false # 全局引入 jquery
  jquery: https://cdn.jsdelivr.net/npm/jquery@3.5/dist/jquery.min.js
  # fontawesome Pro 版本：https://cdn.jsdelivr.net/gh/inkss/fontawesome@5.15.3/css/all.min.css
  fontawesome: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.14/css/all.min.css

  ################ optional plugins ################
  # issues api
  sitesjs:
    enable: true
  friendsjs:
    enable: true
  contributorsjs:
    enable: true

  ######## Plugins to improve loading speed:
  # 预加载
  preload:
    enable: true
    service: flying_pages # instant_page, flying_pages
    instant_page: https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@2/js/instant_page.js
    flying_pages: https://cdn.jsdelivr.net/gh/gijo-varghese/flying-pages@2.1.2/flying-pages.min.js

  # 图片懒加载
  # https://www.npmjs.com/package/vanilla-lazyload
  # tips: 
  # 这里是主题自带的图片懒加载, 实现方案位于 /scripts/filters/z-lazyload ; srcset 属性的的优先级比 src 属性要高, 注意 srcset 存放了懒加载占位图,  src 存放了原图
  # 在支持 srcset 的浏览器或者 RSS 阅读器(还会有人使用老旧的阅读器?)上会优先读取 srcset 加载的图片(懒加载占位图), 对于 RSS 中图片丢失变成懒加载占位图的问题, 建议 自行使用脚本移除 srcset 属性 或 关闭图片懒加载 或 在 RSS 中插入 vanilla-lazyload
  lazyload:
    enable: true
    js: https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.1.0/dist/lazyload.min.js
    onlypost: false
    loadingImg: # https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@3/img/placeholder/c617bfd2497fcea598e621413e315c368f8d8e.svg # 不建议使用占位图, 建议loadingImg为空, 当前占位图会产生布局偏移, loadingImg 为空占位图是一个 1X1 像素的图片
    blurIn: true # 模糊加载效果 （loadingImg为空时有效）

  ######## Plugins to optimize the experience:
  # highlight.js
  highlightjs:
    enable: #true # Please set hexo.config.highlight.enable = false !!!
    js: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.1.0/build/highlight.min.js
    css: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.1.0/build/styles/default.min.css
    # more: https://www.jsdelivr.com/package/npm/highlight.js?path=styles

  # https://scrollrevealjs.org/api/reveal.html
  scrollreveal:
    enable: #true
    js: https://cdn.jsdelivr.net/npm/scrollreveal@4.0.6/dist/scrollreveal.min.js
    distance: 32px
    duration: 800 # ms
    interval: 20 # ms
    scale: 1 # 0.1~1

  ######## Plugins for SEO:
  # npm i hexo-wordcount
  wordcount:
    enable: #true

  ######## Plugins for ...
  # Button Ripple Effect
  nodewaves:
    enable: #true
    css: https://cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.css
    js: https://cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.js

  # fontawesome animation
  fontawesome_animation:
    enable: #true
    css: https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css

  # Typing Effects
  comment_typing:
    enable: #true
    js: https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@2/js/comment_typing.js

  # 视差滚动效果 Slide Background
  parallax:
    enable: #true
    position: cover       # cover: sticky on the cover.   fixed: Fixed as background for the site.
    shuffle: true         # shuffle playlist
    duration: 10000       # Duration (ms)
    fade: 1500            # fade duration (ms) (Not more than 1500)
    images:               # For personal use only. At your own risk if used for commercial purposes !!!
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/001.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/002.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/003.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/004.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/005.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/006.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/012.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/016.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/019.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/033.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/034.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/035.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/038.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/039.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/042.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/046.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/051.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/052.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/054.webp
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/056.webp

  # APlayer is only available in mainland China.
  # APlayer config: https://github.com/metowolf/MetingJS
  aplayer:
    enable: #true
    js:
      aplayer: https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/js/APlayer.mini.js # aplayer@1.10 魔改: 将触摸和滚轮事件监听器标记为 `passive`，以提高页面的滚动性能
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

  # Pjax
  pjax:
    enable: true
    cover: true          # 封面是否pjax处理 false：每次切换页面封面都重载，适合封面较少的情况 true：封面经过Pjax处理，适合封面较多的情况
    timeout: 5000        # The timeout in milliseconds for the XHR requests. Set to 0 to disable the timeout.
    cacheBust: false     # When set to true, Pjax appends a timestamp  to skip the browser cache.
    animation: false # false, nprogress, circle
    banUrl:              # 被屏蔽的 url 地址将不启用 pjax 跳转，可以在控制台下使用 window.location.pathname 获取
      # - '/artitalk/'     # artitalk 不支持 pjax

  # 暗黑模式 darkmode
  # 开关按钮：在 navbar.menu 中添加：
  # - name: 暗黑模式 # 可自定义
  #   icon: fas fa-moon # 可自定义
  #   toggle: darkmode
  darkmode:
    enable: #true

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

  # BBtalk https://bb.js.org
  bbtalk:
    # Set `plugins: ["bbtalk"]` to enable in front-matter
    # 支持 Pjax
    js: https://cdn.jsdelivr.net/npm/bbtalk@0.1.5/dist/bbtalk.min.js # BBtalk.js
    appId: 0KzOX4vC7Jsk6vzUGNeEiUaI-gzGzoHsz # your appID
    appKey: HwCiWuxfpvKiLm4teCUgTIba # your appKEY
    serverURLs: https://bbapi.heson10.com # Request Api 域名

  # Tidio聊天功能
  # https://www.tidio.com/
  tidio:
    enable: #true
    id: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  # HexoPlusPlus
  # https://github.com/HexoPlusPlus/HexoPlusPlus
  # https://hexoplusplus.js.org/
  # 无服务器Hexo后端,支持文章编辑,自带图床功能.目标:解决静态博客所有痛点[文章编辑、图片上传、博主活跃信息统计、博主说说、Twikoo加强版、阅读量统计等
  hpp:
    # 说说功能
    # Set `plugins: ["hpptalk"]` to enable in front-matter
    # 支持 Pjax
    hpp_talk:
      css: https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@latest/talk.css # 建议锁定版本
      js: https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@latest/talk_user.js # 建议锁定版本
      limit: 10
      start: 0
      # 配置项按照yml格式继续填写即可
      # domain:
      # themecss:
    # HexoPlusPlus其他功能暂未集成

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

  # 消息提示
  message:
    enable: true
    icon:     # 默认图标，支持对图标添加颜色，可选值：see：/source/css/_style/_plugins/fontcolor.styl
      default: fas fa-info-circle light-blue
      quection: fas fa-question-circle light-blue
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
      play: fas fa-play
      pause: fas fa-pause
    rightmenu:                            # 是否开启右键模块的消息通知
      enable: true
```



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
  # highlight.js
  highlightjs:
    enable: true # Please set hexo.config.highlight.enable = false !!!
    js: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.1.0/build/highlight.min.js
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
  # Tidio聊天功能
  # https://www.tidio.com/
  tidio:
    enable: true
    id: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### HexoPlusPlus
```yaml blog/_config.volantis.yml
plugins:
  ...
  # HexoPlusPlus
  # https://github.com/HexoPlusPlus/HexoPlusPlus
  # https://hexoplusplus.js.org/
  # 无服务器Hexo后端,支持文章编辑,自带图床功能.目标:解决静态博客所有痛点[文章编辑、图片上传、博主活跃信息统计、博主说说、Twikoo加强版、阅读量统计等
  hpp:
    # 说说功能
    # Set `plugins: ["hpptalk"]` to enable in front-matter
    # 支持 Pjax
    hpp_talk:
      css: https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@latest/talk.css # 建议锁定版本
      js: https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@latest/talk_user.js # 建议锁定版本
      limit: 10
      start: 0
      # 配置项按照yml格式继续填写即可
      # domain:
      # themecss:
    # HexoPlusPlus其他功能暂未集成
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
  message:
    enable: true
    icon:     # 默认图标，支持对图标添加颜色，可选值：see：/source/css/_style/_plugins/fontcolor.styl
      default: fas fa-info-circle light-blue
      quection: fas fa-question-circle light-blue
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
      play: fas fa-play
      pause: fas fa-pause
    rightmenu:                            # 是否开启右键模块的消息通知
      enable: true
```
