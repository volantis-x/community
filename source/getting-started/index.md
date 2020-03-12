---
layout: page
group: docs
title: Getting Started「开始使用」
meta:
  header: []
---

<p center large>Volantis</p>
<p center small>A Wonderful Theme for Hexo</p>
<br>

Volantis，一个高度模块化和可定制化、功能相对完善的 Hexo 博客主题，既可以用作个人博客，也适合用来搭建文档。

这些是使用了本主题的博客： <btn>[<i class='fas fa-play-circle'></i> 示例博客](/examples/)</btn>

## 环境要求

如果您从旧版本更新或着其它主题迁移，请确保环境版本不要太低，否则会产生兼容性问题。

| 环境 | 建议最低版本 |
| :-- | :-- |
| Hexo | <red>4.2</red> |
| hexo-cli | 3.1 |
| node.js | 12.16 |
| npm | 6.13 |


## 下载与安装

{% tabs install, 2 %}
<!-- tab 自动安装 -->
```sh 1. 打开终端输入下面命令安装脚本：
curl -s https://xaoxuu.com/install | sh -s hexo.sh
```
```sh 2. 在博客路径打开终端，输入下面命令即可安装主题和依赖包：
hexo.sh i v
```
<!-- endtab -->

<!-- tab 手动安装 -->
下载主题源码到 themes/ 文件夹：
```sh
git clone https://github.com/xaoxuu/hexo-theme-volantis themes/volantis
```
如果您从其它主题迁移而来，并且原主题没有使用 stylus，则需要安装 stylus 渲染插件：
```sh
npm i -S hexo-renderer-stylus
```
默认配置为 Hexo 搜索，但是需要安装插件才能使用：
```sh
npm i -S hexo-generator-search hexo-generator-json-content
```
<!-- endtab -->
{% endtabs %}

## 许可协议

本主题采用 <btn>[MIT开源许可协议](https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-volantis/LICENSE)</btn> ，永久无限制免费使用。

> **MIT开源许可协议**
>
> 被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软件及软件的副本。
被授权人可根据程式的需要修改授权条款为适当的内容。
在软件和软件的所有副本中都必须包含版权声明和许可声明。
