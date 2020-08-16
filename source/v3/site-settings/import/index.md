---
layout: page
group: docs-latest
order: 203
title: 导入外部文件
short_title: 2-3 导入外部文件
meta:
  header: [centertitle]
sidebar: [docs-latest, toc, repos]
---


## Import

可以在无需修改主题文件的情况下在 head 和 body 中添加各种标签。`meta` 和 `link` 对应 head 中的 `<meta>` 和 `<link>` 标签。`script` 可以在 body 末尾导入 js 文件。

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
```
