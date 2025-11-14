---
layout: docs
group: docs-v6
order: 801
title: FAQ
short_title: 8. FAQ
sidebar: [docs-v6, toc]
disqus:
  path: /
---

<p>
{% span logo center large, <sup>&ensp;</sup>Volantis<sup>6</sup> %}
{% span center small logo, FAQ List For Volantis 6 %}
</p>
<br>

## 这是什么？我在哪里？

我也不知道

## 我这里出现了故障，需要先做什么？

<p>
{% span logo center small, Troubleshooting any problem without the error log
is like driving with your eyes closed. %}
{% span logo center small, 在没有错误日志的情况下诊断任何问题无异于闭眼开车 %}
</p>
<br>

## 控制台报错 SyntaxError: Unexpected token '.'

```bash
  SyntaxError: Unexpected token '.'
      at new Script (vm.js:88:7)
      at createScript (vm.js:263:10)
      at runInThisContext (vm.js:311:10)
```

node.js 版本过低，请升级至 v16.x 及以上版本！

{% note info :: 配置和使用 volantis 6.x 之前请确保 node.js 升级至 <emp>v16.x 及以上</emp>版本！ %}



## 我应该使用哪个版本？

使用最新的版本


## 如何在魔改主题的情况下还能兼顾更新？

使用 [Custom Files 自定义文件](/v6/development-api/#Custom-Files-自定义文件) 和 [Development API for Volantis](/v6/development-api/).

使用 [Hexo Theme Plus](https://github.com/jiangtj/hexo-extend-theme) 替换掉在 `layout` 文件夹下的主题文件.

使用 [Hexo 插件系统](https://hexo.io/zh-cn/docs/plugins.html) 在 `blog` 目录根下创建 `scripts` 文件夹编写脚本.

## 如何更新主题？

[RTFM](/how-to-update/)

## 如何修改 favicon？

[RTFM](/v6/site-settings/#网站图标)

## 文档为什么和配置文件不一样？

以配置文件为准，文档更新的不是非常及时

## 如何设置主页的背景图？

主题有俩种背景图片设置方式

- background 仅能设置一张背景图，且背景图范围仅为 cover 区域
- parallax 可以设置一张或更多的背景图，当 position 取值为 cover 时，背景图仅为 cover 区域，具有视差滚动效果。position 取值为 fixed 时，背景图固定在整个页面，不具有视差滚动效果。

> 原 parallax 和 backstretch 已合并为 parallax
> 注意：背景图配置只能生效一个

[volantis-x/community/issues/115#issuecomment-907983622](https://github.com/volantis-x/community/issues/115#issuecomment-907983622)


## 到哪里查找 fontawesome 图标？

 https://fontawesome.com/icons

## 为什么无法正常显示 aplayer？

可能是网易云 API 崩溃了

## 图片怎么添加灯箱放大效果？

[使用 gallery 标签](/v5/tag-plugins/#gallery)


## 控制台有一个奇怪的 Warning？

```
(node:7973) Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:7973) Warning: Accessing non-existent property 'column' of module exports inside circular dependency
(node:7973) Warning: Accessing non-existent property 'filename' of module exports inside circular dependency
(node:7973) Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency
(node:7973) Warning: Accessing non-existent property 'column' of module exports inside circular dependency
(node:7973) Warning: Accessing non-existent property 'filename' of module exports inside circular dependency
```

我想把它命名为 `Warning-738`.

[volantis-x/hexo-theme-volantis/discussions/738](https://github.com/volantis-x/hexo-theme-volantis/discussions/738)


## 5.0 的友情链接页有啥变化？

[volantis-x/hexo-theme-volantis/discussions/734](https://github.com/volantis-x/hexo-theme-volantis/discussions/734)



## 如何正确渲染多行 MathJax 公式？

[使用 pandoc 正确渲染多行 MathJax 公式](https://shiraha.cn/2021/use-pandoc-to-render-multiline-formulas-correctly/)

或者直接放图片...

## 为什么文章会被截断？

![](./images/12.png)













## What is the answer to Life, the Universe, and Everything?

42

![42](./images/42.png)

## 上面没有我要找的答案？

尝试 打开搜索 或 {% btn, 常见问题与反馈渠道, /faqs/ %}