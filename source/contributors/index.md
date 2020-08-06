---
layout: page
title: 如何参与项目
cover: true
meta:
  header: [title, author, updated]
sidebar: [news, docs-latest, repos]
music:
  server: netease   # netease, tencent, kugou, xiami, baidu
  type: song        # song, playlist, album, search, artist
  id: 41630480      # song id / playlist id / album id / search keyword
  autoplay: true
pin: true
---

开源项目越多人参与就越有生命力，希望有兴趣的小伙伴可以加入团队～

现免费招募文档维护团队，工作内容：
- 补充疏漏内容
- 修复错误内容
- 审核 PR 并对内容正确、格式符合规范的进行合并

<br>
{% note success, 本站使用了持续集成，以上轻量级的工作仅仅使用浏览器就可以完成。 %}

<br>
{% btn large center, 申请加入团队, https://github.com/volantis-x/forum/issues/5 , fas fa-plus %}


<!-- more -->

<br><br>

## 感谢项目贡献者

{% tabs join, 1 %}

<!-- tab 提交 PR -->

{% p subtitle, 非常感谢直接提交了 PR 的朋友！ %}

<div class="btns circle grid5 contributors"><div class="loading"><i class="fa fa-cog fa-2x fa-spin"></i></div></div>

{% p subtitle, 同样感谢那些在评论和 Issue 中互相帮助的网友~ %}

如果您有一个好点子或者解决了我这里没有解决的问题，欢迎去 [GitHub](https://github.com/volantis-x/hexo-theme-volantis/) 贡献一下代码。👏


<!-- endtab -->

<!-- tab 维护文档 -->


如果您发现文档中有错误，或者遗漏内容，欢迎补充和纠正。👏

{% btns circle grid5 %}
{% cell 文档源码, https://github.com/volantis-x/volantis-docs/, fab fa-github %}
{% endbtns %}

<!-- endtab -->

<!-- tab 站点收录 -->

感谢以下网站的收录与分享，让本主题能够被更多人发现，主题就会做的越来越好~

{% btns rounded grid5 %}
{% cell Hexo Themes, https://hexo.io/themes/, https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/logo/hexo.jpg %}
{% cell Valine, https://valine.js.org/hexo.html#hexo-theme-volantis, https://img.vim-cn.com/69/c9df34f04c86d32de9096a595fb5865711403c.png %}
{% cell Easy Hexo, https://easyhexo.com/2-Theme-use-and-config/2-6-hexo-theme-volantis/, https://i.loli.net/2020/03/10/vxqOKtnRYehP4ZW.png %}
{% endbtns %}

<!-- endtab -->

{% endtabs %}


## 如何参与互动

{% p subtitle, 解决问题 %}

| 渠道 | 方式 | 用途 |
| :-- | :-- | :-- |
| Issue | [@volantis-x/hexo-theme-volantis](https://github.com/volantis-x/hexo-theme-volantis/issues/) | 和开发者沟通的唯一渠道，用于跟进和解决问题 |

{% p subtitle, 交流 %}

| 渠道 | 方式 | 用途 |
| :-- | :-- | :-- |
| 论坛 | [@volantis-x/forum](https://github.com/volantis-x/forum/issues/) | 慢，相对正式，方便检索，可以给其他用户参考 |
| QQ群 | 1146399464 (验证码: <psw>vlts-2020</psw>) | 非正式，即时通讯，易于斗图；不利于给其他用户参考 |
| 微信群 | - | - |

{% p subtitle, 佛系互动 %}

| 渠道 | 方式 | 用途 |
| :-- | :-- | :-- |
| 评论区 | 留言 | 可以测试、灌水、推广自己的博客。 |

{% raw %}
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.5/dist/jquery.min.js"></script>
<script>
$.get("https://api.github.com/repos/volantis-x/hexo-theme-volantis/contributors",function(data, status) {
  if (data.length > 29) {
    data.length = 29;
  }
  if (data.length > 0) {
    for (i = 0; i < data.length; i++) {
      let imgTag = '<img src="' + data[i].avatar_url + '>';
      let aTag = '<a class="button" target="_blank" rel="external nofollow noopener noreferrer" href="' + data[i].html_url + '">' + '<img src="' + data[i].avatar_url + '">' + data[i].login + '</a>';
      $('.contributors').append(aTag);
    }
  }
  $('.contributors').append('<a class="button" target="_blank" rel="external nofollow noopener noreferrer" href="https://github.com/volantis-x/hexo-theme-volantis/graphs/contributors?type=a"><i class="fab fa-github"></i>查看全部</a>');
  $('.contributors .loading').remove();
});
</script>
{% endraw %}
