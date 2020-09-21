---
layout: page
title: 加入社区与团队
cover: true
sidebar: []
music:
  server: netease   # netease, tencent, kugou, xiami, baidu
  type: song        # song, playlist, album, search, artist
  id: 41630480      # song id / playlist id / album id / search keyword
  autoplay: true
---

开源项目越多人参与就越有生命力，希望有兴趣的小伙伴可以加入团队～

{% p subtitle, 那么如何成为团队的一员呢？ %}

成为团队的一员，首先要满足的前置条件是：{% u 使用主题至少一个月 %}、{% u 长期活跃于社区 %}：「{% u 留言评论 %}」或者「{% u 解答 issues %}」或者「{% u 在 issues 提交有效的建议 %}」。

在您满足了上述的前置条件后，并且根据情况做了自己力所能及的事情，例如：

- 发现和解决问题如提 issue 或者解答 issue 或者提交 PR
- 完善文档、纠正文档错误、语病、翻译问题等
- 发布文章推荐主题
- 发布相关文章并转载外链到官网或者直接在官网发布文章

则可以在{% btn, 论坛, https://github.com/volantis-x/forum/issues %}发帖申请加入团队。

{% image https://upimage.alexhchu.com/2020/08/09/22ec83d3de717.png, width=300px, alt=在 GitHub 页面可以看到团队成员 %}


<!-- more -->

<br><br>

## 感谢项目贡献者

{% p subtitle, 非常感谢直接提交了 PR 的朋友！ %}

{% btns circle grid5 %}
{% cell xaoxuu, https://github.com/xaoxuu, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell MHuiG, https://github.com/MHuiG, https://avatars0.githubusercontent.com/u/38281581?s=60&v=4 %}
{% cell inkss, https://github.com/inkss, https://avatars2.githubusercontent.com/u/31947043?s=60&v=4 %}
{% cell Colsrch, https://github.com/Colsrch, https://avatars0.githubusercontent.com/u/58458181?v=4 %}
{% cell Drew233, https://github.com/Drew233, https://avatars0.githubusercontent.com/u/47592224?s=60&v=4 %}
{% cell Linhk1606, https://github.com/Linhk1606, https://avatars1.githubusercontent.com/u/50829219?s=60&v=4 %}
{% cell ericclose, https://github.com/ericclose, https://avatars1.githubusercontent.com/u/34526560?s=60&v=4 %}
{% cell Flexiston, https://github.com/Flexiston, https://avatars0.githubusercontent.com/u/62386802?s=60&v=4 %}
{% cell CRainyDay, https://github.com/CRainyDay, https://avatars2.githubusercontent.com/u/46487957?s=60&v=4 %}
{% cell 查看全部, https://github.com/volantis-x/hexo-theme-volantis/graphs/contributors, fab fa-github %}
{% endbtns %}

{% p subtitle, 同样感谢那些在评论和 Issue 中互相帮助的网友~ %}

如果您有一个好点子或者解决了这里没有解决的问题，欢迎去 [GitHub](https://github.com/volantis-x/hexo-theme-volantis/) 贡献一下代码。👏

## 发布与分享文章

如果您有与 Hexo 博客搭建相关的原创文章，可以转载到 Volantis 官网，示例如下：

```md _posts/blogs/2020-05-17-pjax.md
---
title: Volantis 主题部署 Pjax
date: 2020-05-17
updated: 2020-08-07
categories: [开发心得]
author: inkss
link: https://inkss.cn/article/other/76993423.html
description: 本篇文章记录了我对 Volantis 主题做 Pjax 兼容的种种，大抵算是种记录吧~
headimg: # 可以设置文章头图
---
```

如果您是第一次在官网投稿，还需要在 `_data/author.yml` 文件中添加作者信息，例如：

```yaml _data/author.yml
...
inkss:
  name: 枋柚梓
  avatar: https://cdn.jsdelivr.net/gh/inkss/common@1.4.2/hexo/img/static/avatar.jpg
  url: https://inkss.cn
```


{% noteblock %}
**要求**
1. 文章存放在 `_posts/blogs/` 目录中，且文件名格式为「年-月-日-文章主题」。
2. 必须是原创文章，摘要部分200字符以内。（也可以不写摘要）
3. 最好选择一个文章分类，如果现有的分类中没有合适的，可以自己新增。
4. 如果有文章头图，请确保图片内最多只有一个单词或短语。
{% endnoteblock %}

<br>

{% link 开始行动吧, https://github.com/volantis-x/volantis-docs/tree/master/source/_posts/blogs, https://cdn.jsdelivr.net/gh/volantis-x/cdn-org@1.1.3/icon/ui-interface-21/plus.svg  %}


## 可供交流的渠道

{% p subtitle, 解决问题 %}

{% table %}
| 渠道 | 方式 | 用途 |
| :-- | :-- | :-- |
| Issues | [@volantis-x/hexo-theme-volantis](https://github.com/volantis-x/hexo-theme-volantis/issues/) | 和开发者沟通的唯一渠道，用于跟进和解决问题 |
{% endtable %}

{% noteblock error, 请不要发送邮件 %}

开源项目的开发者很反感别人不通过正确的途径如 Issues 而是通过私人邮件询问开源项目问题，所以一般不会回复此类邮件。

{% endnoteblock %}

{% p subtitle, 交流 %}
{% table %}
| 渠道 | 方式 | 用途 |
| :-- | :-- | :-- |
| 论坛 | [@volantis-x/forum](https://github.com/volantis-x/forum/issues/) | 慢，相对正式，方便检索，可以给其他用户参考 |
| QQ群 | 1146399464 (验证码: <psw>vlts-2020</psw>) | 非正式，即时通讯，易于斗图；不利于给其他用户参考 |
{% endtable %}

{% p subtitle, 佛系互动 %}
{% table %}
| 渠道 | 方式 | 用途 |
| :-- | :-- | :-- |
| 评论区 | 留言 | 可以测试、灌水、推广自己的博客。 |
{% endtable %}
