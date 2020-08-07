---
layout: page
title: 元数据组件
group: docs-latest
order: 306
short_title: 3-6 元数据组件
meta:
  header: [centertitle]
sidebar: [docs-latest, toc, repos]
---

<u>meta</u> 即文章的元数据，描述文章的作者、发布时间、更新时间等等信息，Volantis 不替您决定，显示什么图标、如何描述都可以自定义。

```yaml blog/themes/volantis/_config.yml
meta:
  # 文章标题
  title: # 暂无配置
  # 默认文章作者（可在front-matter中覆盖）
  author:
    avatar: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png
    name: Mr. X
    url: https://xaoxuu.com
  # 文章创建日期
  date:
    icon: fas fa-edit
    title: '发布于：'
    format: 'll' # 日期格式 http://momentjs.com/docs/
  # 文章更新日期
  updated:
    icon: fas fa-save
    title: '更新于：'
    format: 'll' # 日期格式 http://momentjs.com/docs/
  # 文章分类
  category:
    icon: fas fa-folder-open
  # 文章置顶
  top:
    icon: fas fa-angle-double-up
  # 文章浏览计数
  counter:
    icon: fas fa-eye
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
    # - id: qrcode # 当id为qrcode时需要安装插件  npm i -S hexo-helper-qrcode
    #   img: https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/128/wechat.png
  # 链接
  btns:
    edit:
      icon: fas fa-edit
      title: 在GitHub上编辑此页
      color: '#888'
    repo: # 源码链接
      icon: fas fa-file-code
      title: 源码
      color: '#508EF2'
    bug: # BUG反馈链接
      icon: fas fa-bug
      title: BUG
      color: '#FE5F58'
    doubt: # 疑问链接
      icon: fas fa-question-circle
      title: 疑问
      color: '#FFBD2B'
    idea: # 建议链接
      icon: fas fa-lightbulb
      title: 建议
      color: '#3DC550'
    faq: # FAQ链接
      icon: fas fa-comments
      title: FAQ
      color: '#29B1C9'
    feedback: # 反馈链接
      icon: fas fa-comment-dots
      title: 反馈
      color: '#1BCDFC'
```
