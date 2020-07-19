---
layout: page
group: docs-latest
order: 1
title: 开始使用
short_title: 1. 开始使用
meta:
  header: []
sidebar: [news, docs-latest, repos, toc]
---

<p>
{% span logo center large, <sup>&ensp;</sup>Volantis<sup>3</sup> %}
{% span center small, A Wonderful Theme for Hexo %}
</p>
<br>

Volantis，一个高度模块化和可定制化、功能相对完善的 Hexo 博客主题，既可以用作个人博客，也适合用来搭建文档。

这些是使用了本主题的博客： {% btn 示例博客, /examples/, fas fa-play-circle %}

## 能力要求

自建博客需要一定的相关知识，在开始前，请务必确保：

{% checkbox checked, 已掌握 markdown 语法 %}
{% checkbox checked, 已阅读 Hexo 官方文档 %}
{% checkbox checked, 会使用终端（命令行），会使用 git  %}
{% checkbox red checked, 会阅读文档、搜索文档 %}

为了更好地使用，还建议掌握以下知识：

{% checkbox checked, 规范地使用 GitHub Issues（解决文档中没有的问题） %}
{% checkbox checked, GitHub Fork、Pull Request 操作（使主题保持更新） %}

## 环境要求

如果您从旧版本更新或着其它主题迁移，请确保环境版本不要太低，否则会产生兼容性问题。

```yaml
Hexo: 4.2
hexo-cli: 3.1
node.js: 12.16 # LTS版
npm: 6.13
```

## 下载与安装

{% tabs install, 2 %}

<!-- tab 脚本自动安装（Mac） -->

在博客路径打开终端，下载安装并应用主题：
```sh
curl -s https://volantis.js.org/start | sh
```
如果您还没有博客，执行这行命令将会自动检测并安装所需环境，初始化博客，然后下载安装并应用主题。

{% noteblock link blue %}

这个脚本是为 Mac 写的，不清楚 Linux 能不能使用，但 Windows 是一定不能用的。

脚本详细使用方法：[#hexo.sh](https://xaoxuu.com/wiki/hexo.sh/)

{% endnoteblock %}

<!-- endtab -->

<!-- tab 手动安装 -->

第1/3步：下载主题源码到 `themes/` 文件夹
```sh
git clone https://github.com/volantis-x/hexo-theme-volantis themes/volantis
```

也可使用下方git地址

``` sh
git clone https://e.coding.net/jxsfgz-cat/volantis/volantis.git themes/volantis
```

第2/3步：修改站点配置文件
```yaml blog/_config.yml
theme: volantis
```

第3/3步：检查并安装依赖

```sh 安装 Hexo 搜索的依赖包：
npm i -S hexo-generator-search hexo-generator-json-content
```
```sh 安装 stylus 渲染器：
npm i -S hexo-renderer-stylus
```

<!-- endtab -->

{% endtabs %}

## 升级小助手

升级前请查看 [更新日志](https://github.com/volantis-x/hexo-theme-volantis/releases/)

{% folding open red, 2.6.6 -> 3.0 %}

{% p bold red, 必要修改 %}

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。


{% p bold yellow, 建议修改 %}

1. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

{% endfolding %}

{% folding green, 2.6.3 -> 2.6.6 %}
不需要额外处理。
{% endfolding %}
{% folding yellow, 2.6.2 -> 2.6.3 %}
1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。
{% endfolding %}

## 许可协议

本主题采用 [MIT开源许可协议](https://cdn.jsdelivr.net/gh/theme-volantis/hexo-theme-volantis/LICENSE) ，永久无限制免费使用。

{% noteblock quote %}
**MIT开源许可协议**

被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软件及软件的副本。
被授权人可根据程式的需要修改授权条款为适当的内容。
在软件和软件的所有副本中都必须包含版权声明和许可声明。
{% endnoteblock %}

<br><br>{% btn large center, 向开发者反馈问题, https://github.com/volantis-x/hexo-theme-volantis/issues/ , fas fa-paper-plane %}
