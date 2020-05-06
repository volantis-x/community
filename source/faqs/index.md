---
layout: page
title: FAQ「常见问题」
pid: faq
body: [article, comments]
meta:
  header: [title, author, updated]
sidebar: [news, docs-v2, repos, toc]
---

下述操作将协助您解决在使用过程中遇到的<u>任何</u>问题：

{% folding 主题文件（除了配置文件以外）未经任何修改，无法成功搭建博客 %}

此流程适用于直接使用主题搭建博客的用户，在仅仅修改了主题配置文件、Hexo配置文件、增加了自己的文章，这种情况下无法成功搭建或者部署的问题。

{% tabs help-1, 1 %}

<!-- tab 第一步 -->

1. 在 Volantis 文档右上角搜索关键词，查看是否有相关内容。
2. 在 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 中搜索关键词，查看是否有相关内容。

<!-- endtab -->

<!-- tab 第二步 -->

1. 下载 [本站源码](https://github.com/xaoxuu/volantis-docs/) ，然后下载 [主题源码](https://github.com/xaoxuu/hexo-theme-volantis/) 到 `themes/volantis` 。
2. 执行 `npm install` 安装依赖包。
3. 执行 `hexo s` 运行。

如果正常，请一步一步将配置文件修改为您原来的设定，直至找到出问题的地方。
如果依然不能运行，请检查 Hexo 环境配置，或者重新安装 Hexo 。

<!-- endtab -->

<!-- tab 第三步 -->

按照文档描述进行修改配置之后发生错误，可能是文档有误或者过时。可以在 issues 页面发帖求助，务必按照 issue 模板提供尽可能详细的信息，如果只写个标题，我们很难帮助您解决问题。

对应的 issue 模板类型： [Question Report](https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=new%2Cquestion&template=question-report.md)

<!-- endtab -->

{% endtabs %}

{% endfolding %}
{% folding 主题文件（ejs、js、css、第三方插件等）有修改，无法成功搭建博客 %}

此流程适用于 fork 主题并对主题文件（ejs、js、css 等）进行了修改后搭建博客的用户，无法成功搭建或者部署的问题。

{% tabs help-2, 1 %}

<!-- tab 问题定位 -->

1. 在 git 历史中新建分支还原修改，或者尝试直接下载本站源码和主题源码运行。
2. 如果未经修改可以正常搭建，请定位到自己修改的内容，查看是否有误。

<!-- endtab -->

<!-- tab 第三方插件 -->

如果是主题文档中提到过的第三方插件（意味着有主动兼容），遇到无法使用的情况，可以在 issues 页面新建 issue 详细描述您的问题。对应的 issue 模板类型： [Question Report](https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=new%2Cquestion&template=question-report.md)

如果是主题文档中没有提到过的第三方插件，可能存在没有兼容的情况，可以在 issues 页面新建 issue 请求兼容。对应的 issue 模板类型： [Feature Request](https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=new%2Csuggest&template=feature-request.md)

<!-- endtab -->

{% endtabs %}

{% endfolding %}
{% folding 有明确的 BUG 或者建议 %}

此流程适用于您已经定位到了问题的具体所在，不需要协助定位问题。希望开发者予以修正。

{% tabs help-3, 1 %}

<!-- tab 反馈 BUG -->

例如主题文档中也存在的问题，或者在指定的浏览器、平台，经过某个操作后确定可以复现的问题。请在 issues 页面新建 issue 进行反馈。对应的 issue 模板类型： [Bug Report](https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=new%2Cquestion&template=bug-report.md)

{% note warning, 反馈一个 BUG 需要按照 issue 模板提供尽可能详细的信息，如果只有一个标题或者一句话，我们无法进行复现的话，是无法解决问题的。 %}

<!-- endtab -->

<!-- tab 提交建议 -->

请在 issues 页面新建 issue 进行反馈。对应的 issue 模板类型： [Feature Request](https://github.com/xaoxuu/hexo-theme-volantis/issues/new?assignees=&labels=new%2Csuggest&template=feature-request.md)

<!-- endtab -->

{% endtabs %}

{% endfolding %}

<!-- more -->

通常来说，一个全新的工程全部使用默认配置是<green>正常</green>没有故障的。如果无法使用或者效果与示例有较大区别，可以使用 Hexo 官方提供的用于单元测试的博客应用本主题查看样式是否正常，对比 `_config.yml` 文件排查问题。

{% note warning yellow, Hexo 官方的单元测试项目： [https://github.com/hexojs/hexo-theme-unit-test](https://github.com/hexojs/hexo-theme-unit-test) %}

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

[Hexo官方文档](https://hexo.io) | [Valine官方文档](https://valine.js.org)

<img class='inline' src="https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/emoji/aru/161.png">请一定要阅读官方文档！

<img class='inline' src="https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/emoji/aru/161.png" style="width:100%">

{% endfolding %}
