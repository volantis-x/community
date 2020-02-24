---
layout: page
title: Advanced Settings「进阶设定」
cover: false
meta:
  header: [title, author, updated]
links:
  repo: https://github.com/xaoxuu/hexo-theme-volantis
  bug: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=BUG&template=bug-report.md
  doubt: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?labels=疑问&template=question-report.md
  idea: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=建议&template=feature-request.md
---

建议有一定基础知识的朋友进行尝试。

{% raw %}
<details>
<summary>
将主题添加为子模块
</summary>
{% endraw %}

```sh
git submodule add git@github.com:xaoxuu/hexo-theme-volantis themes/volantis
```
{% raw %}</details>{% endraw %}


## 复选框和Container

::: info
here be info
:::

::: warning
here be warning
:::

::: success
here be success
:::

::: danger
here be danger
:::

如果是其他markdown解析器，需要卸载并安装 `hexo-renderer-markdown-it` 插件：

1. 卸载默认的 `hexo-renderer-marked`
  ```sh
  npm uninstall hexo-renderer-marked --save
  ```

2. 安装 `hexo-renderer-markdown-it`
  ```sh
  npm install hexo-renderer-markdown-it --save
  ```

3. 然后安装插件
  ```sh
  npm install markdown-it-abbr markdown-it-checkbox markdown-it-container markdown-it-deflist markdown-it-emoji markdown-it-footnote markdown-it-imsize markdown-it-ins markdown-it-mark markdown-it-regexp markdown-it-sub markdown-it-sup markdown-it-task-checkbox --save
  ```
4. 修改配置文件
  ```yaml 站点配置文件
  markdown:
    render:
      html: true
      xhtmlOut: false
      breaks: true
      linkify: true
      typographer: true
      quotes: '“”‘’'
    plugins:
      - markdown-it-abbr
      - markdown-it-footnote
      - markdown-it-ins
      - markdown-it-sub
      - markdown-it-sup
      - markdown-it-deflist
      - markdown-it-imsize
      - markdown-it-mark
      - markdown-it-regexp
      - markdown-it-task-checkbox
      - name: markdown-it-container
        options: success
      - name: markdown-it-container
        options: info
      - name: markdown-it-container
        options: warning
      - name: markdown-it-container
        options: danger
      - markdown-it-deflist
      - name: markdown-it-emoji
        options:
          shortcuts: {}
    anchors:
      level: 2
      collisionSuffix: ''
      permalink: false
      permalinkClass: 'header-anchor'
      permalinkSide: 'left'
      permalinkSymbol: '¶'
      case: 0
      separator: ''
  ```

5. Container的写法：
  ```
  ::: info
  here be info
  :::

  ::: warning
  here be warning
  :::

  ::: success
  here be success
  :::

  ::: danger
  here be danger
  :::
  ```


## 自定样式

::: danger

**注意！**

主题支持CDN服务，如果你需要对样式进行DIY，请确保关闭了CDN，否则修改的内容不会生效。

:::

### 自定义字体

可以使用本地字体和任意CDN字体。CDN字体的使用方法：


```less themes/volantis/source/less/_fonts.less
@font-face{
  font-family: 'Varela Round';
  src: url(https://cdn.jsdelivr.net/gh/xaoxuu/cdn-fonts@19.1.7/VarelaRound/VarelaRound-Regular.ttf);
  font-weight: normal;
  font-style: normal;
}
@fontfamily_base: 'Varela Round', ...
```

