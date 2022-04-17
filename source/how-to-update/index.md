---
layout: page
title: 如何正确地更新主题
cover: true
sidebar: []
plugins:
  - indent
---

{% link 如何正确地更新主题::https://github.com/volantis-x/hexo-theme-volantis/issues/459::https://unpkg.com/volantis-static@0.0.1649552113628/media/twemoji/assets/svg/1fa82.svg %}

## 稳定版本

### 如果您以内容创作为主，推荐使用稳定版本：

```bash
npm i hexo-theme-volantis
```

更新时，把 `package.json` 中的版本号改为 `*` 再执行 `npm i` 就可以了。

### 如果您需要对主题的源文件进行修改，推荐 fork

引用并修改自己 fork 的那份，当主题有更新时，合并到自己的分支。


### 如果您不 fork 而直接修改主题源码，是没办法获得更新的！

## Fork 篇

*本文以 GitKraken 软件的使用展开*，相关链接：[GitKraken: Free Git GUI Client - Windows, Mac, Linux](https://www.gitkraken.com/)

如果您按照主题文章中的 [设置子模块](/v5/advanced-settings/#设置子模块) 已经克隆了一份主题并添加到自己的博客仓库中，那么本篇文章将极大的帮助到您，如果您还没有如此操作，不妨尝试一番。这里是本文的仓库环境：博客仓库 *Hexo-Blog* 、主题仓库 *volantis* 。

### 一、GitKraken 的简单操作

在 GitKraken 的软件界面中，位于正中间面积最大的区域是仓库的历史提交信息，右边为选中提交记录的详情，左边则放有一些仓库相关的信息，将目光集中到左边的  SUBMODULES 选项栏，如果您已经正常的将 Fork 的主题仓库添加到博客仓库中，您便可以在这里看到。展开 SUBMODULES 选项卡，右键并选择 *Open this submodlue* 打开子模块：

<details><summary>博客仓库</summary>

![image](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91117158-83595300-e6c0-11ea-85b0-3ac12afcf57b.png)

</details>

<details><summary>打开子模块</summary>

![Snipaste_2020-08-25_09-40-13](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91114771-45a5fb80-e6bb-11ea-8a0f-f1bc6c3b6817.png)

</details>

如此进入的仓库为您的主题仓库，可以在当前页面中查看到所有提交的历史记录等等。为了避免一些拗口的称呼所带来的不良影响，这里设定如下：将 Fork 的仓库称为 **主题仓库** ，将 hexo-theme-volantis 仓库称为 **volantis 仓库**。

<details><summary>主题仓库</summary>

![image](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91116761-b0f1cc80-e6bf-11ea-9eb7-89de7dbedb79.png)

</details>

在图中，当前 Fork 的主题仓库所处的分支为 **master-theme** ，图中右侧展示的是个人主题仓库的最后一次提交信息。中间区域，较上部分在写有 **master** 标记的为 volantis 仓库的分支（您可以通过右侧的 Logo 图片进行区别）。显而易见的，当前主题仓库已经落后 Volantis 仓库，下面我们便需要合并代码到自己的主题仓库中。如果您打开后的界面并没有看到 Volantis 的仓库信息，意味着当前没有添加 Volantis 仓库为远端，您可以按照如下操作添加：

<details><summary>添加 Volantis 远端仓库信息</summary>

在左侧面板的 *REMOTE* 选项卡处，点击加号，进入如下图所示界面，选中 **volantis-x/hexo-theme-volantis** 后添加即可。

![Snipaste_2020-08-25_09-42-16](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91115836-ad5d4600-e6bd-11ea-9084-40fe01dafed1.png)


</details>


### 二、GitKraken 的合并操作

#### 1. Merge 

在 volantis 仓库的 *master* 分支处右键，选择 *Merge volantis/master into xxxx*，进行合并操作。至于为什么不选择变基（Rebase），个人认为保留仓库的提交历史比修改历史更好。通常，合并操作会自动完成，但是如若冲突时，会收到如此提醒：*Merge Failed ,There are merge conflicts that need tobe resolved.* 如它所说存在需要解决的冲突，此时右侧选项卡会展示 **Merge conflicted detected** 窗口，已解决的和冲突文件会显示在其中。

点击待解决冲突的窗口，在这个页面中，上半部分为本地和远端的代码，下半部分为合并后的内容。您可以根据实际情况，如回忆修改历史，选择是选中左边本地，还是右边远端，抑或是两边都选择，如果对选择后的结果不满意，您还可以手动修改 Output 窗口中的内容，当一切结束后，点击 *Save* 结束操作。（原则上您必须选择其中的一方，而不是直接修改 Output 的内容）

有时，可能遇到远端删除了某个文件，收到如下提示：*GitKraken was unable to determine whether to keep source/css/_plugins/gitalkstyl, would you like to keep it?* GitKraken 不会主动删除您的文件，不过一般情形下无需保留，*Delete The File* 即可。

最后，在解决完所有冲突文件后，回到仓库列表界面，点击 *Commit and Merge* 完成提交。

<details><summary>A. 合并操作</summary>

![image](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91128121-2bc7e100-e6da-11ea-99c9-16f8521b7d4c.png)

</details>

<details><summary>B. 合并冲突检测</summary>

![image](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91128803-68e0a300-e6db-11ea-9fdb-4ea91a6c6a3c.png)

</details>

<details><summary>C. 选择合适的内容</summary>

![image](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91129077-f4f2ca80-e6db-11ea-9ea8-47b09d4be32c.png)

</details>

<details><summary>D. 提交内容</summary>

![image](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91132519-caa30c00-e6df-11ea-94fa-f31d8279f5a6.png)

</details>

#### 2. Rebase

简言之，Rebase 将你的所有修改（提交）重新放到了公共分支的最后面，当然后果是可能会经常面临是否强制提交，而且不太适合与 Merge  操作共同使用。以下内容摘抄自：[Rebase - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648)

> 多人在同一个分支上协作时，很容易出现冲突。后 Push 的童鞋不得不先 Pull ，在本地合并，然后才能 Push 成功。
>
> 总之看上去很乱，有强迫症的童鞋会问：为什么 Git 的提交历史不能是一条干净的直线？其实是可以做到的！Git 有一种称为 Rebase 的操作，有人把它翻译成“变基”。
>
> Rebase 操作的特点：把分叉的提交历史“整理”成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。
>
> - Rebase 操作可以把本地未push的分叉提交历史整理成直线；
>
> - Rebase 的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

### 三、冲突的产生与避免

冲突一般产生于同一处被不同人修改时，Git 无法自动处理，抛出错误让用户解决。由于主题目前仍处于青少年阶段，更新迭代速度比较快，冲突现象可能会比较明显，下面提供一些思路减少这类情况。

1.首先是配置文件，根据 Hexo 的规则，所有对配置的修改都可以独立出来，无需直接修改主题仓库下的 `config.yml` ，这里可以参阅：[创建主题配置文件](/v5/theme-settings/#创建主题配置文件)。*配置类文件是最不该产生冲突的地方*。

2.样式文件，根据 css 的覆盖规则，使用样式覆盖比直接修改样式来的欢快，例如主题中的光标便是采用的样式覆盖的思路。
 
### 四、代码历史维护

您可以对单个文件进行历史查看操作，以此来对比您所做出的个人修改，最大程度上的避免代码丢失。正所谓熟能生巧，多加操作后主题更新将不再是一件麻烦的事情，末尾愿您一路走来，最终回归创建博客的初心，完结撒花 *★,°*:.☆(￣▽￣)/$:*.°★* 。

<details><summary>历史记录</summary>

![image](https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/how-to-update/91163040-8293e180-e6ff-11ea-971f-27b1959d436d.png)

</details>

