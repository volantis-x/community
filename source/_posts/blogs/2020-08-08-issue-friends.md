---
title: 从 Issue 中加载友链
date: 2020-08-08
updated: 2020-08-08
author:
  name: Mr. X
  avatar: https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png
  url: https://xaoxuu.com
---

GitHub API 频繁失效， Gitee API 挺稳定的，下面是从 [Gitee Issues](https://gitee.com/xaoxuu/friends/issues/) 中读取的数据：

<div class="btns circle grid5 friends"><div class="loading"><i class="fa fa-cog fa-2x fa-spin"></i></div></div>

{% raw %}
<script>
function loadFriends() {
  $.get("https://gitee.com/api/v5/repos/xaoxuu/friends/issues?state=open&sort=updated&direction=desc&page=1&per_page=100",function(data, status) {
    if (data.length > 0) {
      for (i = 0; i < data.length; i++) {
        let imgTag = '<img src="' + data[i].avatar_url + '>';
        let aTag = '<a class="button" target="_blank" rel="external nofollow noopener noreferrer" href="' + data[i].title + '">' + '<img no-lazy src="' + data[i].user.avatar_url + '">' + data[i].body + '</a>';
        $('.btns.friends').append(aTag);
      }
    }
    $('.btns.friends .loading').remove();
  });
}
document.addEventListener('DOMContentLoaded', function () {
  loadFriends();
});
loadFriends();
</script>
{% endraw %}
