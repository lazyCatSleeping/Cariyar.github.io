## 开发日记
### 2023年7月11日
1. 创建项目
   1. 创建`components`文件夹
      1. 创建`BlogContent.vue`
      2. 创建`BlogHeader.vue`
      3. 创建`BlogFooter.vue`
      4. `content`文件夹
         1. `NavList.vue`
         2. `main`文件夹
            1. `Index.vue`
2. 添加路由
   1. `yarn add vue-router`
3. 添加element-plus
   1. `yarn add element-plus`
   2. 按需引入组件
      1. 安装`yarn add unplugin-element-plus`
      2. 在`vue.config.js`中或按要求插入代码
```js
configureWebpack: {
	plugins:[
		require('unplugin-element-plus/webpack')({
			// options
		})
	]
}
```
### 2023年7月13日
1. 引入axios
   1. 安装
      1. `npm install axios`

### 2023年7月14日
[手把手教你用git上传项目到GitHub](https://zhuanlan.zhihu.com/p/193140870)
#### git push报错
```shell
$ git push -u origin master
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
SHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s.
Please contact your system administrator.
Add correct host key in /c/Users/momo/.ssh/known_hosts to get rid of this messag
e.
Offending RSA key in /c/Users/momo/.ssh/known_hosts:1
Host key for github.com has changed and you have requested strict checking.
Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

```
原因：缺失文件
解决方案：运行以下代码，自动创建所缺失的文件
```shell
$ ssh-keygen -R github.com
# Host github.com found: line 1
/c/Users/momo/.ssh/known_hosts updated.
Original contents retained as /c/Users/momo/.ssh/known_hosts.old
```
#### 修改LF和CRLF相关配置
```shell
$ git add README.md
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
```
原因：git默认为`LF(\n)`换行模式，windows默认为`CRLF(\r\n)`换行模式
解决方案： git设置`git config --global core.autocrlf input`，令提交时转换为LF，检出时不转换
   1. https://blog.csdn.net/wjx_jasin/article/details/115620570
告诉 Git 在提交时将 CRLF 转换为 LF，而在检出时将 LF 保持不变。

### 2023年7月15日
1. 完成头部导航栏
2. 引入VueX