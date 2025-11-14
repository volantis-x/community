---
layout: docs
title: 不支持 pjax 的标签插件
sidebar: [docs-v7, toc]
---

这里存放不支持 pjax 的标签插件

如果没有演示效果，多刷新几次即可。

## pandown

```md 本插件最后更新于 <u>5.0</u> 版本
{% pandown 网盘类型::网盘链接::提取码(可为空)::文件名 %}
```

### 演示效果

{% pandown baidu::https://example.com::1234::百度网盘 %}
{% pandown tx::https://example.com::1234::腾讯微云 %}
{% pandown onedrive::https://example.com::1234::onedrive %}
{% pandown hc::https://example.com::1234::和彩云 %}
{% pandown ty::https://example.com::1234::天翼云 %}
{% pandown aliyun::https://example.com::1234::阿里网盘 %}
{% pandown 115::https://example.com::1234::115网盘 %}
{% pandown jg::https://example.com::1234::坚果云 %}
{% pandown 360::https://example.com::1234::360安全云盘 %}
{% pandown 123::https://example.com::1234::123网盘 %}
{% pandown qn::https://example.com::1234::七牛云 %}
{% pandown github::https://example.com::::Github %}
{% pandown lz::https://example.com::1234::蓝奏云 %}

### 上述示例的源码

```md example:
{% pandown baidu::https://example.com::1234::百度网盘 %}
{% pandown tx::https://example.com::1234::腾讯微云 %}
{% pandown onedrive::https://example.com::1234::onedrive %}
{% pandown hc::https://example.com::1234::和彩云 %}
{% pandown ty::https://example.com::1234::天翼云 %}
{% pandown aliyun::https://example.com::1234::阿里网盘 %}
{% pandown 115::https://example.com::1234::115网盘 %}
{% pandown jg::https://example.com::1234::坚果云 %}
{% pandown 360::https://example.com::1234::360安全云盘 %}
{% pandown 123::https://example.com::1234::123网盘 %}
{% pandown qn::https://example.com::1234::七牛云 %}
{% pandown github::https://example.com::::Github %}
{% pandown lz::https://example.com::1234::蓝奏云 %}
```

### 可以支持的参数

#### 网盘类型

```md
baidu, tx, onedrive, hc, ty, aliyun, 115, jg, 360, 123, qn, github, lz
```

如果里的主题版本不支持或有问题可查看如下文档
{% link 原版文档::https://www.yt-blog.top/docs/vls-pandown-tags %}
