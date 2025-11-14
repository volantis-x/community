---
layout: docs
group: docs-v7
order: 201
title: 站点配置
short_title: 2. 站点配置
sidebar: [docs-v7, toc]
disqus:
  path: /
---

博客根目录下的 `_config.yml` 文件通常负责站点相关配置、第三方 npm 插件相关的配置。

## 网站标题

```yaml blog/_config.yml
# 网站标题
title: my blog
```

## 网站图标


{% tabs favicon, 2 %}

<!-- tab 简单方式 -->

```yaml blog/_config.yml
# 网站图标，更多尺寸等图标请使用 import 方式批量导入
favicon: https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/favicon/favicon.ico
```

<!-- endtab -->

<!-- tab 完全自定义 -->

```yaml blog/_config.yml
import:
  head_begin:
    - <meta name="msapplication-TileColor" content="#ffffff">
    - <meta name="msapplication-config" content="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/browserconfig.xml">
    - <meta name="theme-color" content="#ffffff">
    - <link rel="apple-touch-icon" sizes="180x180" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/apple-touch-icon.png">
    - <link rel="icon" type="image/png" sizes="32x32" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/favicon-32x32.png">
    - <link rel="icon" type="image/png" sizes="16x16" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/favicon-16x16.png">
    - <link rel="manifest" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/site.webmanifest">
    - <link rel="mask-icon" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/safari-pinned-tab.svg" color="#5bbad5">
    - <link rel="shortcut icon" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/favicon.ico">
    - <meta name="apple-mobile-web-app-title" content="Volantis">
    - <meta name="application-name" content="Volantis">
    - <meta name="msapplication-TileColor" content="#f4f4f4">
    - <meta name="msapplication-TileImage" content="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/favicon-32x32.png">
    - '<meta name="theme-color" content="#f4f4f4" media="(prefers-color-scheme: light)">'
    - '<meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)">'
  head_end:
  body_begin:
  body_end:
```

<!-- endtab -->

<!-- tab 文件导入 -->

```html blog/source/_volantis/headBegin.ejs
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-config" content="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/browserconfig.xml">
<meta name="theme-color" content="#ffffff">
<link rel="apple-touch-icon" sizes="180x180" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/favicon-16x16.png">
<link rel="manifest" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/site.webmanifest">
<link rel="mask-icon" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/favicon.ico">
<meta name="apple-mobile-web-app-title" content="Volantis">
<meta name="application-name" content="Volantis">
<meta name="msapplication-TileColor" content="#f4f4f4">
<meta name="msapplication-TileImage" content="https://unpkg.com/volantis-static@0.0.1649552113628/media/org.volantis/blog/favicon/favicon-32x32.png">
<meta name="theme-color" content="#f4f4f4" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)">
```
<!-- endtab -->

{% endtabs %}

## 多语言设置

```yaml blog/_config.yml
language:
  - zh-CN
  - en
  - zh-TW
```

对应的翻译文件路径： `themes/volantis/languages/`

## 导入外部文件

Volantis 用户可以在不修改主题文件的情况下向 head 和 body 中添加各种标签。

代码片段注入的位置：

- head_begin: 注入在 `<head>` 之后
- head_end: 注入在 `</head>` 之前
- body_begin: 注入在 `<body>` 之后
- body_end: 注入在 `</body>` 之前

```yaml blog/_config.yml
import:
  head_begin:
    - <meta name="theme-color" content="#ffffff">
  head_end:
    - <meta name="hello" content="world">
  body_begin:
    - <script></script>
  body_end:
    - <script></script>
```

如果您注入的内容较多，不方便放置在 _config.yml 文件内，你可以将其导入至文件中，对应结构为：

| 注入点     | 注入文件                             |
| ---------- | ------------------------------------ |
| head_begin | blog/source/_volantis/headBegin.ejs  |
| head_end   | blog/source/_volantis/headEnd.ejs    |
| body_begin | blog/source/_volantis/ bodyBegin.ejs |
| body_end   | blog/source/_volantis/bodyEnd.ejs    |


## 更多

{% link Hexo 官方文档 #配置::https://hexo.io/zh-cn/docs/configuration::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f4da.svg %}
