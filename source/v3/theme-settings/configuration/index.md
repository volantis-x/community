---
robots: noindex,nofollow
sitemap: false
layout: page
group: docs-v3
order: 301
title: 主题配置文件
short_title: 3-1 主题配置文件
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
snackbar: oldversion
---


## 使用代替主题配置文件

{% timeline %}

{% timenode 第 1/2 步：找到原主题配置文件 %}

- 使用 `npm i hexo-theme-volantis` 方式安装的主题，配置文件在 `blog/node_modules/hexo-theme-volantis/_config.yml`
- 使用传统方式安装的主题，配置文件在 `blog/themes/volantis/_config.yml`

{% endtimenode %}

{% timenode 第 2/2 步：复制主题配置文件 %}

将主题配置文件复制并重命名到以下路径：
```
blog/_config.volantis.yml
```

{% endtimenode %}

{% endtimeline %}
