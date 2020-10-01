---
layout: docs
title: 页面自定义布局
group: docs-volantis-latest
order: 403
short_title: 4-3 页面自定义布局
sidebar: [repos, docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---

## 显示迷你音乐播放器

标题右边显示迷你音乐播放器，支持的字段有：`server`、`type`、`id`。

```yaml front-matter
---
music:
 server: netease   # netease, tencent, kugou, xiami, baidu
 type: song        # song, playlist, album, search, artist
 id: 16846091      # song id / playlist id / album id / search keyword
---
```

{% note play, 实际效果见： [#contributors](/contributors/) %}

## 显示 meta 标签

文章顶部和底部的日期、分类、更新日期、标签、分享等属于 meta 标签。

```yaml front-matter
---
top_meta: false
bottom_meta: false
---
```
如果一个页面没有 title 则不会显示 top_meta ，像404、关于页面就可以完全隐藏：

```yaml front-matter
---
seo_title: 关于
top_meta: false
bottom_meta: false
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

{% note info, 可以通过 red / blue / green / yellow / orange / theme / accent 来设置图标的颜色 %}


## 是否要显示封面

如果某个页面需要封面，可以这样写：
```yaml front-matter
---
cover: true
---
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

```yaml front-matter
---
comments: false
---
```
