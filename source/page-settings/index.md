---
layout: page
group: docs
title: 页面配置
cover: false
links:
  repo: https://github.com/xaoxuu/hexo-theme-volantis
  bug: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=BUG&template=bug-report.md
  doubt: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?labels=疑问&template=question-report.md
  idea: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=建议&template=feature-request.md
---

如无特殊说明，本页面的配置信息写在 <red>**页面**</red> 文件的 `front-matter` 中。

## 布局模板

| 取值  | 含义  |
| ----- | ----  |
| page | 独立页面 |
| post | 文章页面 |
| category | 分类页面 |
| tag | 标签页面 |
| links | 友链页面 |
| list | 列表页面（类似于首页的文章列表） |

## Front-matter

Front-matter 是文件最上方以 `---` 分隔的区域，用于指定个别文件的变量。【详见官方文档】

| 字段        | 含义         | 值类型        | 默认值 |
| ----------- | ------------ | ------------- | ------ |
| layout      | 布局模版     | String        | -      |
| title       | 标题         | String        | -      |
| date        | 创建时间     | Date          | 文件创建时间 |
| updated     | 更新日期     | Date          | 文件修改时间 |
| permalink   | 覆盖文章网址 | String        | -      |
| music       | 内部音乐控件 | 详见【music】 | -      |
| keywords    | 页面关键词   | String        | -      |
| description | 页面描述、摘要     | String        | -      |
| cover | 是否显示封面     | Bool        | true      |
| meta | 文章或页面的meta信息     | Bool, Array        | theme.layout.*.meta      |
| sidebar | 页面侧边栏     | Bool, Array        | theme.layout.*.sidebar      |
| body | 页面主体元素     | Array        | theme.layout.on_page.body      |

**layout=post时特有的字段：**

| 字段              | 含义         | 值类型        | 默认值 |
| ----------------- | ------------ | ------------- | ------ |
| author            | 文章作者     | -        | config.author      |
| categories        | 分类         | String, Array | -      |
| tags               | 标签         | String, Array | -      |
| toc               | 是否生成目录 | Bool          | true   |
| mathjax           | 是否渲染公式 | Bool, String  | false  |
| top           | 是否置顶 | Bool  | false  |
| thumbnail           | 缩略图 | String | false  |
| icons           | 图标 | Array | []  |

**author**

| 字段              | 含义         | 值类型        | 默认值 |
| ----------------- | ------------ | ------------- | ------ |
| name            | 作者名     | String        | config.author      |
| avatar        | 头像         | String | config.avatar      |
| url               | 链接         | String | config.url      |


