---
title: Volantis魔改教程
date: 2023-01-07
updated: 2023-01-17
categories: [开发心得]
author: DearXuan
link: https://blog.dearxuan.com/2023/01/07/Volantis%E9%AD%94%E6%94%B9%E6%95%99%E7%A8%8B/
description: 魔改大合集
headimg:
backup: 
---

暗黑模式动画,看板娘随音乐启停说话,主页特效,KaTeX公式,网页压缩,透明卡片等

部分内容非Volantis主题也适用

{% span center small::<div class="note"><div id="binft_example"></div></div> %}

<script>
!function(){var l,n,i,r;function a(e){for(var t=document.createDocumentFragment(),l=0;l<e;l++){var i=document.createElement("span");i.textContent="_",i.style.color=n?(n=!1,"rgba(0,0,0,0)"):(n=!0,"rgba(0,0,0,1)"),t.appendChild(i)}return t}l=document.getElementById("binft_example"),n=!0,i=["有花堪折直需折,莫待无花空折枝.","闲居少邻并,草径入荒园.鸟宿池边树,僧敲月下门.","侯门一入深如海,从此萧郎是路人.","才见岭头云似盖,已惊岩下雪如尘.","人间万事消磨尽,只有清香似旧时.","日暮酒醒人已远,满天风雨下西楼.","落灯花,棋未收,叹新丰逆旅淹留.","软风吹过窗纱,心期便隔天涯.","迷惑失故路,薄暮无宿栖.","不见白头相携老,只许与君共天明.","晓迎秋露一枝新,不占园中最上春.","荷尽已无擎雨盖,菊残犹有傲霜枝.","春未绿,鬓先丝.人间别久不成悲.","江东子弟多才俊,卷土重来未可知.","莫听穿林打叶声,何妨吟啸且徐行.","在天愿作比翼鸟,在地愿为连理枝."].map(function(e){return e+""}),r={text:"",prefixP:-1,skillI:0,skillP:0,direction:"forward",delay:2,step:1},function e(){var t=i[r.skillI];r.step?r.step--:(r.step=1,r.prefixP<"".length?(0<=r.prefixP&&(r.text+=""[r.prefixP]),r.prefixP++):"forward"===r.direction?r.skillP<t.length?(r.text+=t[r.skillP],r.skillP++):r.delay?r.delay--:(r.direction="backward",r.delay=2):0<r.skillP?(r.text=r.text.slice(0,-1),r.skillP--):(r.skillI=(r.skillI+1)%i.length,r.direction="forward")),l.textContent=r.text,l.appendChild(a(r.prefixP<"".length?Math.min(1,1+r.prefixP):Math.min(1,t.length-r.skillP))),setTimeout(e,75)}()}();
</script>

<!-- more -->
