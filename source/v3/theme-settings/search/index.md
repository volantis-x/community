---
robots: noindex,nofollow
sitemap: false
layout: page
title: 站内搜索
group: docs-v3
order: 310
short_title: 3-10 站内搜索
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
---

{% noteblock red warning, 过期的文档 %}

这份文档是旧版本的，如果您使用的是新版的主题，请查看新版本的文档。

{% endnoteblock %}

```yaml blog/_config.volantis.yml
search:
  enable: true
  service: hexo  # hexo, google, algolia, azure, baidu
  js: https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@2.6.4/js/search.js
  google:
    apiKey:
    engineId:
  algolia:
    applicationID:
    apiKey:
    indexName:
  azure:
    serviceName:
    indexName:
    queryKey:
  baidu:
    apiId:
```
默认配置为 Hexo 搜索，但是需要安装插件才能使用：
```sh
npm i -S hexo-generator-search hexo-generator-json-content
```
