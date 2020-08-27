---
layout: page
title: 选择评论系统
group: docs-latest
order: 308
short_title: 3-8 选择评论系统
sidebar: [docs-latest, toc, repos]
---

目前支持的评论系统有： Valine, MiniValine, Disqus, Gitalk, Vssue, Livere, Isso, Hashover

```yaml blog/_config.volantis.yml
comments:
  title: <i class='fas fa-comments'></i> 评论
  subtitle:
  service: valine # valine, minivaline, disqus, gitalk, vssue, livere, isso, hashover
```

{% tabs comments-1, 1 %}

<!-- tab Valine -->

<i class='fas fa-comment-dots fa-fw'></i> 一款快速、简洁且高效的无后端评论系统
<i class='fas fa-globe fa-fw'></i> [https://valine.js.org](https://valine.js.org)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: valine
  ...
  valine:
    appId: # your appId
    appKey: # your appKey
    js: https://cdn.jsdelivr.net/npm/valine@1.4/dist/Valine.min.js
    ... 可选配置项详见源码
```

其中，`placeholder` 支持在 front-matter 中设置。

```yaml front-matter
---
valine:
  placeholder: 你觉得xxx怎么样呢？
---
```

也可以通过设置 `valine.path` 实现多个页面共用一个评论框。

```yaml front-matter
---
valine:
  path: /wiki/volantis/
---
```

<!-- endtab -->

<!-- tab MiniValine -->

<i class='fas fa-comment-dots fa-fw'></i> 一款快速、简洁且高效的无后端评论系统
<i class='fas fa-globe fa-fw'></i> [https://github.com/MiniValine/MiniValine/](https://github.com/MiniValine/MiniValine/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: minivaline
  ...
  minivaline:
    appId: # Your leancloud application appid
    appKey: # Your leancloud application appkey
    ... 可选配置项详见源码
```

<!-- endtab -->

<!-- tab Vssue -->

<i class='fas fa-comment-dots fa-fw'></i> Vue 驱动的、基于 Issue 的评论插件
<i class='fas fa-globe fa-fw'></i> [https://vssue.js.org/zh/](https://vssue.js.org/zh/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: vssue
  ...
  vssue:
    owner:
    repo:
    clientId:
    clientSecret:
```

<!-- endtab -->

<!-- tab Gitalk -->

<i class='fas fa-comment-dots fa-fw'></i> A modern comment component based on Github Issue and Preact.
<i class='fas fa-globe fa-fw'></i> [https://gitalk.github.io/](https://gitalk.github.io/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: gitalk
  ...
  gitalk:
    clientID:
    clientSecret:
    repo:
    owner:
    admin: # []
```

clientID 和 clientSecret 的获取方法可自行搜索教程，这里仅简单描述一下步骤：
1. 点击 GitHub -> Settings `https://github.com/settings/profile`
2. 点击 Developer settings `https://github.com/settings/developers`
3. 点击 New OAuth App `https://github.com/settings/applications/new`
4. 填写信息：
**Application name** 随便填，我的是：`xaoxuu.com`
**Homepage URL** 和 **Authorization callback URL** 都写你的网址，我的是：`https://xaoxuu.com`

**可以通过设置 gitalk.id 实现多个页面共用一个评论框。**

```yaml front-matter
---
gitalk:
  id: /wiki/volantis/
---
```

<!-- endtab -->

<!-- tab Disqus -->

<i class='fas fa-comment-dots fa-fw'></i> Disqus - The #1 way to build an audience on your website.
<i class='fas fa-globe fa-fw'></i> [https://disqus.com/](https://disqus.com/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: disqus
  ...
  disqus:
    shortname:
```

<!-- endtab -->

<!-- tab Livere -->

<i class='fas fa-comment-dots fa-fw'></i> Communication makes better world.
<i class='fas fa-globe fa-fw'></i> [https://www.livere.com/](https://www.livere.com/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: livere
  ...
  livere:
    uid: #你的livere的uid
```

在这里查看你的 uid：`https://livere.com/insight/myCode`，在【代码管理 -> 一般网站】中找到如下这段代码，其中 `data-uid` 中的内容就是你的 `livere_uid`。

```html
<!-- 来必力City版安装代码 -->
<div id="lv-container" data-id="city" data-uid="你的livere的uid">
...
```

<!-- endtab -->

<!-- tab Isso -->

<i class='fas fa-comment-dots fa-fw'></i> A commenting server similar to Disqus.
<i class='fas fa-globe fa-fw'></i> [https://posativ.org/isso/](https://posativ.org/isso/)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: isso
  ...
  isso:
    url: https://example.com/(path/)
    src: https://example.com/(path/)js/embed.min.js
```

<!-- endtab -->

<!-- tab Hashover -->


<i class='fas fa-comment-dots fa-fw'></i> A free and open source PHP comment system designed to allow completely anonymous comments and easy theming.
<i class='fas fa-globe fa-fw'></i> [https://www.barkdull.org/software/hashover](https://www.barkdull.org/software/hashover)

```yaml blog/_config.volantis.yml
comments:
  ...
  service: hashover
  ...
  hashover:
    src: https://example.com/(path/)comments.php
```

<!-- endtab -->

<!-- tab ... -->


```plain blog/themes/volantis/layout/_third-party/comments/评论系统名称/layout.ejs
这里写布局代码
```

```plain blog/themes/volantis/layout/_third-party/comments/评论系统名称/script.ejs
这里要写加载 js 的代码
```

{% btn large center, 收录更多评论系统, https://github.com/volantis-x/ , fas fa-plus %}

<!-- endtab -->

{% endtabs %}
