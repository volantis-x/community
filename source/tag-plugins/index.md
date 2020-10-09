---
layout: docs
group: docs-volantis-latest
order: 501
title: 内置标签插件
short_title: 5-1 内置标签插件 (x23)
sidebar: [repos, docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---

## Volantis 专用标签

### 文本类

{% linkgroup %}
{% link 行内文本样式, text %}
{% link 行内文本, span %}
{% link 段落文本, p %}
{% link 引用, note %}
{% link 引用块, noteblock %}
{% link 复选列表, checkbox %}
{% link 单选列表, radio %}
{% link 时间线, timeline %}
{% endlinkgroup %}

### 链接、按钮、菜单

{% linkgroup %}
{% link 链接卡片, link %}
{% link 按钮, button %}
{% link GitHub 卡片, ghcard %}
{% link 网站卡片, site %}
{% link 网站卡片, dropmenu %}
{% endlinkgroup %}


### 容器类

{% linkgroup %}
{% link 分栏, tab %}
{% link 折叠框, folding %}
{% endlinkgroup %}


### 多媒体类

{% linkgroup %}
{% link 行内图片, inlineimage %}
{% link 单张图片, image %}
{% link 相册、组图, gallery %}
{% link 音频, audio %}
{% link 视频, video %}
{% link 带框架的图片视频, frame %}
{% link 音乐播放器, aplayer %}
{% endlinkgroup %}

### 数据集合类

{% linkgroup %}
{% link Issues API, issues %}
{% endlinkgroup %}


## Hexo 通用标签

在文章中使用 `<!-- more -->`，那么 `<!-- more -->` 之前的文字将会被视为摘要。首页中将只出现这部分文字，同时这部分文字也会出现在正文之中。详见 Hexo 官方文档：

{% link Hexo 官方文档 #标签插件, https://hexo.io/zh-cn/docs/tag-plugins %}
