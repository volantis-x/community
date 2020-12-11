---
layout: docs
group: docs-volantis-latest
order: 601
title: 进阶设定
short_title: 6-1 进阶设定
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /
---


## 设置子模块

{% folding yellow open, 将主题添加为子模块 %}

```sh
git submodule add https://github.com/volantis-x/hexo-theme-volantis.git themes/volantis
```

{% endfolding %}

## 多人协同

默认的作者信息在主题配置文件中设置：

```yaml blog/themes/volantis/_config.yml
# 文章布局
article:
  ...
  body:
    ...
    meta_library:
      author:
        avatar:
        name: 请设置文章作者
        url: /
```

Volantis 支持多作者，其他作者信息需要写在数据文件中，例如：

```yaml blog/source/_data/author.yml
Jon:
  name: Jon Snow
  avatar: https://cn.bing.com/th?id=AMMS_fc8f99fd41ebd737a71c4e13806db9a0&w=110&h=110&c=7&rs=1&qlt=80&pcl=f9f9f9&cdv=1&dpr=2&pid=16.1
  url: https://gameofthrones.fandom.com/wiki/Jon_Snow
Dany:
  name: Daenerys Targaryen
  avatar: https://tse1-mm.cn.bing.net/th?id=OIP.Yax4wLzIFbcBVUa_RsKywQHaLH&w=80&h=80&c=8&rs=1&qlt=90&dpr=2&pid=3.1&rm=2
  url: https://gameofthrones.fandom.com/wiki/Daenerys_Targaryen
```

在文章的 front-matter 中新增 `author` 即可：

```md
---
title: Jon Snow | Game of Thrones Wiki | Fandom
author: Jon
---
```

## 为网站提速

### 加载速度

- 尝试安装 [hexo-neat](https://github.com/rozbo/hexo-neat) 插件来压缩文件。

- 减少不必要的 js 插件，例如字数统计、动态背景。

- 查找并解决拖慢速度的资源，以 Chrome 浏览器为例：
  1. 页面中点击右键，选择「检查」。
  2. 在右边的窗口中「Network」选项卡，并勾选「Disable cache」。
  3. 刷新网页，查看加载速度慢的资源。
    3.1. 加载缓慢的图片，建议使用 CDN。
    3.2. 加载缓慢的可以不用的 js 插件，建议舍弃。
    3.3. 加载缓慢却必须使用的 js 插件，建议下载并自己上传至 jsdelivr。

### 运行速度

- 访问具有动态特效背景（如雪花、粒子等）的网站时，手机很快会发烫变卡，笔记本很快会风扇狂转并且浏览器提示建议关闭此页面。如果你希望网站有好的使用体验请尽量不要安装这类插件。

<!--
- 强烈推荐安装 [hexo-offline](https://github.com/JLHwung/hexo-offline) 插件，初次加载速度不变，后期切换页面和刷新网页速度越来越快。
-->


## 优化 SEO

```yaml blog/_config.volantis.yml
seo:
  # When there are no keywords in the article's front-matter, use tags as keywords.
  use_tags_as_keywords: true
  # When there is no description in the article's front-matter, use excerpt as the description.
  use_excerpt_as_description: true
  robots:
    home_first_page: index,follow
    home_other_pages: noindex,follow
    archive: noindex,follow
    category: noindex,follow
    tag: noindex,follow
    # robots can be written in front-matter
```

在 front-matter 中，可以设置 `keywords`、`description`、`robots` 和 `seo_title`。其中 `seo_title` 仅仅用作网页标题，优先级高于 `title`。

- 文章内部不要使用 H1 标题。

- 通过死链检测工具检查并删除无法访问的链接。

- 安装 SEO 优化插件：
  {% link hexo-autonofollow, https://github.com/liuzc/hexo-autonofollow %}
  {% link hexo-generator-seo-friendly-sitemap, https://github.com/ludoviclefevre/hexo-generator-seo-friendly-sitemap %}

- 页面不要堆砌关键词，不要频繁更改路径。


## 使用 CDN

对于大部分将博客 deploy 到 GitHub 的用户来说，直接加载本地资源速度比较慢，可以使用 jsdelivr 为开源项目提供的 CDN 服务。

### 开启方法

```yaml blog/_config.yml
use_cdn: true
```

{% note info, 如果你需要对样式进行 DIY，可以只关闭 style 文件的 CDN。 %}

### 自定义 CDN

如果你把对应的文件上传到自己的 CDN 服务器，可以把对应的链接改为自己的 CDN 链接。


## 安装「相关文章」插件

1. 安装插件
```sh
npm i -S hexo-related-popular-posts
```

2. 插件的自定义配置方法：
{% link hexo-related-popular-posts, https://github.com/tea3/hexo-related-popular-posts %}

如果您使用了头图，可以在站点配置文件中添加以下设置来让相关文章显示正确的文章头图：

```yaml blog/_config.yml
popularPosts:
  eyeCatchImageAttributeName: headimg
```

{% noteblock warning up, 注意 %}

需要升级到 5.0.1 及以上版本才可以支持自定义头图，详见 [#29](https://github.com/tea3/hexo-related-popular-posts/issues/29)

{% endnoteblock %}

## 分析与统计

默认支持 [不蒜子](http://busuanzi.ibruce.info/) 的访问统计，可以自行添加百度统计和 Google Analytics。

### 字数和阅读时长

1. 安装以下插件：
```
npm i --save hexo-wordcount
```
2. 修改配置文件，将 `wordcount` 插件打开
```yaml blog/_config.volantis.yml
plugins:
  ...
  # 文章字数统计、阅读时长，开启需要安装插件: npm i --save hexo-wordcount
  wordcount:
    enable: #true
```
3. 然后修改配置文件，将 `wordcount` 写入需要显示的 meta 位置：
```yaml blog/_config.volantis.yml
# 文章布局
article:
  ...
  # 文章详情页面的文章卡片本体布局方案
  body:
    # 文章顶部信息
    # 从 meta_library 中取
    top_meta: [..., wordcount, ...]
    ...
    # 文章底部信息
    # 从 meta_library 中取
    bottom_meta: [..., wordcount, ...]
```


### CNZZ 统计

请参考 ZYMIN 的这篇教程：
{% link Hexo hexo+ejs+material x 添加CNZZ统计代码, https://zymin.cn/arcticle/hexo+ejs+material.html %}

## 更多进阶玩法

详见 [@TRHX](https://www.itrhx.com) 的这篇博客：
{% link Hexo 博客主题个性化, https://www.itrhx.com/2018/08/27/A04-Hexo-blog-topic-personalization/ %}

内含卡片半透明、增加卡通人物、自定义鼠标样式、鼠标特效、烟花特效、彩色滚动字体、网站运行时间、动态浏览器标题、雪花飘落特效等多种详细教程。

{% link 主题官网 #进阶玩法, https://volantis.js.org/categories/进阶玩法/ %}
