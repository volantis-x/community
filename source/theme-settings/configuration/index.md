---
layout: docs
group: docs-volantis-latest
order: 301
title: 创建主题配置文件
short_title: 3-1 创建主题配置文件
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---

主题目录下的 `_config.yml` 文件通常负责主题相关配置，我们强烈建议您使用代替的主题配置文件以防止自己的配置丢失。那么如何使用代替主题配置文件呢？

{% timeline %}

{% timenode 第 1/2 步：创建配置文件 %}

在博客根目录的 `_config.yml` 文件旁边新建一个文件： `_config.volantis.yml` ，这个文件中的配置信息优先级高于主题文件夹中的配置文件。


{% endtimenode %}

{% timenode 第 2/2 步：覆盖自定义配置 %}

当您需要修改某项内容时，例如导航栏菜单，那么您需要在主题配置文件中找到相关内容，复制进自己创建的配置文件中：

```yaml blog/_config.volantis.yml
navbar:
  visiable: auto # always, auto
  logo: # choose [img] or [icon + title]
    img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png
    icon:
    title:
  menu:
    - name: 博客
      icon: fas fa-rss
      url: /
```

{% noteblock idea yellow %}
**小提示**
使用「`npm i hexo-theme-volantis`」方式安装的主题，主题配置文件在「`blog/node_modules/hexo-theme-volantis/_config.yml`」
使用传统方式安装的主题，主题配置文件在「`blog/themes/volantis/_config.yml`」
{% endnoteblock %}

{% endtimenode %}

{% endtimeline %}
