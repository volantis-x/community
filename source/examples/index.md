---
layout: links
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

{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell inkss, https://inkss.cn, https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg %}
{% cell MHuiG, https://blog.mhuig.top/, https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png %}
{% cell Colsrch, https://colsrch.top, https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg %}
{% cell Linhk1606, https://linhk1606.github.io, https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png %}
{% endbtns %}

<br>
<div class="examples"></div>
<br>


<!-- more -->

<br><br>

{% timeline 如何添加自己的博客链接 %}

{% timenode 第一步：新建 [Issue](https://github.com/volantis-x/examples/issues/) 并按照格式填写 %}

标题填完整链接，内容可以根据需要选填：

{% image https://i.loli.net/2020/08/11/2uXQ4e9VPpD7R3q.jpg, 500px %}

为了提高图片加载速度，建议优化头像：
1. 打开 [压缩图](https://www.yasuotu.com/) 上传自己的头像，将图片尺寸调整到 `192px` 后下载。
2. 将压缩后的图片上传到 [sm.ms 图床](https://sm.ms/) 并使用此图片链接作为头像。

{% endtimenode %}

{% timenode 第二步：等待管理员审核 %}

待管理员审核通过，添加了 `active` 标签后，回来刷新即可生效。

{% endtimenode %}

{% endtimeline %}

{% p h2, 如何更新自己的博客链接 %}

- 如果是自己创建的 issue ，可以自己修改。
- 如果是管理员创建的，请自己重新创建一份，然后让管理员删掉旧的。


{% raw %}
<script>
let issue_cfg = new Object();
issue_cfg.group = ['latest', 'v3', 'v2', 'v1', 'v0'];
issue_cfg.repo = 'https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100&labels=active';
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

  $('div.examples').append('<div class="loading"><i class="fa fa-cog fa-2x fa-spin"></i><p>正在加载...</p></div>');

  $.get(issue_cfg.repo, function(data, status) {
    let dt = parseData(data);
    console.log(status);
    $('div.examples .loading').remove();
    for (i = 0; i < issue_cfg.group.length; i++) {
      let lb = issue_cfg.group[i];
      let groupData = dt[lb];
      if (groupData == undefined) {
        continue;
      }
      $('div.examples').append('<h2>' + groupData.name + '</h2>');
      $('div.examples').append('<div class="btns circle grid5 ' + lb + '"></div>');
      // layout items
      for (j = 0; j < groupData.items.length; j++) {
        let issue = groupData.items[j];
        // get name
        let name = issue.body.match(/name:[^\n]*\n/);
        if (name && name.length > 0) {
          name = name[0].replace(/(name:[\s]*|[\r\n]*)/g,'');
        }
        // get avatar
        let avatar = issue.body.match(/avatar:[^\n]*\n/);
        if (avatar && avatar.length > 0) {
          avatar = avatar[0].replace(/(avatar:[\s]*|[\r\n]*)/g,'');
        }

        // get tags
        let tags = issue.body.match(/tags:[^\n]*\n/);
        if (tags && tags.length > 0) {
          tags = tags[0].replace(/(tags:[\s]*|[\r\n]*)/g,'');
          tags = tags.replace(/(\[|\])*/g,'').replace(/,\ */g,',');
          tags = tags.split(',');
          tags = "#" + tags.join(" #");
        }

        // get desc
        let desc = issue.body.match(/desc:[^\n]*\n/);
        if (desc && desc.length > 0) {
          desc = desc[0].replace(/(desc:[\s]*|[\r\n]*)/g,'');
          desc = 'title = "' + desc + '"';
        } else {
          desc = '';
        }

        let imgTag = '';
        if (avatar.length > 0) {
          imgTag = '<img no-lazy src="' + avatar + '">';
        } else {
          imgTag = '<img src="https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/placeholder/c617bfd2497fcea598e621413e315c368f8d8e.svg">';
        }
        let tagsTag = '<p>' + tags + '</p>';
        let aTag = '<a class="button" target="_blank"' + desc + 'href="' + issue.title + '">' + imgTag + name + tagsTag + '</a>';
        $('div.examples .btns.' + lb).append(aTag);
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
