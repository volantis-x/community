---
seo_title: 示例博客
cover: true
sidebar: []

---

<center>
{% span large red, 示 %}
{% span large yellow, 例 %}
{% span large green, 博 %}
{% span large blue, 客 %}
</center>
<br>

## 团队成员的博客

{% sitegroup %}
{% site xaoxuu, url=https://xaoxuu.com, screenshot=https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, avatar=https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
{% site inkss, url=https://inkss.cn, screenshot=https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, avatar=https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site MHuiG, url=https://blog.mhuig.top, screenshot=https://i.loli.net/2020/08/22/d24zpPlhLYWX6D1.png, avatar=https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png, description=这是一段关于这个网站的描述文字 %}
{% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg, description=愿多年以后，我可以酌一杯清酒，烂醉如泥，梦中回到我们的曾经。 %}
{% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://i.loli.net/2020/08/21/3PmGLCKicnfow1x.png, avatar=https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png, description=这是一段关于这个网站的描述文字 %}
{% endsitegroup %}


<br>

{% issues sites | api=https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=版本：^4.0,版本：^3.0,版本：^2.0 %}

<br>


<!-- more -->

<br><br>

{% timeline 如何添加自己的博客链接 %}

{% timenode 第一步：新建 [Issue](https://github.com/volantis-x/examples/issues/) 按照格式填写并提交 %}

```yaml
#### 必填项 ####
# 网站标题
title:
# 网站截图
screenshot:
# 网站链接
url:
# 网站使用的主题版本，如 group: 版本：^4.0
group: 版本：^4.0


#### 可选项 ####
# 作者头像链接
avatar:
# 网站描述
description:
# 关键词，多个关键词用英文逗号和一个空格隔开，如 keywords: A, B
keywords:
```

为了提高图片加载速度，建议优化图片尺寸：
1. 打开 [压缩图](https://www.yasuotu.com/) 上传自己的截图，将图片的高度调整到 `360px` 后下载。
2. 将压缩后的图片上传到 [sm.ms 图床](https://sm.ms/) 并使用此图片链接作为截图链接。

{% endtimenode %}

{% timenode 第二步：刷新 %}

回来刷新即可生效。

{% endtimenode %}

{% endtimeline %}

{% p h2, 如何更新自己的博客链接 %}

- 如果是自己创建的 issue ，可以自己修改。
- 如果是管理员创建的，请自己重新创建一份，然后让管理员删掉旧的。
