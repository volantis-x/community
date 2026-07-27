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
