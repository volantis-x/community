---
layout: docs
title: 分组索引
sidebar: [docs-v6, toc]
---


这是 Volantis 自古早时期 2.6 版本一直存在的方法。


## 创建分组索引导航

```yaml blog/_config.volantis.yml
sidebar:
  widget_library:
    docs-v6:
      class: group
      display: [desktop, mobile]
      header:
        icon: fa-duotone fa-list-alt
        title: 文档导航 v6
```

## 创建分组索引页面

```yaml front-matter
---
layout: docs
title: 页面配置
short_title: 4.1 页面配置
group: docs-v6
order: 401
sidebar: [docs-v6, toc]
---
```

「docs-v6」侧边栏卡片将会以列表的形式显示所有设置了 group: docs-v6 的文章，顺序按照 order 从小到大排列。

## 创建分组索引列表页面


```yaml Create file if not exists: source/mylist/index.md
---
layout: list
group: docs-v6
index: true
---
```

结果就是筛选出所有文章中 `front-matter` 部分含有 `group: mylist` 的文章。



{% folding 相关文档 %}


{% link 如何使用文档系统::/v6/page-settings/wiki::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}



{% link 用文档系统制作一本简易笔记::/v6/page-settings/easy-note::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 实现完整的笔记体系::/v6/page-settings/notebooks::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 实现博客专栏/专题::/v6/page-settings/topic::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 分组索引::/v6/page-settings/group::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% endfolding %}




