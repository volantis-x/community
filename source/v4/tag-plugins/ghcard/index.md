---
layout: docs
title: 'tag-plugins: ghcard'
sidebar: [docs-latest, toc]
---

GitHub 卡片 API 参数： https://github-readme-stats.vercel.app

```md 最后更新于 <u>4.0</u> 版本
{% ghcard 用户名, 其它参数（可选） %}
{% ghcard 用户名/仓库, 其它参数（可选） %}
```

## 演示效果

{% ghcard xaoxuu %}
{% ghcard xaoxuu, theme=vue %}
{% ghcard volantis-x/hexo-theme-volantis %}
{% ghcard volantis-x/hexo-theme-volantis, theme=vue %}

## 上述示例的源码

```md example:
{% ghcard xaoxuu %}
{% ghcard xaoxuu, theme=vue %}
{% ghcard volantis-x/hexo-theme-volantis %}
{% ghcard volantis-x/hexo-theme-volantis, theme=vue %}
```
