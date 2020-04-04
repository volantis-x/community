---
layout: page
group: docs
title: Theme Settings「主题配置」
meta:
  header: [title, author, updated]
---

如无特殊说明，本页面的配置信息写在 <u>**主题**</u> 的 `config.yml` 文件中。

{% noteblock idea green %}
**实用小技巧**

所有需要写在主题配置文件中的配置都可以写在站点配置文件的 `theme_config:` 中
详见 Hexo 官方文档 [#覆盖主题配置](https://hexo.io/zh-cn/docs/configuration#%E8%A6%86%E7%9B%96%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE)
也可以直接查看本站源码中站点配置文件的写法：[_config.yml](https://github.com/xaoxuu/volantis-docs/blob/master/_config.yml)

{% endnoteblock %}


## 主题基本信息
```yaml blog/themes/volantis/_config.yml
info:
  name: Volantis # This is theme's name, not your blog's name.
  version: '2.4.1' # This is theme's version.
  docs: https://volantis.js.org/ # This is theme's URL.
  cdn: # To use CDN, write 'use_cdn: true' in 'blog/_config.yml'.
    css: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@2.4.1/css/style.css
    js: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@2.4.1/js/app.js
```
这部分内容一般无需修改，方便您查看主题相关信息。如果您不需要修改样式，建议开启主题提供的 CDN 服务以提高加载速度。
``` yaml blog/_config.yml
use_cdn: true
```


## 主题样式

您可以在主题配置文件中设定一些简单的样式，在开始前，确保没有使用 CDN 服务，否则修改不会生效。

### 最大布局宽度
```yaml blog/themes/volantis/_config.yml
style:
  ...
  max_width: 1080px # Sum of body width and sidebar width
```

网页所呈现的内容的最大宽度，即 body 和 sidebar 的宽度之和。

### 导航栏样式
您可以设置导航栏的高度以及视觉特效，视觉特效目前可选的有：
- **shadow**：卡片阴影。
- **floatable**：当鼠标移动到容器内时，呈现出浮起来的效果。
- **blur**：背景模糊效果（毛玻璃），当浏览器不支持时显示为不透明。

```yaml blog/themes/volantis/_config.yml
style:
  ...
  navbar:
    height: 64px
    effect: [shadow, blur] # [shadow, floatable, blur]
```

### 侧边栏样式
视觉特效参数同上，值得注意的是：卡片的 `floatable` 效果和 `blur` 效果相冲突。
```yaml blog/themes/volantis/_config.yml
style:
  ...
  sidebar:
    effect: [shadow] # [shadow, floatable, blur]
```

### 正文区域样式
视觉特效参数同上，值得注意的是：卡片的 `floatable` 效果和 `blur` 效果相冲突。您可以在 `language: true` 这里设置代码块显示语言名称。`text_align` 可以设置 h1/h2/h3/h4/p 的文字对齐方向。
```yaml blog/themes/volantis/_config.yml
style:
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
您可以设置几种标题的布局间距 `h2/h3/h4`、段落间距 `line`、区块内部的段落间距 `inline`。
```yaml blog/themes/volantis/_config.yml
style:
  ...
  gap:
    h2: 2.5em # Spacing above H2
    h3: 1.5em # Spacing above H3
    h4: 1em # Spacing above H4
    line: 1rem # Paragraph spacing
    inline: .5rem # Paragraph spacing within a block
```

### 自定义字体
您可以自定义正文和代码字体。
```yaml blog/themes/volantis/_config.yml
style:
  ...
  fontfamily:
    bodyfont:
      name: 'Varela Round'
      url: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-fonts/VarelaRound/VarelaRound-Regular.ttf
      weight: normal
      style: normal
    codefont:
      name: 'Monaco'
      url: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-fonts/Monaco/Monaco.ttf
      weight: normal
      style: normal
```

### 颜色样式
```yaml blog/themes/volantis/_config.yml
style:
  ...
  color:
    site: '#21232F' # Website background color
    card: '#444' # Card background color
    text: '#fff' # The color of the text on the card.
    theme: '#ff9800' # Main color
    link: '#1BCDFC' # Link color
    hover: '#ff5722' # Link highlight color
    inner: '#333' # Text color inside the button
    block: '#555' # Block color
    inlinecode: yellow # Inline code color
    codeblock: '#555' # Codeblock color
    p: '#ccc' # Paragraph color
```

## 设置封面
目前主题提供两种封面方案，全屏封面适用于项目文档，半屏封面适用于个人博客。您可以修改参数决定在任何页面是否显示。

### 默认显示设置
```yaml blog/themes/volantis/_config.yml
cover:
  ...
  display:
    home: true
    archive: false
    others: false # can be written in front-matter 'cover: true'
```
由于主页、归档是hexo自动生成的，您需要在主题配置文件中设置是否显示封面，而其它页面则可以在 `front-matter` 中通过设置 `cover: true/false` 来决定显示封面或者不显示封面。

## 设置导航栏
导航栏分为 logo、menu、search 三个区域设置，其中 logo 区域如果设置了图片，则不能显示图标和标题， menu 区域的设置可以写在一个单独的文件中。
```yaml blog/themes/volantis/_config.yml
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
### 使用数据文件
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

### N级菜单
导航栏菜单支持嵌套，嵌套的属性名为 `rows` ，写法示例：
```yaml blog/source/_data/menu.yml
...
- name: 更多
  icon: fas fa-ellipsis-v
  rows:
    - name: 主题源码
      url: https://github.com/xaoxuu/hexo-theme-volantis/
    - name: 更新日志
      url: https://github.com/xaoxuu/hexo-theme-volantis/releases/
    - name: hr
    - name: 有疑问？
      rows:
        - name: 看 FAQ
          url: faqs/
        - name: 看 本站源码
          url: https://github.com/xaoxuu/volantis-docs/
        - name: 提 Issue
          url: https://github.com/xaoxuu/hexo-theme-volantis/issues/
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

{% note play, 这个示例的实际效果： https://xaoxuu.com %}


### 播放器
在子菜单中，新增一个 `icon: fas fa-compact-disc` 的“菜单”就会被渲染成一个 APlayer 播放器。
```yaml
- name: 背景音乐
  icon: fas fa-compact-disc
```


## 模块化布局
您可以自由决定每个页面是否显示侧边栏，侧边栏显示什么小部件，正文区域显示什么卡片，文章卡片显示什么 meta 信息。
```yaml
layout:
  # The following can be written in `blog/source/_data/layout.yml`
  # 文章列表（主页、自定义的列表）布局
  on_list:
    # 列表中每一篇文章的meta信息
    meta: [title, author, date, category, top]
    # 列表类页面的侧边栏
    sidebar: [blogger, category, tagcloud, qrcode]
  # 页面布局
  on_page:
    # 文章页面主体元素，你也可以在页面的Front-matter中设置
    body: [article, comments]
    # 默认的meta信息，文章中没有配置则按照这里的配置来显示，设置为false则不显示
    # 其中，title只在header中有效，music和thumbnail无需在这里设置，文章中有则显示
    # 如果tags放置在meta.header中，那么在post列表中不显示（因为卡片下方已经有了）
    meta:
      header: [title, author, category, date, top]
      footer: [updated, tags, btns, share]
    # 文章页面的侧边栏
    sidebar: [qrcode, toc]
  # 文章布局，参数继承自 on_page
  on_post:
    # 文章页脚，自动在每一篇文章末尾添加
    article_footer: [copyright, donate]
  # 其他的页面布局暂时等于 on_list
```
其中 `meta` 部分的取值自 `meta` 库， 其余部分取值自 `widget` 库， （ `body` 除了可以从 `widget` 库中取值外，还可以选择 `article` 和 `comments` ）。

请别着急，具体的库配置将在下文详细讲解。


## meta 库
<u>meta</u> 即文章的元数据，描述文章的作者、发布时间、更新时间等等信息，Volantis 不替您决定，显示什么图标、如何描述都可以自定义。

{% folding 查看所有相关配置 %}

```yaml blog/themes/volantis/_config.yml
meta:
  # 文章标题
  title: # 暂无配置
  # 默认文章作者（可在front-matter中覆盖）
  author:
    avatar: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png
    name: Mr. X
    url: https://xaoxuu.com
  # 文章创建日期
  date:
    icon: fas fa-edit
    title: '发布于：'
    format: 'll' # 日期格式 http://momentjs.com/docs/
  # 文章更新日期
  updated:
    icon: fas fa-save
    title: '更新于：'
    format: 'll' # 日期格式 http://momentjs.com/docs/
  # 文章分类
  category:
    icon: fas fa-folder-open
  # 文章置顶
  top:
    icon: fas fa-angle-double-up
  # 文章浏览计数
  counter:
    icon: fas fa-eye
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
      img: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/logo/128/qq.png
    - id: qzone
      img: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/logo/128/qzone.png
    - id: weibo
      img: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/logo/128/weibo.png
    # - id: qrcode # 当id为qrcode时需要安装插件  npm i -S hexo-helper-qrcode
    #   img: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/logo/128/wechat.png
  # 链接
  btns:
    edit:
      icon: fas fa-edit
      title: 在GitHub上编辑此页
      color: '#888'
    repo: # 源码链接
      icon: fas fa-file-code
      title: 源码
      color: '#508EF2'
    bug: # BUG反馈链接
      icon: fas fa-bug
      title: BUG
      color: '#FE5F58'
    doubt: # 疑问链接
      icon: fas fa-question-circle
      title: 疑问
      color: '#FFBD2B'
    idea: # 建议链接
      icon: fas fa-lightbulb
      title: 建议
      color: '#3DC550'
    faq: # FAQ链接
      icon: fas fa-comments
      title: FAQ
      color: '#29B1C9'
    feedback: # 反馈链接
      icon: fas fa-comment-dots
      title: 反馈
      color: '#1BCDFC'
```
{% endfolding %}


## widget 库
<u>widget</u> 即小部件，大部分小部件都可以放置在侧边栏，一部分已经为正文区域显示做了优化，还有一部分只可以放置在文章页脚部分。与 meta 库不同的是：除了现有的 widget ，您可以很轻易地创建自己的 widget ，然后放在需要的地方。此外，您还可以将 widget 写在单独的文件中。

{% folding 查看所有相关配置 %}

```yaml blog/themes/volantis/_config.yml
widget:
  # The following can be written in `blog/source/_data/widget.yml`
  # ---------------------------------------
  # blogger info widget
  blogger:
    class: blogger
    display: [desktop] # [desktop, mobile]
    avatar: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png
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
  # ---------------------------------------
  # related posts widget
  related_posts:
    class: related_posts # npm i -S hexo-related-popular-posts
    display: [desktop, mobile] # [desktop, mobile]
    header:
      icon: fas fa-bookmark
      title: 相关文章
    max_count: 5
  # ---------------------------------------
  # copyright widget (valid only in articles)
  copyright:
    class: copyright
    display: [desktop, mobile] # [desktop, mobile]
    blockquote: true
    permalink: '本文永久链接是：'
    content:
      - '博客内容遵循 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 协议'
      - permalink
  # ---------------------------------------
  # qrcode widget
  donate:
    class: qrcode
    display: [desktop, mobile] # [desktop, mobile]
    height: 64px  # Automatic height if not set
    fancybox: true
    images:
      - https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/wiki_volantis.png
      - https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/wiki_volantis.png
  # You can add your own widget here or 'blog/source/_data/widget.yml'
  # class: text, list, grid, qrcode, page, ... see more at https://volantis.js.org/
```
{% endfolding %}

每一个小部件都有 `class` 和 `display`，前者代表这个小部件是什么，后者代表这个小部件在什么桌面和移动平台中是否显示，如果在移动平台显示，由于屏幕宽度有限，侧边栏的小部件则会被移动到正文区域下方，因此部分侧边栏小部件便失去意义，建议设置为仅桌面端显示。

```yaml
小部件名:
  class: 小部件类别
  display: [小部件在桌面端显示, 小部件在移动设备显示]
```

### 博主信息部件
```yaml blog/themes/volantis/_config.yml
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
```yaml blog/themes/volantis/_config.yml
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
```yaml blog/themes/volantis/_config.yml
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
```yaml blog/themes/volantis/_config.yml
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

### 相关文章部件
```yaml blog/themes/volantis/_config.yml
related_posts:
  class: related_posts # npm i -S hexo-related-popular-posts
  display: [desktop, mobile] # [desktop, mobile]
  header:
    icon: fas fa-bookmark
    title: 相关文章
  max_count: 5
```
这个小部件建议放置在文章页脚，要使用这个部件，您需要安装插件：
```
npm i -S hexo-related-popular-posts
```
{% note warning, 值得注意的是，开启了这个功能之后，每次修改文章内容包括 `front-matter` 之后，都需要重新 `hexo s`。 %}

### 文章版权部件
```yaml blog/themes/volantis/_config.yml
copyright:
  class: copyright
  display: [desktop, mobile] # [desktop, mobile]
  blockquote: true
  permalink: '本文永久链接是：'
  content:
    - '博客内容遵循 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 协议'
    - permalink
```
这个部件<u>只可以</u>放置在文章页脚。

### 二维码部件
```yaml blog/themes/volantis/_config.yml
donate:
  class: qrcode
  display: [desktop, mobile] # [desktop, mobile]
  height: 64px  # Automatic height if not set
  fancybox: true
  images:
    - https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/wiki_volantis.png
    - https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/wiki_volantis.png
```
您可以放置在文章页脚用于展示打赏图片，也可以放置在侧边栏。

### 通用文本部件
```yaml blog/themes/volantis/_config.yml
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
```yaml blog/themes/volantis/_config.yml
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

### 通用网格部件
```yaml blog/themes/volantis/_config.yml
feedback:
  class: grid
  display: [desktop, mobile]
  header:
    icon: fas fa-headset
    title: 联系开发者
    url: https://github.com/xaoxuu/hexo-theme-volantis
  fixed: true # 固定宽度
  rows:
    - name: 反馈BUG
      icon: fas fa-bug
      url: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&template=bug-report.md
    - name: 疑问求助
      icon: fas fa-question-circle
      url: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?labels=疑问&template=question-report.md
    - name: 提个建议
      icon: fas fa-lightbulb
      url: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=建议&template=feature-request.md
```
您可以创建用于展示任何链接列表的网格部件。网格默认根据文字长度自动确定每一个格子的宽度，如果文字长短不一，建议通过设置 `fixed: true` 来固定宽度，此时文字过长的格子中的文字会换行显示。

### 通用页面部件
```yaml blog/themes/volantis/_config.yml
test:
  class: page
  display: [desktop, mobile]
  pid: haha
  content: excerpt # excerpt, more, content
```
您可以把整个页面的md内容作为一个小部件渲染显示出来。只需要设置小部件里的 `pid` 属性和文章的 `front-matter` 中设置一样的 `pid` 即可。 `content` 代表这个部件显示的内容，可选 `excerpt`，`more`，`content` 分别对应文章的摘要、摘要后面的内容、全文。

### 部件库文件
部件库中的所有部件都可以写在部件库文件中，您需要创建一个文件在以下路径：
```
blog/source/_data/widget.yml
```
文件内容示例：[widget.yml](https://github.com/xaoxuu/volantis-docs/blob/master/source/_data/widget.yml)



## 设置网站页脚
您通过 `layout` 可以自由布局网站页脚内容 `aplayer`, `social`, `license`, `info`, `copyright`。
```yaml blog/themes/volantis/_config.yml
footer:
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
  copyright: '[Copyright © 2017-2020 Mr. X](https://xaoxuu.com)'
  # You can add your own property here. (Support markdown, for example: br: '<br>')
  br: '<br>'
```
其中，`aplayer` 需要在插件部分设置中启用。您可以新增文字属性，用于展示其它文字信息，例如：
```yaml blog/themes/volantis/_config.yml
footer:
  layout: [..., br, hello, ...]
  ...
  # You can add your own property here. (Support markdown, for example: br: '<br>')
  br: '<br>'
  hello: '[Hello World](/)'
```

## SEO偏好设置
```yaml blog/themes/volantis/_config.yml
seo:
  # When there are no keywords in the article's front-matter, use tags as keywords.
  use_tags_as_keywords: true
  # When there is no description in the article's front-matter, use excerpt as the description.
  use_excerpt_as_description: true
  robots:
    home_first_page: index,follow
    home_other_pages: noindex,follow
    archive: noindex,follow
    category: noindex,follow
    tag: noindex,follow
    # robots can be written in front-matter
```
SEO这部分一般不需要修改。


## 插件库
Volantis 为丰富的插件提供了兼容性优化。大部分插件您只需开启和关闭，无需进行设置。

### 幻灯片背景
```yaml blog/themes/volantis/_config.yml
plugins:
  ...
  backstretch:
    enable: true
    js: https://cdn.jsdelivr.net/npm/jquery-backstretch@2.1.18/jquery.backstretch.min.js
    position: cover       # cover: sticky on the cover.   fixed: Fixed as background for the site.
    duration: 20000       # Duration (ms)
    fade: 1500            # fade duration (ms) (Not more than 1500)
    images:               # For personal use only. At your own risk if used for commercial purposes !!!
      - https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg
      ...
```
幻灯片背景图片显示的位置可以选择粘贴在封面上，跟随封面一起滑动，也可以选择固定作为网页背景图片。

## APlayer
```yaml blog/themes/volantis/_config.yml
plugins:
  ...
  aplayer:
    enable: true
    js:
      - https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js
      - https://cdn.jsdelivr.net/npm/meting@2.0/dist/Meting.min.js
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
    list_max_height: 340px # list max height
    list_folded: true
```

{% note warning, APlayer播放器只可以在中国大陆地区使用。相关文档： [APlayer](https://aplayer.js.org/) | [MetingJS](https://github.com/metowolf/MetingJS) %}

## 评论系统
```yaml blog/themes/volantis/_config.yml
comments:
  title: <i class='fas fa-comments'></i> 评论
  subtitle:
  service: valine # valine, disqus, gitalk, livere
  valine:
    appId: # your appId
    appKey: # your appKey
    js: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@2.0.2/js/valine.js
    path: # All pages use the same path (share the same comments data)
    meta: nick,mail,link #valine comment header info
    placeholder: 快来评论吧~ # valine comment input placeholder(like: Please leave your footprints )
    avatar: mp # gravatar style https://valine.js.org/avatar
    pageSize: 10 # comment list page size
    verify: true # valine verify code (true/false)
    notify: true # valine mail notify (true/false)
    lang: zh-cn
    highlight: true
    visitor: false # unavailable for now...
  disqus:
    shortname:
  gitalk:
    clientID:
    clientSecret:
    repo:
    owner:
    admin: # []
  livere:
    uid:
```

### Disqus

官网： [https://disqus.com/](https://disqus.com/)

```yaml blog/themes/volantis/_config.yml
comments:
  ...
  disqus:
    shortname:
```

### Gitalk

官网： [https://github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)

```yaml blog/themes/volantis/_config.yml
comments:
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


**可以通过设置 `gitalk.id` 实现多个页面共用一个评论框。**

```yaml front-matter
---
gitalk:
  id: /wiki/volantis/
---
```


### Valine

官网： [https://valine.js.org](https://valine.js.org)

```yaml blog/themes/volantis/_config.yml
comments:
  ...
  valine:
    appId: # your appId
    appKey: # your appKey
    js: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@2.0.2/js/valine.js
    path: # All pages use the same path (share the same comments data)
    meta: nick,mail,link #valine comment header info
    placeholder: 快来评论吧~ # valine comment input placeholder(like: Please leave your footprints )
    avatar: mp # gravatar style https://valine.js.org/avatar
    pageSize: 10 # comment list page size
    verify: true # valine verify code (true/false)
    notify: true # valine mail notify (true/false)
    lang: zh-cn
    highlight: true
    visitor: false # unavailable for now...
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
  path: /wiki/volantis/
---
```

### Livere

官网： [https://www.livere.com/](https://www.livere.com/)


```yaml blog/themes/volantis/_config.yml
comments:
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


## 开启搜索功能
```yaml blog/themes/volantis/_config.yml
search:
  enable: true
  service: hexo  # hexo, google, algolia, azure, baidu
  js: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@2.0.2/js/search.js
  google:
    apiKey:
    engineId:
  algolia:
    applicationID:
    apiKey:
    indexName:
  azure:
    serviceName:
    indexName:
    queryKey:
  baidu:
    apiId:
```
默认配置为 Hexo 搜索，但是需要安装插件才能使用：
```sh
npm i -S hexo-generator-search hexo-generator-json-content
```
