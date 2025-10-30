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

## 社区维护团队的博客

{% sites only:community_team,test_demo %}

## 使用 Volantis 的博客示例

按版本号降序：

{% sites only:showcase %}

<br>


<!-- more -->

<br><br>

{% timeline 如何添加自己的博客链接 %}

{% timenode 第一步：新建 [Issue](https://github.com/volantis-x/hexo-theme-volantis-showcase/issues/) 按照格式填写并提交 %}

```json
{
    "title": "",
    "description": "",
    "screenshot": "",
    "url": "",
    "avatar": "",
    "version": "版本：^4.0"
}
```

为了提高图片加载速度，建议优化图片尺寸：
1. 打开 [压缩图](https://www.yasuotu.com/) 上传自己的截图，将图片的高度调整到 `360px` 后下载。
2. 将压缩后的图片上传到 [ooxx.ooo免费图床](https://ooxx.ooo/upload) 并使用此图片链接作为截图链接。

{% endtimenode %}

{% timenode 第二步：刷新 %}

回来刷新即可生效。

{% endtimenode %}

{% endtimeline %}

{% p h2, 如何更新自己的博客链接 %}

- 如果是自己创建的 issue ，可以自己修改。
- 如果是管理员创建的，请自己重新创建一份，然后让管理员删掉旧的。
