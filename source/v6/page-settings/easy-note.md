---
layout: docs
title: 用 wiki 文档系统制作一本简易笔记
sidebar: [docs-v6, toc]
---

以官网为例

## 创建描述文件

```yaml blog/source/_data/wiki/explore.yml
name: 备忘录
title: 备忘录
name: 探索
title: 探索者的笔记本
base_dir: /

tree:
  '探索者的笔记本':
    - test-page/explore/index
    - test-page/bookmark/index
```

## 设置 front-matter

然后笔记页面的 `front-matter` 中指定：

```yaml blog/source/test-page/explore/index.md
---
wiki: explore # 这个跟上面的 /wiki/explore.yml 关联起来
---
```

这样就可以啦～


{% folding 相关文档 %}


{% link 如何使用文档系统::/v6/page-settings/wiki::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}



{% link 用文档系统制作一本简易笔记::/v6/page-settings/easy-note::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 实现完整的笔记体系::/v6/page-settings/notebooks::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 实现博客专栏/专题::/v6/page-settings/topic::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% link 分组索引::/v6/page-settings/group::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


{% endfolding %}




