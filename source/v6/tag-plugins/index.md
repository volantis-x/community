---
layout: docs
group: docs-v6
order: 501
title: 标签插件
short_title: 5. 标签插件
sidebar: [docs-v6, toc]
---

## 新的标签插件语法

自 Volantis 6.6.0 起使用新的标签插件语法，代号 Stellar 语法。

为了兼容旧版本的插件，如果开发中存在冲突，新版标签的名称「开头首字母」统一设计成「大写」字母。

Volantis 6.6.0 起内置的标签组件和 Hexo 官方的一样使用空格分隔多个参数，所以如果参数内容中需要出现的空格被意外分隔开了的时候，请使用 `&nbsp;` 代替。为了方便理解，本文档语法格式中的可选参数用方括号括起来，键值对参数用冒号分隔开，例如：

```
{% image src [description] [download:bool/string] %}
```

就表明第一个参数是图片链接，第二个参数是图片描述，而 `download` 是可选参数，并且值是布尔或字符串类型，第二三个参数为可选参数。

**参数解析规则**

以图片标签为例，使用空格分隔开之后得到一个数组，如果图片描述文字中有空格，多分出来的这些「参数」被合并到最后一个「非键值对参数」中，什么是「非键值对参数」呢？举个例子您就明白了：

```
{% image https://gcore.jsdelivr.net/gh/cdn-x/wiki/stellar/photos/183e71e0ad995.jpg 来自印度的 Rohit Vohra 使用 iPhone 12 Pro Max 拍摄。 download:https://www.apple.com.cn/newsroom/images/product/iphone/lifestyle/Apple_ShotoniPhone-rohit_vohra_12172020.zip ratio:1960/1468 %}
```

这个例子中，`download:https://xxxx` 是有冒号分隔开的，`download` 为键，后面的网址为值，所以叫做「键值对参数」；与此相对的，没有冒号分隔的就叫做「非键值对参数」。键值对参数可以放在任何位置，我可以通过匹配键来解析，而非键值对参数则只能通过顺序解析，所以它们必须和文档中要求的前后顺序一致。

一般核心的、重要的参数会设置成非键值对参数，而可选参数设置成键值对参数。

## 旧版标签插件

Volantis 6.6.0 之前的标签插件见：

{% link 旧版标签插件::/v6/tag-plugins/6.5::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1f433.svg %}

## 文本修饰标签集

{% Tabs %}
<!-- tab 效果 -->
- 这是 {% blur 高斯模糊 %} 标签
- 这是 {% psw 密码 %} 标签
- 这是 {% u 下划线 %} 标签
- 这是 {% emp 着重号 %} 标签
- 这是 {% wavy 波浪线 %} 标签
- 这是 {% del 删除线 %} 标签
- 这是 {% sup 上角标 color:red %} 标签
- 这是 {% sub 下角标 %} 标签
- 这是 {% kbd 键盘样式 %} 标签，试一试：{% kbd ⌘ %} + {% kbd D %}
<!-- tab 源码 -->
```md 最后更新于 <u>6.6.0</u> 版本
- 这是 {% blur 高斯模糊 %} 标签
- 这是 {% psw 密码 %} 标签
- 这是 {% u 下划线 %} 标签
- 这是 {% emp 着重号 %} 标签
- 这是 {% wavy 波浪线 %} 标签
- 这是 {% del 删除线 %} 标签
- 这是 {% sup 上角标 color:red %} 标签
- 这是 {% sub 下角标 %} 标签
- 这是 {% kbd 键盘样式 %} 标签，试一试：{% kbd ⌘ %} + {% kbd D %}
```
{% endTabs %}

## emoji

{% Tabs %}
<!-- tab 效果演示 -->
内置了可配置的表情标签 {% emoji aini %} {% emoji blobcat 0_0 %} {% emoji tieba huaji %} 使用方法如下：

```md 最后更新于 <u>6.6.0</u> 版本
{% emoji aini %}
{% emoji blobcat 0_0 %}
{% emoji tieba huaji %}
```

