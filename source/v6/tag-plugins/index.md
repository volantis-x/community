---
layout: docs
group: docs-v6
order: 501
title: 标签插件
short_title: 5. 标签插件
sidebar: [docs-v6, toc]
---

## 新的标签插件语法

自 Volantis 6.6.0 起使用新的标签插件语法，即 Stellar 语法。但是为了兼容旧版本的插件，新版标签的名称开头统一设计成大写字母。

## Tabs

这个标签移植自 [NexT](https://theme-next.js.org/docs/tag-plugins/tabs.html) 主题，但做了以下修改：

- 支持设置 `align:center` 来使内容居中
- 设置默认激活的标签方式为 `active:1` 而非 `, 1`（使用默认格式降低学习成本，且显式声明可读性更强）
- 不需要 `<!-- endtab -->` 来作为结束标识（因为  会自动判断）
- 不需要 `tabs id` 来保证唯一性（因为会设置唯一标识）
- 不支持 `@icon` 方式设置图标

### 演示效果 

{% Tabs active:2 align:center %}

<!-- tab 图片 -->
{% image https://unpkg.com/volantis-static@0.0.1761982841160/media/wallpaper/minimalist/2020/001.webp %}

<!-- tab 代码块 -->

```swift
let x = 123
print("hello world")
```

<!-- tab 表格 -->
| a | b | c |
| --- | --- | --- |
| a1 | b1 | c1 |
| a2 | b2 | c2 |

{% endTabs %}

### 示例代码

``````md 最后更新于 <u>6.6.0</u> 版本
{% Tabs active:2 align:center %}

<!-- tab 图片 -->
{% image https://unpkg.com/volantis-static@0.0.1761982841160/media/wallpaper/minimalist/2020/001.webp %}

<!-- tab 代码块 -->

```swift
let x = 123
print("hello world")
```

<!-- tab 表格 -->
| a | b | c |
| --- | --- | --- |
| a1 | b1 | c1 |
| a2 | b2 | c2 |

{% endTabs %}
``````




## 旧版标签插件

Volantis 6.6.0 之前的标签插件见：

{% link 旧版标签插件::/v6/tag-plugins/6.5::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}


