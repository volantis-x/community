---
layout: page
title: front-matter
group: docs-v3
order: 402
short_title: 4-2 front-matter
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
---

## front-matter

front-matter 是文件最上方以 `---` 分隔的区域，用于指定个别文件的变量。更多请见 Hexo 官方文档：[#front-matter](https://hexo.io/zh-cn/docs/front-matter)

| 字段        | 含义         | 值类型        | 默认值 |
| :----------- | :------------ | :------------- | :------ |
| layout      | 布局模版     | String        | -      |
| title       | 页面标题         | String        | -      |
| seo_title       | 网页标题         | String        | page.title   |
| short_title       | 页面标题（在group列表中显示）         | String        | page.title   |
| date        | 创建时间     | Date          | 文件创建时间 |
| updated     | 更新日期     | Date          | 文件修改时间 |
| link   | 外部文章网址 | String        | -      |
| music       | 内部音乐控件 | [Object] | -      |
| robots    | robots   | String        | -      |
| keywords    | 页面关键词   | String        | -      |
| description | 页面描述、摘要     | String        | -      |
| cover | 是否显示封面     | Bool        | true      |
| meta | 文章或页面的meta信息     | Bool, Array        | theme.layout.*.meta      |
| sidebar | 页面侧边栏     | Bool, Array        | theme.layout.*.sidebar      |
| body | 页面主体元素     | Array        | theme.layout.on_page.body      |
| mathjax           | 是否渲染公式 | Bool, String  | false  |
| thumbnail           | 缩略图 | String | false  |
| icons           | 图标 | Array | []  |
| pin           | 是否置顶 | Bool  | false  |

`layout:post` 时特有的字段：

| 字段              | 含义         | 值类型        | 默认值 |
| :----------------- | :------------ | :------------- | :------ |
| author            | 文章作者     | [Object]        | config.author      |
| categories        | 分类         | String, Array | -      |
| tags               | 标签         | String, Array | -      |
| toc               | 是否生成目录 | Bool          | true   |

author

| 字段              | 含义         | 值类型        | 默认值 |
| :----------------- | :------------ | :------------- | :------ |
| name            | 作者名     | String        | config.author      |
| avatar        | 头像         | String | config.avatar      |
| url               | 链接         | String | config.url      |

music

| 字段              | 是否必须         | 值类型      |
| :----------------- | :------------ | :----------------- |
| server            | 是     | netease, tencent, kugou, xiami, baidu           |
| type        | 是         | song, playlist, album, search, artist  |
| id               | 是         | song id / playlist id / album id / search keyword   |


### 文章置顶

在 front-matter 中设置以下值：
```yaml front-matter
pin: true
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

在文章中插入 `<!-- more -->`，前面的部分即为摘要。

```yml 某篇文章源码
---
title: xxx
date: 2020-02-21
---

这是摘要

<!-- more -->

这是正文
```

{% note warning, **注意**： `<!-- more -->` 前后一定要有空行，不然可能导致显示错位。 %}

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

## 引入外部文章

利用 `link`，搭配自定义的文章作者信息，你可以在文章列表中显示外部文章或者网址，例如：

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
link: https://xaoxuu.com/blog/2017-07-05-hexo-blog/
---

![](https://img.vim-cn.com/d9/a9af7dc49fc0af8ca3e6dd2450a2f7095a87db.png)

```

## 置顶

对于任何文章或者页面，设置 `pin: true` 即可置顶在首页。

```yaml front-matter
---
pin: true
---
```

这会导致一个小问题：首页 post 卡片数量多于设定值，如果有强迫症希望每一个分页数量一致，可以安装插件来实现，详见：[#421](https://github.com/volantis-x/hexo-theme-volantis/issues/421)

## 不归档

存放在 `_posts` 文件夹下的文章一般都会出现在归档页，如果某篇文章不希望出现在归档页面：

```yaml front-matter
---
archive: false
---
```
