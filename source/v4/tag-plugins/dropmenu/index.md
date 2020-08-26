---
layout: docs
title: 'tag-plugins: dropmenu'
sidebar: [docs-latest, toc]
---

{% note warning, 这个页面的标签将会在不久后重构 %}



## 下拉菜单

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
