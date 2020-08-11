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

{% timeline 如何添加自己的博客 %}
{% timenode 第一步：优化自己的头像链接 %}
打开 [压缩图](https://www.yasuotu.com/) 上传自己的头像，将图片尺寸调整到 `192px` 后下载。
{% endtimenode %}
{% timenode 第二步：上传到稳定快速的图床 %}
例如：将压缩后的图片上传到 [sm.ms 图床](https://sm.ms/) 并使用此图片链接作为头像。
{% endtimenode %}
{% timenode 第三步：新建 [Issue](https://github.com/volantis-x/examples/issues/) 并按照格式填写 %}
标题填完整链接，内容可以根据需要选填：
{% image https://i.loli.net/2020/08/11/2uXQ4e9VPpD7R3q.jpg, 500px %}
{% endtimenode %}
{% timenode 第四步：管理员审核 %}
待管理员审核通过，添加了 `active` 标签后，回来刷新即可生效。
{% endtimenode %}
{% endtimeline %}


{% raw %}
<script>
function loadVersion(version) {
  $('div.examples').append('<div class="group ' + version + '"></div>');
  $('div.examples .group.' + version).append('<div class="loading"><i class="fa fa-cog fa-2x fa-spin"></i></div></div>');

  $.get("https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100&labels=active," + version, function(data, status) {
    if (data.length > 0) {
      $('div.examples .group.' + version).append('<div class="btns circle grid5"></div>');
      for (i = 0; i < data.length; i++) {
        // find label name
        if ($('div.examples .group.' + version + ' h2').length == 0) {
          for (j = 0; j < data[i].labels.length; j++) {
            if (data[i].labels[j].name == version) {
              $('div.examples .group.' + version + ' .btns').before('<h2>' + data[i].labels[j].description + '</h2>');
              break;
            }
          }
        }

        // get name
        let name = data[i].body.match(/name:[^\n]*\n/);
        if (name && name.length > 0) {
          name = name[0].replace(/(name:[\s]*|[\r\n]*)/g,'');
        }

        // get avatar
        let avatar = data[i].body.match(/avatar:[^\n]*\n/);
        if (avatar && avatar.length > 0) {
          avatar = avatar[0].replace(/(avatar:[\s]*|[\r\n]*)/g,'');
        }

        // get tags
        let tags = data[i].body.match(/tags:[^\n]*\n/);
        if (tags && tags.length > 0) {
          tags = tags[0].replace(/(tags:[\s]*|[\r\n]*)/g,'');
          tags = tags.replace(/(\[|\])*/g,'').replace(/,\ */g,',');
          tags = tags.split(',');
          tags = "#" + tags.join(" #");
        }

        // get desc
        let desc = data[i].body.match(/desc:[^\n]*\n/);
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
        let aTag = '<a class="button" target="_blank"' + desc + 'href="' + data[i].title + '">' + imgTag + name + tagsTag + '</a>';
        $('div.examples .group.' + version + ' .btns').append(aTag);
      }
    }
    $('div.examples .group.' + version + ' .loading').remove();
  });

}
function loadExamples() {
  loadVersion('latest');
  loadVersion('v2');
  //loadVersion('v1');
}
document.addEventListener('DOMContentLoaded', function () {
  loadExamples();
});
loadExamples();
</script>
{% endraw %}
