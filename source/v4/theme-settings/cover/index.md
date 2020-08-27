---
layout: page
title: 网站与文章封面
group: docs-latest
order: 305
short_title: 3-5 网站与文章封面
sidebar: [docs-latest, toc, repos]
---

## 封面高度

```yaml blog/_config.volantis.yml
cover:
  height_scheme: full # full, half
  ...
```

目前主题提供两种首页封面高度方案，其它页面均为半屏幕高度。

## 封面布局方案

```yaml blog/_config.volantis.yml
cover:
  ...
  scheme: dock # search (搜索), dock (坞), featured (精选), focus (焦点)
  ...
```

| 布局方案 | 适合场景 |
| :-- | :-- |
| search | 注重搜索 |
| dock | 入口选项比较多 |
| featured | 选项在4个左右 |
| focus | 选项在4个左右 |



## 默认显示设置

```yaml blog/_config.volantis.yml
cover:
  ...
  display:
    home: true
    archive: false
    others: false # can be written in front-matter 'cover: true'
```

由于主页、归档是 hexo 自动生成的，您需要在主题配置文件中设置是否显示封面，而其它页面则可以在 `front-matter` 中通过设置 `cover: true/false` 来决定显示封面或者不显示封面。
