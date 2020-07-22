---
layout: page
title: 常见问题
pid: faq
body: [article, comments]
cover: true
meta:
  header: [title, author, updated]
sidebar: [news, docs-latest, repos, toc]
---

通常来说，一个全新的工程全部使用默认配置是<green>正常</green>没有故障的。如果无法使用或者效果与示例有较大区别，可以使用 Hexo 官方提供的用于单元测试的博客应用本主题查看样式是否正常，对比 `_config.yml` 文件排查问题。

{% note warning yellow, Hexo 官方的单元测试项目： [https://github.com/hexojs/hexo-theme-unit-test](https://github.com/hexojs/hexo-theme-unit-test) %}

<br>{% btn large center, 向开发者反馈问题, https://github.com/volantis-x/hexo-theme-volantis/issues/ , fas fa-paper-plane %}

<!-- more -->

## 如何更新主题

使用主题的时候，尽量 fork 主题到自己的 GitHub，然后进行修改并使用。这样做的好处是：当主题进行重要更新的时候可以根据需要拉取合并代码，使自己 DIY 的主题能够通过更新获取 BUG 修复或者新特性。

如果不懂请自行搜索关键词：<u>fork 更新</u>

## 无法成功运行本地预览

可能是没有安装依赖，请按照「开始」页面中的步骤进行安装，并安装所需依赖。

如果开启了某些第三方服务，请查看文档中是否要求安装插件。

如果报错信息有 `lastIndex`，你可以尝试把博客根目录配置文件中找到 `highlight`，并将 `auto_detect` 设置为 `false`。


## 主题配置修改没有生效

请确认文档中要求修改的是博客主目录的配置文件 `blog/_config.yml` 还是主题的配置文件 `blog/themes/volantis/_config.yml`。

## 主题样式修改没有生效

如果主题配置文件中开启了 cdn 服务，那么修改本地的样式是不会生效的，需要关闭 cdn 服务。

## 修改什么都没有生效

需要 `hexo clean` 然后重新 `hexo s`

如果安装了「相关文章推荐」插件后，每次修改 md 文件后都需要重新 `hexo s`

## 关掉 CDN 之后样式错乱

- 请前往文档「开始」页面，检查是否安装了必要的依赖包。

## 搜索无法使用

- 请前往文档「开始」页面，检查是否安装了必要的依赖包。
- 检查根目录配置文件是否有 `search` 字段冲突。
- 如果以上两步都无法找到问题，请下载示例源码进行对比。

## 搜索结果链接不正确

请检查根目录配置文件中的链接是否正确，如：

```yaml blog/_config.yml
url: https://xaoxuu.com
root: /
```

<br><br>

{% folding open, 教程与指南 %}

[Hexo 官方文档](https://hexo.io) | [Valine 官方文档](https://valine.js.org) | [Volantis Gitter 交流群](https://gitter.im/hexo-theme-volantis/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

请一定要阅读官方文档！

{% image https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/emoji/aru/161.png, 800px %}

{% endfolding %}
