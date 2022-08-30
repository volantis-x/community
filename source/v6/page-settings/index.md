---
layout: docs
title: 页面配置
group: docs-v6
order: 401
short_title: 4. 页面配置
sidebar: [docs-v6, toc]
plugins:
  - mathjax
disqus:
  path: /
---

## 页面布局模板

### 布局模板

{% table %}
| 取值  | 含义  |
| :----- | :----  |
| page | 独立页面 |
| post | 文章页面 |
| docs | 文档页面 |
| category | 分类页面 |
| tag | 标签页面 |
| friends | 友链页面 |
| list | 列表页面 |
{% endtable %}

### page & post & docs

这三种页面相同，但是有以下细微区别：

- post 文章有 title 时，向下滚动网页，导航栏会向上移出屏幕显出文章标题，而 page 和 docs 不会。
- post 文章末尾最多可以显示「参考资料」、「相关文章」、「版权标识」、「打赏」四个模块。
- docs 文章末尾最多可以显示「参考资料」一个模块。


除了归档页面是自动生成的，其它独立页面都需要手动创建 md 文件。

### 归档页面

归档页面是自动生成的，并且初始化的时候已经生成，路径如下：

```yaml blog/_config.yml
# Directory
archive_dir: archives
```

### 关于页面

```yaml Create file if not exists: source/about/index.md
---
layout: docs
seo_title: 关于
bottom_meta: false
sidebar: []
twikoo:
  placeholder: 有什么想对我说的呢？
---

下面写关于自己的内容

```

### 分类页面

```yaml Create file if not exists: source/categories/index.md
---
layout: category
index: true
title: 所有分类
---
```

### 标签页面

```yaml Create file if not exists: source/tags/index.md
---
layout: tag
index: true
title: 所有标签
---
```

### 列表页面

```yaml Create file if not exists: source/mylist/index.md
---
layout: list
group: mylist
index: true
---
```

结果就是筛选出所有文章中 `front-matter` 部分含有 `group: mylist` 的文章。


### 友链页面

#### 创建页面文件

```yaml Create file if not exists: source/friends/index.md
---
layout: friends # 必须
title: 我的朋友们 # 可选，这是友链页的标题
---

这里写友链上方的内容。

<!-- more -->

这里可以写友链页面下方的文字备注，例如自己的友链规范、示例等。

```

{% note info :: 插入友链数据可以 选择布局方案 或 使用友链标签 %}

#### 选择布局方案

在主题配置文件中找到以下内容：

```yaml
pages:
  # 友链页面配置
  friends:
    layout_scheme: traditional # simple: 简单布局, traditional: 传统布局
```

目前提供2种布局方案：
- simple: 简单布局，只有头像和标题。
- traditional: 传统布局，是 Volantis 旧版本的风格。

以上2种友链的数据源写在以下路径，如果没有请自行创建：

```
blog/source/_data/friends.yml
```
内容格式为：
```yaml blog/source/_data/friends.yml
- group: # 分组标题
  description:  # 分组描述
  items:
    - title: # 名称
      avatar: # 头像
      url: # 链接
      screenshot: # 截图
      keywords: # 关键词
      description: # 描述
    - title: # 名称
      avatar: # 头像
      url: # 链接
      screenshot: # 截图
      keywords: # 关键词
      description: # 描述
```

不同的布局方式，会用到一部分的字段，一般来说，`title`、`avatar` 和 `url` 都是必须的。这些数据被转成 HTML 标签插入到友链页面的 `<!-- more -->` 部分。

{% note error:: Volantis 4.x 新增的网站卡片标签的样式 sites 网站卡片布局 在5.0版本移除 被 sites标签 friends标签 contributors标签 替代 %}

{% note error:: issues 标签在5.0版本移除 被 sites标签 friends标签 contributors标签 替代 %}

#### 使用友链标签

使用 友链标签 您可以在任何位置插入友链，支持静态数据和动态数据, 关于如何使用 友链标签 插入友链，详见：

