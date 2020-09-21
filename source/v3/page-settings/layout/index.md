---
robots: noindex,nofollow
sitemap: false
layout: page
title: 页面布局模板
group: docs-v3
order: 401
short_title: 4-1 页面布局模板
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
---

{% noteblock red warning, 过期的文档 %}

这份文档是旧版本的，如果您使用的是新版的主题，请查看新版本的文档。

{% endnoteblock %}

## 布局模板

| 取值  | 含义  |
| :----- | :----  |
| page | 独立页面 |
| post | 文章页面 |
| category | 分类页面 |
| tag | 标签页面 |
| links | 友链页面 |
| list | 列表页面 |

## page & post

post 页面布局几乎与 page 页面相同，但是有以下细微区别：

- post 文章有 title 时，向下滚动网页，导航栏会向上移出屏幕显出文章标题，而 page 不会。
- 主题配置中的 `article_footer` 只作用于 `post`，如果 page 也要显示，可以在 front-matter 中设置
  ```yaml
  meta:
    article_footer: [xxx]
  ```


除了归档页面是自动生成的，其它独立页面都需要手动创建 md 文件。

## 归档页面

归档页面是自动生成的，并且初始化的时候已经生成，路径如下：

```yaml blog/_config.yml
# Directory
archive_dir: archives
```

## 关于页面

```yaml Create file if not exists: source/about/index.md
---
layout: page
title: 关于
meta:
  header: []
  footer: []
sidebar: []
valine:
  placeholder: 有什么想对我说的呢？
---

下面写关于自己的内容

```

## 分类页面

```yaml Create file if not exists: source/categories/index.md
---
layout: category
index: true
title: 所有分类
---
```

## 标签页面

```yaml Create file if not exists: source/tags/index.md
---
layout: tag
index: true
title: 所有标签
---
```

## 列表页面

```yaml Create file if not exists: source/mylist/index.md
---
layout: list
group: mylist
index: true
---
```

结果就是筛选出所有文章中 `front-matter` 部分含有 `group: mylist` 的文章。


## 友链页面

```yaml Create file if not exists: source/friends/index.md
---
layout: links     # 必须
title: 我的朋友们   # 可选，这是友链页的标题
links:
  - group: 分组1
    icon: fas fa-user-tie
    desc: 这个分组的描述
    items:
    - name:     # 博客名
      avatar:   # 头像链接
      url:      # 博客链接
      backgroundColor: '#3E74C9' # 卡片背景颜色
      textColor: '#fff'  # 卡片文字颜色
      tags: [标签1, 标签2]    # 标签
      desc: 描述文字
  - group: 分组2
    icon: fas fa-user-tie
    desc: 这个分组的描述
    items:
    - name:     # 博客名
      avatar:   # 头像链接
      url:      # 博客链接
      backgroundColor: '#3E74C9' # 卡片背景颜色
      textColor: '#fff'  # 卡片文字颜色
      tags: [标签1, 标签2]    # 标签
      desc: 描述文字
---

这里写友链上方的内容。

<!-- more -->

这里可以写友链页面下方的文字备注，例如自己的友链规范、示例等。

```

{% note info, 姓名、头像、链接是必填项，其它选填。 %}

## 404页面

```yaml Create file if not exists: source/404.md
---
layout: page
title: 404 Not Found
body: [article, comments]
meta:
  header: []
  footer: []
sidebar: []
valine:
  path: /404.html
  placeholder: 请留言告诉我您要访问哪个页面找不到了
---
{% p center huge, 404 %}
{% p center bold, 很抱歉，您访问的页面不存在 %}
{% p center small, 可能是输入地址有误或该地址已被删除 %}
```
