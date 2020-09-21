---
robots: noindex,nofollow
sitemap: false
layout: page
title: 渲染公式
group: docs-v3
order: 404
short_title: 4-4 渲染公式
meta:
  header: [centertitle]
sidebar: [docs-v3, toc, repos]
snackbar: oldversion
---
 


## MathJax

默认是不渲染的，如果文章内有公式，需要在 front-matter 中设置开启。

```md example.md:
---
title: 渲染公式（MathJax）
date: 2020-02-23
mathjax: true # false: 不渲染, true: 渲染, internal: 只在文章内部渲染，文章列表中不渲染
---

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


{% folding 示例效果 %}

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

{% noteblock link %}

如果公式仍无法正确渲染可以阅读 [@MicDZ](https://www.micdz.cn) 的这篇文章：
{% link 在Material-X上使用KaTeX, https://www.micdz.cn/article/katex-on-volantis/, https://www.micdz.cn/img/h.jpeg %}

{% endnoteblock %}
