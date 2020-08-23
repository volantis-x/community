---
title: 给 Hexo Volantis 主题添加图片轮播功能
date: 2020-08-21
updated: 2020-08-22
author:
  name: heson
  avatar: https://cdn.jsdelivr.net/gh/heson525/pic@master/pic/avatar03.png
  utl: https://www.heson10.com
link: https://www.heson10.com/posts/19736.html
description: 很多网站首页都会有图片轮播效果，给网站的首页加上图片轮播的效果，可以很好的起到广告的作用也可以起到推荐优秀内容的作用。来吧，下面是给 Volantis 主题加上首页图片轮播的效果。

---

{%note , 很多网站首页都会有图片轮播效果，给网站的首页加上图片轮播的效果，可以很好的起到广告的作用也可以起到推荐优秀内容的作用。来吧，下面是给Volantis主题加上首页图片轮播的效果。%}

## 效果图

以下是1.0版本的效果图，后期~~说不定~~会改：

![image-20200821124534122](https://picup.heson10.com/img/image-20200821124534122.png)

## 整体思路

1.寻找自己喜欢的图片轮播插件；

2.在首页模板`archive.ejs`中添加图片轮播代码；

3.引用所需的jq库（主题自带）、js和css；

4.修改配置文件，增加轮播开关和图片替换等功能。

## 教程开始

### 下载JQuery插件

我已经上传到网盘：

```shell
链接：https://pan.baidu.com/s/1D0ytw6w33uRCyXDX-4ubPA
提取码：q4hg
```

### 增加轮播框架

- 在`themes\volantis\layout\_widget`中新建`main_banner.ejs`文件
- 在main_banner.ejs文件中写入以下代码：

```ejs
<div class="heson_row">
    <div class="main_banner shadow floatable blur">
        <div class="banners">
            <!--加上左右箭头》》-->
            <div class="click_left">
                <img class="get_height" onclick="banner_left_right('left')" src="../img/banner_left.png">
            </div>
            <div class="click_right">
                <img onclick="banner_left_right('right')" src="../img/banner_right.png">
            </div>
            <!--《《加上左右箭头-->
            <div class="number">
                <div class="numbers">
                </div>
                <div style="clear: both;"></div>
            </div>
            <div class="banner_img">
                <!--主题config中配置参数-->
                <%- theme.plugins.main_banner.pics %>
            </div>
            <script type="text/javascript">
                var speed = <%= theme.plugins.main_banner.speed %>;//配置中调用切换等待时间
                var banner_max = <%= theme.plugins.main_banner.banner_max %>;//配置中调用banner总数
            </script>
        </div>
    </div>
    <div class="hot_post">
        <!--热门文章含图片-->
        <div class="index-banner">
            <a href="<%- theme.plugins.hot_post.post_one %>" target="_blank">
                <img src="<%- theme.plugins.hot_post.pic_one %>" style="width: 100%;">
            </a>
        </div>
        <div class="index-banner forpadding">
            <a href="<%- theme.plugins.hot_post.post_two %>" target="_blank">
                <img src="<%- theme.plugins.hot_post.pic_two %>" style="width: 100%;">
            </a>
        </div>
    </div>
</div>
```

### 增加CSS样式和所需图片

- 把前面网盘里面文件下载，找到img里的箭头图标，放进`themes\volantis\source\img`
 ![image-20200821203336667](https://picup.heson10.com/img/image-20200821203336667.png)

- 在themes\volantis\source\css\style.css中，增加代码：

```stylus
if hexo-config('plugins.main_banner.enable')
    @import '_other/main_banner'
```

- 在`themes\volantis\source\css\_other`文件夹**（没有请新建）**里增加文件`main_banner.styl`，并在其添加如下代码：

```stylus
.main_banner
  width:66%
  float:left
  img
   border-radius: 8px;
  height:100%
  @media screen and (max-width: 800px)
   width:100%
   height:40vw
   float:left

.hot_post
  width:33%
  height:100%
  float:left
  padding:0 0px 0 1vw
  @media screen and (max-width: 800px)
   width:100%
   height:50vw
   float:left
   margin-top:1vw
   padding:0
  .forpadding
    padding-top:0.5vw
  .index-banner
    position: relative;
    height:50%

.heson_row
  background-color: none
  width:100%
  height:20vw
  max-height:400px
  margin-top:20px;
  @media screen and (max-width: 800px)
    width:100%
	height:65vw
  @media screen and (max-width: $device-2k)
    width:100%
	height:25vw

.banners
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: rgba(200,200,200,0.5)
  @media screen and (max-width: 600px)
    width:100%
    height:40vw
    float:left

.hot_post img
{
   height:100%
   border-radius:8px

}

.banners:hover .click_left
{
	display: block;
}

.banners:hover .click_right
{
	display: block;
}

.click_left
{
	width: 1vw;
	position: absolute;
	z-index: 10;
	left: 2vw;
	top:2.5vw;
	display: none;
}

.click_right
{
	width: 1vw;
	position: absolute;
	z-index: 10;
	right: 2vw;
	top:2.5vw;
	display: none;
}

.click_left img,.click_right img
{
	width: 100%;
	height: 100%;
}

.number
{
	width: 100%;
	height: 1vw;
	line-height: 1vw;
	position: absolute;
	z-index: 10;
	text-align: center;
	bottom: 1.5vw;
}

.numbers
{
	display: inline-block;
}

.numbers span
{
	color: white;
	font-size: 0.7vw;
	display: block;
	float: left;
	width: 1vw;
	height: 1vw;
	line-height: 1vw;
	text-align: center;
	border-radius: 100vw;
	margin: 0 0.5vw;
	padding: 0vw;
	border: 0.1vw solid white;
}

.numbers span:hover
{
	cursor: pointer;
}

.banner_img
{
	width: 100%;
	height: 100%;
}

.banner_img img
{
	width: 100%;
	height: 100%;
	position: absolute;
	break-inside: 1;
}

.l_main .post-list {
    margin:0 auto!important;
    float: left;
}
```

### 增加JS文件

- 在`themes\volantis\layout\layout.ejs`中`</body>`上加上代码:

```ejs
  <% if (theme.plugins.main_banner.enable == true) { %>
    <script src="../js/main_banner.js"></script>
  <% } %>
```

- 在`themes\volantis\source\js`中增加`main_banner.js`，其中代码为：

```javascript
/*图片轮播*/
var banners = 1;//banner显示的第一幅画面1~banner_max范围内任意选择
var timer;//计时器对象

//img标签后直接调用运行
function loads() {

	var img_num = banner_max
	$(".banner_img" + banners).fadeTo(100, 1);//显示设置的第一张banner

	var numbers_span = "";
	for (var i = 1; i <= img_num; ++i) {
		numbers_span += '<span class="num' + i + '" onclick="manual_replace_banner(' + i + ')">' + i + '</span>'; //循环赋值到字符串
	}

	$(".numbers").html(numbers_span);//设置对应banner的数字

	//自适应修改行高
	var banners_height = $(".banners").height();
	$(".banners").css("line-height", banners_height + "px");


}

//窗口事件修改行高

$(window).resize(function () {

	var banners_height = $(".banners").height();
	$(".banners").css("line-height", banners_height + "px");

});



//页面文件加载完毕后自动调用
$(document).ready(function () {

	banner_number();//banner页数高亮显示

	timer = setInterval(auto_replace_banner, speed * 1000);//banner切换计时器

});



//点击左右按钮更换banner
function banner_left_right(sj) {
	var sjs;

	if (sj == "left") {
		if (banners == 1) {
			sjs = banner_max;
		}
		else {
			sjs = banners - 1;
		}
	}
	else {
		if (banners == banner_max) {
			sjs = 1;
		}
		else {
			sjs = banners + 1;
		}
	}

	manual_replace_banner(sjs);
}



//点击数字切换
function manual_replace_banner(sj) {
	var bannerz = banners;

	banners = sj;

	if (banners == bannerz) {
		return;
	}

	clearInterval(timer);//停止计时器

	fade_in_out(bannerz, banners);//调用切换函数

	timer = setInterval(auto_replace_banner, speed * 1000);//banner切换计时器重新启动
}



//自动更换banner
function auto_replace_banner() {
	var bannerz = banners;

	if (banners == banner_max) {
		banners = 1;
	}
	else {
		banners += 1;
	}

	fade_in_out(bannerz, banners);//调用切换函数
}



//淡入淡出效果方法
function fade_in_out(bannerz, banners) {
	var out_id = ".banner_img" + bannerz;//淡出标签的ID名
	var banner_out = $(out_id);//获取淡出对象

	var in_id = ".banner_img" + banners;//淡入标签的ID名
	var bannet_in = $(in_id);//获取淡入对象

	banner_out.fadeTo(600, 0);//JQuery方法淡出到指定透明度,参数1为速度，参数2为透明度
	bannet_in.fadeTo(500, 1);//JQuery方法淡入,参数1为速度，参数2为透明度

	banner_number();//调用数字颜色更换
}



//banner数字显示
function banner_number() {
	for (var i = 1; i <= banner_max; i++) {
		var num_id = ".num" + i;
		var num_object = $(num_id);
		if (banners == i) {
			num_object.css("color", "black");
			num_object.css("backgroundColor", "white");
		}
		else {
			num_object.css("color", "white");
			num_object.css("backgroundColor", "rgba(0,0,0,0)");
		}
	}
}


//banner链接跳转
function link(url, mode = true) {
	if (mode == true) {
		window.open(url);
	}
	else {
		window.location.href = url;
	}
}

loads();
```



### 修改主题配置文件

在plugins:下增加如下代码：

```yaml
  main_banner:
    enable: true    # 开启图片轮播
    banner_max: 3   #图片数量
    speed: 2        #切换秒数
    pics:   # 在此更换图片   <img class="banner_img（注意这里填1、2、3、4、5）" src="图片地址" onclick="link("跳转地址",true（代表新窗口打开）)" style="opacity: 1;"(第一个填1，后面填0)>
       '
       <img class="banner_img1" src="https://cdn.jsdelivr.net/gh/heson10/pic@master/img/Texture-1.png" onclick="link("https://www.heson10.com",true)" style="opacity: 1;">
			 <img class="banner_img2" src="https://cdn.jsdelivr.net/gh/heson10/pic@master/img/Texture-2.png" onclick="link("https://www.heson10.com",false)" style="opacity: 0;">
       <img class="banner_img3" src="https://cdn.jsdelivr.net/gh/heson10/pic@master/img/Texture-3.png" onclick="link("https://www.heson10.com",true)" style="opacity: 0;">
       '
  ########### 热门帖子 ##############
  hot_post:
    ###### 热门1 #####
    pic_one: https://picup.heson10.com/img/spring-boot-learning.png
    post_one: https://www.heson10.com
    ###### 热门2 #####
    pic_two: https://picup.heson10.com/img/spring-cloud-learning.png  
    post_two: https://www.heson10.com   
```

### 最终效果

![lunboxiaoguo](https://picup.heson10.com/img/lunboxiaoguo.png)
