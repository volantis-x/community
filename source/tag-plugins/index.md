---
layout: page
group: docs
title: Tag Plugins「标签插件」
meta:
  header: [title, author, updated]
mathjax: true
---


主题支持<b>{% span red, 丰 %}{% span yellow, 富 %}{% span green, 多 %}{% span blue, 彩 %}</b>的标签。

## Span & P

{% tabs p, 3 %}

<!-- tab 格式 -->

```md 行内文本
{% span 样式参数, 文本内容 %}
```
```md 独立段落
{% p 样式参数, 文本内容 %}
```
{% note up green, 请将您的 Volantis 升级至 2.3 版本以上使用。 %}

<!-- endtab -->

<!-- tab 样式参数 -->

参数位置可以写颜色、大小和对齐方向，多个参数用空格隔开

{% p subtitle, 颜色 %}

```md
red, yellow, green, cyan, blue, gray
```

{% p subtitle, 大小 %}

```md
huge, large, small
```

{% p subtitle, 对齐方向 %}

```md
left, center, right
```


<!-- endtab -->

<!-- tab 演示 -->

{% p subtitle, 彩色文字 %}

在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。

```md example.md:
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
```

{% p subtitle, 超大文字 %}

文档「开始」页面中的标题部分就是超大文字。

{% p center large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}


```md example.md:
{% p center large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}
```

<!-- endtab -->

{% endtabs %}

## Note & NoteBlock

NoteBlock 是 Blockquote 的增强版，在左边显示图标，并且可以自定颜色。而 Note 是 NoteBlock 的简便写法。

{% tabs note, 3 %}

<!-- tab 格式 -->

```md Note
{% note 参数, 文本内容 %}
```
```md NoteBlock
{% noteblock 参数 %}

文本段落

{% endnoteblock %}
```

{% note up green, 请将您的 Volantis 升级至 2.3 版本以上使用。 %}

<!-- endtab -->

<!-- tab 参数 -->

参数位置可以写图标和颜色，多个参数用空格隔开

{% p subtitle, 图标 %}

```md 彩色的
quote, info, warning, done/success, error/danger
```

```md 灰色的，也可以指定颜色
radiation, bug, idea, link, paperclip, todo, msg, guide, download, up, undo
```

{% p subtitle, 颜色 %}

```md 指定颜色
clear, light, gray, red, yellow, green, cyan, blue
```

<!-- endtab -->

<!-- tab 演示 -->

{% p subtitle, Note %}

```md
{% note, 为简单的一句话提供的简便写法。 %}
```
{% note, 为简单的一句话提供的简便写法。 %}

```md
{% note success, 支持同样丰富的参数。 %}
```
{% note success, 支持同样丰富的参数。 %}

{% p subtitle, NoteBlock %}

可以在区块中放置一些复杂的结构，支持嵌套。

{% noteblock quote %}

{% p subtitle, 小标题 %}

Windows 10不是為所有人設計,而是為每個人設計

{% p subtitle, 嵌套测试 %}
{% noteblock %}
请坐和放宽，我正在帮你搞定一切...
{% endnoteblock %}

{% p subtitle, Folding 测试 %}
{% folding open, 点击查看更多 %}

```md
{% note warning, 不要说我们没有警告过你 %}
```
{% note warning, 不要说我们没有警告过你 %}
```md
{% note bug red, 我们都有不顺利的时候 %}
```
{% note bug red, 我们都有不顺利的时候 %}

{% endfolding %}
{% endnoteblock %}

<!-- endtab -->

{% endtabs %}

## 基础按钮

{% tabs btn, 3 %}

<!-- tab 格式 -->

```
{% btn 样式参数, 图标（可选）, 按钮标题, 链接地址 %}
```

{% note up green, 请将您的 Volantis 升级至 2.3 版本以上使用。 %}


<!-- endtab -->

<!-- tab 参数 -->

{% p subtitle, 样式参数 %}

可选的参数有： `regular` 、 `large` 、 `center`