> 更多请见Hexo官方文档：[front-matter](https://hexo.io/zh-cn/docs/front-matter)

## 独立页面

### 归档页面

归档页面是自动生成的，并且初始化的时候已经生成，路径如下：

```yaml 站点配置文件
# Directory
archive_dir: blog/archives
```

### 关于页面

```yaml 手动创建文件：source/about/index.md
---
layout: page
title: 关于
meta:
  header: []
  footer: []
sidebar: []
valine:
  placeholder: 有什么想对我说的呢？
---

下面写关于自己的内容

```

### 分类页面

```yaml 手动创建文件：source/categories/index.md
---
layout: category
index: true
title: 所有分类
---
```

### 标签页面

```yaml 手动创建文件：source/tags/index.md
---
layout: tag
index: true
title: 所有标签
---
```

### 列表页面

```yaml 手动创建文件：source/mylist/index.md
---
layout: list
group: mylist
index: true
---
```

结果就是筛选出所有文章中 `layout: post` 且 `group: mylist` 的文章。

> 上述中的 `mylist` 只是示例，你可以用任何名字作为一个列表。


### 友链页面

```yaml 手动创建文件：source/friends/index.md
---
layout: links     # 必须
title: 我的朋友们   # 可选，这是友链页的标题
links:
  - group: 技术大佬
    icon: fas fa-user-tie
    items:
    - name:     # 博客名
      avatar:   # 头像链接
      url:      # 博客链接
      backgroundColor: '#3E74C9' # 卡片背景颜色
      textColor: '#fff'  # 卡片文字颜色
      tags:     # 标签
      - 标签1
      - 标签2
  - group: 分组2
    icon: fas fa-user-tie
    items:
    - name:     # 博客名
      avatar:   # 头像链接
      url:      # 博客链接
      backgroundColor: '#3E74C9' # 卡片背景颜色
      textColor: '#fff'  # 卡片文字颜色
      tags:     # 标签
      - 标签1
      - 标签2
---

这里可以写友链页面下方的文字备注，例如自己的友链规范、示例等。

```


### 404页面

```yaml 手动创建文件：source/404.md
---
layout: page
title: 404 Not Found
body: [article, comments]
meta:
  header: []
  footer: []
sidebar: []
valine:
  path: /404.html
  placeholder: 请留言告诉我您要访问哪个页面找不到了
---

<center>
<h1 style='border-bottom: none;font-size:64px;margin-top:.5em'>404</h1>

<b>很抱歉，您访问的页面不存在</b>

可能是输入地址有误或该地址已被删除

</center>
```

## 页面元素排列

默认是文章+评论：
```yaml front-matter
---
body: [article, comments]
---
```

如果你想把相关文章卡片显示在评论前，可以这样写：
```yaml front-matter
---
body: [article, related_posts, comments]
---
```

如果想全局修改，在主题配置文件中的`layout.on_page.body`中设置。

## 文章属性

### 文章置顶

在Front-matter中设置以下值：
```yaml front-matter
top: true
```

如果想自定义置顶标签的文字，可以直接设置为字符串，例如：
```yaml front-matter
top: 近期更新
```

### 文章分类

多个分类有两种关系，一种是层级（等同于文件夹），一种是并列（等同于标签）。

多级分类：
```yaml front-matter
---
categories: [分类A, 分类B]
---
```
或者

```yaml front-matter
---
categories:
  - 分类A
  - 分类B
---
```

并列分类

```yaml front-matter
categories:
  - [分类A]
  - [分类B]
```

多级+并列分类

```yaml front-matter
categories:
  - [分类A, 分类B]
  - [分类C, 分类D]
```



### 文章摘要

在文章中插入`<!-- more -->`，前面的部分即为摘要。

```yml 某篇文章源码
---
title: xxx
date: 2020-02-21
---

这是摘要

<!-- more -->

这是正文
```

::: warning
**注意**： `<!-- more -->` 前后一定要有空行，不然可能导致显示错位。
:::

### 是否开启渲染MathJax


| 取值  | 含义  |
| ----- | ----  |
| false | 不渲染，默认值 |
| true | 渲染 |
| internal | 只在文章内部渲染，文章列表中不渲染 |

```yaml front-matter
---
mathjax: true
---
```

> 如果公式仍无法正确渲染可以阅读@MicDZ大神的这篇文章：[《在material-x上使用KaTeX》](https://www.micdz.cn/article/katex-on-volantis/)。



### 设置文章作者

由于支持多作者共同维护一个博客，所以可以设置单独一篇文章的作者：
```yaml front-matter
---
author:
  name: 作者
  avatar: https://img.vim-cn.com/a1/d53c11fb5d4fd69529bc805d385fe818feb3f6.png
  url: https://baidu.com
---
```


## 显示迷你音乐播放器

标题右边显示迷你音乐播放器，支持的字段有：`server`、`type`、`id`。

```yaml front-matter
---
music:
  server: netease   # netease, tencent, kugou, xiami, baidu
  type: song        # song, playlist, album, search, artist
  id: 26664345      # song id / playlist id / album id / search keyword
---
```

> 实际效果见： https://xaoxuu.com/friends/
> APlayer配置： https://github.com/metowolf/MetingJS


## 显示meta标签

文章顶部和底部的日期、分类、更新日期、标签、分享等属于meta标签。
顶部的为`header`，底部的为`footer`，取值见主题配置文件中的meta库。

```yaml front-matter
---
# 默认的meta信息，文章中没有配置则按照这里的配置来显示，设置为false则不显示
# 其中，title只在header中有效，music和thumbnail无需在这里设置，文章中有则显示
# 如果tags放置在meta.header中，那么在post列表中不显示（因为卡片下方已经有了）
meta:
  header: [title, author, date, category, counter, top]
  footer: [updated, tags, share]
---
```
像404、关于页面就可以完全隐藏：

```yaml front-matter
---
meta:
  header: []
  footer: []
---
```

## 标题右边显示缩略图

```yaml front-matter
---
thumbnail: https://img.vim-cn.com/17/0c7b02722686d1527a1df807dae0794d995860.png
---
```

缩略图仅在文章列表和文章页面显示，不会在归档页面显示。

## 标题右边显示图标

```yaml front-matter
---
icons: [fas fa-fire red, fas fa-star green]
---
```

图标仅在归档页面中显示，可以用来标注热门文章。

::: info
可以通过 red/blue/green/yellow/orange/theme/accent 来设置图标的颜色
theme为主题色: @theme_main
accent为链接高亮颜色: @color_text_highlight
:::

## meta区显示外链按钮

例如当前文档页面的设置：

```yaml front-matter
---
meta:
  footer: [links]
links:
  repo: https://github.com/xaoxuu/hexo-theme-volantis
  bug: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=BUG&template=bug-report.md
  doubt: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?labels=疑问&template=question-report.md
  idea: https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=建议&template=feature-request.md
---
```

按钮的颜色、图标、标题在主题配置文件中设置。

## 是否要显示封面

如果某个页面不需要封面，可以这样写：
```yaml front-matter
---
cover: false
---
```


## 引入外部文章

利用 `permalink`，搭配自定义的文章作者信息，你可以在文章列表中显示外部文章或者网址，例如：

```yaml front-matter
---
layout:     post
date:       2017-07-05
title:      [转]如何搭建基于Hexo的独立博客
categories: [Dev, Hexo]
tags:
  - Hexo
author:
  name: xaoxuu
  avatar: https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png
  url: https://xaoxuu.com
permalink: https://xaoxuu.com/blog/2017-07-05-hexo-blog/
---

![](https://img.vim-cn.com/d9/a9af7dc49fc0af8ca3e6dd2450a2f7095a87db.png)

```

## 显示侧边栏

通过自由设置边栏卡片来删减对应页面的冗余信息，提高有价值的信息在页面中的权重。

如果某个页面不需要侧边栏，可以这样写：
```yaml front-matter
---
sidebar: []
---
```

某个页面想指定显示某几个侧边栏，就这样写:
```yaml front-matter
---
sidebar: [grid, toc, tags] # 放置任何你想要显示的侧边栏部件
---
```

## 关闭评论

可以
```yaml front-matter
---
comments: false
---
```

也可以
```yaml front-matter
---
body: [article]
---
```

## 只显示留言板

如果你想创建一个只有留言板的页面

```yaml front-matter
---
body: [comments]
---
```
