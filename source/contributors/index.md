---
layout: page
title: 鸣谢项目和社区贡献者
cover: true
sidebar: []
music:
  server: netease   # netease, tencent, kugou, xiami, baidu
  type: song        # song, playlist, album, search, artist
  id: 41630480      # song id / playlist id / album id / search keyword
  autoplay: true
---

Volantis 社区的发展离不开团队大佬们的无私奉献和社区小伙伴们的热情互助。每一个心怀梦想、有着独特见解的朋友都可以成为团队的一员。目前 Volantis 社区正处于建设初期，我们缺少各方面的人才，如果您使用主题至少一个月且长期活跃于社区，例如：

- 解答 [issues](https://github.com/volantis-x/hexo-theme-volantis/issues) / [discussions](https://github.com/volantis-x/hexo-theme-volantis/discussions)
- 提交有效的建议
- 官网文档补全/纠错
- 发现并收录有意思的文章（搭建博客方面）到官网

我们非常欢迎您的加入，请在{% btn, 论坛, https://github.com/volantis-x/hexo-theme-volantis/discussions %}发帖告诉我们。


<!-- more -->

## 感谢开发者

{% contributors repo:volantis-x/hexo-theme-volantis %}

## 感谢社区建设者

{% contributors repo:volantis-x/community %}

## 如何参与社区建设

社区建设主要包括 {% btn, Issues, https://github.com/volantis-x/hexo-theme-volantis/issues %} {% btn, Discussions(论坛), https://github.com/volantis-x/hexo-theme-volantis/discussions %} {% btn, 官网博客收录, #如何收录博客 %} {% btn, 官网文档维护, #如何维护文档 %} 几个方面。


### 如何维护文档

目前 Volantis 4.x 已是已知的 Hexo 主题中文档最全面的，但仍有部分功能缺少明确的文档、部分文档已经过时，如果您发现了遗漏或者错误之处，我们非常希望您能够帮忙完善一下。

Volantis 官网支持 CI ，您可以直接在线编辑源码：

{% link 在线编辑文档, https://github.com/volantis-x/community/tree/master/source %}


### 如何收录博客

每位用户在使用或更新主题的时候都需要阅读官网的文档，收录的相关内容能帮助用户更高效地上手，同时也能够提高被收录的文章的曝光率。如果在官网能看到更多的有价值的文章，就会有更多 Volantis 用户或者非 Volantis 用户来访问。

如果您有或者发现了与 Hexo 博客搭建相关的文章，可以转载外链到 Volantis 官网，示例如下：

```md _posts/blogs/2020-05-17-pjax.md
---
title: Volantis 主题部署 Pjax
date: 2020-05-17
updated: 2020-08-07
categories: [开发心得]
author: inkss
link: https://inkss.cn/blog/76993423/
description: 本篇文章记录了我对 Volantis 主题做 Pjax 兼容的种种，大抵算是种记录吧~
headimg: # 可以设置文章头图
backup: https://archive.vn/U36NG # 将页面存档到 archive.tody 网页快照档案馆的存档链接 https://archive.tody
---
```

如果这篇文章的作者是第一次出现在官网，还需要在 `_data/author.yml` 文件中添加作者信息，例如：

```yaml _data/author.yml
...
inkss:
  name: 枋柚梓
  avatar: https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/hexo/img/static/avatar.jpg
  url: https://inkss.cn
```

{% noteblock warning %}
**注意事项**
1. 文章存放在 `_posts/blogs/` 目录中，且文件名格式为「年-月-日-文章话题」。
2. 鼓励原创文章，摘要部分300字符以内。如果想不出摘要可以不写，不要在摘要里重复一遍文章标题。
3. 最好选择一个文章分类，如果现有的分类中没有合适的，可以自己新增。
4. 如果有文章头图，请确保图片内最多只有一个单词或短语，图片不清晰或者与文章无关的话不建议使用。
5. 不仅限于自己的文章，可以在征得文章作者同意的情况下将其链接收录到官网。
{% endnoteblock %}


{% link 在线编辑文档, https://github.com/volantis-x/community/tree/master/source/_posts/blogs %}
