---
layout: page
title: 页面自定义布局
group: docs-latest
order: 403
short_title: 4-3 页面自定义布局
sidebar: [docs-latest, toc, repos]
---

## 正文布局

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

如果想全局修改，在主题配置文件中的 `layout.on_page.body` 中设置。

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
顶部的为 `header`，底部的为 `footer`，取值见主题配置文件中的 meta 库。

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

## 居中标题模式

如果标题居中且下方不想显示任何 meta 信息，可以这样设置：

```yaml front-matter
---
meta:
 header: [centertitle]
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

## meta 区域显示外链按钮

例如当前文档页面的设置：

```yaml front-matter
---
meta:
 footer: [btns]
btns:
 repo: https://github.com/volantis-x/hexo-theme-volantis
 bug: https://github.com/volantis-x/hexo-theme-volantis/issues/
 doubt: https://github.com/volantis-x/hexo-theme-volantis/issues/
 idea: https://github.com/volantis-x/hexo-theme-volantis/issues/
---
```

按钮的颜色、图标、标题在主题配置文件中设置。

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

## 只显示留言板

如果你想创建一个只有留言板的页面

```yaml front-matter
---
body: [comments]
---
```