```md 不设置参数
{% btn, 按钮, / %}
```
```md regular button
{% btn regular, fas fa-play-circle, 示例博客, https://xaoxuu.com %}
```
```md large center button
{% btn center large, fas fa-download, 开始使用, https://volantis.js.org/getting-started/ %}
```

{% p subtitle, 图标 %}

第1个或者第2个参数包含 `fa-` 的那个被识别为图标。

{% p subtitle, 文本 %}

按钮的文本。

{% p subtitle, 链接地址 %}

按钮的地址。

<!-- endtab -->

<!-- tab 演示 -->

不设置任何参数的 {% btn, 按钮, / %} 适合融入段落中。

regular 按钮适合独立于段落之外：

{% btn regular, fas fa-play-circle, 示例博客, https://xaoxuu.com %}

large 按钮更具有强调作用，建议搭配 `center` 使用：

{% btn center large, fas fa-download, 开始使用, https://volantis.js.org/getting-started/ %}

<!-- endtab -->

{% endtabs %}


## 富文本按钮

{% tabs btns, 3 %}

<!-- tab 格式 -->

```md
{% btns 参数 %}
[![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png)按钮标题](/)
{% endbtns %}
```

{% note up green, 请将您的 Volantis 升级至 2.2 版本以上使用。 %}

<!-- endtab -->

<!-- tab 参数 -->

参数位置可以写图片样式、布局方式，多个参数用空格隔开

{% p subtitle, 图片样式 %}

- 默认为方形
- 圆角矩形（`rounded`），适合app图标。
- 圆形（`circle`），适合头像。

```md 示例
{% btns circle %}
[![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png)xaoxuu](/)
{% endbtns %}
```

{% p subtitle, 布局方式 %}

- 默认为自动宽度，适合视野内只有一两个的情况，多了显乱。
- 宽一点的按钮（`wide`）。
- 填充布局（`fill`），自动铺满至少一行，多了会换行。
- 居中（`center`），按钮之间是固定间距。
- 居中分散（`around`）。
- 网格布局（`grid3`），最多3列，屏幕变窄会适当减少列数。
- 网格布局（`grid4`），最多4列，屏幕变窄会适当减少列数。
- 网格布局（`grid5`），最多5列，屏幕变窄会适当减少列数。

```md 示例
{% btns rounded grid5 %}
[<i class='fas fa-download'></i> 下载源码](/)
[<i class='fas fa-book-open'></i> 查看文档](/)
{% endbtns %}
```

{% p subtitle, 增加文字样式 %}

可以在容器内增加 `<b>标题</b>` 和 `<p>描述文字</p>`

```html 图文并茂的例子
圆形图标 + 标题 + 描述 + 图片 + 网格4列 + 居中
{% btns circle center grid4 %}
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

<!-- tab 演示 -->

如果需要显示类似「团队成员」之类的一组含有头像的链接：
{% btns circle grid5 %}
[![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png)xaoxuu](/)
[![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png)xaoxuu](/)
[![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png)xaoxuu](/)
[![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png)xaoxuu](/)
[![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png)xaoxuu](/)
{% endbtns %}

或者含有图标的按钮：
{% btns rounded grid5 %}
[<i class='fas fa-download'></i> 下载源码](/)
[<i class='fas fa-book-open'></i> 查看文档](/)
{% endbtns %}


圆形图标 + 标题 + 描述 + 图片 + 网格4列 + 居中
{% btns circle center grid4 %}
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


## Fancybox

{% tabs fancybox, 3 %}

<!-- tab 格式 -->

```md example.md:
{% fancybox 参数, 列数 %}
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
{% endfancybox %}
```

{% note up green, 请将您的 Volantis 升级至 2.2 版本以上使用。 %}

<!-- endtab -->

<!-- tab 参数 -->

{% p subtitle, 对齐方向 %}

默认居中，参数设为 `left` 则左对齐。


{% p subtitle, 列数 %}

逗号后面直接写列数，支持 2 ～ 8 列。设定列列数之后就是「多行多图」布局，此时图片默认左对齐。为了避免图片大小不一，建议搭配 `stretch` 来时图片放大填充。


<!-- endtab -->

<!-- tab 演示 -->

一行一个图片
{% fancybox %}
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endfancybox %}

一行多个图片（不换行）
{% fancybox %}
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
{% endfancybox %}

多行多个图片（每行2～8个图片）
{% fancybox stretch, 4 %}
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
{% endfancybox %}

<!-- endtab -->

{% endtabs %}


## Tab

这部分功能借鉴自 NexT 主题。


{% tabs tab-id %}

<!-- tab Tab的写法 -->

```md
{% tabs tab-id %}

<!-- tab tab-name -->

![](https://i.loli.net/2020/03/18/f5PQlWisvm9zbgK.jpg)

<!-- endtab -->

<!-- tab tab-name -->

这里面写内容，支持的语法格式有限，请尽量<u>不要</u>写太过复杂的东西。

<!-- endtab -->

{% endtabs %}
```

{% note up green, 请将您的 Volantis 升级至 2.1 版本以上使用。 %}

<!-- endtab -->

<!-- tab 图片测试 -->

![](https://i.loli.net/2020/03/18/f5PQlWisvm9zbgK.jpg)


```md 测试 fancybox ：
{% fancybox %}
![](https://i.loli.net/2020/03/18/1TpiUwhuskGm5SV.png)
![](https://i.loli.net/2020/03/18/LZwBtR5YO4zQH9A.png)
![](https://i.loli.net/2020/03/18/ySw8zGHRBrDtUg7.png)
![](https://i.loli.net/2020/03/18/5QTMYsScOz41Vhg.png)
{% endfancybox %}
```

{% fancybox %}
![](https://i.loli.net/2020/03/18/1TpiUwhuskGm5SV.png)
![](https://i.loli.net/2020/03/18/LZwBtR5YO4zQH9A.png)
![](https://i.loli.net/2020/03/18/ySw8zGHRBrDtUg7.png)
![](https://i.loli.net/2020/03/18/5QTMYsScOz41Vhg.png)
{% endfancybox %}


<!-- endtab -->

<!-- tab 注意 -->

支持的语法格式有限，请尽量<u>不要</u>写太过复杂的东西。有些格式不能识别的话，可以尝试增加空行。

<!-- endtab -->

{% endtabs %}


## Folding box

{% tabs folding, 3 %}

<!-- tab 格式 -->

```md
{% folding 参数（可选）, 标题 %}

![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}
```

{% note up green, 请将您的 Volantis 升级至 2.3 版本以上使用。 %}

<!-- endtab -->

<!-- tab 参数 -->

参数位置可以填写颜色和状态，多个参数用空格隔开。

```md 颜色
blue, cyan, green, yellow, red
```

状态填写 `open` 代表默认打开。

<!-- endtab -->

<!-- tab 演示 -->

{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}

```md
{% folding green, 查看代码测试 %}

查看代码测试

{% endfolding %}
```

{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha

{% endfolding %}

{% endfolding %}

{% endfolding %}

<!-- endtab -->

{% endtabs %}



## 渲染公式（MathJax）

默认是不渲染的，如果文章内有公式，需要在 `front-matter` 中设置开启。

```md example.md:
---
title: 渲染公式（MathJax）
date: 2020-02-23
mathjax: true # false: 不渲染, true: 渲染, internal: 只在文章内部渲染，文章列表中不渲染
---

$t+1=2$

$$
\mbox{积累因子}=\begin{cases}
1+ni & \mbox{单利}\\\\
(1+i)^n & \mbox{复利}
\end{cases}
$$

$$
\begin{equation}
\sum_{i=0}^n F_i \cdot \phi (H, p_i) - \sum_{i=1}^n a_i \cdot ( \tilde{x_i}, \tilde{y_i}) + b_i \cdot ( \tilde{x_i}^2 , \tilde{y_i}^2 )
\end{equation}
$$
$$
\begin{equation}
\beta^*(D) = \mathop{argmin} \limits_{\beta} \lambda {||\beta||}^2 + \sum_{i=1}^n max(0, 1 - y_i f_{\beta}(x_i))
\end{equation}
$$
```


{% folding 示例效果 %}

$t+1=2$

$$
\mbox{积累因子}=\begin{cases}
1+ni & \mbox{单利}\\\\
(1+i)^n & \mbox{复利}
\end{cases}
$$

$$
\begin{equation}
\sum_{i=0}^n F_i \cdot \phi (H, p_i) - \sum_{i=1}^n a_i \cdot ( \tilde{x_i}, \tilde{y_i}) + b_i \cdot ( \tilde{x_i}^2 , \tilde{y_i}^2 )
\end{equation}
$$
$$
\begin{equation}
\beta^*(D) = \mathop{argmin} \limits_{\beta} \lambda {||\beta||}^2 + \sum_{i=1}^n max(0, 1 - y_i f_{\beta}(x_i))
\end{equation}
$$

{% endfolding %}

{% note link, 如果公式仍无法正确渲染可以阅读 [@MicDZ](https://www.micdz.cn) 的这篇文章：[《在material-x上使用KaTeX》](https://www.micdz.cn/article/katex-on-volantis/)。 %}

## Hexo原生支持的标签

### 引用块

引用书上的句子

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

### 代码块

```md
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

#### 指定语言

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

```md example.md:
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

#### 附加说明

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

```md example.md:
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

#### 行标、高亮

{% codeblock lang:python line_number:true mark:3,5,8 %}
n=eval(input())
if n==0:
   print("Hello World")
elif n>0:
   print("He\nll\no \nWo\nrl\nd")
else:
   for c in "Hello World":
   print(c)
{% endcodeblock %}

```md example.md:
{% codeblock lang:python line_number:true mark:3,5,8 %}
n=eval(input())
if n==0:
   print("Hello World")
elif n>0:
   print("He\nll\no \nWo\nrl\nd")
else:
   for c in "Hello World":
   print(c)
{% endcodeblock %}
```

### Pull Quote
在文章中插入 `Pull quote`。
```md example.md:
{% pullquote [class] %}
content
{% endpullquote %}
```

### jsFiddle
在文章中嵌入 `jsFiddle`。
```md example.md:
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

### Gist
在文章中嵌入 `Gist`，<u>注意</u>：在国内无法加载。
```md example.md:
{% gist gist_id [filename] %}
```

### iframe
在文章中插入 `iframe`。
```md example.md:
{% iframe url [width] [height] %}
```

### Image
在文章中插入指定大小的图片。
```md example.md:
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

### Link
在文章中插入链接，并自动给外部链接添加 `target="_blank"` 属性。
```md example.md:
{% link text url [external] [title] %}
```

### Include Code
插入 `source/downloads/code` 文件夹内的代码文件。`source/downloads/code` 不是固定的，取决于你在配置文件中 `code_dir` 的配置。
```md example.md:
{% include_code [title] [lang:language] [from:line] [to:line] path/to/file %}
```

{% folding 示例 %}

嵌入 `test.js` 文件全文
```md
{% include_code lang:javascript test.js %}
```
只嵌入第 3 行
```md
{% include_code lang:javascript from:3 to:3 test.js %}
```
嵌入第 5 行至第 8 行
```md
{% include_code lang:javascript from:5 to:8 test.js %}
```
嵌入第 5 行至文件结束
```md
{% include_code lang:javascript from:5 test.js %}
```
嵌入第 1 行至第 8 行
```md
{% include_code lang:javascript to:8 test.js %}
```

{% endfolding %}

### 引用文章

引用其他文章的链接。

```md
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

{% folding 示例 %}

引用这篇文章：{% post_link news/2020-02-22 %}

```md example.md:
引用这篇文章：{% post_link news/2020-02-22 %}
```
{% endfolding %}

### 文章摘要和截断

在文章中使用 `<!-- more -->`，那么 `<!-- more -->` 之前的文字将会被视为摘要。首页中将只出现这部分文字，同时这部分文字也会出现在正文之中。

{% note link, 更多请见Hexo官方文档：[#标签插件](https://hexo.io/zh-cn/docs/tag-plugins) %}
