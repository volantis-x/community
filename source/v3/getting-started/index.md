---
robots: noindex,nofollow
sitemap: false
layout: page
group: docs-v3
order: 100
title: 安装与版本更新
short_title: 1-1 安装与版本更新
cover: true
meta:
  header: []
sidebar: [docs-v3, toc, repos]
plugins:
  - snackbar: oldversion
---
 
<p>
{% span logo center large, <sup>&ensp;</sup>Volantis<sup>3</sup> %}
{% span center small, A Wonderful Theme for Hexo 5 %}
</p>
<br>

Volantis，一个高度模块化和可定制化、功能相对完善的 Hexo 博客主题，既可以用作个人博客，也适合用来搭建文档。

这些是使用了本主题的博客： {% btn 示例博客, /examples/, fas fa-play-circle %}

## 能力要求 {% span red, !!! %}

自建博客需要一定的相关知识，在开始前，请{% emp 务必 %}确保：

{% checkbox checked, 已掌握 markdown 语法 %}
{% checkbox checked, 已阅读 Hexo 官方文档 %}
{% checkbox checked, 会使用终端（命令行），会使用 git  %}
{% checkbox red checked, 会阅读文档、搜索文档 %}

<br>

为了更好地使用，还建议掌握以下知识：

{% checkbox checked, 会阅读源码，知道本站源码在哪里，会参照源码仿写、对比差异 %}
{% checkbox checked, 规范地使用 GitHub Issues（解决文档中没有的问题） %}
{% checkbox checked, GitHub Fork、Pull Request 操作（使主题保持最新） %}

## 环境要求

如果您从旧版本更新或着其它主题迁移，请确保环境版本不要太低，否则会产生兼容性问题。

```yaml
Hexo: 4.2 ~ 5.x
hexo-cli: 3.1 ~ 4.x
node.js: 12.16 ~ latest # 推荐使用 LTS 版
npm: 6.13 ~ latest
```

## 下载与安装

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
git clone https://e.coding.net/volantis/volantis/volantis.git themes/volantis
```

{% endtimenode %}

{% timenode 第 3/3 步：检查并安装依赖 %}

安装 Hexo 搜索的依赖包：

```
npm i hexo-generator-search hexo-generator-json-content
```

安装 Stylus 渲染器：

```
npm i hexo-renderer-stylus
```

{% endtimenode %}

<!-- endtab -->

{% endtabs %}


## 版本更新

请对照 {% btn, 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases %} 进行更新，下面是更新之后需要注意的事项：

{% timeline %}

{% timenode 2020-08-09 [2.6.6 -> 3.0.0](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/3.0.0) %}

1. 如果有 `hexo-lazyload-image` 插件，需要重新安装最新版本并增加设置 `lazyload.isSPA: true` 。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 `fancybox` 标签在 3.x 版本中被重命名为 `gallery` 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true` 并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本使用了 pjax 服务。
6. 欢迎补充

{% endtimenode %}

{% endtimeline %}

## 许可协议

本主题采用 [MIT开源许可协议](https://cdn.jsdelivr.net/gh/theme-volantis/hexo-theme-volantis/LICENSE) ，永久无限制免费使用。

{% noteblock quote theme %}
**MIT开源许可协议**

被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软件及软件的副本。
被授权人可根据程式的需要修改授权条款为适当的内容。
在软件和软件的所有副本中都必须包含版权声明和许可声明。
{% endnoteblock %}
