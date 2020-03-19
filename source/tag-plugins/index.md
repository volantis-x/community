---
layout: page
group: docs
title: Tag Plugins「标签插件」
meta:
  header: [title, author, updated]
mathjax: true
---


主题支持<b><red>丰</red><yellow>富</yellow><green>多</green><blue>彩</blue></b>的标签。

## 文本属性

```html format
<p 属性参数>文本内容</p>
```

### 彩色文字 <sup class='blue'>^1.5.2</sup>

在一段话中方便插入各种颜色的标签，包括：<red>红色</red>、<yellow>黄色</yellow>、<green>绿色</green>、<cyan>青色</cyan>、<blue>蓝色</blue>、<gray>灰色</gray>。

```md blog/source/_posts/example.md:
在一段话中方便插入各种颜色的标签，包括：<red>红色</red>、<yellow>黄色</yellow>、<green>绿色</green>、<cyan>青色</cyan>、<blue>蓝色</blue>、<gray>灰色</gray>。
```

### 超大文字 <sup class='blue'>^1.5.2</sup>

文档「开始」页面中的标题部分就是超大文字。

{% raw %}
<details>
<summary>
示例效果
</summary>
{% endraw %}

<p center large>Volantis</p>
<p center small>A Wonderful Theme for Hexo</p>

{% raw %}</details>{% endraw %}

```md blog/source/_posts/example.md:
<p center large>Volantis</p>
<p center small>A Wonderful Theme for Hexo</p>
```

目前支持的尺寸有：`small`、`large`、`huge`，布局有：`left`、`center`、`right`。

## Note

Note 是 Blockquote 的增强版，在左边显示图标，并且可以自定颜色。

{% tabs note %}

<!-- tab 格式 -->

```md
{% note 参数 %}

文本段落

{% endnote %}
```
{% note up green %}

Volantis: 2.2

{% endnote %}

<!-- endtab -->

<!-- tab 参数 -->

参数位置可以写 `type` 和 `color` ，多个参数用空格隔开

```md colorful type
quote, info, warning, done/success, error/danger
```

```md more type
radiation, bug, idea, link, paperclip, todo, msg, guide, download, up
```

```md color
clear, light, gray, red, yellow, green, cyan, blue
```

<!-- endtab -->

<!-- tab 示例 -->


{% note %}
```md exp1 什么参数都不传
{% note %}
exp1 什么参数都不传
{% endnote %}
```
{% endnote %}

{% note warning %}
```md exp2 一个 warning
{% note warning %}
exp2 一个 warning
{% endnote %}
```
{% endnote %}

{% note success %}
```md exp3 一个 success
{% note success %}
exp3 一个 success
{% endnote %}
```
{% endnote %}

{% note red bug %}
```md exp4 一个红色的 bug
{% note red bug %}
exp4 一个红色的 bug
{% endnote %}
```
{% endnote %}

{% note link clear %}
```md exp5 一个 clear link
{% note link clear %}
exp5 一个 link
{% endnote %}
```
{% endnote %}

{% note quote %}
```md exp6 一个 quote
{% note quote %}
exp6 一个 quote
{% endnote %}
```
{% endnote %}

<!-- endtab -->

{% endtabs %}

## 插入简单按钮 <sup class='blue'>^1.6</sup>

目前共支持3种尺寸的按钮。

{% raw %}
<details>
<summary>
示例效果
</summary>
{% endraw %}

第1种 <btn>[按钮](/)</btn> 适合融入段落中。

第2种按钮适合独立于段落之外：

