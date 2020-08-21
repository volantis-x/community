---
title: 示例博客
cover: true
meta:
  header: []
sidebar: [docs-latest, toc, repos]

---

<center>
{% span large red, 示 %}
{% span large yellow, 例 %}
{% span large green, 博 %}
{% span large blue, 客 %}
</center>
<br>

## 团队成员

{% sitegroup %}

{% site https://xaoxuu.com, https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, xaoxuu, 简约风格 %}

{% site https://inkss.cn, https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, inkss,  %}

{% site https://blog.mhuig.top, https://i.loli.net/2020/08/21/lF7awfkDuV4eG9t.jpg, MHuiG,  %}

{% site https://colsrch.top, https://i.loli.net/2020/08/21/wU7tFN9gEucSHIA.jpg, Colsrch,  %}

{% site https://linhk1606.github.io, https://i.loli.net/2020/08/21/xvu9gfJQO2CpbiA.jpg, Linhk1606,  %}

{% endsitegroup %}


<br>

<div class="examples"><div class="loading"><i class="fa fa-cog fa-2x fa-spin"></i><p>正在加载</p></div></div>

<br>


<!-- more -->

<br><br>

{% timeline 如何添加自己的博客链接 %}

{% timenode 第一步：新建 [Issue](https://github.com/volantis-x/examples/issues/) 按照格式填写并提交 %}

标题填完整链接，内容可以根据需要选填：

{% image https://i.loli.net/2020/08/11/2uXQ4e9VPpD7R3q.jpg, 450px %}

为了提高图片加载速度，建议优化头像：
1. 打开 [压缩图](https://www.yasuotu.com/) 上传自己的头像，将图片尺寸调整到 `192px` 后下载。
2. 将压缩后的图片上传到 [sm.ms 图床](https://sm.ms/) 并使用此图片链接作为头像。

{% endtimenode %}

{% timenode 第二步：刷新 %}

回来刷新即可生效。

{% endtimenode %}

{% endtimeline %}

{% p h2, 如何更新自己的博客链接 %}

- 如果是自己创建的 issue ，可以自己修改。
- 如果是管理员创建的，请自己重新创建一份，然后让管理员删掉旧的。


{% raw %}
<script>
let issue_cfg = new Object();
issue_cfg.group = ['latest', 'v3', 'v2', 'v1', 'v0'];
issue_cfg.repo = 'https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100';
function parseData(data) {
  let groups = new Object();
  if (data.length > 0) {
    for (i = 0; i < data.length; i++) {
      let issue = data[i];
      let lbs = issue.labels;
      if (lbs.length > 0) {
        for (j = 0; j < lbs.length; j++) {
          let lb = lbs[j].name;
          if (issue_cfg.group.includes(lb)) {
            let obj = groups[lb];
            if (obj == undefined) {
              obj = new Object();
              obj.name = lbs[j].description;
              obj.items = [issue];
              groups[lb] = obj;
            } else {
              obj.items.push(issue);
              groups[lb] = obj;
            }
          }
        }
      }
    }
  }
  return groups;
}
function loadExamples() {
  $.get(issue_cfg.repo, function(data, status) {
    let dt = parseData(data);
    $('div.examples .loading').remove();
    for (i = 0; i < issue_cfg.group.length; i++) {
      let lb = issue_cfg.group[i];
      let groupData = dt[lb];
      if (groupData == undefined) {
        continue;
      }
      $('div.examples').append('<h2>' + groupData.name + '</h2>');
      $('div.examples').append('<div class="site-card-group ' + lb + '"></div>');
      // layout items
      for (j = 0; j < groupData.items.length; j++) {
        let issue = groupData.items[j];
        // get title
        let title = issue.body.match(/title:[^\n]*\n/);
        if (title && title.length > 0) {
          title = title[0].replace(/(title:[\s]*|[\r\n]*)/g,'');
        }
        // get screenshot
        let screenshot = issue.body.match(/screenshot:[^\n]*\n/);
        if (screenshot && screenshot.length > 0) {
          screenshot = screenshot[0].replace(/(screenshot:[\s]*|[\r\n]*)/g,'');
        }
        // get desc
        let desc = issue.body.match(/description:[^\n]*\n/);
        if (desc && desc.length > 0) {
          desc = desc[0].replace(/(description:[\s]*|[\r\n]*)/g,'');
        }

        let imgTag = '';
        if (screenshot.length > 0) {
          imgTag = '<div class="img"><img no-lazy src="' + screenshot + '"></div>';
        } else {
          imgTag = '<div class="img"><img no-lazy src="https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/placeholder/c617bfd2497fcea598e621413e315c368f8d8e.svg"></div>';
        }
        let infoTag = "<div class='info'><span class='title'>" + title + "</span></div><span class='desc'>" + desc + "</span>";
        let cardTag = "<div class='site-card'><a target='_blank' href='" + issue.title + "'>" + imgTag + infoTag + "</a></div>";
        $('div.examples .site-card-group.' + lb).append(cardTag);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  loadExamples();
});
loadExamples();
</script>
{% endraw %}