如果对高度有特别要求，可以指定高度，例如：
<center>{% emoji blobcat party height:1em %}{% emoji blobcat party height:2em %}{% emoji blobcat party height:3em %}{% emoji blobcat party height:2em %}{% emoji blobcat party height:1em %}</center>

```md
<center>{% emoji blobcat party height:1em %}{% emoji blobcat party height:2em %}{% emoji blobcat party height:3em %}{% emoji blobcat party height:2em %}{% emoji blobcat party height:1em %}</center>
```

<!-- tab 语法格式 -->

```md
{% emoji [source] name [height:1.75em] %}
```

其中 `source` 可省略，默认为配置中的第一个 `source`（详见「引入表情包」部分）

> 表情速查表：[Stellar内嵌blobcat小表情](https://weekdaycare.cn/posts/emoji-blob/)

<!-- tab 引入表情包 -->

```yaml blog/_config.volantis.yml
tag_plugins:
  ...
  emoji:
    default: https://gcore.jsdelivr.net/gh/cdn-x/emoticons/qq/{name}.gif
    twemoji: https://gcore.jsdelivr.net/gh/twitter/twemoji/assets/svg/{name}.svg
    qq: https://gcore.jsdelivr.net/gh/cdn-x/emoticons/qq/{name}.gif
    aru: https://gcore.jsdelivr.net/gh/cdn-x/emoticons/aru-l/{name}.gif
    tieba: https://gcore.jsdelivr.net/gh/cdn-x/emoticons/tieba/{name}.png
```

> 在配置文件中，文件名用 `{name}` 代替。

{% endTabs %}

## icon

支持在任意{% icon solar:planet-bold-duotone %}位置插入图标，支持外链{% icon https://api.iconify.design/fluent-color:link-multiple-20.svg?color=%23888888 %}图标，也可以在 icons.yml 中提前配置好。

**{% icon ph:seal-question-fill color:purple %}可以指定图标的颜色吗？**

当然可以，还可以在主题配置中设置默认颜色：

```md 最后更新于 <u>6.6.0</u> 版本
icons.yml 中的图标：{% icon solar:planet-bold-duotone %}
外链图标：{% icon https://api.iconify.design/solar:link-circle-bold.svg %}
指定颜色：{% icon ph:seal-question-fill color:red %}
```

```yaml 配置默认颜色
tag_plugins:
  icon:
    # 留空时，图标和文字颜色相同
    default_color: accent # theme, accent, red, orange, yellow, green, cyan, blue, purple
```

> 还支持 style 参数，可以直接对样式进行修改，仅支持外链图标，style 参数中间不能有空格。



## Folding


折叠容器，折叠块标签的语法格式为：

```md 最后更新于 <u>6.7.0</u> 版本
{% Folding title [codeblock:bool] [open:bool] [color:color] %}
content
{% endFolding %}
```

```yaml 参数说明
codeblock: true/false
open: true/false
color: red/orange/yellow/green/cyan/blue/purple/light/dark
```

### 彩色可折叠代码块

备注标签相较于旧版进行了增强，可以实现更多种颜色，还可以通过设置 `child:codeblock` 来实现可折叠的代码块。以下是一个默认打开的代码折叠框：

{% Folding child:codeblock open:true color:yellow 默认打开的代码折叠框 %}
```swift
func test() {
  print("hello world")
}
```
{% endFolding %}

代码如下：

```
{% Folding child:codeblock open:true color:yellow 默认打开的代码折叠框 %}
代码块
{% endFolding %}
```

{% Folding color:yellow 危险，请不要打开这个 %}
通过设置颜色，以实现更醒目的作用，但不要滥用色彩哦～
{% Folding color:orange 警告，真的很危险 %}
通过设置颜色，以实现更醒目的作用，但不要滥用色彩哦～
{% Folding color:red 最后一次警告，千万不要打开这个 %}
不要说我们没有警告过你，Windows 10 不是為所有人設計，而是為每個人設計。
{% endFolding %}
{% endFolding %}
{% endFolding %}


## folders

多个折叠容器聚合，样式相比 `folding` 简单一些，适用于多个折叠标签平铺显示的场景，例如题目列表：

{% folders %}
<!-- folder 题目1 -->
这是答案1
<!-- folder 题目2 -->
这是答案2
<!-- folder 题目3 -->
这是答案3
{% endfolders %}

代码如下：

```md 最后更新于 <u>6.7.0</u> 版本
{% folders %}
<!-- folder 题目1 -->
这是答案1
<!-- folder 题目2 -->
这是答案2
<!-- folder 题目3 -->
这是答案3
{% endfolders %}
```





## Tabs

分栏容器，这个标签移植自 [NexT](https://theme-next.js.org/docs/tag-plugins/tabs.html) 主题，但做了以下修改：

- 支持设置 `align:center` 来使内容居中
- 设置默认激活的标签方式为 `active:1` 而非 `, 1`（使用默认格式降低学习成本，且显式声明可读性更强）
- 不需要 `<!-- endtab -->` 来作为结束标识（会自动判断）
- 不需要 `tabs id` 来保证唯一性（会设置唯一标识）
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

## swiper

轮播容器，默认一张图片是 50% 宽度，通过设置 `width:min` 设置为 25% 宽度，`width:max` 设置为 100% 宽度。

{% swiper effect:cards %}
![](https://images.unsplash.com/photo-1625171515821-1870deb2743b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1528283648649-33347faa5d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1524797905120-92940d3a18d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
{% endswiper %}

```md 最后更新于 <u>6.3.0</u> 版本
{% swiper effect:cards %}
![](https://images.unsplash.com/photo-1625171515821-1870deb2743b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1528283648649-33347faa5d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
![](https://images.unsplash.com/photo-1524797905120-92940d3a18d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)
{% endswiper %}
```

{% Tabs %}
<!-- tab 宽度 -->

```md 写法如下
{% swiper width:min/max %}
...
{% endswiper %}
```
<!-- tab 切换效果 -->
```
{% swiper effect:cards/coverflow %}
...
{% endswiper %}
```

注意 一个页面只能设置一次，第一个 `swiper` 容器的效果全局生效。

{% endTabs %}



## site 网站卡片标签


网站卡片可以显示网站截图、logo、标题、描述，使用方法和 `友链标签` 一模一样，唯一的区别是数据文件名称为 `sites.yml`，可以和友链数据混用，通过分组过滤实现不一样的效果。

```md 最后更新于 <u>6.2.0</u> 版本
{% sites [筛选方式]:[组名] %}
```

### 演示效果

{% sites only:community_team %}

### 上述示例的源码

```md example
{% sites only:community_team %}
```

### 可以支持的参数

#### 数据按组筛选

支持分组（白名单模式和黑名单模式）显示:

```
// 显示 communtiy_team
{% sites only:communtiy_team %}

// 除了 communtiy_team 别的都显示
{% sites not:community_team %}

// 多个分组使用 `,` 分隔
{% sites only:communtiy_team, communtiy_builder %}
```




<br>

## friends 友链标签

您可以在任何位置插入友链，支持静态数据和动态数据，静态数据需要写在数据文件中：

```yaml blog/source/_data/friends.yml
volantis_developer:
  title:
  description:
  items:
    - title: xaoxuu
      url: https://github.com/xaoxuu
      avatar: https://avatars.githubusercontent.com/u/16400144?s=60&v=4
    - title: MHuiG
      url: https://github.com/MHuiG
      avatar: https://avatars.githubusercontent.com/u/38281581?s=60&v=4
    - title: inkss
      url: https://github.com/inkss
      avatar: https://avatars.githubusercontent.com/u/31947043?s=60&v=4
    - title: Colsrch
      url: https://github.com/Colsrch
      avatar: https://avatars.githubusercontent.com/u/58458181?s=60&v=4
    - title: Drew233
      url: https://github.com/Drew233
      avatar: https://avatars.githubusercontent.com/u/47592224?s=60&v=4
    - title: Linhk1606
      url: https://github.com/Linhk1606
      avatar: https://avatars.githubusercontent.com/u/50829219?s=60&v=4
    - title: W4J1e
      url: https://github.com/W4J1e
      avatar: https://avatars.githubusercontent.com/u/74824162?s=60&v=4


community_builder:
  title:
  description:
  items:
    - title: xaoxuu
      url: https://github.com/xaoxuu
      avatar: https://avatars.githubusercontent.com/u/16400144?s=60&v=4
    - title: MHuiG
      url: https://github.com/MHuiG
      avatar: https://avatars.githubusercontent.com/u/38281581?s=60&v=4
    - title: Colsrch
      url: https://github.com/Colsrch
      avatar: https://avatars.githubusercontent.com/u/58458181?s=60&v=4
    - title: penndu
      url: https://github.com/penndu
      avatar: https://avatars.githubusercontent.com/u/46226528?s=60&v=4
    - title: heson525
      url: https://github.com/heson525
      avatar: https://avatars.githubusercontent.com/u/32234343?s=60&v=4
    - title: W4J1e
      url: https://github.com/W4J1e
      avatar: https://avatars.githubusercontent.com/u/74824162?s=60&v=4
    - title: luosiwei-cmd
      url: https://github.com/luosiwei-cmd
      avatar: https://avatars.githubusercontent.com/u/61175380?s=60&v=4

```

标题和描述都支持 md 格式，需要写在引号中。如果指定了 `api` 和 `repo` 字段，则从 issues 中取第一个 `json` 代码块数据作为友链。

```md 写法如下
{% friends %}
```

### 数据按组筛选

友链支持分组（白名单模式和黑名单模式）显示：

```md 最后更新于 <u>6.2.0</u> 版本
// 显示 volantis_developer
{% friends only:volantis_developer %}

// 显示 volantis_developer 和 community_builder
{% friends only:volantis_developer,community_builder %}

// 除了 community_builder 别的都显示
{% friends not:community_builder %}
```

{% folding friends only:volantis_developer %}
{% friends only:volantis_developer %}
{% endfolding %}

### 实现动态友链

可以加载来自 issues 的友链数据，除了需要在 `_data/friends.yml` 中指定 `api` 和 `repo` 外，还需要做一下几件事：

从 [xaoxuu/friends](https://github.com/xaoxuu/friends) 作为模板克隆或者 fork 仓库，然后提交一个 issue 进行测试，不出意外的话，仓库中已经配置好了 issue 模板，只需要在模板中指定的位置填写信息就可以了。

提交完 issue 一分钟左右，如果仓库中出现了 `output` 分支提交，可以点击查看一下文件内容是否已经包含了刚刚提交的 issue 中的数据，如果包含，那么再次回到前端页面刷新就可以看到来自 issue 的友链数据了。

{% note 关于自建&nbsp;Vercel&nbsp;API 如果您想使用自己的 api，请把您刚创建的仓库导入到 Vercel 项目，详见 [小冰博客](https://zfe.space/post/python-issues-api.html) 的教程。 %}

{% note green::特别感谢小冰博客通过 Vercel 进行加速的方案，解决了原本直接请求 GitHub API 速度过慢的问题。 %}

### 只显示动态数据

如果您不想创建 `friends.yml` 来设置任何静态数据，可以在标签中设置 `api` 来只显示动态数据：

```
{% friends api:https://raw.githubusercontent.com/volantis-x/examples/output/v2/data.json %}
```

### 友链+文章

动态友链支持显示每个友链最新的N篇文章，并按文章更新顺序给友链排序，只需要增加 `posts:true` 参数：

```
{% friends posts:true api:https://raw.githubusercontent.com/volantis-x/friends-example/output/v2/data.json %}
```

{% friends posts:true api:https://raw.githubusercontent.com/volantis-x/friends-example/output/v2/data.json %}