<btn regular>[<i class='fas fa-play-circle'></i> 示例博客](https://xaoxuu.com)</btn>

第3种按钮更具有强调作用，建议搭配 `center` 使用：

<btn center large>[<i class='fas fa-download'></i> 开始使用](/)</btn>

{% raw %}</details>{% endraw %}


```md blog/source/_posts/example.md:
第1种 <btn>[按钮](/)</btn> 适合融入段落中。

第2种按钮适合独立于段落之外：

<btn regular>[<i class='fas fa-play-circle'></i> 示例博客](https://xaoxuu.com)</btn>

第3种按钮更具有强调作用，建议搭配 center 使用：

<btn center large>[<i class='fas fa-download'></i> 开始使用](/)</btn>
```

## 插入高级按钮 <sup class='blue'>^1.6.1</sup>

如果需要显示类似「团队成员」之类的一组含有头像的链接：

{% raw %}
<btns circle grid5>
<a href='https://github.com/xaoxuu'><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png'>xaoxuu</a>
<a href='https://github.com/xaoxuu'><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png'>xaoxuu</a>
<a href='https://github.com/xaoxuu'><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png'>xaoxuu</a>
<a href='https://github.com/xaoxuu'><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png'>xaoxuu</a>
</btns>
或者含有图标的按钮：
<btns rounded grid5>
<a href='https://github.com/xaoxuu/hexo-theme-volantis/'><i class='fas fa-download'></i>下载源码</a>
<a href='https://volantis.js.org/'><i class='fas fa-book-open'></i>查看文档</a>
</btns>
{% endraw %}

```md blog/source/_posts/example.md:
{% raw %}
<btns circle grid5>
<a href='https://github.com/xaoxuu'><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png'>xaoxuu</a>
<a href='https://github.com/xaoxuu'><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png'>xaoxuu</a>
<a href='https://github.com/xaoxuu'><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png'>xaoxuu</a>
<a href='https://github.com/xaoxuu'><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png'>xaoxuu</a>
</btns>
或者含有图标的按钮：
<btns rounded grid5>
<a href='https://github.com/xaoxuu/hexo-theme-volantis/'><i class='fas fa-download'></i>下载源码</a>
<a href='https://volantis.js.org/'><i class='fas fa-book-open'></i>查看文档</a>
</btns>
{% endraw %}
```

```md Tips:
{% raw %} 和 {% endraw %} 之间的内容是不解析的，只能写HTML标签。
```

### 自定样式

```html
<btns 样式>
很多按钮
</btns>
```

#### 图片样式

- 默认为方形
- 圆角矩形（`rounded`），适合app图标。
- 圆形（`circle`），适合头像。

#### 布局方式

- 默认为自动宽度，适合视野内只有一两个的情况，多了显乱。
- 宽一点的按钮（`wide`）。
- 填充布局（`fill`），自动铺满至少一行，多了会换行。
- 居中（`center`），按钮之间是固定间距。
- 居中分散（`around`）。
- 网格布局（`grid3`），最多3列，屏幕变窄会适当减少列数。
- 网格布局（`grid4`），最多4列，屏幕变窄会适当减少列数。
- 网格布局（`grid5`），最多5列，屏幕变窄会适当减少列数。

#### 增加文字样式

可以在 `<btns></btns>` 容器内增加 `<p>标题</p>` 和 `<p>描述文字</p>`

### 图文并茂的例子

圆形图标 + 标题 + 描述 + 图片 + 网格4列 + 居中

{% raw %}
<btns circle center grid4>
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  <p red>专业版</p>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  <p green>免费版</p>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
</btns>
{% endraw %}


{% raw %}
<details>
<summary>
上例写法如下
</summary>
{% endraw %}

```html
{% raw %}
<btns circle center grid4>
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  <p red>专业版</p>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  <p green>免费版</p>
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
</btns>
{% endraw %}
```

{% raw %}</details>{% endraw %}

## 图片放大

1. 在主题配置文件中开启插件。

```yaml blog/themes/volantis/_config.yml
plugins:
  fancybox:
    css: '//cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css'
    js: '//cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js'
```

2. 将需要放大预览的图片用 `<fancybox></fancybox>` 包含起来。

```md blog/source/_posts/example.md:
例如这个图是不能点开的：
![](https://img.vim-cn.com/52/a54815c02ce232f11f54b2c547c1337828833c.png)
而这个图是可以点开的：
<fancybox>
<img src='https://img.vim-cn.com/52/a54815c02ce232f11f54b2c547c1337828833c.png'>
</fancybox>
```

{% raw %}
<details>
<summary>
示例效果
</summary>
{% endraw %}

例如这个图是不能点开的：
![](https://img.vim-cn.com/52/a54815c02ce232f11f54b2c547c1337828833c.png)
而这个图是可以点开的：
<fancybox>
<img src='https://img.vim-cn.com/52/a54815c02ce232f11f54b2c547c1337828833c.png'>
</fancybox>

{% raw %}</details>{% endraw %}

```md 「<b><red>注意</red></b>」这样写是无效的：
<fancybox>
![](https://img.vim-cn.com/52/a54815c02ce232f11f54b2c547c1337828833c.png)
</fancybox>
```

如需一行显示多图，将多个图片同时放在一对 `<fancybox></fancybox>` 中即可：

```html
<fancybox>
<img src='https://i.loli.net/2019/08/20/sgultOmRLXrwfA3.png'>&nbsp;
<img src='https://i.loli.net/2019/08/20/a2mCq871PwfbZEG.png'>&nbsp;
<img src='https://i.loli.net/2019/08/20/Zdz2cTphOlu3XKf.png'>&nbsp;
<img src='https://i.loli.net/2019/08/20/87UdSGaMuevV1iF.png'>&nbsp;
<img src='https://i.loli.net/2019/08/20/HEusSLBgG3XC1nN.png'>
</fancybox>
```

## Tab切换 <sup class='blue'>^2.1</sup>

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

<!-- endtab -->

<!-- tab 图片测试 -->

![](https://i.loli.net/2020/03/18/f5PQlWisvm9zbgK.jpg)


```md 测试 fancybox ：
<fancybox>

![](https://i.loli.net/2020/03/18/1TpiUwhuskGm5SV.png)

![](https://i.loli.net/2020/03/18/LZwBtR5YO4zQH9A.png)

![](https://i.loli.net/2020/03/18/ySw8zGHRBrDtUg7.png)

![](https://i.loli.net/2020/03/18/5QTMYsScOz41Vhg.png)

</fancybox>
```

<fancybox>

![](https://i.loli.net/2020/03/18/1TpiUwhuskGm5SV.png)

![](https://i.loli.net/2020/03/18/LZwBtR5YO4zQH9A.png)

![](https://i.loli.net/2020/03/18/ySw8zGHRBrDtUg7.png)

![](https://i.loli.net/2020/03/18/5QTMYsScOz41Vhg.png)

</fancybox>

有些格式不能识别的话，可以尝试增加空行。

<!-- endtab -->

<!-- tab 注意 -->

支持的语法格式有限，请尽量<u>不要</u>写太过复杂的东西。

<!-- endtab -->

{% endtabs %}

## 表格滚动

一般来说，表格默认会横向铺满，格子内文字过多会自动换行。但是当列数比较多时，每一列都很窄，推荐使用支持滚动的表格样式，用一对 `<overflow></overflow>` 把表格包起来。

```html
<overflow>

md表格内容

</overflow>
```

{% raw %}
<details>
<summary>
示例
</summary>
{% endraw %}

<overflow>

| 类别     | 排序方法 | 平均时间复杂度       | 最优时间复杂度       | 最差时间复杂度       | 空间复杂度                  | 稳定性 | 复杂性 |
| :-------- | :-------- | :-------------------- | :-------------------- | :-------------------- | :--------------------------- | :------ | :------ |
| 插入排序 | 直接插入 | O(n<sup>2</sup>)     | O(n)                 | O(n<sup>2</sup>)     | O(1)                        | 稳定   | 简单   |
| 插入排序 | 希尔排序 | O(n<sup>1.3</sup>)   | O(n)                 | O(n<sup>2</sup>)     | O(1)                        | 不稳定 | 复杂   |
| 选择排序 | 直接选择 | O(n<sup>2</sup>)     | O(n<sup>2</sup>)     | O(n<sup>2</sup>)     | O(1)                        | 不稳定 | 简单   |
| 选择排序 | 堆排序   | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(1)                        | 不稳定 | 复杂   |
| 交换排序 | 冒泡排序 | O(n<sup>2</sup>)     | O(n)                 | O(n<sup>2</sup>)     | O(1)                        | 稳定   | 简单   |
| 交换排序 | 快速排序 | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(n<sup>2</sup>)     | O(nlog<sub>2</sub>n)~O(n) | 不稳定 | 复杂   |
|          | 归并排序 | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(n)                        | 稳定   | 复杂   |
|          | 基数排序 | O(d(r+n))            | O(d(r+n))            | O(d(r+n))            | O(rd+n)                     | 稳定   | 复杂   |

</overflow>

```md blog/source/_posts/example.md:
<overflow>

| 类别     | 排序方法 | 平均时间复杂度       | 最优时间复杂度       | 最差时间复杂度       | 空间复杂度                  | 稳定性 | 复杂性 |
| :-------- | :-------- | :-------------------- | :-------------------- | :-------------------- | :--------------------------- | :------ | :------ |
| 插入排序 | 直接插入 | O(n<sup>2</sup>)     | O(n)                 | O(n<sup>2</sup>)     | O(1)                        | 稳定   | 简单   |
| 插入排序 | 希尔排序 | O(n<sup>1.3</sup>)   | O(n)                 | O(n<sup>2</sup>)     | O(1)                        | 不稳定 | 复杂   |
| 选择排序 | 直接选择 | O(n<sup>2</sup>)     | O(n<sup>2</sup>)     | O(n<sup>2</sup>)     | O(1)                        | 不稳定 | 简单   |
| 选择排序 | 堆排序   | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(1)                        | 不稳定 | 复杂   |
| 交换排序 | 冒泡排序 | O(n<sup>2</sup>)     | O(n)                 | O(n<sup>2</sup>)     | O(1)                        | 稳定   | 简单   |
| 交换排序 | 快速排序 | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(n<sup>2</sup>)     | O(nlog<sub>2</sub>n)~O(n) | 不稳定 | 复杂   |
|          | 归并排序 | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(nlog<sub>2</sub>n) | O(n)                        | 稳定   | 复杂   |
|          | 基数排序 | O(d(r+n))            | O(d(r+n))            | O(d(r+n))            | O(rd+n)                     | 稳定   | 复杂   |

</overflow>
```

{% raw %}</details>{% endraw %}

## 折叠框

{% raw %}
<details>
<summary>
示例：查看图片
</summary>
{% endraw %}

![](https://i.loli.net/2020/03/18/f5PQlWisvm9zbgK.jpg)

{% raw %}</details>{% endraw %}

```md blog/source/_posts/example.md:
{% raw %}
<details>
<summary>
示例：查看图片
</summary>
{% endraw %}

![](https://i.loli.net/2020/03/18/f5PQlWisvm9zbgK.jpg)

{% raw %}</details>{% endraw %}
```


## 渲染公式（MathJax）

默认是不渲染的，如果文章内有公式，需要在 `front-matter` 中设置开启。

```md blog/source/_posts/example.md:
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


{% raw %}
<details>
<summary>
示例效果
</summary>
{% endraw %}

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

{% raw %}</details>{% endraw %}


> 如果公式仍无法正确渲染可以阅读 [@MicDZ](https://www.micdz.cn) 的这篇文章：[《在material-x上使用KaTeX》](https://www.micdz.cn/article/katex-on-volantis/)。


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

```md blog/source/_posts/example.md:
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

#### 附加说明

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

```md blog/source/_posts/example.md:
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

```md blog/source/_posts/example.md:
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
```md blog/source/_posts/example.md:
{% pullquote [class] %}
content
{% endpullquote %}
```

### jsFiddle
在文章中嵌入 `jsFiddle`。
```md blog/source/_posts/example.md:
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

### Gist
在文章中嵌入 `Gist`，<red>注意</red>：在国内无法加载。
```md blog/source/_posts/example.md:
{% gist gist_id [filename] %}
```

### iframe
在文章中插入 `iframe`。
```md blog/source/_posts/example.md:
{% iframe url [width] [height] %}
```

### Image
在文章中插入指定大小的图片。
```md blog/source/_posts/example.md:
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

### Link
在文章中插入链接，并自动给外部链接添加 `target="_blank"` 属性。
```md blog/source/_posts/example.md:
{% link text url [external] [title] %}
```

### Include Code
插入 `source/downloads/code` 文件夹内的代码文件。`source/downloads/code` 不是固定的，取决于你在配置文件中 `code_dir` 的配置。
```md blog/source/_posts/example.md:
{% include_code [title] [lang:language] [from:line] [to:line] path/to/file %}
```

{% raw %}
<details>
<summary>
示例
</summary>
{% endraw %}

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

{% raw %}</details>{% endraw %}

### 引用文章

引用其他文章的链接。

```md
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

{% raw %}
<details>
<summary>
示例
</summary>
{% endraw %}

<br>

引用这篇文章：{% post_link news/2020-02-22 %}

```md blog/source/_posts/example.md:
引用这篇文章：{% post_link news/2020-02-22 %}
```
{% raw %}</details>{% endraw %}

### 文章摘要和截断

在文章中使用 `<!-- more -->`，那么 `<!-- more -->` 之前的文字将会被视为摘要。首页中将只出现这部分文字，同时这部分文字也会出现在正文之中。


> 更多请见Hexo官方文档：[#标签插件](https://hexo.io/zh-cn/docs/tag-plugins)
