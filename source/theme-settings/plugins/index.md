---
layout: docs
title: 第三方插件
group: docs-volantis-latest
order: 310
short_title: 3-10 第三方插件
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
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
    loadingImg: # https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/placeholder/c617bfd2497fcea598e621413e315c368f8d8e.svg
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
    enable: true
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
      - https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js
      - https://cdn.jsdelivr.net/npm/meting@2.0/dist/Meting.min.js
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
    timeout: 5000        # The timeout in milliseconds for the XHR requests. Set to 0 to disable the timeout.
    cacheBust: false     # When set to true, Pjax appends a timestamp  to skip the browser cache.
    animation: nprogress # nprogress, circle
    banUrl:              # 被屏蔽的 url 地址将不启用 pjax 跳转，可以在控制台下使用 window.location.pathname 获取
      # - /artitalk/     # artitalk 不支持 pjax


  # Artitalk https://artitalk.js.org
  # 配置过程请参考：https://artitalk.js.org/doc.html
  # 除appID和appKEY外均为选填项
  artitalk:
    # Set `layout: artitalk` to enable in page
    appID: ogP8qj3veMh0LFpFWMPOyF0X-MdYXbMMI # your appID
    appKEY: nHXLd3N3Jgh460t2iRQKWAtr # your appKEY
    # severurl:  #leancloud绑定的安全域名，使用国际版的话不需要填写
    # slanguage: # 语言设置，zh为汉语，en为英语，es为西班牙语。默认为汉语
    # per: #每页说说的显示数量
    # placeholder1: #在编辑说说的输入框中的占位符
    # placeholder2: #自定义头像url的输入框的占位符
    # lazy: #加载动画的开关，1为开，0为关，默认为开
    # bgimg: #说说输入框背景图片url
    # color1: #说说背景颜色1&按钮颜色1
    # color2: #说说背景颜色2&按钮颜色2
    # color3: #说说字体颜色
  ##################################
  # 暗黑模式 darkmodejs
  # https://darkmodejs.learn.uno
  # 暗黑模式样式：https://github.com/volantis-x/hexo-theme-volantis/blob/master/source/css/_third-party/darkmode.styl
  darkmodejs:
    enable: #true
    js: https://cdn.jsdelivr.net/npm/darkmode-js@1.5/lib/darkmode-js.min.js
    button: # button 使用默认或自行开发
      enable: true
      left: '16px'
      bottom: '32px'
      buttonDark: '#333'
      buttonLight: '#ddd'
    compatible: true # 卡片兼容性处理，如果未发现卡片出现兼容问题设置为false
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
  highlightjs:
    js: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10/build/highlight.min.js
    css: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10/build/styles/solarized-light.min.css
```
如果需要使用 highlight.js 进行语法高亮，请将站点配置文件中的 `highlight.enable` 设置为 `false` 否则不会加载插件。您可以在 <u>94</u> 种 [语法高亮主题](https://www.jsdelivr.com/package/npm/highlight.js?path=styles) 中挑选喜爱的主题，然后替换上面的 css 链接。

{% note warning, 如果您使用 highlight.js 请确保没有使用 hexo 官方的 codeblock 标签，否则会报错。 %}
{% note bug red, 经测试，使用 highlight.js 的情况下，部分容器内的代码可能仍然会被渲染甚至报错。 %}

## APlayer 音乐播放器
```yaml blog/_config.volantis.yml
plugins:
  ...
  aplayer:
    enable: true
    js:
      - https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js
      - https://cdn.jsdelivr.net/npm/meting@2.0/dist/Meting.min.js
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
    list_max_height: 340px # list max height
    list_folded: true
```

{% note warning, APlayer播放器只可以在中国大陆地区使用。相关文档： [APlayer](https://aplayer.js.org/) | [MetingJS](https://github.com/metowolf/MetingJS) %}

## Artitalk
```yaml blog/_config.volantis.yml
plugins:
  ...
  # Artitalk https://artitalk.js.org
  # 配置过程请参考：https://artitalk.js.org/doc.html
  # 除appID和appKEY外均为选填项
  Artitalk:
    enable: false # true为开启，false为关闭
    appID: ogP8qj3veMh0LFpFWMPOyF0X-MdYXbMMI # your appID
    appKEY: nHXLd3N3Jgh460t2iRQKWAtr # your appKEY
    # severurl:  #leancloud绑定的安全域名，使用国际版的话不需要填写
    # slanguage: # 语言设置，zh为汉语，en为英语，es为西班牙语。默认为汉语
    # per: #每页说说的显示数量
    # placeholder1: #在编辑说说的输入框中的占位符
    # placeholder2: #自定义头像url的输入框的占位符
    # lazy: #加载动画的开关，1为开，0为关，默认为开
    # bgimg: #说说输入框背景图片url
    # color1: #说说背景颜色1&按钮颜色1
    # color2: #说说背景颜色2&按钮颜色2
    # color3: #说说字体颜色
```
