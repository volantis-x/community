---
layout: docs
title: 表情速查
sidebar: [docs-v6, toc]
---


## Blobcat

<table id="Blobcat">
<thead>
<tr><th>表情</th><th>索引</th></tr>
</thead>
<tbody></tbody>
</table>

## Aru

<table id="Aru">
<thead>
<tr><th>表情</th><th>索引</th></tr>
</thead>
<tbody></tbody>
</table>

## QQ

<table id="QQ">
<thead>
<tr><th>表情</th><th>索引</th></tr>
</thead>
<tbody></tbody>
</table>

## Tieba

<table id="Tieba">
<thead>
<tr><th>表情</th><th>索引</th></tr>
</thead>
<tbody></tbody>
</table>

## Twemoji

<table id="Twemoji">
<thead>
<tr><th>表情</th><th>索引</th></tr>
</thead>
<tbody></tbody>
</table>


## Weibo

<table id="Weibo">
<thead>
<tr><th>表情</th><th>索引</th></tr>
</thead>
<tbody></tbody>
</table>


<script>
function show_emoji(url,id){
fetch(url)
.then(res => res.json())
.then(data => {
const tbody = document.querySelector('#'+id+' tbody');
data.items.forEach((it) => {
const tr = document.createElement('tr');
tr.innerHTML = `<td><img style="height: 1.75em" no-lazy src="${it.val}" alt="${it.key}"></td><td>${it.key}</td>`;
tbody.appendChild(tr);
});
}).catch(err => console.error('加载失败:', err));
};
var url1 = 'https://gcore.jsdelivr.net/gh/cdn-x/emoticons/artalk/blobcat.json';
var url2 = 'https://gcore.jsdelivr.net/gh/cdn-x/emoticons/artalk/aru.json';
var url3 = 'https://gcore.jsdelivr.net/gh/cdn-x/emoticons/artalk/qq.json';
var url4 = 'https://gcore.jsdelivr.net/gh/cdn-x/emoticons/artalk/tieba.json';
var url5 = 'https://gcore.jsdelivr.net/gh/cdn-x/emoticons/artalk/twemoji.json';
var url6 = 'https://gcore.jsdelivr.net/gh/cdn-x/emoticons/artalk/weibo.json';

show_emoji(url1,"Blobcat");
show_emoji(url2,"Aru");
show_emoji(url3,"QQ");
show_emoji(url4,"Tieba");
show_emoji(url5,"Twemoji");
show_emoji(url6,"Weibo");
</script>
