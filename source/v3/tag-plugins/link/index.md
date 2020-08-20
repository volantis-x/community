---
layout: page
group: docs-latest
order: 502
title: 链接、按钮和菜单标签
short_title: 5-2 链接、按钮和菜单标签
meta:
  header: [centertitle]
sidebar: [docs-latest, toc, repos]
mathjax: true
---


## Link


请将您的 Volantis 升级至 <u>3.0</u> 版本以上使用。

{% tabs link, 3 %}

<!-- tab 语法格式 -->

```
{% link 标题, 链接, 图片 %}
```

<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
{% link 如何参与项目, http://localhost:4000/contributors/, https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% link 如何参与项目, http://localhost:4000/contributors/, https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/blog/Logo-NavBar@3x.png %}

<!-- endtab -->

{% endtabs %}

## 基础按钮

请将您的 Volantis 升级至 <u>2.4</u> 版本以上使用。

{% tabs btn, 4 %}

<!-- tab 语法格式 -->

```
{% btn 样式参数（可选）, 标题, 链接, 图标（可选） %}
```

{% note warning, 可选的参数可以省略，但是前后顺序不能乱。 %}

<!-- endtab -->

<!-- tab 参数列表 -->

{% p subtitle, 样式参数 %}

```
regular, large, center
```

{% p subtitle, 图标 %}

第1个或者第2个参数包含 `fa-` 的那个被识别为图标。


<!-- endtab -->

<!-- tab 示例写法 -->

```md example.md:
不设置任何参数的 {% btn 按钮, / %} 适合融入段落中。

regular 按钮适合独立于段落之外：

{% btn regular, 示例博客, https://xaoxuu.com, fas fa-play-circle %}

large 按钮更具有强调作用，建议搭配 center 使用：

{% btn center large, 开始使用, https://volantis.js.org/v3/getting-started/, fas fa-download %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% p subtitle, 行内按钮 %}

不设置任何参数的 {% btn 按钮, / %} 适合融入段落中。

{% p subtitle, 空心按钮 %}

{% btn regular, 示例博客, /, fas fa-rss %} {% btn regular, 示例博客, , fas fa-rss %}

{% btn regular large, 示例博客, /, fas fa-rss %} {% btn regular large, 示例博客, , fas fa-rss %}

居中：

{% btn center large, 开始使用, https://volantis.js.org/v3/getting-started/, fas fa-download %}

{% p subtitle, 实心按钮 %}

{% btn solid, 示例博客, /, fas fa-rss %} {% btn solid, 示例博客, , fas fa-rss %}

{% btn solid large, 示例博客, /, fas fa-rss %} {% btn solid large, 示例博客, , fas fa-rss %}

居中：

{% btn solid center large, 开始使用, https://volantis.js.org/v3/getting-started/, fas fa-download %}

<!-- endtab -->

{% endtabs %}


## 富文本按钮

请将您的 Volantis 升级至 <u>2.3</u> 版本以上使用。

{% tabs btns, 4 %}

<!-- tab 语法格式 -->

```
{% btns 样式参数 %}
{% cell 标题, 链接, 图片或者图标 %}
{% cell 标题, 链接, 图片或者图标 %}
{% endbtns %}
```

<!-- endtab -->

<!-- tab 参数列表 -->

样式参数位置可以写图片样式、布局方式，多个样式参数用空格隔开。

{% p subtitle, 圆角样式 %}

默认为方形

```
rounded, circle
```


{% p subtitle, 布局方式 %}

默认为自动宽度，适合视野内只有一两个的情况。

| 参数 | 含义 |
| :-- | :-- |
| wide | 宽一点的按钮 |
| fill | 填充布局，自动铺满至少一行，多了会换行。 |
| center | 居中，按钮之间是固定间距。 |
| around | 居中分散 |
| grid2 | 等宽最多2列，屏幕变窄会适当减少列数。 |
| grid3 | 等宽最多3列，屏幕变窄会适当减少列数。 |
| grid4 | 等宽最多4列，屏幕变窄会适当减少列数。 |
| grid5 | 等宽最多5列，屏幕变窄会适当减少列数。 |

{% p subtitle, 增加文字样式 %}

可以在容器内增加 `<b>标题</b>` 和 `<p>描述文字</p>`

<!-- endtab -->

<!-- tab 示例写法 -->

如果需要显示类似「团队成员」之类的一组含有头像的链接：

```md example.md:
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% endbtns %}
```

或者含有图标的按钮：

```md example.md:
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}
```

圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中

```md example.md:
{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p red, 专业版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p green, 免费版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
{% endbtns %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

如果需要显示类似「团队成员」之类的一组含有头像的链接：
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% endbtns %}

或者含有图标的按钮：
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}


圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中
{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p red, 专业版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p green, 免费版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
{% endbtns %}

<!-- endtab -->

{% endtabs %}


## Menu

请将您的 Volantis 升级至 <u>3.0</u> 版本以上使用。

{% tabs menu, 3 %}

<!-- tab 语法格式 -->

{% p subtitle, 容器 %}

```md
{% menu 前缀（可省略）, 标题, 后缀（可省略） %}
菜单内容
{% endmenu %}
```

{% p subtitle, 菜单内容 %}

菜单项

```md
{% menuitem 文本, 链接, 图标 %}
```

分割线

```md
{% menuitem hr %}
```

子菜单

```md
{% submenu 嵌套菜单, 图标 %}
菜单内容
{% endsubmenu %}
```

<!-- endtab -->

<!-- tab 示例写法 -->

{% p subtitle, 示例1 %}

```md
{% menu 下拉菜单 %}
{% menuitem 主题源码, https://github.com/volantis-x/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/volantis-x/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/volantis-x/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}
```

{% p subtitle, 示例2 %}

```md
{% menu 这个是, 下拉菜单 %}
（同上）
{% endmenu %}
```

{% p subtitle, 示例3 %}

```md
{% menu 这个是, 下拉菜单, 的示例效果。 %}
（同上）
{% endmenu %}
```

<!-- endtab -->

<!-- tab 示例效果 -->

{% p subtitle, 示例1 %}

{% menu 下拉菜单 %}
{% menuitem 主题源码, https://github.com/volantis-x/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/volantis-x/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/volantis-x/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}

{% p subtitle, 示例2 %}

{% menu 这个是, 下拉菜单 %}
{% menuitem 主题源码, https://github.com/volantis-x/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/volantis-x/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/volantis-x/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}

{% p subtitle, 示例3 %}

{% menu 这个是, 下拉菜单, 的示例效果。 %}
{% menuitem 主题源码, https://github.com/volantis-x/hexo-theme-volantis/, fas fa-file-code %}
{% menuitem 更新日志, https://github.com/volantis-x/hexo-theme-volantis/releases/, fas fa-clipboard-list %}
{% menuitem hr %}
{% submenu 有疑问？, fas fa-question-circle %}
{% menuitem 看 FAQ, /faqs/ %}
{% menuitem 看 本站源码, https://github.com/volantis-x/volantis-docs/ %}
{% menuitem 提 Issue, https://github.com/volantis-x/hexo-theme-volantis/issues/ %}
{% endsubmenu %}
{% endmenu %}

<!-- endtab -->

{% endtabs %}