选择字体源： <btn class='small'>[jsdelivr](https://www.jsdelivr.com/package/gh/xaoxuu/cdn-fonts)</btn> <btn class='small'>[Google Fonts](https://fonts.google.com)</btn>

> 目前主题默认使用的字体源 [@xaoxuu/cdn-fonts](https://www.jsdelivr.com/package/gh/xaoxuu/cdn-fonts) 是我专门为存放字体建的一个仓库，由jsdelivr提供CDN服务，目前已经收录20余种精选字体。如果你想添加某个喜爱的字体，可以提交到这里： [https://github.com/xaoxuu/cdn-fonts/](https://github.com/xaoxuu/cdn-fonts/)。


### 调整字号

```less themes/volantis/source/less/_fonts.less
// base
@fontsize_base:   16px;
@fontsize_small:  @fontsize_base * 0.875;
@fontsize_footnote:  @fontsize_base * 0.7;
@lineheight_base: 1.5;
// title
@fontsize_h1: @fontsize_base * 1.5;
@fontsize_h2: @fontsize_base * 1.5;
@fontsize_h3: @fontsize_base * 1.3;
@fontsize_h4: @fontsize_base * 1.15;
@fontsize_h5: @fontsize_base * 1;
@fontsize_h6: @fontsize_small;
// article
// 文章列表中的标题
@fontsize_list_title: @fontsize_base * 1.5;
// 文章页的标题
@fontsize_article_title: @fontsize_h2 * 1.2;
@fontsize_article_title_phone: @fontsize_h2;
```

### 调整布局

文字对其方向：

```less themes/volantis/source/less/_layout.less
@text_align_h1: left;
@text_align_h2: left;
@text_align_h3: left;
```

间距、尺寸等：

```less themes/volantis/source/less/_layout.less
// start: 间距 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
@gap: 16px;
// end: 间距 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// start: 布局尺寸 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
@on_phone:         580px;
@on_pad:           768px;
@on_laptop:        1024px; // 1024 + 285
@on_desktop:       1350px;
// container
@width_container:  1080px;
@on_modal_threshold:  680px;
// 侧边栏宽度
@width_sidebar: 285px;
@width_sidebar_m: 240px;
// 搜索框的宽度，建议和侧边栏宽度保持一致
@width_searchbar: @width_sidebar;
@width_searchbar_m: @width_sidebar_m;
// 搜索框的高度，建议不要超出导航栏的高度
@height_searchbar: 40px;
@searchbar_height_cover: 44px;
// 一个cell的高度
@height_cell: 36px;
// end: 布局尺寸 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// start: 导航栏 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 导航栏高度
@height_navbar: 64px;
@fontsize_logo: @fontsize_base * 1.2;
@fontsize_header_switcher: 1.3em;
@fontsize_header: 1em;
// 定位条和页面加载的进度条的高度
@loading_height: 2px;
// end: 导航栏 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// start: 圆角 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
@border_radius: 12px; // 圆角半径，可以根据心情随时调整风格
@border_radius_line: 4px; // 线的宽度和滚动条的宽度
@border_radius_code_block: 4px; // 引用、代码块的圆角

@border_radius_searchbar: 8px; // 搜索框的圆角半径，可以根据心情随时调整风格
// end: 圆角 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
```

### 调整配色

一个简单的例子：

```less themes/volantis/source/less/_color.less
// 网页背景颜色
@theme_background: #F4F4F4;
// @theme_background: #454545; // 暗色主题
// 主题色
@theme_main: #1BC3FB;
// 卡片背景颜色
@theme_cardbg: white;
// @theme_cardbg: #555; // 暗色主题
```

如果你想更自由地定制颜色，可以修改这里的几项：

```less themes/volantis/source/less/_color.less
// 背景色 ----------------
// 导航栏背景，默认和主题色保持一致
@color_bg_navbar: @theme_main;
// 代码的背景色
@color_bg_code: #FFF8F0;
// 代码块的背景色
@color_bg_code_block: darken(@theme_cardbg, 2%);
@color_border_code_block: #ddd;
// 引用的颜色
@color_bg_quote: @theme_main;
// 选中部分文字的背景颜色
@color_bg_selection: fade(@color_md_blue, 20%);

// 文字颜色 ----------------
// 标题文字颜色（h1/h2）
@color_text_header: darken(@color_text_main, 5%);
// 标题文字颜色（h3）
@color_text_h3: darken(@theme_main, 5%);
// 链接颜色
@color_text_link: @theme_main;
// 链接高亮颜色
@color_text_highlight: @color_md_deep_orange;
// 在主题色中显示的文本（一般为白或深灰）
@color_text_in_header: white;
// 正文文字颜色
@color_text_main: @dark;
// @color_text_main: white; // 暗色主题
// 代码颜色
@color_text_code: #A55A00;
```


### 更多DIY玩法


详见 [@TRHX](https://www.itrhx.com) 的这篇博客：[《Hexo 博客主题个性化》](https://www.itrhx.com/2018/08/27/A04-Hexo-blog-topic-personalization/)

内含卡片半透明、增加卡通人物、自定义鼠标样式、鼠标特效、烟花特效、彩色滚动字体、网站运行时间、动态浏览器标题、雪花飘落特效等多种详细教程。

## 使用CDN

对于大部分将博客deploy到GitHub的用户来说，直接加载本地资源速度比较慢，可以使用jsdelivr为开源项目提供的CDN服务。

### 开启方法

```yaml 站点配置文件
use_cdn: true
```

如果你需要对样式进行DIY，可以只关闭style文件的CDN。

```yaml 主题配置文件
info:
  name: Volantis
  version: 1.5.4
  docs: https://xaoxuu.com/wiki/volantis/
  cdn: # 要使用CDN，请在根目录的config文件中写上 use_cdn: true
    css:
      style: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@20.2.33/css/style.css
    js:
      app: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@20.2.33/js/app.js
      search: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@20.2.33/js/search.js
      valine: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-volantis@20.2.33/js/valine.js
```


### 自定义CDN

如果你把对应的文件上传到自己的CDN服务器，可以把对应的链接改为自己的CDN链接。


## 评论系统

### Disqus

官网： [https://disqus.com/](https://disqus.com/)


```yaml 站点配置文件
# disqus评论
disqus_shortname: #你的disqus的shortname#
```

### Gitalk

官网： [https://github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)

```yaml 站点配置文件
gitalk: 要使用哪个请复制到根目录配置文件！
  clientID: 你的clientID
  clientSecret: 你的clientSecret
  repo: 你的repo名
  owner: 你的GitHub名
  admin: [] 至少填写你的GitHub名
```

clientID和clientSecret的获取方法可自行搜索教程，这里仅简单描述一下步骤：
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

```yaml 站点配置文件
leancloud:
  app_id: 你的appId
  app_key: 你的appKey
```

```yaml 主题配置文件
valine:
  enable: true # 如果你想用Valine评论系统，请设置enable为true
  volantis: true # 是否启用volantis版本（禁止匿名，增加若干贴吧、QQ表情）
  # 还需要在根目录配置文件中添加下面这三行内容
  # leancloud:
  #   app_id: 你的appId
  #   app_key: 你的appKey
  guest_info: nick,mail,link #valine comment header info
  placeholder: 快来评论吧~ # valine comment input placeholder(like: Please leave your footprints )
  avatar: mp # gravatar style https://valine.js.org/avatar
  pageSize: 20 # comment list page size
  verify: false # valine verify code (true/false)
  notify: false # valine mail notify (true/false)
  lang: zh-cn
  highlight: false
```

其中，`placeholder` 支持在Front-matter中设置。

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

官网： [http://www.laibili.com.cn/](http://www.laibili.com.cn/)

```yaml 站点配置文件
# 来必力评论
livere_uid: #你的livere的uid
```

在这里查看你的uid：`https://livere.com/insight/myCode`，在【代码管理 -> 一般网站】中找到如下这段代码，其中 `data-uid` 中的内容就是你的 `livere_uid`。

```html
<!-- 来必力City版安装代码 -->
<div id="lv-container" data-id="city" data-uid="你的livere的uid">
...
```


## 安装「相关文章」插件

1. 安装插件

```sh
npm i S hexo-related-popular-posts
```

2. 在需要显示的位置添加`related_posts`

例如放在侧边栏：

```yaml 主题配置文件
layout:
  on_page:
    sidebar: [related_posts]
```

插件的自定义配置方法：https://github.com/tea3/hexo-related-popular-posts


## 分析与统计

默认支持并且开启 [不蒜子](http://busuanzi.ibruce.info/) 的访问统计，可以自行添加百度统计和Google Analytics。

### 字数和阅读时长

1. 安装以下插件：
  ```
  npm i --save hexo-wordcount
  ```
2. 然后修改配置文件，将 `wordcount` 写入需要显示的meta位置：
  ```yaml 主题配置文件
  # 布局
  layout:
    on_list:
      meta: [..., wordcount, ...]
    on_page:
      meta:
        header: [..., wordcount, ...]
        footer: [..., wordcount, ...]
  ```

### 百度统计

```yaml 站点配置文件
baidu_analytics_key: 百度统计的key
```


### Google Analytics

```yaml 站点配置文件
google_analytics_key: Google Analytics Key
```

### CNZZ统计

请参考ZYMIN网友的这篇教程：[《hexo+ejs+material x 添加CNZZ统计代码》](https://zymin.cn/arcticle/hexo+ejs+material.html)

### 网站运行时间等

请参考TRHX网友的这篇教程：[《Hexo 博客主题个性化》](https://itrhx.com/2018/08/27/A04-Hexo-blog-topic-personalization/)
