---
layout: page
group: docs
title: Getting Started「开始使用」
meta:
  header: []
---

<p>
{% span logo center large, Volantis %}
{% span center small, A Wonderful Theme for Hexo %}
</p>
<br>

Volantis，一个高度模块化和可定制化、功能相对完善的 Hexo 博客主题，既可以用作个人博客，也适合用来搭建文档。

这些是使用了本主题的博客： {% btn 示例博客, /examples/, fas fa-play-circle %}

## 环境要求

如果您从旧版本更新或着其它主题迁移，请确保环境版本不要太低，否则会产生兼容性问题。

| 环境 | 建议最低版本 |
| :-- | :-- |
| Hexo | <u>4.2</u> |
| hexo-cli | 3.1 |
| node.js | 12.16 |
| npm | 6.13 |


## 下载与安装

{% tabs install, 2 %}

<!-- tab 脚本自动安装 -->

在博客路径打开终端，下载安装并应用主题：
```sh
curl -s https://volantis.js.org/start | sh
```
如果您还没有博客，执行这行命令将会自动检测并安装所需环境，初始化博客，然后下载安装并应用主题。

{% note link blue, 脚本更多使用方法：[#hexo.sh](https://xaoxuu.com/wiki/hexo.sh/) %}

<!-- endtab -->

<!-- tab 手动安装 -->

第1/3步：下载主题源码到 `themes/` 文件夹
```sh
git clone https://github.com/xaoxuu/hexo-theme-volantis themes/volantis
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

## 许可协议

本主题采用 [MIT开源许可协议](https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-volantis/LICENSE) ，永久无限制免费使用。

{% noteblock quote %}
**MIT开源许可协议**

被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软件及软件的副本。
被授权人可根据程式的需要修改授权条款为适当的内容。
在软件和软件的所有副本中都必须包含版权声明和许可声明。
{% endnoteblock %}
