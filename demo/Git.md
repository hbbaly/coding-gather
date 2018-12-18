# Git 常用命令

- ## `git init`

  初始化一个空的git仓库

- ## `git clone`

   克隆一个**`git`**仓库到本地

- ## `git add`

   将某个文件添加到缓存
  ![gitadd](./images/git/git1.png 'git add')

  "AM"状态的意思是，这个文件在我们将它添加到缓存之后又有改动。改动后我们再执行 `git add` 命令将其添加到缓存中。

- ## `git status`

  `git status` 以查看在你上次提交之后是否有修改。 -s 参数，以获得简短的结果输出。如果没加该参数会详细输出内容。

- ## ` git diff `

  `git diff` 来查看执行 git status 的结果的详细信息。
  ![git diff](./images/git/git2.png 'git diff')

  `git status` 显示你上次提交更新后的更改或者写入缓存的改动， 而 `git diff` 一行一行地显示这些改动具体是啥。

- ## `git commit -m `
   
   将缓存区的内容添加到仓库中。

   `Git` 为你的每一个提交都记录你的名字与电子邮箱地址，所以第一步需要配置用户名和邮箱地址。

   ### 配置用户名
    `git config --global user.name 'hbbaly'`
  ### 配置邮箱
    `git config --global user.email  '1422699902@qq.com'`
  
  `-m `