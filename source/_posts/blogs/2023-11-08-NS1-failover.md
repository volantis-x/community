---
title: 免费通过NS1利用监控宝平台实现实时基于不同运营商的故障转移
author: xingpingcn
headimg: https://cdn.jsdelivr.net/gh/xingpingcn/picx-images-hosting@master/20231027/image.1oz9s4agroao.png
description: 免费利用NS1权威DNS服务器实时基于不同运营商故障转移，利用监控宝平台监控指定网站
keywords: NS1 站点监控 网站监控 故障转移 failover 监控宝 AWS Lambda
link: https://xingpingcn.top/%E5%85%8D%E8%B4%B9%E9%80%9A%E8%BF%87NS1%E5%88%A9%E7%94%A8%E7%9B%91%E6%8E%A7%E5%AE%9D%E5%B9%B3%E5%8F%B0%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%9F%BA%E4%BA%8E%E4%B8%8D%E5%90%8C%E8%BF%90%E8%90%A5%E5%95%86%E7%9A%84%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html
backup: https://web.archive.org/web/20231106235905/https://xingpingcn.top/%E5%85%8D%E8%B4%B9%E9%80%9A%E8%BF%87NS1%E5%88%A9%E7%94%A8%E7%9B%91%E6%8E%A7%E5%AE%9D%E5%B9%B3%E5%8F%B0%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%9F%BA%E4%BA%8E%E4%B8%8D%E5%90%8C%E8%BF%90%E8%90%A5%E5%95%86%E7%9A%84%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB.html
---

本教程用到的资源全部都是免费且可持续使用的。NS1.com这个权威DNS服务器能根据ASN、国家或省份、DNS轮询（可加权）等方式解析域名，并且提供了API去控制某个解析（answer）是否响应。监控宝能实时监控网站（通过HTTP、PING、DNS方式等）并输出警告（webhook、Email、短信等），最高监控频率为2分钟。亚马逊的AWS Lambda是一个PssS平台（severless），可以作为连接NS1.com和监控宝之间的桥梁，当监控宝检测到网站速度变慢的时候发送信息到AWS Lambda，AWS Lambda得到信息后再传递给NS1.com，速度恢复的时候也是同样的操作。为什么要夹在一个AWS Lambda呢？这是因为监控宝发送的格式是固定的，并不能直接接入到NS1.com。

<!-- more -->
