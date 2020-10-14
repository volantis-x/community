---
layout: docs
group: docs-volantis-latest
order: 551
short_title: false
title: 'tag-plugins: issues'
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---

```md 最后更新于 <u>4.0</u> 版本
{% issues type | api=url | group=key:value1,value2（可选） %}
```

## 类型

根据需求不同，会将 issues 内容解析成不同的 HTML 标签，目前支持的类型有：

- **timeline**: 解析成 timeline 标签，issue 的标题对应 timeline 的时间， issue 的内容对应 timeline 的内容。
- **sites**: 解析成 sites 标签，需要有 JSON 代码块：
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

## API

传可以调得通的 URL ，例如：
```
api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active
api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active
```

## 分组

sites 类型的 issues 默认不分组，如果需要分组，可指定分组依据「key」，和分组白名单「value1」「value2」等，例如：

```
group=version:v4,v3,v2
```

这个参数的作用就是，筛选出 JSON 中包含 `"version": "v4"` 或者 `"version": "v3"` 或者 `"version": "v2"` 的数据，并分组显示。


## 示例

### 时间线

```
{% issues timeline | api=https://gitee.com/api/v5/repos/xaoxuu/timeline/issues?state=open&creator=xaoxuu&sort=created&direction=desc&page=1&per_page=100 %}
```

显示效果：

{% issues timeline | api=https://gitee.com/api/v5/repos/xaoxuu/timeline/issues?state=open&creator=xaoxuu&sort=created&direction=desc&page=1&per_page=100 %}

对应的仓库链接：

{% link Gitee: xaoxuu/timeline, https://gitee.com/xaoxuu/timeline/issues %}


### 友链

```
{% issues sites | api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
{% issues sites | api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
```

上例中的 `labels=active` 参数可以控制默认的 issue 不显示，只有自己审核通过添加了 `active` 标签之后才会显示。上述示例对应的仓库链接：

{% link GitHub: xaoxuu/friends, https://github.com/xaoxuu/friends/issues %}

### 分组

这是主题官网的「示例博客」页面的数据：

```
{% issues sites | api=https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=version:版本：^4.0,版本：^3.0,版本：^2.0 %}
```

上述示例对应的仓库链接：

{% link GitHub: volantis-x/examples, https://github.com/volantis-x/examples/issues %}
