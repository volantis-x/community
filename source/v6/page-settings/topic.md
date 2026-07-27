---
layout: docs
title: 实现博客专栏/专题
sidebar: [docs-v6, toc]
---


如果你使用过 wiki 系统，那么专栏就非常容易了，相当于一个简化版的 wiki 系统，区别是：

- 无需「上架」动作
- 文章创建于 `blog/source/_posts` 文件夹内
- 按照时间排序，默认最新的排最上面
- 页面布局类似于普通文章

## 基本流程

### 1. 创建一个专栏

在 `blog/source/_data/` 文件夹中创建一个 `topic` 文件夹，在其中放入各个专栏的描述文件，文件名就是项目的 `id`：

```yaml blog/source/_data/topic/id.yml
name: A专题
title: 专栏标题A
subtitle: 专栏副标题A
description: 这是专栏A的简介
icon: 
svg: <svg …html…>
```

### 2. 发布文章

在此专栏文章的 `md` 文件的 `front-matter` 部分指定所属的专栏 `id` （即上一步创建的文件名 `id.yml`）

```yaml blog/source/_posts/20240114.md
---
title: 这是文章标题
topic: id # 这是专栏id，对应 blog/source/_data/topic/id.yml
---

文章正文
```

## 这个功能的定位是什么？

相比分类功能，它更偏向于一个更加有前后关系的文章集合，类似于文档的分页，但是相比文档，它又像文章一样持续增加新页面，一般以时间为排序依据。比分类更加结构化，比文档更加自动化，可以根据自己的需求选择使用不同的功能。

{% link https://xaoxuu.com/blog/20240203/ %}




{% folding 相关文档 %}


{% link 如何使用文档系统::/v6/page-settings/wiki::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}



{% link 用文档系统制作一本简易笔记::/v6/page-settings/easy-note::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 实现完整的笔记体系::/v6/page-settings/notebooks::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 实现博客专栏/专题::/v6/page-settings/topic::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 分组索引::/v6/page-settings/group::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% endfolding %}




