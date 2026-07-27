---
layout: docs
title: 分组索引
sidebar: [docs-v6, toc]
---


这是 Volantis 自古早时期一直存在的方法。


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

## 创建分组索引列表页面


```yaml Create file if not exists: source/mylist/index.md
---
layout: list
group: docs-v6
index: true
---
```

结果就是筛选出所有文章中 `front-matter` 部分含有 `group: mylist` 的文章。



