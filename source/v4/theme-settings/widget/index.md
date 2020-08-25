---
layout: page
title: 卡片式组件
group: docs-latest
order: 308
short_title: 3-8 卡片式组件
sidebar: [docs-latest, toc, repos]
---

<u>widget</u> 即小部件，大部分小部件都可以放置在侧边栏，一部分已经为正文区域显示做了优化，还有一部分只可以放置在文章页脚部分。与 meta 库不同的是：除了现有的 widget ，您可以很轻易地创建自己的 widget ，然后放在需要的地方。此外，您还可以将 widget 写在单独的文件中。

{% folding 查看所有相关配置 %}

```yaml blog/_config.volantis.yml
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
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
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

## 博主信息部件
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

## 文章目录部件
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

## 文章分类部件
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

## 标签云部件
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

## 相关文章部件
```yaml blog/_config.volantis.yml
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

## 文章版权部件
```yaml blog/_config.volantis.yml
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

## 二维码部件
```yaml blog/_config.volantis.yml
donate:
  class: qrcode
  display: [desktop, mobile] # [desktop, mobile]
  height: 64px  # Automatic height if not set
  fancybox: true
  images:
    - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
    - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
```
您可以放置在文章页脚用于展示打赏图片，也可以放置在侧边栏。

## 通用文本部件
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

## 通用列表部件
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

### 参考资料

这个部件的布局继承自 list 部件，用于展示文章的参考资料。请将您的 Volantis 升级至 <u>2.5</u> 版本以上使用。

```yaml blog/_config.volantis.yml
references:
  class: references # is subclass of list
  display: [desktop, mobile] # [desktop, mobile]
  header:
    icon: fas fa-quote-left
    title: 参考资料
```

在文章的 front-matter 中设置：
```yaml front-matter
references:
  - name: Apple Developer Documentation
    url: https://developer.apple.com/documentation/
```

### 组索引

这个部件的布局继承自 list 部件，用于展示文章所属的分组的文章列表。请将您的 Volantis 升级至 <u>2.5</u> 版本以上使用。

```yaml blog/_config.volantis.yml
group-1:
  class: group
  display: [desktop, mobile] # [desktop, mobile]
  header:
    icon: fab fa-apple
    title: Developer
    url: /wiki/ios/
```

在文章的 front-matter 中设置：
```yaml front-matter
group: group-1
order: 16
sidebar: [group-1, toc]
```

「group-1」卡片将会以列表的形式显示所有设置了 `group: group-1` 的文章，顺序按照 `order` 从小到大排列。

## 通用网格部件
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

## 通用页面部件
```yaml blog/_config.volantis.yml
test:
  class: page
  display: [desktop, mobile]
  pid: haha
  content: excerpt # excerpt, more, content
```
您可以把整个页面的md内容作为一个小部件渲染显示出来。只需要设置小部件里的 `pid` 属性和文章的 `front-matter` 中设置一样的 `pid` 即可。 `content` 代表这个部件显示的内容，可选 `excerpt`，`more`，`content` 分别对应文章的摘要、摘要后面的内容、全文。

## 部件库文件
部件库中的所有部件都可以写在部件库文件中，您需要创建一个文件在以下路径：
```
blog/source/_data/widget.yml
```
文件内容示例：[widget.yml](https://github.com/volantis-x/volantis-docs/blob/master/source/_data/widget.yml)
