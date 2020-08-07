---
layout: page
title: 网站与文章封面
group: docs-latest
order: 304
short_title: 3-4 网站与文章封面
meta:
  header: [centertitle]
sidebar: [docs-latest, toc, repos]
---

## 封面方案

```yaml blog/themes/volantis/_config.yml
cover:
  scheme: docs # docs, blog
  ...
```

目前主题提供两种封面方案，全屏封面适用于项目文档，半屏封面适用于个人博客。您可以修改参数决定在任何页面是否显示。

## 封面布局

```yaml blog/themes/volantis/_config.yml
cover:
  ...
  layout: dock # search (搜索), dock (坞), featured (精选), focus (焦点)
  ...
```


## 默认显示设置

```yaml blog/themes/volantis/_config.yml
cover:
  ...
  display:
    home: true
    archive: false
    others: false # can be written in front-matter 'cover: true'
```

由于主页、归档是hexo自动生成的，您需要在主题配置文件中设置是否显示封面，而其它页面则可以在 `front-matter` 中通过设置 `cover: true/false` 来决定显示封面或者不显示封面。
