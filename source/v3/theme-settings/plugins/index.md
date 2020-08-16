---
layout: page
title: 第三方插件
group: docs-latest
order: 310
short_title: 3-10 第三方插件
meta:
  header: [centertitle]
sidebar: [docs-latest, toc, repos]
---


## 插件库
Volantis 为丰富的插件提供了兼容性优化。大部分插件您只需开启和关闭，无需进行设置。

## 幻灯片背景
```yaml blog/themes/volantis/_config.yml
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
```yaml blog/themes/volantis/_config.yml
plugins:
  ...
  highlightjs:
    js: https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js
    css: https://cdn.jsdelivr.net/npm/highlight.js@9.18.1/styles/solarized-light.css
```
如果需要使用 highlight.js 进行语法高亮，请将站点配置文件中的 `highlight.enable` 设置为 `false` 否则不会加载插件。您可以在 <u>94</u> 种 [语法高亮主题](https://www.jsdelivr.com/package/npm/highlight.js?path=styles) 中挑选喜爱的主题，然后替换上面的 css 链接。

{% note warning, 如果您使用 highlight.js 请确保没有使用 hexo 官方的 codeblock 标签，否则会报错。 %}
{% note bug red, 经测试，使用 highlight.js 的情况下，部分容器内的代码可能仍然会被渲染甚至报错。 %}

## APlayer 音乐播放器
```yaml blog/themes/volantis/_config.yml
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
```yaml blog/themes/volantis/_config.yml
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
