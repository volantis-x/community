---
layout: page
group: docs
title: Site Settings「站点配置」
meta:
  header: [title, author, updated]
---

如无特殊说明，本页面的配置信息写在 <red>**博客根目录**</red> 的 `_config.yml` 文件中。

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
  - "<meta name='theme-color' content='#FFFFFF'>"
  - "<meta name='msapplication-TileColor' content='#1BC3FB'>"
  - "<meta name='msapplication-config' content='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.6/browserconfig.xml'>"
  link:
  - "<link rel='shortcut icon' type='image/x-icon' href='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.6/favicon.ico'>"
  - "<link rel='icon' type='image/x-icon' sizes='32x32' href='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.6/favicon-32x32.png'>"
  - "<link rel='apple-touch-icon' type='image/png' sizes='180x180' href='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.6/apple-touch-icon.png'>"
  - "<link rel='mask-icon' color='#1BC3FB' href='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.6/safari-pinned-tab.svg'>"
  - "<link rel='manifest' href='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-favicon@19.9.6/site.webmanifest'>"
```

<!-- endtab -->

{% endtabs %}


## Import

可以在无需修改主题文件的情况下在 head 和 body 中添加各种标签。`meta` 和 `link` 对应 head 中的 `<meta>` 和 `<link>` 标签。`script` 可以在 body 末尾导入 js 文件。

```yaml blog/_config.yml
import:
  meta:
  - "<meta name='theme-color' content='#FFFFFF'>"
  - "<meta name='msapplication-TileColor' content='#1BC3FB'>"
  - "<meta name='msapplication-config' content='https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/favicon/favicons/browserconfig.xml'>"
  link:
  - "<link rel='shortcut icon' type='image/x-icon' href='https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/favicon/favicon.ico'>"
  - "<link rel='icon' type='image/x-icon' sizes='32x32' href='https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/favicon/favicons/favicon-32x32.png'>"
  - "<link rel='apple-touch-icon' type='image/png' sizes='180x180' href='https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/favicon/favicons/apple-touch-icon.png'>"
  - "<link rel='mask-icon' color='#1BC3FB' href='https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/favicon/favicons/safari-pinned-tab.svg'>"
  - "<link rel='manifest' href='https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/favicon/favicons/site.webmanifest'>"
  script:
```

## 更多配置

更多请见 Hexo 官方文档：[#Hexo配置](https://hexo.io/zh-cn/docs/configuration)
