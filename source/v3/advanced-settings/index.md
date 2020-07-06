---
layout: page
group: docs-latest
order: 6
title: 进阶设定
short_title: 6. 进阶设定
meta:
  header: [title, author, updated]
sidebar: [news, docs-latest, repos, toc]
---

建议有一定基础知识的朋友进行尝试。

{% folding yellow open, 将主题添加为子模块 %}

```sh
git submodule add git@github.com:theme-volantis/hexo-theme-volantis themes/volantis
```
{% endfolding %}

## 为网站提速

### 加载速度

- 尝试安装 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 插件来压缩文件。

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

- 强烈推荐安装 [hexo-offline](https://github.com/JLHwung/hexo-offline) 插件，初次加载速度不变，后期切换页面和刷新网页速度越来越快。

- 推荐安装图片懒加载插件 [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)（需同时安装 `hexo-fs` 依赖库）。


## 优化 SEO

在 front-matter 中，可以设置 `keywords`、`description`、`robots` 和 `seo_title`。其中 `seo_title` 仅仅用作网页标题，优先级高于 `title`。

- 文章内部不要使用 H1 标题。

- 通过死链检测工具检查并删除无法访问的链接。

- 安装 SEO 优化插件：
  - [hexo-autonofollow](https://github.com/liuzc/hexo-autonofollow)
  - [hexo-generator-seo-friendly-sitemap](https://github.com/ludoviclefevre/hexo-generator-seo-friendly-sitemap)

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

2. 在需要显示的位置添加 `related_posts` 例如放在侧边栏：
```yaml blog/themes/volantis/_config.yml
layout:
  on_page:
    sidebar: [related_posts]
```

{% note link, 插件的自定义配置方法： [hexo-related-popular-posts](https://github.com/tea3/hexo-related-popular-posts) %}

## 分析与统计

默认支持 [不蒜子](http://busuanzi.ibruce.info/) 的访问统计，可以自行添加百度统计和 Google Analytics。

### 字数和阅读时长

1. 安装以下插件：
```
npm i --save hexo-wordcount
```
2. 修改配置文件，将 `wordcount` 插件打开
```yaml blog/themes/volantis/_config.yml
plugins:
  ...
  # 文章字数统计、阅读时长，开启需要安装插件: npm i --save hexo-wordcount
  wordcount: true
```
3. 然后修改配置文件，将 `wordcount` 写入需要显示的 meta 位置：
```yaml blog/themes/volantis/_config.yml
# 布局
layout:
  on_list:
    meta: [..., wordcount, ...]
  on_page:
    meta:
      header: [..., wordcount, ...]
      footer: [..., wordcount, ...]
```

### 百度统计

```yaml blog/_config.yml
baidu_analytics_key: 百度统计的key
```


### Google Analytics

```yaml blog/_config.yml
google_analytics_key: Google Analytics Key
```

### CNZZ 统计

请参考 ZYMIN 的这篇教程：[《hexo+ejs+material x 添加CNZZ统计代码》](https://zymin.cn/arcticle/hexo+ejs+material.html)

### 网站运行时间等

请参考 TRHX 的这篇教程：[《Hexo 博客主题个性化》](https://itrhx.com/2018/08/27/A04-Hexo-blog-topic-personalization/)

## 更多 DIY 玩法


详见 [@TRHX](https://www.itrhx.com) 的这篇博客：[《Hexo 博客主题个性化》](https://www.itrhx.com/2018/08/27/A04-Hexo-blog-topic-personalization/)

内含卡片半透明、增加卡通人物、自定义鼠标样式、鼠标特效、烟花特效、彩色滚动字体、网站运行时间、动态浏览器标题、雪花飘落特效等多种详细教程。

<br><br>{% btn large center, 向开发者反馈问题, https://github.com/theme-volantis/hexo-theme-volantis/issues/ , fas fa-paper-plane %}
