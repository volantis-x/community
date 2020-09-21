---
robots: noindex,nofollow
sitemap: false
layout: page
title: 设置默认布局
group: docs-v3
order: 306
short_title: 3-6 设置默认布局
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
---

{% noteblock red warning, 过期的文档 %}

这份文档是旧版本的，如果您使用的是新版的主题，请查看新版本的文档。

{% endnoteblock %}

您可以自由决定每个页面是否显示侧边栏，侧边栏显示什么小部件，正文区域显示什么卡片，文章卡片显示什么 meta 信息。
```yaml
layout:
  # The following can be written in `blog/source/_data/layout.yml`
  # 文章列表（主页、自定义的列表）布局
  on_list:
    # 列表中每一篇文章的meta信息
    meta: [title, author, date, category, top]
    # 列表类页面的侧边栏
    sidebar: [blogger, category, tagcloud, qrcode]
  # 页面布局
  on_page:
    # 文章页面主体元素，你也可以在页面的Front-matter中设置
    body: [article, comments]
    # 默认的meta信息，文章中没有配置则按照这里的配置来显示，设置为false则不显示
    # 其中，title只在header中有效，music和thumbnail无需在这里设置，文章中有则显示
    # 如果tags放置在meta.header中，那么在post列表中不显示（因为卡片下方已经有了）
    meta:
      header: [title, author, category, date, top]
      footer: [updated, tags, btns, share]
    # 文章页面的侧边栏
    sidebar: [qrcode, toc]
  # 文章布局，参数继承自 on_page
  on_post:
    # 文章页脚，自动在每一篇文章末尾添加
    article_footer: [copyright, donate]
  # 其他的页面布局暂时等于 on_list
```
其中 `meta` 部分的取值自 `meta` 库， 其余部分取值自 `widget` 库， （ `body` 除了可以从 `widget` 库中取值外，还可以选择 `article` 和 `comments` ）。

请别着急，具体的库配置将在下文详细讲解。
