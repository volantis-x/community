---
layout: docs
group: docs-volantis-latest
order: 201
title: 修改站点配置文件
short_title: 2-1 修改站点配置文件
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
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
# 网站图标，更多尺寸等图标请使用import方式批量导入
favicon: https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/favicon/favicon.ico
```

<!-- endtab -->

<!-- tab 完全自定义 -->

```yaml blog/_config.yml
import:
  meta:
    - <meta name="msapplication-TileColor" content="#ffffff">
    - <meta name="msapplication-config" content="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/browserconfig.xml">
    - <meta name="theme-color" content="#ffffff">
  link:
    - <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/apple-touch-icon.png">
    - <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/favicon-32x32.png">
    - <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/favicon-16x16.png">
    - <link rel="manifest" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/site.webmanifest">
    - <link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/safari-pinned-tab.svg" color="#5bbad5">
    - <link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/favicon.ico">
```

<!-- endtab -->

{% endtabs %}


## 多语言设置

```yaml blog/_config.yml
language:
  - zh-CN
  - en
  - zh-HK
  - zh-TW
```

对应的翻译文件路径： `themes/volantis/languages/`

## 使用 Import 导入外部文件

Volantis 用户可以在不修改主题文件的情况下向 head 和 body 中添加各种标签。`meta` 和 `link` 对应 head 中的 `<meta>` 和 `<link>` 标签。`script` 可以在 body 末尾导入 js 代码。

```yaml blog/_config.yml
import:
  meta:
    - <meta name="msapplication-TileColor" content="#ffffff">
    - <meta name="msapplication-config" content="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/browserconfig.xml">
    - <meta name="theme-color" content="#ffffff">
  link:
    - <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/apple-touch-icon.png">
    - <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/favicon-32x32.png">
    - <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/favicon-16x16.png">
    - <link rel="manifest" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/site.webmanifest">
    - <link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/safari-pinned-tab.svg" color="#5bbad5">
    - <link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/favicon/favicon.ico">
  script:
    - <script></script>
```

## 更多

{% link Hexo 官方文档 #配置, https://hexo.io/zh-cn/docs/configuration %}
