---
layout: docs
title: 文章布局配置
group: docs-volantis-latest
order: 306
short_title: 3-6 文章布局配置
sidebar: [repos, docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---


```yaml
# 文章布局
article:
  # 文章列表页面的文章卡片布局方案
  preview:
    scheme: landscape # landscape
    # pin icon for post
    pin_icon: https://cdn.jsdelivr.net/gh/twitter/twemoji@13.0/assets/svg/1f4cc.svg
    # auto generate title if not exist
    auto_title: true # false, true
    # auto generate excerpt if not exist
    auto_excerpt: true # false, true
    # show split line or not
    line_style: solid # hidden, solid, dashed, dotted
    # show readmore button
    readmore: auto # auto, always
  # 文章详情页面的文章卡片本体布局方案
  body:
    # 文章顶部信息
    # 从 meta_library 中取
    top_meta: [author, category, date, counter]
    # ----------------
    # 文章页脚组件
    footer_widget:
      # ----------------
      # 参考资料、相关资料等 (for layout: post/docs)
      references:
        title: 参考资料
        icon: fas fa-quote-left
        # 在 front-matter 中:
        #   references:
        #     - title: 某篇文章
        #       url: https://
        # 即可显示此组件。
      # ----------------
      # 相关文章，需要安装插件 (for layout: post)
      # npm i hexo-related-popular-posts
      related_posts:
        enable: false
        title: 相关文章
        icon: fas fa-bookmark
        max_count: 5
        # 设为空则不使用文章头图
        placeholder_img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/046.jpg
      # ----------------
      # 版权声明组件 (for layout: post/docs)
      copyright:
        enable: true
        permalink: '本文永久链接是：'
        content:
          - '博客内容遵循 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 协议'
          - permalink
      # ----------------
      # 打赏组件 (for layout: post/docs)
      donate:
        enable: false
        images:
          - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
          - https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/qrcode/github@volantis.png
    # 文章底部信息
    # 从 meta_library 中取
    bottom_meta: [updated, tags, share]
    # meta library
    meta_library:
      # 默认文章作者（可在 front-matter 中覆盖）
      author:
        avatar:
        name: 请设置文章作者
        url: /
      # 文章创建日期
      date:
        icon: fas fa-calendar-alt
        title: '发布于：'
        format: 'll' # 日期格式 http://momentjs.com/docs/
      # 文章更新日期
      updated:
        icon: fas fa-edit
        title: '更新于：'
        format: 'll' # 日期格式 http://momentjs.com/docs/
      # 文章分类
      category:
        icon: fas fa-folder-open
      # 文章浏览计数
      counter:
        icon: fas fa-eye
        unit: '次浏览'
      # 文章评论数量：只支持 valine
      valinecount:
        icon: fas fa-comment-dots
        desc: '' # 条评论
      # 文章字数和阅读时长
      wordcount:
        icon_wordcount: fas fa-keyboard
        icon_duration: fas fa-hourglass-half
      # 文章标签
      tags:
        icon: fas fa-hashtag
      # 分享
      share:
        - id: qq
          img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/qq.png
        - id: qzone
          img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/qzone.png
        - id: weibo
          img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/weibo.png
        - id: # qrcode # 当id为qrcode时需要安装插件  npm i hexo-helper-qrcode
          img: # https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/wechat.png
        - id: # telegram
          img: # https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/telegram.png

```
其中 `top_meta` 和 `bottom_meta` 部分的取值自 `meta_library` 库。
