---
layout: page
title: 默认的 SEO 配置
group: docs-latest
order: 311
short_title: 3-11 默认的 SEO 配置
meta:
  header: [centertitle]
sidebar: [docs-latest, toc, repos]
---

```yaml blog/themes/volantis/_config.yml
seo:
  # When there are no keywords in the article's front-matter, use tags as keywords.
  use_tags_as_keywords: true
  # When there is no description in the article's front-matter, use excerpt as the description.
  use_excerpt_as_description: true
  robots:
    home_first_page: index,follow
    home_other_pages: noindex,follow
    archive: noindex,follow
    category: noindex,follow
    tag: noindex,follow
    # robots can be written in front-matter
```
这部分一般不需要修改。