{% link volantis 主题文档 #友链标签::/v6/tag-plugins/#友链标签 %}

### 404页面

```yaml Create file if not exists: source/404.md
---
cover: true
robots: noindex,nofollow
sitemap: false
seo_title: 404 Not Found
bottom_meta: false
sidebar: []
twikoo:
  path: /404.html
  placeholder: 请留言告诉我您要访问哪个页面找不到了
---

{% p logo center huge, 404 %}
{% p center bold, 很抱歉，您访问的页面不存在 %}
{% p center small, 可能是输入地址有误或该地址已被删除 %}

```


## front-matter

front-matter 是文件最上方以 `---` 分隔的区域，用于指定个别文件的变量。更多请见 Hexo 官方文档：[#front-matter](https://hexo.io/zh-cn/docs/front-matter)

{% table %}
| 字段        | 含义         | 值类型        | 默认值 |
| :----------- | :------------ | :------------- | :------ |
| layout      | 布局模版     | String        | -      |
| title       | 页面标题         | String        | -      |
| seo_title       | 网页标题         | String        | page.title   |
| short_title       | 页面标题（在group列表中显示）         | String        | page.title   |
| date        | 创建时间     | Date          | 文件创建时间 |
| updated     | 更新日期     | Date          | 文件修改时间 |
| link   | 外部文章网址 | String        | -      |
| music       | 内部音乐控件 | [Object] | -      |
| robots    | robots   | String        | -      |
| keywords    | 页面关键词   | String        | -      |
| description | 页面描述、摘要     | String        | -      |
| cover | 是否显示封面     | Bool        | true      |
| top_meta | 是否显示文章或页面顶部的meta信息     | Bool        | true      |
| bottom_meta | 是否显示文章或页面底部的meta信息     | Bool        | true      |
| sidebar | 页面侧边栏     | Bool, Array        | theme.layout.*.sidebar      |
| body | 页面主体元素     | Array        | theme.layout.on_page.body      |
| thumbnail           | 缩略图 | String | false  |
| icons           | 图标 | Array | []  |
| pin           | 是否置顶 | Bool  | false  |
| headimg           | 文章头图| url  | - |
{% endtable %}

`layout:post` 时特有的字段：

{% table %}
| 字段              | 含义         | 值类型        | 默认值 |
| :----------------- | :------------ | :------------- | :------ |
| author            | 文章作者     | [Object]        | config.author      |
| categories        | 分类         | String, Array | -      |
| tags               | 标签         | String, Array | -      |
| toc               | 是否生成目录 | Bool          | true   |
{% endtable %}

music

{% table %}
| 字段              | 是否必须         | 值类型      |
| :----------------- | :------------ | :----------------- |
| server            | 是     | netease, tencent, kugou, xiami, baidu           |
| type        | 是         | song, playlist, album, search, artist  |
| id               | 是         | song id / playlist id / album id / search keyword   |
{% endtable %}

### 文章置顶

在 front-matter 中设置以下值：
```yaml front-matter
pin: true
```

### 文章分类

多个分类有两种关系，一种是层级（等同于文件夹），一种是并列（等同于标签）。

多级分类：
```yaml front-matter
---
categories: [分类A, 分类B]
---
```
或者

```yaml front-matter
---
categories:
  - 分类A
  - 分类B
---
```

并列分类

```yaml front-matter
categories:
  - [分类A]
  - [分类B]
```

多级+并列分类

```yaml front-matter
categories:
  - [分类A, 分类B]
  - [分类C, 分类D]
```

### 文章摘要

在文章中插入 `<!-- more -->`，前面的部分即为摘要。

```yml 某篇文章源码
---
title: xxx
date: 2020-02-21
---

这是摘要

<!-- more -->

这是正文
```

{% note warning, **注意**： `<!-- more -->` 前后一定要有空行，不然可能导致显示错位。 %}

### 设置文章作者

Volantis 支持多个作者在一个站点发布文章，其他作者信息需要写在数据文件中，例如：

```yaml blog/source/_data/author.yml
Jon:
  name: Jon Snow
  avatar: https://cn.bing.com/th?id=AMMS_fc8f99fd41ebd737a71c4e13806db9a0&w=110&h=110&c=7&rs=1&qlt=80&pcl=f9f9f9&cdv=1&dpr=2&pid=16.1
  url: https://gameofthrones.fandom.com/wiki/Jon_Snow
Dany:
  name: Daenerys Targaryen
  avatar: https://tse1-mm.cn.bing.net/th?id=OIP.Yax4wLzIFbcBVUa_RsKywQHaLH&w=80&h=80&c=8&rs=1&qlt=90&dpr=2&pid=3.1&rm=2
  url: https://gameofthrones.fandom.com/wiki/Daenerys_Targaryen
```

在文章的 front-matter 中新增 `author` 即可：

```yaml front-matter
---
title: Jon Snow | Game of Thrones Wiki | Fandom
author: Jon
---
```

### 引入外部文章

利用 `link`，搭配自定义的文章作者信息，你可以在文章列表中显示外部文章或者网址，例如：

```yaml blog/source/_data/author.yml
xaoxuu:
  name: xaoxuu
  avatar: https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png
  url: https://xaoxuu.com
```

```yaml front-matter
---
layout:     post
date:       2017-07-05
title:      [转]如何搭建基于Hexo的独立博客
categories: [Dev, Hexo]
tags:
  - Hexo
author: xaoxuu
link: https://xaoxuu.com/blog/2017-07-05-hexo-blog/
---

![](https://img.vim-cn.com/d9/a9af7dc49fc0af8ca3e6dd2450a2f7095a87db.png)

```

### 置顶

对于任何文章或者页面，设置 `pin: true` 即可置顶在首页。

```yaml front-matter
---
pin: true
---
```

这会导致一个小问题：首页 post 卡片数量多于设定值，如果有强迫症希望每一个分页数量一致，可以安装插件来实现，详见：[#421](https://github.com/volantis-x/hexo-theme-volantis/issues/421)

### 不归档

存放在 `_posts` 文件夹下的文章一般都会出现在归档页，如果某篇文章不希望出现在归档页面：

```yaml front-matter
---
archive: false
---
```

## 页面自定义布局


### 显示迷你音乐播放器

标题右边显示迷你音乐播放器，支持的字段有：`server`、`type`、`id`。

```yaml front-matter
---
music:
 server: netease   # netease, tencent, kugou, xiami, baidu
 type: song        # song, playlist, album, search, artist
 id: 16846091      # song id / playlist id / album id / search keyword
---
```

{% note play, 实际效果见： [#contributors](/contributors/) %}

### 显示 meta 标签

文章顶部和底部的日期、分类、更新日期、标签、分享等属于 meta 标签。

```yaml front-matter
---
top_meta: false
bottom_meta: false
---
```
如果一个页面没有 title 则不会显示 top_meta ，像404、关于页面就可以完全隐藏：

```yaml front-matter
---
seo_title: 关于
top_meta: false
bottom_meta: false
---
```


### 标题右边显示缩略图

```yaml front-matter
---
thumbnail: https://img.vim-cn.com/17/0c7b02722686d1527a1df807dae0794d995860.png
---
```

缩略图仅在文章列表和文章页面显示，不会在归档页面显示。

### 标题右边显示图标

```yaml front-matter
---
icons: [fas fa-fire red, fas fa-star green]
---
```

图标仅在归档页面中显示，可以用来标注热门文章。

{% note info, 可以通过 red / blue / green / yellow / orange / theme / accent 来设置图标的颜色 %}


### 是否要显示封面

如果某个页面需要封面，可以这样写：
```yaml front-matter
---
cover: true
---
```


### 显示侧边栏

通过自由设置边栏卡片来删减对应页面的冗余信息，提高有价值的信息在页面中的权重。

如果某个页面不需要侧边栏，可以这样写：
```yaml front-matter
---
sidebar: []
---
```

某个页面想指定显示某几个侧边栏，就这样写:
```yaml front-matter
---
sidebar: [grid, toc, tags] # 放置任何你想要显示的侧边栏部件
---
```

### 关闭评论

```yaml front-matter
---
comments: false
---
```


## 页面插件 (page plugins)

在 front-matter 中配置页面插件

```yaml front-matter
---
plugins:
  - mathjax
  - katex
  - artitalk
  - bbtalk
  - fcircle
  - gitter
  - indent
  - snackbar: oldversion
---
```

### 说说页面

以 Artitalk页面 为例:

#### 创建页面文件

```yaml Create file if not exists: source/artitalk/index.md
---
seo_title: 说说
comments: false
plugins:
  - artitalk
  # - bbtalk
  # - fcircle
---
```

#### 配置Artitalk

在主题配置文件中找到以下内容

``` yaml
# Artitalk https://artitalk.js.org
# 配置过程请参考：https://artitalk.js.org/doc.html
# 使用过旧版本的请修改Leancloud shuoshuo class部分列名：https://artitalk.js.org/release.html
# 除appID和appKEY外均为选填项
artitalk:
  # Set `plugins: ["artitalk"]` to enable in front-matter
  # 不支持 Pjax
  # 配置项按照yml格式继续填写即可
  appId: # your appID
  appKey: # your appKEY
  # serverURL:  #leancloud绑定的api访问域名，使用国际版的话不需要填写
  # lang: # 语言设置，zh为汉语，en为英语，es为西班牙语。默认为汉语
  # pageSize: #每页说说的显示数量
  # shuoPla: #在编辑说说的输入框中的占位符
  # avatarPla: #自定义头像url的输入框的占位符
  # motion: #加载动画的开关，1为开，0为关，默认为开
  # bgImg: #说说输入框背景图片url
  # color1: #说说背景颜色1&按钮颜色1
  # color2: #说说背景颜色2&按钮颜色2
  # color3: #说说字体颜色
  # cssUrl: #自定义css接口
```

### 渲染公式

默认是不渲染的，如果文章内有公式，需要在 front-matter 中设置开启。即便开启了，文章列表中也不会进行渲染，请注意不要把公式写在文章开头。


```md example.md:
---
title: 渲染公式（MathJax）
date: 2020-02-23
plugins:
  - mathjax
---

添加一段描述性文字

<!-- more -->

$$t+1=2$$

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

{% folding 查看公式渲染效果 %}
$$t+1=2$$

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


如果公式仍无法正确渲染可以阅读 [@MicDZ](https://www.micdz.cn) 的这篇文章：

{% link 在Material-X上使用KaTeX, https://www.micdz.cn/article/katex-on-volantis/, https://www.micdz.cn/img/h.jpeg %}

### 页面 gitter

#### 页面配置 front-matter

```yaml
---
plugins:
  - gitter
---
```

#### 配置 gitter

在主题配置文件中找到以下内容

``` yaml
plugins:
  ....
  # Gitter
  # https://gitter.im
  gitter:
    room: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 文章页首行缩进

```yaml front-matter
---
plugins:
  - indent
---
```

### Snackbar (页面通知)

#### 配置数据源

数据源写在以下路径，如果没有请自行创建：

```
blog/source/_data/notification.yml
```
内容格式为：
```yaml blog/source/_data/notification.yml
oldversion:
  title: 过期的文档
  message: 这份文档过于久远，如果您使用的是新版的主题，请查看新版本的文档。
  position: bottom # bottom (底部通知), right (右侧通知，会自动消失)
  theme: warning # default, warning
  cache: false # 是否记住选项（下次不再弹出）
  buttons:
    - title: 查看新版文档
      url: /getting-started/
      dismiss: false # 点击了是否关闭底部横幅
```

#### 配置 front-matter

```yaml front-matter
---
plugins:
  - snackbar: oldversion
---
```
