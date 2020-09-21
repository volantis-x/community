---
robots: noindex,nofollow
sitemap: false
layout: page
group: docs-v3
order: 504
title: 多媒体标签
short_title: 5-4 多媒体标签
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
snackbar: oldversion
mathjax: true
---
 


## Inlineimage

Inlineimage 标签是一种行内图片标签，可以用来在一段话中间插入表情。请将您的 Volantis 升级至 <u>3.0.0</u> 版本以上使用。

{% tabs inlineimage, 4 %}

<!-- tab 语法格式 -->

```
这是一段话 {% inlineimage 链接, height=高度（可选） %} 这是一段话。
```

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 图片高度 %}

阿拉伯数字 + px

```md example:
height=20px
```

<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。
```

<!-- endtab -->

<!-- tab 示例效果 -->

这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。

<!-- endtab -->

{% endtabs %}



## Image

Image 标签是一种针对单个图片应用场景的标签，支持图片描述文字和指定宽度。请将您的 Volantis 升级至 <u>2.6</u> 版本以上使用。

{% tabs image, 4 %}

<!-- tab 语法格式 -->

```
{% image 链接, 宽度（可选）, 描述（可选） %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 图片宽度 %}

阿拉伯数字 + px

```md example:
300px
```

{% p subtitle, 图片描述 %}

纯文本，不能包含引号。


<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, alt=每天下课回宿舍的路，承载了太多记忆。 %}

指定宽度：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=300px %}

指定宽度并添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=300px, alt=每天下课回宿舍的路，承载了太多记忆。 %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, alt=每天下课回宿舍的路，承载了太多记忆。 %}

指定宽度：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=300px %}

指定宽度并添加描述：

{% image https://i.loli.net/2020/04/06/zdeQiOY9rBCjhDR.jpg, width=300px, alt=每天下课回宿舍的路，承载了太多记忆。 %}

<!-- endtab -->

{% endtabs %}


## Gallery

Gallery 标签是一种针对一组图片应用场景的标签。请将您的 Volantis 升级至 <u>3.0</u> 版本以上使用。

{% tabs gallery, 4 %}

<!-- tab 语法格式 -->

```md
{% gallery 参数, 列数 %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
{% endgallery %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 对齐方向 %}

```
left, center, right
```

{% p subtitle, 缩放 %}

```
stretch
```

{% p subtitle, 列数 %}

逗号后面直接写列数，支持 2 ～ 8 列。设定列列数之后就是「多行多图」布局，此时图片默认左对齐。为了避免图片大小不一，建议搭配 `stretch` 来时图片放大填充。


<!-- endtab -->

<!-- tab 示例写法 -->

一行一个图片

```md example.md:
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endgallery %}
```

一行多个图片（不换行）

```md example.md:
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
{% endgallery %}
```

多行多个图片（每行2～8个图片）

```md example.md:
{% gallery stretch, 4 %}
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
{% endgallery %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

一行一个图片
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endgallery %}

一行多个图片（不换行）
{% gallery %}
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
{% endgallery %}

多行多个图片（每行2～8个图片）
{% gallery stretch, 4 %}
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
{% endgallery %}

<!-- endtab -->

{% endtabs %}

## Audio

请将您的 Volantis 升级至 <u>2.4</u> 版本以上使用。

{% tabs audio, 3 %}

<!-- tab 语法格式 -->

```md example.md:
{% audio 音频链接 %}
```

<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}

<!-- endtab -->

{% endtabs %}

## Video

请将您的 Volantis 升级至 <u>2.3</u> 版本以上使用。

{% tabs video, 1 %}

<!-- tab 语法格式 -->

{% p subtitle, 单个视频 %}

```md example.md:
{% video 视频链接 %}
```

{% p subtitle, 多个视频 %}

```md example.md:
{% videos 对齐方向, 列数 %}
{% video 视频链接 %}
{% video 视频链接 %}
{% video 视频链接 %}
{% endvideos %}
```


<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 对齐方向 %}

```
left, center, right
```

{% p subtitle, 列数 %}

逗号后面直接写列数，支持 1 ～ 4 列。

<!-- endtab -->

<!-- tab 示例写法 -->

100%宽度

```md example.md:
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
```

50%宽度

```md example.md:
{% videos, 2 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```

25%宽度

```md example.md:
{% videos, 4 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

100%宽度

{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}

50%宽度

{% videos, 2 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

25%宽度

{% videos, 4 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

<!-- endtab -->

{% endtabs %}

## APlayer

主题对 APlayer 插件的样式进行了兼容。安装插件：

```sh
npm i -S hexo-tag-aplayer
```

{% link hexo-tag-aplayer, https://github.com/MoePlayer/hexo-tag-aplayer %}
