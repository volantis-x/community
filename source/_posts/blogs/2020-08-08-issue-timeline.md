---
title: 从 Issue 中加载时间线
date: 2020-08-08
updated: 2020-08-08
author:
  name: Mr. X
  avatar: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png
  url: https://xaoxuu.com
---

GitHub API 频繁失效， Gitee API 挺稳定的，下面是从 [Gitee Issues](https://gitee.com/xaoxuu/timeline/issues/) 中读取的数据：

<div class="timeline gitee"><div class="loading"><i class="fa fa-cog fa-2x fa-spin"></i></div></div>

{% raw %}
<script>

function loadTimeline() {
  $.get("https://gitee.com/api/v5/repos/xaoxuu/timeline/issues?state=open&labels=active&sort=created&direction=desc&page=1&per_page=50",function(data, status) {
    if (data.length > 0) {
      for (i = 0; i < data.length; i++) {
        let a = '&nbsp;&nbsp;<a class="comments" target="_blank" href="' + data[i].html_url + '"><i class="fa fa-comment-dots fa-fw"></i>' + data[i].comments + '</a>';
        let meta = '<div class="meta"><p></p><p>' + data[i].title + a + '</p><p></p></div>';
        let body = '<div class="body"><p>' + data[i].body + '</p></div>';
        let tag = '<div class="timenode">' + meta + body + '</div>';
        $('.timeline.gitee').append(tag);
      }
    }
    $('.timeline.gitee .loading').remove();
  });
}
document.addEventListener('DOMContentLoaded', function () {
  loadTimeline()
});
window.onload = function () {
loadTimeline()
}
</script>
{% endraw %}
