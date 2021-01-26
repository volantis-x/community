---
layout: docs
title: 第三方插件
group: docs-volantis-latest
order: 310
short_title: 3-10 第三方插件
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /
---


## 插件库
Volantis 为丰富的插件提供了兼容性优化。大部分插件您只需开启和关闭，无需进行设置。

```yaml blog/_config.volantis.yml
plugins:
  ################ required plugins ################
  # jquery
  jquery: https://cdn.jsdelivr.net/npm/jquery@3.5/dist/jquery.min.js
  # fontawesome
  fontawesome: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.14/css/all.min.css
  ################ optional plugins ################

  ######## Plugins to improve loading speed:

  # 预加载
  preload:
    enable: true
    service: flying_pages # instant_page, flying_pages
    instant_page: https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@2/js/instant_page.js
    flying_pages: https://cdn.jsdelivr.net/gh/gijo-varghese/flying-pages@2.1.2/flying-pages.min.js

  # 图片懒加载
  # https://www.npmjs.com/package/vanilla-lazyload
  lazyload:
    enable: true
    js: https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.1.0/dist/lazyload.min.js
    onlypost: false
    loadingImg: # https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@3/img/placeholder/c617bfd2497fcea598e621413e315c368f8d8e.svg
    blurIn: true # 模糊加载效果 （loadingImg为空时有效）

  ######## Plugins to optimize the experience:

  # highlight.js
  highlightjs:
    enable: #true # Please set hexo.config.highlight.enable = false !!!
    js: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10/build/highlight.min.js
    css: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10/build/styles/solarized-light.min.css
    # more: https://www.jsdelivr.com/package/npm/highlight.js?path=styles

  # https://scrollrevealjs.org/api/reveal.html
  scrollreveal:
    enable: #true
    js: https://cdn.jsdelivr.net/npm/scrollreveal@4.0.6/dist/scrollreveal.min.js
    distance: 32px
    duration: 800 # ms
    interval: 20 # ms
    scale: 1 # 0.1~1

  # Codeblock Copy Button
  clipboard:
    enable: #true
    js: https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js

  ######## Plugins for SEO:

  # npm i hexo-wordcount
  wordcount:
    enable: #true

  ######## Plugins for ...
  # Button Ripple Effect
  nodewaves:
    enable: #true
    css: https://cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.css
    js: https://cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.js

  # fontawesome animation
  fontawesome_animation:
    enable: #true
    css: https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css

  # Typing Effects
  comment_typing:
    enable: #true
    js: https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@2/js/comment_typing.js

  # Slide Background
  backstretch:
    enable: #true
    js: https://cdn.jsdelivr.net/npm/jquery-backstretch@2.1.18/jquery.backstretch.min.js
    position: cover       # cover: sticky on the cover.   fixed: Fixed as background for the site.
    shuffle: true         # shuffle playlist
    duration: 10000       # Duration (ms)
    fade: 1500            # fade duration (ms) (Not more than 1500)
    images:               # For personal use only. At your own risk if used for commercial purposes !!!
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/001.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/002.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/003.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/004.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/005.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/006.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/012.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/016.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/019.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/033.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/034.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/035.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/038.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/039.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/042.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/046.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/051.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/052.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/054.jpg
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/056.jpg

  # APlayer is only available in mainland China.
  # APlayer config: https://github.com/metowolf/MetingJS
  aplayer:
    enable: #true
    js:
      aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js
      meting: https://cdn.jsdelivr.net/npm/meting@2.0/dist/Meting.min.js
    # Required
    server: netease   # netease, tencent, kugou, xiami, baidu
    type: playlist    # song, playlist, album, search, artist
    id: 3175833810    # song id / playlist id / album id / search keyword
    # Optional
    fixed: false      # enable fixed mode
    theme: '#1BCDFC'  # main color
    autoplay: false   # audio autoplay
    order: list       # player play order, values: 'list', 'random'
    loop: all         # player loop play, values: 'all', 'one', 'none'
    volume: 0.7       # default volume, notice that player will remember user setting, default volume will not work after user set volume themselves
    list_max_height: 320px # list max height
    list_folded: true
  pjax:
    enable: true
    cover: true          # 封面是否pjax处理 false：每次切换页面封面都重载，适合封面较少的情况 true：封面经过Pjax处理，适合封面较多的情况
    timeout: 5000        # The timeout in milliseconds for the XHR requests. Set to 0 to disable the timeout.
    cacheBust: false     # When set to true, Pjax appends a timestamp  to skip the browser cache.
    animation: false # false, nprogress, circle
    banUrl:              # 被屏蔽的 url 地址将不启用 pjax 跳转，可以在控制台下使用 window.location.pathname 获取
      # - '/artitalk/'     # artitalk 不支持 pjax
      # - '/bb/'           # bbtalk 不支持 pjax

  # 从 issues 加载动态数据
  # {% issues sites/timeline/friends | api=xxx | group=key:a,b,c %}
  # 例如：
  # {% issues sites | api=https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=version:latest,v6,v5,v4,v3,v2,v1,v0 %}


  # 暗黑模式 darkmode
  # 样式：source/css/_plugins/dark.styl
  # 开关按钮：在 navbar.menu 中添加：
  # - name: 暗黑模式 # 可自定义
  #   icon: fas fa-moon # 可自定义
  #   toggle: darkmode
  darkmodejs:
    enable: #true

  # 旧版 Internet Explorer 淘汰行动
  # https://www.microsoft.com/zh-cn/WindowsForBusiness/End-of-IE-support
  # 本主题不支持Internet Explorer的任何版本!!!
  killOldVersionsOfIE:
    enable: true

  # 禁用JavaScript提示
  # 本页面需要浏览器支持（启用）JavaScript
  # 主题中的某些插件必须启用JavaScript才能正常工作，例如开启scrollreveal如果禁用JavaScript会导致卡片消失
  killNoScript:
    enable: true

  # Artitalk https://artitalk.js.org
  # 配置过程请参考：https://artitalk.js.org/doc.html
  # 使用过旧版本的请修改Leancloud shuoshuo class部分列名：https://artitalk.js.org/release.html
  # 除appID和appKEY外均为选填项
  artitalk:
    # Set `layout: artitalk` to enable in page
    # 配置项按照yml格式继续填写即可
    appId: ogP8qj3veMh0LFpFWMPOyF0X-MdYXbMMI # your appID
    appKey: nHXLd3N3Jgh460t2iRQKWAtr # your appKEY
    # serverURL:  #leancloud绑定的安全域名，使用国际版的话不需要填写
    # lang: # 语言设置，zh为汉语，en为英语，es为西班牙语。默认为汉语
    # pageSize: #每页说说的显示数量
    # shuoPla: #在编辑说说的输入框中的占位符
    # avatarPla: #自定义头像url的输入框的占位符
    # motion: #加载动画的开关，1为开，0为关，默认为开
    # bgImg: #说说输入框背景图片url
    # color1: #说说背景颜色1&按钮颜色1
    # color2: #说说背景颜色2&按钮颜色2
    # color3: #说说字体颜色
    # cssUrl: #自定义css接口

  # BBtalk https://bb.js.org
  bbtalk:
    js: https://cdn.jsdelivr.net/npm/bbtalk@0.1.5/dist/bbtalk.min.js # BBtalk.js
    appId: 0KzOX4vC7Jsk6vzUGNeEiUaI-gzGzoHsz # your appID
    appKey: HwCiWuxfpvKiLm4teCUgTIba # your appKEY
    serverURLs: https://bbapi.heson10.com # Request Api 域名

  # Tidio聊天功能
  # https://www.tidio.com/
  tidio:
    enable: #true
    id: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

```



