---
layout: docs
group: docs-volantis-latest
order: 546
short_title: false
title: 'tag-plugins: frame'
sidebar: [repos, docs-volantis-latest, toc]
disqus:
  path: /wiki/volantis/
---

这是一个能够将图片或者视频套入设备框架中的标签，可以用来更优雅地显示截图、录屏。

```md 本插件最后更新于 <u>4.0</u> 版本
{% frame 框架名 | img=图片链接 | alt=图片描述（可选） | part=top/bottom（可选） %}
{% frame 框架名 | video=视频链接 | part=top/bottom（可选） %}
```

<br>

{% frame iphone11 | img=https://gitee.com/xaoxuu/cdn-assets/raw/master/wiki/prohud/toast-loading@2x.jpg | video=https://gitee.com/xaoxuu/cdn-assets/raw/master/wiki/prohud/toast-loading@2x.mov | part=top %}

```
{% frame iphone11 | img=https://gitee.com/xaoxuu/cdn-assets/raw/master/wiki/prohud/toast-loading@2x.jpg | video=https://gitee.com/xaoxuu/cdn-assets/raw/master/wiki/prohud/toast-loading@2x.mov | part=top %}
```

在这个示例中同时出现了 `img` 和 `video` 那么它就是一个带有封面的视频，在视频加载完成之前会先显示视频封面。

## 设备框架

目前支持的有：

```
iphone11
```

如果您有以下其它设备框架图(svg)，欢迎 PR 兼容。

```
android, ipad, macbook, watch
```

## 剪裁

通过设置 `part=top` 或者 `part=bottom` 来显示上半部分或者下半部分，否则将显示完整的框架及其中的图片/视频。
