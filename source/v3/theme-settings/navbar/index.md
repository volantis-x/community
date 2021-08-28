---
robots: noindex,nofollow
sitemap: false
layout: page
title: 设置网站导航栏
group: docs-v3
order: 303
short_title: 3-3 设置网站导航栏
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
plugins:
  - snackbar: oldversion
---
 

## 导航栏配置

导航栏分为 logo、menu、search 三个区域设置，其中 logo 区域如果设置了图片，则不能显示图标和标题， menu 区域的设置可以写在一个单独的文件中。
```yaml blog/_config.volantis.yml
navbar:
  logo: # choose [img] or [icon + title]
    img:
    icon:
    title:
  menu:
    # The following can be written in `blog/source/_data/menu.yml`
    - name: 博客
      icon: fas fa-rss
      url: /
    - name: 分类
      icon: fas fa-folder-open
      url: categories/
    - name: 标签
      icon: fas fa-tags
      url: tags/
    - name: 归档
      icon: fas fa-archive
      url: archives/
    - name: 友链
      icon: fas fa-link
      url: friends/
    - name: 关于
      icon: fas fa-info-circle
      url: about/
  search: 搜索   # Search bar placeholder
```

{% p subtitle, 使用数据文件 %}

建议新建一个文件，专门存放导航栏<u>菜单</u>配置，文件的路径为：
```
blog/source/_data/menu.yml
```
文件的内容为：
```yaml blog/source/_data/menu.yml
- name: 博客
  icon: fas fa-rss
  url: /
...
```

## 菜单嵌套

导航栏菜单支持嵌套，嵌套的属性名为 `rows` ，写法示例：
```yaml blog/source/_data/menu.yml
...
- name: 更多
  icon: fas fa-ellipsis-v
  rows:
    - name: 主题源码
      url: https://github.com/volantis-x/hexo-theme-volantis/
    - name: 更新日志
      url: https://github.com/volantis-x/hexo-theme-volantis/releases/
    - name: hr
    - name: 有疑问？
      rows:
        - name: 看 FAQ
          url: faqs/
        - name: 看 本站源码
          url: https://github.com/volantis-x/volantis-docs/
        - name: 提 Issue
          url: https://github.com/volantis-x/hexo-theme-volantis/issues/
    - name: hr
    - name: 公告和测试博文
      url: archives/
    - name: 示例博客
      url: examples/
    - name: 特别感谢
      url: contributors/
```

## 分割线

在子菜单中，新增一个只有 `name: hr` 的“菜单”就会被渲染成一个分割线。
```yaml
- name: hr
```

## 小标题

在子菜单中，新增一个只有 `name: 小标题内容`（也可以有 `icon: 小标题的图标`）的“菜单”就会被渲染成一个小标题。
```yaml
...
- name: 近期
  icon: fas fa-clock
  url: /
  rows:
    - name: 热门文章
      icon: fas fa-fire
    - name: ProHUD 开源库的设计思路
      url: blog/2019-08-27-prohud/
    - name: ValueX：实用的安全对象类型转换库
      url: blog/2019-08-29-valuex/
    - name: 心率管家 App 的设计与开发
      url: blog/2019-07-23-heartmate/
```
