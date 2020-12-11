---
layout: docs
title: 设置网站页脚
group: docs-volantis-latest
order: 304
short_title: 3-4 设置网站页脚
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /
---

您通过 `layout` 可以自由布局网站页脚内容 `aplayer`, `social`, `license`, `info`, `copyright`。
```yaml blog/_config.volantis.yml
site_footer:
  # layout of footer: [aplayer, social, license, info, copyright]
  layout: [aplayer, social, license, info, copyright]
  social:
    - icon: fas fa-rss
      url: atom.xml
    - icon: fas fa-envelope
      url: mailto:me@xaoxuu.com
    - icon: fab fa-github
      url: https://github.com/xaoxuu
    - icon: fas fa-headphones-alt
      url: https://music.163.com/#/user/home?id=63035382
  copyright: '[Copyright © 2017-2021 XXX](/)'
  # You can add your own property here. (Support markdown, for example: br: '<br>')
  br: '<br>'
```
其中，`aplayer` 需要在插件部分设置中启用。您可以新增文字属性，用于展示其它文字信息，例如：
```yaml blog/_config.volantis.yml
site_footer:
  layout: [..., br, hello, ...]
  ...
  # You can add your own property here. (Support markdown, for example: br: '<br>')
  br: '<br>'
  hello: '[Hello World](/)'
```
