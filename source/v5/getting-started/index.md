---
layout: docs
seo_title: 开始使用
short_title: 1. 开始使用
group: docs-volantis-latest
order: 1
sidebar: [docs-volantis-latest, toc]
description: Volantis 是一个功能丰富、高度模块化的 Hexo 博客主题。得益于其强大的模块化特性，您可以轻松搭建一个极简风格的博客，也可以仿照官网搭建一个多人协作的、包含文档模块的大体量综合型博客。
---

<p>
{% span logo center large, <sup>&ensp;</sup>Volantis<sup>5</sup> %}
{% span center small logo, A Wonderful Theme for Hexo %}
</p>
<br>

**[Volantis](https://volantis.js.org) 是一个功能丰富、高度模块化的 Hexo 博客主题。得益于其强大的模块化特性，您可以轻松搭建一个极简风格的博客，也可以仿照官网搭建一个多人协作的、包含文档模块的大体量综合型博客。**

{% link 示例博客::/examples/::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}

所有的 Volantis 用户都可以按照格式自行创建 [**Issue**](https://github.com/volantis-x/examples/issues/) 来将自己的博客添加到官网的示例博客页面中。

## 准备工作


{% tabs prepare, 1 %}

<!-- tab 能力条件 -->

自建博客需要一定的相关知识，在开始前，请{% u 务必 %}确保您会使用 [markdown](https://www.runoob.com/markdown/md-tutorial.html) 语法，掌握简单的 git 知识，最最重要的是，遇到困难知道该怎么寻求解决：

1. 翻阅和搜索文档
2. 搜索 issues 中是否有解决办法
3. 新建 issue 并按照要求进行操作，详尽地描述您遇到的问题

如果您没有使用过 Hexo 也不要着急，可以先通读一遍 [Hexo](https://hexo.io/zh-cn/docs/) 中文文档，要想使用地得心应手，最好参照团队提供的开源项目的源码进行搭建：

[Demo 源码](https://github.com/volantis-x/demo) ｜ [官网源码](https://github.com/volantis-x/volantis-docs)

<!-- endtab -->

<!-- tab 环境配置条件 -->

如果您从旧版本更新或着其它主题迁移，请确保环境版本不要太低，否则会产生兼容性问题。

```yaml
Hexo: 5.4 ~ 6.x
hexo-cli: 4.3 ~ latest
node.js: 16.x LTS ~ latest LTS
npm: 8.x ~ latest LTS
```

<!-- endtab -->

{% endtabs %}

{% note info :: 配置和使用 volantis 5.x 之前请确保 node.js 升级至 <emp>v16.x 及以上</emp>版本！ %}


{% link FAQ List For Volantis 5::/v5/faq/::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1fa82.svg %}

## 快速体验

如果您已经具备环境配置条件，可以在终端中输入下面这行代码，稍等片刻即可尝鲜体验：

```bash
git clone https://github.com/volantis-x/demo.git && cd demo && npm i && hexo s
```


## 下载与安装

{% note radiation yellow :: volantis 5.x 目前正处于 「stable 阶段」 volantis 4.x 目前正处于 「EOL(End of Life) 阶段」 %}

{% folding green:: Tips: volantis 开发发布周期 %}

{% note info :: volantis 开发发布周期依次经过: 「alpha 阶段」=>「beta 阶段」=>「rc 阶段」=>「stable 阶段」=>「EOL 阶段」 %}

{% note guide clear :: rc 阶段的测试版本和 stable 阶段的正式版本 我们统称为 「稳定版本」 , 只有 「稳定版本」 发布到 [npm](https://www.npmjs.com/package/hexo-theme-volantis) %}

{% note bug danger :: alpha 阶段的开发测试版本 和 beta 阶段的测试版本 我们统称为 「小白鼠测试版本」, 「小白鼠测试版本」 仅存在于 [Github 仓库的 dev 分支](https://github.com/volantis-x/hexo-theme-volantis/tree/dev) %}

{% endfolding %}

{% folding green::安装或更新 「稳定版本」 (rc 阶段的测试版本 或 stable 阶段的正式版本) %}

{% tabs install, 1 %}

<!-- tab 全新博客安装 -->

{% timenode 第 1/2 步：修改站点配置文件 %}

在 `blog/_config.yml` 文件中找到并修改：

```
theme: volantis
```

{% endtimenode %}

{% timenode 第 2/2 步：下载主题 %}

在终端中输入：

```
npm i hexo-theme-volantis
```

{% endtimenode %}

{% folding, 如果您是 Mac 用户，可以使用脚本完成全部流程 %}

在博客路径打开终端，下载安装并应用主题：

```
curl -s https://volantis.js.org/start | bash
```

这行命令将会自动检测并安装所需环境，初始化博客，然后下载安装并应用主题。
脚本详细使用方法：[#hexo.sh](https://xaoxuu.com/wiki/hexo.sh/)

{% endfolding %}

<!-- endtab -->

<!-- tab 从其它主题迁移 -->

{% timenode 第 1/3 步：修改站点配置文件 %}

在 `blog/_config.yml` 文件中找到并修改：

```
theme: volantis
```

{% endtimenode %}

{% timenode 第 2/3 步：下载主题 %}

如果您已经升级到 `Hexo 5.0.2` 及以上，可以直接使用 `npm` 命令安装：

```
npm i hexo-theme-volantis
```

对于旧版本，需要下载主题源码到 `themes/` 文件夹：

```
git clone https://github.com/volantis-x/hexo-theme-volantis themes/volantis
```

如果您无法访问 GitHub 可以使用国内镜像源：

```
git clone https://e.coding.net/volantis-x/p/hexo-theme-volantis.git themes/volantis
```

{% endtimenode %}

{% timenode 第 3/3 步：检查并安装依赖 %}

安装 Hexo 搜索的依赖包：

```
npm i hexo-generator-json-content
```

安装 Stylus 渲染器：

```
npm i hexo-renderer-stylus
```

{% endtimenode %}

<!-- endtab -->

{% endtabs %}

{% endfolding %}

{% folding red::安装或更新 「小白鼠测试版本」 (alpha 阶段的开发测试版本 或 beta 阶段的测试版本) %}
{% timenode 第 1/3 步：修改站点配置文件 %}

在 `blog/_config.yml` 文件中找到并修改：

```
theme: volantis
```

{% endtimenode %}

{% timenode 第 2/3 步：将主题仓库添加为子模块 %}

{% folding yellow open, 将主题添加为子模块 %}

{% note warning:: 开始前需要确认不存在 themes/volantis 文件夹, 如果有, 请自行删除. %}

{% tabs 子模块 %}

<!-- tab ssh -->

```sh
git submodule add git@github.com:volantis-x/hexo-theme-volantis.git themes/volantis
```

<!-- endtab -->
<!-- tab https -->

```sh
git submodule add https://github.com/volantis-x/hexo-theme-volantis.git themes/volantis
```

<!-- endtab -->
{% endtabs %}

{% endfolding %}


{% endtimenode %}
{% timenode 第 3/3 步：将主题仓库切换为 dev 分支 %}

在终端中输入：

```
cd themes/volantis
git checkout dev
```

{% endtimenode %}
{% timenode 第 n/n 步：更新主题 %}

在终端中输入：

```
git pull
```

{% endtimenode %}
{% endfolding %}

## 版本更新注意事项

使用主题的时候，尽量 fork 主题到自己的 GitHub，然后进行修改并使用。这样做的好处是：当主题进行重要更新的时候可以根据需要拉取合并代码，使自己 DIY 的主题能够通过更新获取 BUG 修复或者新特性。

如果不懂请自行搜索关键词：<u>fork 更新</u>

{% noteblock idea, 实用小技巧 %}

所有需要写在主题配置文件中的配置都可以写在站点配置文件的 `theme_config:` 中，在 {% u Hexo 5.0 %} 后，还可以写在 `_config.volantis.yml` 文件中，详见 Hexo 官方文档：
{% link 覆盖主题配置::https://hexo.io/zh-cn/docs/configuration#覆盖主题配置::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f4da.svg %}

也可以直接查看本站源码中站点配置文件的写法：[_config.volantis.yml](https://github.com/volantis-x/volantis-docs/blob/master/_config.volantis.yml)

{% endnoteblock %}


请对照 {% btn, 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases %} 进行更新.

{% link 如何正确地更新主题::/how-to-update/::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f4d6.svg %}

## 许可协议

本主题采用 [MIT开源许可协议](https://cdn.jsdelivr.net/gh/theme-volantis/hexo-theme-volantis/LICENSE) ，永久无限制免费使用。

{% noteblock quote theme %}
**MIT开源许可协议**

被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软件及软件的副本。
被授权人可根据程式的需要修改授权条款为适当的内容。
在软件和软件的所有副本中都必须包含版权声明和许可声明。
{% endnoteblock %}


## 配置与使用

{% link 配置与使用, /v5/site-settings/, https://cdn.jsdelivr.net/gh/volantis-x/cdn-org@1.1/icon/2439351-arrows/005-arrows.svg %}
