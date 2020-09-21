---
robots: noindex,nofollow
sitemap: false
layout: page
group: docs-v2
order: 2
title: 站点配置
short_title: 2. 站点配置
meta:
  header: [title, author, updated]
sidebar: [docs-v2, repos, toc]
snackbar: oldversion
---
 

如无特殊说明，本页面的配置信息写在 <u>**博客根目录**</u> 的 `_config.yml` 文件中。

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

## 更多配置

更多请见 Hexo 官方文档：[#Hexo配置](https://hexo.io/zh-cn/docs/configuration)
