---
layout: page
group: docs
title: Theme Settings「主题配置」
cover: false
meta:
  header: [title, author, updated]
links:
  repo: https://github.com/xaoxuu/hexo-theme-volantis
  bug: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=BUG&template=bug-report.md
  doubt: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?labels=疑问&template=question-report.md
  idea: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=建议&template=feature-request.md
---

如无特殊说明，本页面的配置信息写在 <red>**主题**</red> 的 `config.yml` 文件中。

## 显示「阅读全文」按钮 <sup class='blue'>^1.5.2</sup>

```yaml 主题配置文件
readmore: true
```

## 设置幻灯片背景

```yaml 主题配置文件
backstretch:
  position: background  # cover: 封面背景   background: 整个网页背景
  duration: 10000       # 持续时间（毫秒）
  fade: 2500            # 渐变（毫秒）
  is_dark: # true       # 图片是否是暗色的（调整文字为白色）
  images:
    - https://i.loli.net/2020/02/08/HNuVoted2mUxILl.jpg
    # - https://i.loli.net/2020/02/08/dNJyR4LHtarTqPu.jpg
    # - https://i.loli.net/2020/02/08/yXx4GwgZYdi81Qs.jpg
    # - https://i.loli.net/2020/02/08/RP7JpGvWaCYfuB6.jpg
```

::: success
**建议：**
- 要么全部使用浅色图片。
- 要么全部使用深色图片，然后上方 `is_dark: true`，然后前往 `source/less/_color.less` 文件中把 `@theme_background:` 设置为深色。
:::

## 设置封面

```yaml 主题配置文件
# page的封面
cover:
  scheme: search    # 后期将会提供多种封面方案
  # height: half      # full（默认值）: 首页封面占据整个第一屏幕，其他页面占半个屏幕高度， half: 所有页面都封面都只占半个屏幕高度
  title: xaoxuu
  # logo:    # logo和title只显示一个，若同时设置，则只显示logo
  # search: '搜索'
  # 主页封面菜单
  features:
    - name: 博文
      icon: fas fa-rss
      url: /
    - name: 项目
      icon: fas fa-code-branch
      url: projects/
    - name: 归档
      icon: fas fa-archive
      url: blog/archives/
      rel: nofollow
    - name: 关于
      icon: fas fa-info-circle
      url: about/
      rel: nofollow
```


## 设置导航栏

```yaml 主题配置文件
navbar:
  # 左侧logo区
  logo:
    # 显示图片，使用图片时将不会显示icon和title
    img: # https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.7/apple-touch-icon.png
    # 显示图标
    icon: fas fa-home
    # 显示标题
    title: XAOXUU
  # logo后面的导航菜单
  menu:
    # 在桌面端显示的导航菜单
    on_desktop:
      - name: 近期
        icon: fas fa-hourglass-half
        url: /
        target: _self
      - name: 分类
        icon: fas fa-folder-open
        url: blog/categories/
        rel: nofollow
        target: _self
      - name: 标签
        icon: fas fa-hashtag
        url: blog/tags/
        rel: nofollow
        target: _self
      - name: 归档
        icon: fas fa-archive
        url: blog/archives/
        rel: nofollow
        target: _self
    # 手机端导航菜单（从右上角的按钮点击展开）
    on_mobile:
      - name: 近期文章
        icon: fas fa-clock
        url: /
      - name: 文章归档
        icon: fas fa-archive
        url: blog/archives/
        rel: nofollow
      - name: 开源项目
        icon: fas fa-code-branch
        url: projects/
      - name: 我的友链
        icon: fas fa-link
        url: friends/
        rel: nofollow
      - name: 主题文档
        icon: fas fa-book
        url: https://xaoxuu.com/wiki/volantis/
        rel: nofollow
      - name: 关于小站
        icon: fas fa-info-circle
        url: about/
        rel: nofollow
  search: 搜索一下   # 搜索框文字
```


