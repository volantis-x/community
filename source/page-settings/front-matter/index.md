---
layout: docs
title: front-matter
group: docs-volantis-latest
order: 402
short_title: 4-2 front-matter
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /
---

## front-matter

front-matter 是文件最上方以 `---` 分隔的区域，用于指定个别文件的变量。更多请见 Hexo 官方文档：[#front-matter](https://hexo.io/zh-cn/docs/front-matter)

{% table %}
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
| top_meta | 是否显示文章或页面顶部的meta信息     | Bool        | true      |
| bottom_meta | 是否显示文章或页面底部的meta信息     | Bool        | true      |
| sidebar | 页面侧边栏     | Bool, Array        | theme.layout.*.sidebar      |
| body | 页面主体元素     | Array        | theme.layout.on_page.body      |
| mathjax           | 是否渲染公式 | Bool, String  | false  |
| thumbnail           | 缩略图 | String | false  |
| icons           | 图标 | Array | []  |
| pin           | 是否置顶 | Bool  | false  |
{% endtable %}

`layout:post` 时特有的字段：

{% table %}
| 字段              | 含义         | 值类型        | 默认值 |
| :----------------- | :------------ | :------------- | :------ |
| author            | 文章作者     | [Object]        | config.author      |
| categories        | 分类         | String, Array | -      |
| tags               | 标签         | String, Array | -      |
| toc               | 是否生成目录 | Bool          | true   |
{% endtable %}

music

{% table %}
| 字段              | 是否必须         | 值类型      |
| :----------------- | :------------ | :----------------- |
| server            | 是     | netease, tencent, kugou, xiami, baidu           |
| type        | 是         | song, playlist, album, search, artist  |
| id               | 是         | song id / playlist id / album id / search keyword   |
{% endtable %}

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

Volantis 支持多作者，其他作者信息需要写在数据文件中，例如：

```yaml blog/source/_data/author.yml
Jon:
  name: Jon Snow
  avatar: https://cn.bing.com/th?id=AMMS_fc8f99fd41ebd737a71c4e13806db9a0&w=110&h=110&c=7&rs=1&qlt=80&pcl=f9f9f9&cdv=1&dpr=2&pid=16.1
  url: https://gameofthrones.fandom.com/wiki/Jon_Snow
Dany:
  name: Daenerys Targaryen
  avatar: https://tse1-mm.cn.bing.net/th?id=OIP.Yax4wLzIFbcBVUa_RsKywQHaLH&w=80&h=80&c=8&rs=1&qlt=90&dpr=2&pid=3.1&rm=2
  url: https://gameofthrones.fandom.com/wiki/Daenerys_Targaryen
```

在文章的 front-matter 中新增 `author` 即可：

```yaml front-matter
---
title: Jon Snow | Game of Thrones Wiki | Fandom
author: Jon
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
