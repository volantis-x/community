---
title: 使用freecdn-js提高hexo博客的cdn稳定性
date: 2023-10-01
description: 根据md文件内的cdn链接（图片等并不在本地）自动生成cdn列表，若图片、js、html等文件cdn失效则尝试连接列表内的其他cdn
keywords: cdn失效 cdn 提高免费cdn稳定性 freecdn cdn.jsdelivr.net 实时切换到合适的CDN 远程图片
author: xingpingcn
link: https://xingpingcn.top/%E4%BD%BF%E7%94%A8freecdn-js%E6%8F%90%E9%AB%98hexo%E5%8D%9A%E5%AE%A2%E7%9A%84cdn%E7%A8%B3%E5%AE%9A%E6%80%A7.html
backup: https://web.archive.org/web/20231107000145/https://xingpingcn.top/%E4%BD%BF%E7%94%A8freecdn-js%E6%8F%90%E9%AB%98hexo%E5%8D%9A%E5%AE%A2%E7%9A%84cdn%E7%A8%B3%E5%AE%9A%E6%80%A7.html
---

由于`cdn.jsdelivr.net`在国内不太稳定，替代的`jsd.cdn.zzko.cn`稳定性稍好，但是也不是100%稳定，因而需要一个脚本实时切换到合适的CDN。[freecdn-js](https://github.com/EtherDream/freecdn)能实现这个需求，但是我的文件（图片、js等）储存在GitHub图床，而`freecdn-js`本身需要被加速的文件的`hash`，因此需要自己写脚本处理下载图片并计算。因为图片等文件的cdn链接是直接写在`.md`文件中的，所以写了一个正则脚本来提取cdn的链接。

<!-- more -->