其中 `icon` 是 `fontawesome` 图标名，你要显示什么图标，去 [fontawesome.com](https://fontawesome.com/icons?d=gallery&m=free) 找免费版的就可以了。


## 毛玻璃与卡片阴影 <sup class='blue'>^1.5</sup>

```yaml 主题配置文件
# 样式
style:
  # 卡片阴影效果
  shadow:
    # 导航栏阴影
    nav: true
    # 卡片阴影和悬浮动画
    # card: true
  # 毛玻璃效果 具体效果调整在： source/less/_color.less
  blur:
    navbar: true
    widget: true
    # body: true
```

::: success
**建议：**
- 有背景图：开启毛玻璃，关闭卡片阴影
- 无背景图：关闭毛玻璃，开启卡片阴影
:::

数值调整：

```less themes/volantis/source/less/_color.less
// 导航栏毛玻璃效果
.nav-blur {
  background: fade(@theme_cardbg, 75%);
  backdrop-filter: blur(50px);
}

// 卡片毛玻璃效果
.body-blur,.widget-blur {
  background: fade(@theme_cardbg, 75%);
  backdrop-filter: blur(50px);
}
```

## 模块化布局

这里的「布局」是指放置什么模块、顺序如何。对于一个普通文章页面来说，左侧区域称为 `body`，右侧区域称为 `sidebar`，左侧body区域默认上下分为 `article`、`comments` 两个模块。层级图为：

<fancybox><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/2020/2020-02-1820.13.44.png'></fancybox>

```yaml 主题配置文件
layout:
  # 文章列表（主页、自定义的列表）布局
  on_list:
    # 列表中每一篇文章的meta信息
    meta: [title, author, date, category, wordcount, top]
    # 列表类页面的侧边栏
    sidebar: [blogger, dao_hang, huan_ying, category, tagcloud, tui_jian, donate]
  # 文章页面布局
  on_page:
    # 文章页面主体元素，你也可以在页面的Front-matter中设置
    body: [article, comments]
    # 默认的meta信息，文章中没有配置则按照这里的配置来显示，设置为false则不显示
    # 其中，title只在header中有效，music和thumbnail无需在这里设置，文章中有则显示
    # 如果tags放置在meta.header中，那么在post列表中不显示（因为卡片下方已经有了）
    meta:
      header: [title, author, date, category, counter, wordcount, top]
      footer: [updated, tags, share]
    # 文章页脚，自动在每一篇文章末尾添加
    footer: [copyright, donate]
    # 文章页面的侧边栏
    sidebar: [blogger, toc, category, tagcloud, donate]
  # 其他的页面布局暂时等于文章列表
```

其中 `meta`、`meta.header`、`meta.footer` 从 <btn>[Meta库](#Meta库)</btn> 中选取，其他字段值均从 <btn>[Widget库](#Widget库)</btn> 中选取。


## Meta库

```yaml 主题配置文件
meta:
  # 文章标题
  title: # 暂无配置
  # 文章作者
  author:
    icon: fas fa-user # 如果配置了头像，则不会显示图标
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
    icon: fas fa-tag
  # 分享
  share:
    - id: qq
      name: QQ好友
      img: https://cdn.jsdelivr.net/gh/xaoxuu/assets@19.1.9/logo/128/qq.png
    - id: qzone
      name: QQ空间
      img: https://cdn.jsdelivr.net/gh/xaoxuu/assets@19.1.9/logo/128/qzone.png
    # - id: qrcode # 当id为qrcode时需要安装插件  npm i -S hexo-helper-qrcode
    #   name: 微信
    #   img: https://cdn.jsdelivr.net/gh/xaoxuu/assets@19.1.9/logo/128/wechat.png
    - id: weibo
      name: 微博
      img: https://cdn.jsdelivr.net/gh/xaoxuu/assets@19.1.9/logo/128/weibo.png
    # - id: qrcode # 当id为qrcode时需要安装插件  npm i -S hexo-helper-qrcode
    #   name: QRcode
    #   img: https://cdn.jsdelivr.net/gh/xaoxuu/assets@19.1.9/logo/128/qrcode.png
  # 链接
  links:
    repo: # 源码链接
      icon: fas fa-code-branch
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

## Widget库

Widget库中的小部件通常可用于侧边栏、左边主体区域，部分也可用作文章页脚。组件的类别（class）共有以下几种：

| class   | 功能                   | 适用区域 |
| :------ | :---------------------- | :-------- |
| blogger | 博主信息模块 | sidebar |
| toc | 目录  | sidebar |
| category   | 文章分类  |  sidebar、body |
| tagcloud  | 标签云                   |  sidebar、body、article |
| related_posts   | 相关文章推荐   | sidebar、body、article  |
| copyright | 版权标识 | article |
| donate | 打赏控件 | sidebar、body、article |
| text | 文本控件 | sidebar、body、article |
| grid | 网格控件 | sidebar、body、article |
| list | 列表控件 | sidebar、body、article |

一种类型的组件可以创建多个，以 `id` 区分。

### blogger

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 博主信息小部件配置
  - id: blogger
    class: blogger
    avatar: https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png
    # title:  标题
    # subtitle: 副标题
    jinrishici: true # 今日诗词。可以设置字符串，加载失败时会显示占位字符串。
    social: true
```

### toc

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 目录小部件配置(仅在文章中有效)
  - id: toc
    class: toc
    icon: fas fa-list
    title: 本文目录
    list_number: false # 是否显示章节
    min_depth: 2 # H1建议用作网页或者文章的标题，章节从H2开始。
    max_depth: 5 # 由于宽度有限，主题没有针对所有层级进行布局优化，建议文章最多分为：H2/H3/H4/H5四个层级
```

### category

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 文章分类小部件配置
  - id: category
    class: category
    icon: fas fa-folder-open
    title: 文章分类
    more: # 右上角的按钮
      icon: fas fa-expand-arrows-alt
      url: blog/categories/
      rel: external nofollow noopener noreferrer
      target: _self
```

### tagcloud

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 标签云小部件配置
  - id: tagcloud
    class: tagcloud
    icon: fas fa-tags
    title: 热门标签
    more: # 右上角的按钮
      icon: fas fa-expand-arrows-alt
      url: blog/tags/
      rel: external nofollow noopener noreferrer
      target: _self
    min_font: 14
    max_font: 24
    color: true
    start_color: '#999'
    end_color: '#555'
```

### related_posts

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 相关文章小部件配置
  - id: related_posts
    class: related_posts # 需要安装插件  npm i -S hexo-related-popular-posts
    icon: fas fa-bookmark
    title: 相关文章
```


### copyright

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 版权说明小部件（仅用于文章中）
  - id: copyright
    class: copyright
    permalink: '本文永久链接是：' # 显示文章永久链接
    content:
      - '这是文章页脚，可以放置版权说明以及打赏图片。<br>博客内容遵循 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 协议'
      - ''
      - permalink
```

### donate

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 捐赠小部件（可用于文章中和侧边栏）
  - id: donate
    class: donate
    icon: fas fa-donate
    title: 打赏
    height: 64px
    fancybox: true # 是否允许点击放大
    images:
      - https://img.vim-cn.com/4e/3c87a2fd28fd0b9c2f27ce3f83f1e9275d0488.png
      # - https://img.vim-cn.com/4e/3c87a2fd28fd0b9c2f27ce3f83f1e9275d0488.png
      # - https://img.vim-cn.com/4e/3c87a2fd28fd0b9c2f27ce3f83f1e9275d0488.png
      # - https://img.vim-cn.com/4e/3c87a2fd28fd0b9c2f27ce3f83f1e9275d0488.png
```

### text

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 自定义组件，仿照如下写法
  - id: huan_ying # 唯一标识，自己命名，建议全英文
    class: text # 小部件类型，对应_widget文件夹中的文件名
    icon: fas fa-file
    title: 文本部件
    content:
      - '这是一段支持markdown的文本'
      - '![](https://img.vim-cn.com/4e/3c87a2fd28fd0b9c2f27ce3f83f1e9275d0488.png)'
      - haha
    more: # 右上角的按钮
      icon: far fa-heart
      url: https://music.163.com/#/user/home?id=63035382
      rel: external nofollow noopener noreferrer
      target: _blank
```

### grid

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 自定义组件，仿照如下写法
  - id: dao_hang
    class: grid
    icon: fas fa-map-signs
    title: 站内导航
    rows:
      - name: 近期文章
        icon: fas fa-clock
        url: /
      - name: 文章归档
        icon: fas fa-archive
        url: blog/archives/
        rel: external nofollow noopener noreferrer
        target: _self
    more: # 右上角的按钮
      icon: far fa-heart
      url: https://music.163.com/#/user/home?id=63035382
      rel: external nofollow noopener noreferrer
      target: _blank
```

### list

```yaml 主题配置文件
widget:
  # ---------------------------------------
  # 自定义组件，仿照如下写法
  - id: tui_jian
    class: list
    icon: fas fa-thumbs-up
    title: 强烈推荐
    rows:
      - name: 带图片的列表
        img: https://img.vim-cn.com/4e/3c87a2fd28fd0b9c2f27ce3f83f1e9275d0488.png
      - name: 带图标的列表
        icon: fas fa-home
      - name: Hexo脚本（Mac）
        url: https://xaoxuu.com/wiki/hexo.sh/
        rel: external nofollow noopener noreferrer
        target: _blank
    more: # 右上角的按钮
      icon: far fa-heart
      url: https://music.163.com/#/user/home?id=63035382
      rel: external nofollow noopener noreferrer
      target: _blank
```


## APlayer播放器

各个字段参数取值都有备注：

```yaml 主题配置文件
# APlayer配置 https://github.com/metowolf/MetingJS
aplayer:
  # 是否启用，注释此项则不加载服务
  # enable: true
  # 必选参数
  server: netease   # netease, tencent, kugou, xiami, baidu
  type: playlist    # song, playlist, album, search, artist
  id: 3175833810    # song id / playlist id / album id / search keyword
  # 可选参数
  fixed: false      # enable fixed mode
  theme: '#1BCDFC'  # main color
  autoplay: false   # audio autoplay
  order: list       # player play order, values: 'list', 'random'
  loop: all         # player loop play, values: 'all', 'one', 'none'
  volume: 0.7       # default volume, notice that player will remember user setting, default volume will not work after user set volume themselves
  list_max_height: 340px # list max height
  list_folded: true
```

> 相关文档：
> - [APlayer](https://aplayer.js.org/)
> - [MetingJS](https://github.com/metowolf/MetingJS)



## 社交信息

```yaml 主题配置文件
# 页脚社交信息
social:
  - icon: fas fa-envelope
    url: mailto:me@xaoxuu.com
  - icon: fab fa-github
    url: https://github.com/xaoxuu
  - icon: fas fa-music
    url: https://music.163.com/#/user/home?id=63035382
```

这些社交按钮也会同时出现在侧边栏头像下方，可以在Widget库的配置中设置不显示。

## 第三方插件

开启过多服务会导致网页加载缓慢、运行卡顿。

### 预加载

鼠标放在链接上就提前开始加载了，开启此项服务时请注意主题配置文件中本地的路径要以 `/` 结尾。

```yaml 主题配置文件
plugins:
  instant_page: '//instant.page/3.0.0'
```

### 文本框打字特效

```yaml 主题配置文件
plugins:
  comment_typing: '//cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@20.2.33/js/comment_typing.js'
```

### 代码块复制按钮

```yaml 主题配置文件
plugins:
  clipboard: '//cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js'
```

### 按钮点击涟漪效果

```yaml 主题配置文件
plugins:
  nodewaves:
    css: '//cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.css'
    js: '//cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.js'
```