## 幻灯片背景
```yaml blog/_config.volantis.yml
plugins:
  ...
  backstretch:
    enable: true
    js: https://cdn.jsdelivr.net/npm/jquery-backstretch@2.1.18/jquery.backstretch.min.js
    position: cover       # cover: sticky on the cover.   fixed: Fixed as background for the site.
    duration: 20000       # Duration (ms)
    fade: 1500            # fade duration (ms) (Not more than 1500)
    images:               # For personal use only. At your own risk if used for commercial purposes !!!
      - https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg
      ...
```
幻灯片背景图片显示的位置可以选择粘贴在封面上，跟随封面一起滑动，也可以选择固定作为网页背景图片。

## highlight.js
```yaml blog/_config.volantis.yml
plugins:
  ...
  # highlight.js
  highlightjs:
    enable: true # Please set hexo.config.highlight.enable = false !!!
    js: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10/build/highlight.min.js
    css: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10/build/styles/solarized-light.min.css
    # more: https://www.jsdelivr.com/package/npm/highlight.js?path=styles
```
如果需要使用 highlight.js 进行语法高亮，请将站点配置文件中的 `highlight.enable` 设置为 `false` 否则不会加载插件。您可以在 <u>94</u> 种 [语法高亮主题](https://www.jsdelivr.com/package/npm/highlight.js?path=styles) 中挑选喜爱的主题，然后替换上面的 css 链接。

{% note warning, 如果您使用 highlight.js 请确保没有使用 hexo 官方的 codeblock 标签，否则会报错。 %}
{% note bug red, 经测试，使用 highlight.js 的情况下，部分容器内的代码可能仍然会被渲染甚至报错。 %}

## APlayer 音乐播放器
```yaml blog/_config.volantis.yml
plugins:
  ...
  # APlayer is only available in mainland China.
  # APlayer config: https://github.com/metowolf/MetingJS
  aplayer:
    enable: true
    js:
      aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js
      meting: https://cdn.jsdelivr.net/npm/meting@2.0/dist/Meting.min.js
    # Required
    server: netease   # netease, tencent, kugou, xiami, baidu
    type: playlist    # song, playlist, album, search, artist
    id: 3175833810    # song id / playlist id / album id / search keyword
    # Optional
    fixed: false      # enable fixed mode
    theme: '#1BCDFC'  # main color
    autoplay: false   # audio autoplay
    order: list       # player play order, values: 'list', 'random'
    loop: all         # player loop play, values: 'all', 'one', 'none'
    volume: 0.7       # default volume, notice that player will remember user setting, default volume will not work after user set volume themselves
    list_max_height: 320px # list max height
    list_folded: true
```

{% note warning, APlayer播放器只可以在中国大陆地区使用。相关文档： [APlayer](https://aplayer.js.org/) | [MetingJS](https://github.com/metowolf/MetingJS) %}

## 暗黑模式

```yaml blog/_config.volantis.yml
plugins:
  ...
  # 样式：source/css/_plugins/dark.styl
  # 开关按钮：在 navbar.menu 中添加：
  # - name: 暗黑模式 # 可自定义
  #   icon: fas fa-moon # 可自定义
  #   toggle: darkmode
  darkmodejs:
    enable: true
```

## 结束支持

```yaml blog/_config.volantis.yml
plugins:
  ...
  # 旧版 Internet Explorer 淘汰行动
  # https://www.microsoft.com/zh-cn/WindowsForBusiness/End-of-IE-support
  # 本主题不支持Internet Explorer的任何版本!!!
  killOldVersionsOfIE:
    enable: true

  # 禁用JavaScript提示
  # 本页面需要浏览器支持（启用）JavaScript
  # 主题中的某些插件必须启用JavaScript才能正常工作，例如开启scrollreveal如果禁用JavaScript会导致卡片消失
  killNoScript:
    enable: true
```

## Artitalk
```yaml blog/_config.volantis.yml
plugins:
  ...
  # Artitalk https://artitalk.js.org
  # 配置过程请参考：https://artitalk.js.org/doc.html
  # 使用过旧版本的请修改Leancloud shuoshuo class部分列名：https://artitalk.js.org/release.html
  # 除appID和appKEY外均为选填项
  artitalk:
    # Set `layout: artitalk` to enable in page
    # 配置项按照yml格式继续填写即可
    appId: ogP8qj3veMh0LFpFWMPOyF0X-MdYXbMMI # your appID
    appKey: nHXLd3N3Jgh460t2iRQKWAtr # your appKEY
    # serverURL:  #leancloud绑定的安全域名，使用国际版的话不需要填写
    # lang: # 语言设置，zh为汉语，en为英语，es为西班牙语。默认为汉语
    # pageSize: #每页说说的显示数量
    # shuoPla: #在编辑说说的输入框中的占位符
    # avatarPla: #自定义头像url的输入框的占位符
    # motion: #加载动画的开关，1为开，0为关，默认为开
    # bgImg: #说说输入框背景图片url
    # color1: #说说背景颜色1&按钮颜色1
    # color2: #说说背景颜色2&按钮颜色2
    # color3: #说说字体颜色
    # cssUrl: #自定义css接口
```

## BBtalk
```yaml blog/_config.volantis.yml
plugins:
  ...
  bbtalk:
    js: https://cdn.jsdelivr.net/npm/bbtalk@0.1.5/dist/bbtalk.min.js # BBtalk.js
    appId: 0KzOX4vC7Jsk6vzUGNeEiUaI-gzGzoHsz # your appID
    appKey: HwCiWuxfpvKiLm4teCUgTIba # your appKEY
    serverURLs: https://bbapi.heson10.com # Request Api 域名
```

## Tidio
```yaml blog/_config.volantis.yml
plugins:
  ...
  # Tidio聊天功能
  # https://www.tidio.com/
  tidio:
    enable: true
    id: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```