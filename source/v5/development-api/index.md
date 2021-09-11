---
layout: docs
group: docs-volantis-latest
order: 701
title: 开发文档
short_title: 7. 开发文档
sidebar: [docs-volantis-latest, toc]
disqus:
  path: /
---

<p>
{% span logo center large, <sup>&ensp;</sup>Volantis<sup>5</sup> %}
{% span center small logo, Development API for Volantis %}
</p>
<br>

## 样式文件说明

[`/source/css/Readme.md`](https://github.com/volantis-x/hexo-theme-volantis/blob/dev/source/css/Readme.md)

## 全局变量 volantis

我们提供了全局变量 volantis 和一些全局函数等主题开发调用接口。

源码参考：[`layout/_partial/scripts/global.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_partial/scripts/global.ejs)

## Pjax

### Pjax 重载区域划分接口

我们提供了可以实现Pjax重载区域灵活划分的开发接口。

源码参考：[`layout/_plugins/pjax/index.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_plugins/pjax/index.ejs)

#### `<pjax></pjax>` 标签

所有被 `<pjax></pjax>` 标签包裹的所有元素将被pjax重载。

请检查并确保 pjax 标签必须存在于所有页面 否则 pjax error.

```html
<pjax>
    <!--我是将被pjax重载的内容 begin-->
    <div>
        <div></div>
        <script></script>
    </div>
    <!--我是将被pjax重载的内容 end-->
</pjax>
```

使用案例：[`/layout/_partial/scripts/index.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/5a001b1555dc67ab61b050cded35e3c3b95750dd/layout/_partial/scripts/index.ejs#L97-L102)

#### `script[data-pjax]`

所有含有 `data-pjax` 标记的 `script` 标签将被pjax重载。

```html
<script data-pjax>我是将被pjax重载的内容</script>
```

#### `.pjax-reload script`

所有在 `pjax-reload` Class元素内部的 `script` 标签将被pjax重载。

```html
<div class="pjax-reload">
    <div>
        <div>我不是将被pjax重载的内容</div>
        <script>我是将被pjax重载的内容</script>
    </div>
</div>
```

### Pjax 回调方法

我们提供了灵活的 Pjax 回调方法。

源码参考：

[`layout/_partial/scripts/global.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_partial/scripts/global.ejs)

[`layout/_plugins/pjax/index.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_plugins/pjax/index.ejs)

使用案例：[`layout/_plugins/pjax/animate.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_plugins/pjax/animate.ejs#L27-L29)

{% note info, 中括号[]里面的内容表示选项是可选的，可以不填。下同，不再赘述。 %}

#### `volantis.pjax.push` 在Pjax请求完成后触发。

使用 `volantis.pjax.push(callBack[,"callBackName"])` 传入`pjax:complete`回调函数。

`callBack`是回调函数,必填。

`"callBackName"` `string`类型 默认值是回调函数的函数名，选填。



#### `volantis.pjax.send` 在Pjax请求开始后触发。

使用 `volantis.pjax.send(callBack[,"callBackName"])` 传入`pjax:send`回调函数。

`callBack`是回调函数,必填。

`"callBackName"` `string`类型 默认值是回调函数的函数名，选填。



#### `volantis.pjax.error` 在Pjax请求失败后触发。

使用 `volantis.pjax.error(callBack[,"callBackName"])` 传入`pjax:error`回调函数。

`callBack`是回调函数,必填。

`"callBackName"` `string`类型 默认值是回调函数的函数名，选填。


## 暗黑模式

我们提供了暗黑模式灵活的开发接口。

源码参考：

[`layout/_partial/scripts/global.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_partial/scripts/global.ejs)

[`layout/_partial/scripts/darkmode.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_partial/scripts/darkmode.ejs)


### 暗黑模式样式

详见：[`/source/css/Readme.md`](https://github.com/volantis-x/hexo-theme-volantis/blob/dev/source/css/Readme.md)

### 当前模式

调用 `volantis.dark.mode` 查看当前模式。返回值为字符串 `dark` 或者 `light`。

### 暗黑模式触发器

调用 `volantis.dark.toggle()` 触发切换亮黑模式。

### 暗黑模式触发器回调函数

调用 volantis.dark.push(callBack[,"callBackName"]) 传入触发器回调函数.

使用案例：[`layout/_plugins/comments/utterances/script.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_plugins/comments/utterances/script.ejs#L41)

## Message 消息提示

我们在 [iziToast](https://izitoast.marcelodolza.com/) 的基础上封装了一个简单的消息提示：

源码参考：

[`layout/_plugins/message/script.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_plugins/message/script.ejs)

```js
volantis.message(title, message, option, done);
volantis.question(title, message, option, success, cancel, done);
```

- `title`：标题（必填），字符串（String）
- `message`：内容（必填），字符串（String）
- `option`：配置项，对象(Object)
- `done`：完成时回调，函数(Function)
- `success`：确认时回调，函数(Function)
- `cancel`: 取消时回调，函数(Function)

`option` 可选参数：

- `icon`,                 // Fontawesome 图标
- `time`,                 // 持续时间
- `position`,             // 弹出位置
- `transitionIn`,         // 弹窗打开动画
- `transitionOut`,        // 弹窗关闭动画
- `messageColor`,         // 消息颜色
- `titleColor`,           // 标题颜色
- `backgroundColor`,      // 默认背景色
- `zindex`                // 层级

option 配置优先级大于配置文件设置值。

使用范例：

```js
// 同样弹窗
volantis.message('这里是标题', '这里是弹窗内容');

// 居中弹窗
volantis.message('系统提示', '这里是 Volantis 主题站，欢迎访问。', {
  icon: 'fad fa-smile-wink light-blue', 
  position: 'topCenter', 
  transitionIn:'bounceInDown',
  transitionOut: 'fadeOutDown',
  time: 10000
});

// 询问弹窗
volantis.question('问卷调查', '你是否喜欢 Volantis 主题', {}, () => {
  alert('谢谢支持')
}, () => {
  console.log('再接再厉')
});
```

如果以上两个接口仍然不能满足您的需求，可以参考 [iziToast](https://izitoast.marcelodolza.com/) 的内容直接调用 `iziToast()` 

## 动态加载脚本

源码参考：

[`layout/_partial/scripts/global.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_partial/scripts/global.ejs)

```js
  volantis.js("src", cb)
  volantis.css("src")
```
`src` String类型 加载脚本URL

`cb` 可选 可以传入onload回调函数 或者 JSON对象 例如: `volantis.js("src", ()=>{})` 或 `volantis.js("src", {defer:true,onload:()=>{}})`

返回 Promise 对象

如下方法同步加载资源，这利于处理文件资源之间的依赖关系，例如：APlayer 需要在 MetingJS 之前加载

```js
   (async () => {
       await volantis.js("...theme.plugins.aplayer.js.aplayer...")
       await volantis.js("...theme.plugins.aplayer.js.meting...")
   })();
```

使用案例：[`layout/_plugins/aplayer/script.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_plugins/aplayer/script.ejs#L7-L16)

由于返回的是 Promise 对象，也可以采用以下方式实现加载完成后调用回调函数：

```js
   volantis.js("https://cdn.jsdelivr.net/npm/jquery").then(()=>{
       console.log("我在脚本加载完成后调用")
   })
```

## 按需加载的插件

源码参考：

[`layout/_partial/scripts/global.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_partial/scripts/global.ejs)


### jQuery

```js
volantis.import.jQuery().then(()=>{
  // 依赖 jQuery 的代码段
  // .....
  // .....
})
```

## requestAnimationFrame

1、requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。

2、在隐藏或不可见的元素中，requestAnimationFrame 将不会进行重绘或回流，这当然就意味着更少的的 cpu，gpu 和内存使用量。

```js
volantis.requestAnimationFrame(() => {
  // 包含 DOM 操作的代码段
  // .........
  // .........
})
```

## Layout Helper

向目标元素动态注入 HTML

```js
volantis.layoutHelper(helper, html, opt)
```

- `helper`：Helper id（必填），字符串（String）
- `html`：HTML（必填），字符串（String）
- `opt`：配置项，对象(Object)


`opt` 可选参数：

- `clean`,  // 清除 Layout Helper 原有的所有内容, 默认 false
- `pjax`,   // 支持 pjax, 默认 true

`helper` 可选参数：

- `page-plugins`,  // 页面插件 Layout, 位于 layout/_partial/article.ejs
- `comments`,      // 评论 Layout, 位于 layout/_plugins/comments/index.ejs

```js
// 向 page-plugins 入口动态注入 id 为 artitalk_main 的 div, 不启用 pjax, 不清除 Layout Helper 原有的内容
volantis.layoutHelper("page-plugins",`<div id="artitalk_main"></div>`, { pjax:false, clean:false })
```

## 滚动事件处理

源码参考：`layout/_partial/scripts/global.ejs`

### 获取滚动条距离顶部的距离

```js
volantis.scroll.getScrollTop()
```

### 获取滚动方向

```js
volantis.scroll.del
```

`volantis.scroll.del` 中存储了一个数值, 该数值检测一定时间间隔内滚动条滚动的位移, 数值的检测频率是浏览器的刷新频率.

- 数值为正数时, 表示向下滚动.
- 数值为负数时, 表示向上滚动.


### 滚动事件回调函数

使用 `volantis.scroll.push(callBack[,"callBackName"])` 传入滚动事件回调函数, 当页面滚动时触发回调函数。

```js
volantis.scroll.push(()=>{
  if (volantis.scroll.del > 0) {
    console.log("向下滚动");
  } else {
    console.log("向上滚动");
  }
})
```

使用 `volantis.scroll.unengine.push(callBack[,"callBackName"])` 传入非滚动事件回调函数, 当页面没有滚动时触发回调函数。

使用 `volantis.scroll.unengine.remove("callBackName")` 移除名称为 "callBackName" 的非滚动事件回调函数。

### 触发页面滚动至目标元素位置

```js
// 滚动到目标 Dom 元素 "ele" 位置
volantis.scroll.to(ele, option)
```

`ele`：Dom 元素（必填）

`option` 可选参数：

- `top`,                     // 类型 Float,文档中的纵轴坐标, 默认值 `ele.getBoundingClientRect().top + document.documentElement.scrollTop`
- `addTop`,                  // 类型 Float,向上面的 top 参数中 添加补偿值.
- `behavior`,                // 类型 String, 表示滚动行为, 支持参数 smooth (平滑滚动), instant (瞬间滚动)
- `observer`,                // 类型 Boolean, 是否启用监视器,默认值 false, 监视器用于监视元素是否滚动到指定位置 目前用于处理 toc 部分 lazyload 引起的 cls 导致的定位失败问题.
- `observerDic`,             // 类型 Float, 监视器监视距离, 默认值 25.

例如:

```js
volantis.scroll.to(document.getElementById("locationID"),{addTop: - volantis.dom.header.offsetHeight - 10, behavior: 'instant'})
```

## 对本地文件使用CDN

源码参考：

[`layout/_partial/scripts/_ctrl/cdnCtrl.ejs`](https://github.com/volantis-x/hexo-theme-volantis/blob/d71e7d533a8a3f13694f1adbb11417d02ac4ca04/layout/_partial/scripts/_ctrl/cdnCtrl.ejs)

```js
theme.cdn.addJS("name","source","force")
theme.cdn.addCSS("name","source","force")
```

参数都为 String 类型，其中 source 和 force 是可选的。

返回值为 CDN 处理后的链接，并存入`theme.cdn.map.js`和`theme.cdn.map.css`中

可以使用`theme.cdn.map.js["name"]`再次调用。

`"name"` 是自定义名称

`"source"` 是资源路径

`"force"` 是强制覆盖的资源路径

如果`"source"`为空，则将`"name"`赋值给`"source"`。

例如：

对于文件`source/js/plugins/sites.js`使用CND链接，使用如下方法生成。

```js
theme.cdn.addJS("sites","plugins/sites")
```

生成的CDN链接可使用 `theme.cdn.map.js.sites` 回调。

以下用于配置项 cdn.set 覆盖配置,下面是覆盖配置的方法

```yml
cdn:
   enable: true
   # 以下配置可以覆盖 cdn.prefix,配置项的值可以为空，但是要使用CDN必须依据路径填写配置项的键
   set:
     js:
       app: https://cdn.jsdelivr.net/gh/volantis-x/volantis-x.github.io@gh-page/js/app.js
       rightMenu: https://cdn.jsdelivr.net/gh/volantis-x/volantis-x.github.io@gh-page/js/rightMenu.js
       parallax: https://cdn.jsdelivr.net/gh/volantis-x/volantis-x.github.io@gh-page/js/parallax.js
       plugins:
         contributors: https://cdn.jsdelivr.net/gh/volantis-x/volantis-x.github.io@gh-page/js/plugins/contributors.js
         friends: https://cdn.jsdelivr.net/gh/volantis-x/volantis-x.github.io@gh-page/js/plugins/friends.js
         sites: https://cdn.jsdelivr.net/gh/volantis-x/volantis-x.github.io@gh-page/js/plugins/sites.js
     css:
       style: https://cdn.jsdelivr.net/gh/volantis-x/volantis-x.github.io@gh-page/css/style.css
       message: https://cdn.jsdelivr.net/gh/volantis-x/volantis-x.github.io@gh-page/css/message.css
```

直接使用cdn配置项，不使用`theme.cdn.addJS("sites","plugins/sites")` 也可以生成 `theme.cdn.map.js.sites` CDN链接回调


## Custom Files 自定义文件

在不修改主题原始源代码的情况下添加自定义内容

### 注入点

我们提供了一些注入点接口:

```js
let points={
  styles:[
    "first",
    "style",
    "dark",
    "darkVar",
  ],
  views:[
    "head",
    "header",
    "side",
    "topMeta",
    "bottomMeta",
    "footer",
    "postEnd",
    "bodyEnd",
  ]
}
```

#### 样式注入点

- first: 向 `theme/source/css/first.styl` 文件末尾注入自定义内容, 该文件中包含首屏样式,首屏样式采用硬编码的方式写在HTML中。首屏样式内含 cover navbar search 的样式.

- style: 向 `theme/source/css/style.styl` 文件末尾注入自定义内容, 该文件中包含异步延迟加载的样式,除首屏样式,其他样式放入此处异步加载.

- dark: 向 `theme/source/css/_style/_plugins/_dark/dark_plugins.styl` 文件末尾注入自定义内容, 该文件中包含异步暗黑模式样式 的 强制覆盖样式.

- darkVar: 向 `theme/source/css/_style/_plugins/_dark/dark_async.styl` 调用函数 `async_dark()` 末尾注入自定义内容, 该文件中包含异步暗黑模式样式 的 暗黑模式 CSS 变量.

#### 布局视图注入点

- head: 向 `theme/layout/_partial/head.ejs` 文件 `<head>` 标签末尾注入自定义内容.

- header: 向 `theme/layout/_partial/header.ejs` 文件 导航栏 `.nav-main` 末尾注入自定义内容.

- side: 向 `theme/layout/_partial/side.ejs` 文件 侧边栏 `#l_side` 末尾注入自定义内容.

- topMeta: 向 `theme/layout/_partial/meta.ejs` 文件 topMetas 末尾注入自定义内容.

- bottomMeta: 向 `theme/layout/_partial/meta.ejs` 文件 bottomMetas 末尾注入自定义内容.

- footer: 向 `theme/layout/_partial/footer.ejs` 文件 `<footer>` 标签末尾注入自定义内容.

- postEnd: 向 `theme/layout/_partial/article.ejs` 文件 `<article>` 标签末尾注入自定义内容.

- bodyEnd:  向 `theme/layout/layout.ejs` 文件 `<body>` 标签末尾注入自定义内容.


### blog/source/_volantis/ 文件夹

一般的, 创建 `blog/source/_volantis/` 文件夹并在此文件夹下创建与注入点同名同扩展名的文件,用以写入注入点自定义内容.

```js
  blog/source/_volantis/
    ├─ first.styl
    ├─ style.styl
    ├─ dark.styl
    ├─ darkVar.styl
    ├─ head.ejs
    ├─ header.ejs
    ├─ topMeta.ejs
    ├─ bottomMeta.ejs
    ├─ postEnd.ejs
    └─ bodyEnd.ejs

```

当然,你仍然可以修改主题配置文件将自定义布局或样式放置在特定位置.以下是默认配置,该配置已隐藏.

```yml blog/_config.volantis.yml
custom_files:
  first: source/_volantis/first.styl
  style: source/_volantis/style.styl
  dark: source/_volantis/dark.styl
  darkVar: source/_volantis/darkVar.styl
  head: source/_volantis/head.ejs
  header: source/_volantis/header.ejs
  topMeta: source/_volantis/topMeta.ejs
  bottomMeta: source/_volantis/bottomMeta.ejs
  postEnd: source/_volantis/postEnd.ejs
  bodyEnd: source/_volantis/bodyEnd.ejs
```

示例:

```yml blog/source/_volantis/darkVar.styl
body
  --color-site-body: blue !important
```

### `theme_inject` 过滤器

使用 Hexo 过滤器 `theme_inject` ，可以将所需的自定义内容添加到任何注入点。

{% note info, 如果您的代码很简单，建议您编写脚本，您只需要把 JavaScript 文件放到 scripts 文件夹，在启动时就会自动载入。您可以直接在 blog 
文件夹下创建 scripts 文件夹. %}

```js
hexo.extend.filter.register('theme_inject', function(injects) {
  // ...
});
```

对于注入布局视图:

```js
// The name of same `injectPoint` suggest be unique. If same, it will override low priority configurations.
// `locals` and `options` is the same as partial https://hexo.io/docs/helpers#partial.
// `order` defines the order of injection, which by default depends on the priority of injection.
hexo.extend.filter.register('theme_inject', function(injects) {
  // it will put code from this filePath into injectPoint.
  injects.[injectPoint].file(name, filePath, [locals, options, order]);
  // it will put raw string as code into injectPoint.
  injects.[injectPoint].raw(name, raw, [locals, options, order]);
});
```

对于注入样式:

```js
hexo.extend.filter.register('theme_inject', function(injects) {
  // it will put styleFile into injectPoint.
  injects.[injectPoint].push(styleFile);
});
```

### Examples

以文件的形式向 `theme/css/style.styl` 文件末尾注入自定义样式

```js blog/scripts/example-1.js
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.style.push('source/_data/mystyle.styl');
});
```

以文本的形式向 `<body>` 标签末尾注入自定义脚本内容

```js blog/scripts/example-2.js
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.bodyEnd.raw('load-custom-js', '<script src="js-path-or-cdn.js"></script>');
});
```

以文件的形式向侧栏注入自定义布局视图内容

```js blog/scripts/example-3.js
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.sidebar.file('my-favourite-food', 'source/_data/my-favourite-food.ejs');
});
```

### 插件系统

我们还支持 hexo 的插件系统，无需修改核心模块的源代码即可轻松扩展功能。你可以参考 https://hexo.io/docs/plugins.html#Plugin 学习如何创建插件。

{% note warning up, 请注意，以上是主题开发文档，不是使用文档！ %}