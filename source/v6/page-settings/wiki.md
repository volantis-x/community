---
layout: docs
title: Wiki 文档系统
sidebar: [docs-v6, toc]
---

Wiki 文档系统可以自动找到一个项目的所有文档分页，生成一个目录树，还可以手动指定顺序、标题、分组，而非依赖文件路径、文件名来排序和显示。

## 基本流程

{% timeline %}
<!-- node 1/3 创建项目描述文件 -->
在 `blog/source/_data/` 文件夹中创建一个 `wiki` 文件夹，在其中放入各个项目的文档。以官网为例，文件名就是项目的 `id`：
```yaml blog/source/_data/wiki/test-wiki-2.yml
name: test-wiki-2
title: test wiki 2
subtitle: 'test3 xxxxx zz vvvvv'
tags: [test]
description: test2 aaaa  bbbbb cccc  dddd  zzzzz
sidebar:
  - tree
  - related
base_dir: /test-page/test-wiki-2/
tree:
  'T1':
    - index
    - b
  'T2':
    - c
    - d
```

<!-- node 2/3 设置布局模板和项目名称 -->
在此文档项目的 `md` 文件的 `front-matter` 部分指定所属的项目 `id` （即上一步创建的文件名 `id.yml`）
```yaml blog/source/test-page/test-wiki-2/index.md
---
wiki: test-wiki-2 # 这是项目id，对应 /data/wiki/test-wiki-2.yml
title: 这是分页标题
---
```

<!-- node 3/3 将此项目「上架」 -->
在 `blog/source/_data/` 文件夹中创建一个 `wiki.yml` 文件，在其中写入需要显示的项目 `id`：

```yaml blog/source/_data/wiki.yml
- test-wiki-2
- 其它项目
```

这样在项目列表（wiki）页面就可以看到刚刚创建的项目了。

{% endtimeline %}

## 项目分页索引

指定项目所在文件夹和目录树：

```yaml blog/source/_data/wiki/test-wiki-2.yml
base_dir: /test-page/test-wiki-2/
tree:
  'T1':
    - index
    - b
  'T2':
    - c
    - d
```

如果目录树不需要分组，可以这样写：

```yaml blog/source/_data/wiki/hexo-stellar.yml
base_dir: /test-page/test-wiki-2/
tree:
  - index # 会被关联到 /test-page/test-wiki-2/index.md
  - b # 会被关联到 /test-page/test-wiki-2/b.md
  - ...
```



## 项目文档标签

如果您有很多项目，有些项目是有相关性的，可以相同的 `tags` 值：

```yaml blog/source/_data/wiki/test-wiki-2.yml
tags: 标签
```

也可以设置多个 `tags` 值：

```yaml blog/source/_data/wiki/test-wiki-2.yml
tags: [博客主题, 开源项目]
```



## 侧边栏组件

如果您希望自定义某个项目的侧边栏组件，可以设置 `sidebar` 值：

可以覆盖组件：
```yaml blog/source/_data/wiki/test-wiki-2.yml
sidebar:
  - tree
  - related
```


## 在目录树中隐藏某篇文章

可以在 `front-matter` 中不设置 `title` 标题，或者将 `title` 改为 `seo_title`：

```yaml blog/source/xxx/xxx.md
title: 原本的标题
```


