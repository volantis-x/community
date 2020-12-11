---
layout: docs
title: 页面布局模板
group: docs-volantis-latest
order: 401
short_title: 4-1 页面布局模板
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /
---

## 布局模板

{% table %}
| 取值  | 含义  |
| :----- | :----  |
| page | 独立页面 |
| post | 文章页面 |
| docs | 文档页面 |
| category | 分类页面 |
| tag | 标签页面 |
| friends | 友链页面 |
| list | 列表页面 |
{% endtable %}

## page & post & docs

这三种页面相同，但是有以下细微区别：

- post 文章有 title 时，向下滚动网页，导航栏会向上移出屏幕显出文章标题，而 page 和 docs 不会。
- post 文章末尾最多可以显示「参考资料」、「相关文章」、「版权标识」、「打赏」四个模块。
- docs 文章末尾最多可以显示「参考资料」一个模块。


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
layout: docs
seo_title: 关于
bottom_meta: false
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

### 创建页面文件

```yaml Create file if not exists: source/friends/index.md
---
layout: friends # 必须
title: 我的朋友们 # 可选，这是友链页的标题
---

这里写友链上方的内容。

<!-- more -->

这里可以写友链页面下方的文字备注，例如自己的友链规范、示例等。

```

### 选择布局方案

在主题配置文件中找到以下内容：

```yaml
pages:
  # 友链页面配置
  friends:
    layout_scheme: traditional # simple: 简单布局, traditional: 传统布局,  sites: 网站卡片布局
```

目前提供三种布局方案：
- simple: 简单布局，只有头像和标题。
- traditional: 传统布局，是 Volantis 旧版本的风格。
- sites: 网站卡片布局，是 Volantis 4.x 新增的网站卡片标签的样式。

### 设置数据源


{% tabs about, 1 %}

<!-- tab 静态数据源 -->

友链的数据源写在以下路径，如果没有请自行创建：
```
blog/source/_data/friends.yml
```
内容格式为：
```yaml blog/source/_data/friends.yml
- group: # 分组标题
  description:  # 分组描述
  items:
    - title: # 名称
      avatar: # 头像
      url: # 链接
      screenshot: # 截图
      keywords: # 关键词
      description: # 描述
    - title: # 名称
      avatar: # 头像
      url: # 链接
      screenshot: # 截图
      keywords: # 关键词
      description: # 描述
```

不同的布局方式，会用到一部分的字段，一般来说，`title`、`avatar` 和 `url` 都是必须的。这些数据被转成 HTML 标签插入到友链页面的 `<!-- more -->` 部分。

<!-- endtab -->

<!-- tab 动态数据源 -->

使用 issues 标签可以从 issues 中获取 JSON 数据解析并生成 HTML 填充到页面中，使用方法如下：

```
{% issues sites | api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
```

这样添加友链的方式就变成了：对方提 Issue ，自己审核，然后添加 `active` 标签，然后刷新网页就生效了。更新友链内容也变得十分方便， Issue 的创建者拥有修改和关闭的权限。

新建一个 GitHub 或者 Gitee 仓库，创建 Issues 模板，如下：

```json
{
    "title": "",
    "screenshot": "",
    "url": "",
    "avatar": "",
    "description": "",
    "keywords": ""
}
```

关于如何使用 issues 标签，详见这篇文章：

{% link 静态博客使用 Issues API 发布动态、友链、书签, https://xaoxuu.com/blog/2020-08-23-issues-api/ %}


<!-- endtab -->

{% endtabs %}

{% noteblock idea, 建议 %}

- 两者是可以同时使用的哦，建议开放 issues 友链给大家，常联系的自己再保存到静态友链。
- 实测 GitHub API 速度和稳定性不如 Gitee ，如果追求稳定建议使用 Gitee。

{% endnoteblock %}

## 404页面

```yaml Create file if not exists: source/404.md
---
cover: true
robots: noindex,nofollow
sitemap: false
seo_title: 404 Not Found
bottom_meta: false
sidebar: []
valine:
  path: /404.html
  placeholder: 请留言告诉我您要访问哪个页面找不到了
---

{% p logo center huge, 404 %}
{% p center bold, 很抱歉，您访问的页面不存在 %}
{% p center small, 可能是输入地址有误或该地址已被删除 %}

```
