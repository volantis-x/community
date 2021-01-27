---
layout: docs
seo_title: 一个功能丰富、高度模块化的 Hexo 博客主题。支持多人协作、wiki文档等复杂系统，支持大量的标签插件。
short_title: 1-1 安装与版本更新
group: docs-volantis-latest
order: 1
sidebar: [docs-volantis-latest, toc]
description: Volantis 是一个功能丰富、高度模块化的 Hexo 博客主题。得益于其强大的模块化特性，您可以轻松搭建一个极简风格的博客，也可以仿照官网搭建一个多人协作的、包含文档模块的大体量综合型博客。
---

<p>
{% span logo center large, Volantis %}
{% span center small logo, A Wonderful Theme for Hexo %}
</p>
<br>

**[Volantis](https://volantis.js.org) 是一个功能丰富、高度模块化的 Hexo 博客主题。得益于其强大的模块化特性，您可以轻松搭建一个极简风格的博客，也可以仿照官网搭建一个多人协作的、包含文档模块的大体量综合型博客。**

{% link 示例博客, https://volantis.js.org/examples/ %}

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
Hexo: 4.2 ~ 5.x
hexo-cli: 3.1 ~ 4.x
node.js: 12.16 ~ latest # 推荐使用 LTS 版
npm: 6.13 ~ latest
```

<!-- endtab -->

{% endtabs %}


## 快速体验

如果您已经具备环境配置条件，可以在终端中输入下面这行代码，稍等片刻即可尝鲜体验：

```bash
git clone https://github.com/volantis-x/demo.git && cd demo && npm i && hexo s
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
git clone https://e.coding.net/volantis-x/p/hexo-theme-volantis.git themes/volantis
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



## 版本更新注意事项

使用主题的时候，尽量 fork 主题到自己的 GitHub，然后进行修改并使用。这样做的好处是：当主题进行重要更新的时候可以根据需要拉取合并代码，使自己 DIY 的主题能够通过更新获取 BUG 修复或者新特性。

如果不懂请自行搜索关键词：<u>fork 更新</u>

{% noteblock idea, 实用小技巧 %}

所有需要写在主题配置文件中的配置都可以写在站点配置文件的 `theme_config:` 中，在 {% u Hexo 5.0 %} 后，还可以写在 `_config.volantis.yml` 文件中，详见 Hexo 官方文档：
{% link 覆盖主题配置, https://hexo.io/zh-cn/docs/configuration#%E8%A6%86%E7%9B%96%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE %}

也可以直接查看本站源码中站点配置文件的写法：[_config.volantis.yml](https://github.com/volantis-x/volantis-docs/blob/master/_config.volantis.yml)

{% endnoteblock %}


请对照 {% btn, 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases %} 进行更新，下面是更新之后需要注意的事项：

{% timeline %}

{% timenode 2021-01-15 [4.2.0 -> 4.3.0](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/4.3.0) %}

{% u 更多关于Volantis的小版本更新请点击上方`更新日志`按钮 %}

1. 增加 `disqusjs` 评论系统；

2. 增加 `waline` 评论系统；

3. 增加 [旧版 Internet Explorer 淘汰行动](https://www.microsoft.com/zh-cn/WindowsForBusiness/End-of-IE-support) ；

4. 增加 Tidio聊天功能；

5. 增加 twitoo waline valine minivaline 文章阅读量统计；

6. 增加 bbtalk.js；
7. 修复[#514](https://github.com/volantis-x/hexo-theme-volantis/issues/514) [#538](https://github.com/volantis-x/hexo-theme-volantis/issues/538) [#567](https://github.com/volantis-x/hexo-theme-volantis/pull/567) [#431](https://github.com/volantis-x/hexo-theme-volantis/issues/431) [#468](https://github.com/volantis-x/hexo-theme-volantis/issues/468)；

8. 修复关闭 pjax 时 cover样式失效 和 报错 的问题 。

{% endtimenode %}



{% timenode 2020-09-26 [3.0.0 -> 4.0.0](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/4.0.0) %}

{% u 4.0.0 的配置文件改动非常大，强烈建议不要在旧的配置文件上改。 %}

1. 原数据文件中的配置项不再支持，请在配置文件中进行设置。
2. 主题配置文件进行了重新设计，需要「完全」重新配置一遍。
3. 友链使用数据文件，并支持 issues 标签实现动态自助友链。
4. 原 meta 自定义布局现在只支持文章内部的 top_meta 和 bottom_meta 。
5. 文章列表页面布局现在只能在有限范围内进行自定义。
6. 侧边栏组件现在只支持侧边栏位置；文章末尾有专用的组件。
7. 如果安装了懒加载插件，需要卸载掉，使用主题内置的懒加载（和插件冲突）。
8. 如果想要关闭评论，需要改为 `comments: false` 。
9. 如果要隐藏文章顶部或者底部的 meta 标签，需设置 `top_meta: false` 或者 `bottom_meta: false` 。
10. 如果需要同时隐藏标题和顶部的 meta 标签也可以把 `title: xxx` 改为 `seo_title: xxx` 。
11. 多作者的信息使用数据文件进行定义，文章中只需要写 `author: xxx` 而不需要重复写作者的信息了。
12. 现在只有 gallery 标签的图片支持放大。
13. 友链页面 `layout: links` 改为 `layout: friends`。

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


## 配置与使用

{% link 配置与使用, /site-settings/configuration/, https://cdn.jsdelivr.net/gh/volantis-x/cdn-org@1.1/icon/2439351-arrows/005-arrows.svg %}
