# Git 常用命令

- ## `git init`

  初始化一个空的git仓库

- ## `git clone`

   克隆一个**`git`**仓库到本地

- ## `git add`

   将某个文件添加到缓存
  ![gitadd](./images/git/git1.png 'git add')

  "AM"状态的意思是，这个文件在我们将它添加到缓存之后又有改动。改动后我们再执行 `git add` 命令将其添加到缓存中。

  **`git add `** 也可以添加多个文件
  ![gitadd](./images/git/git4.png 'git add')

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


- ## `git mv `

![git mv](./images/git/git3.png 'git mv')

修改某个文件的文件名

- ## `git log` 
   
   git log命令显示从最近到最远的提交日志

   ![git log](./images/git/git5.png 'git log')

   `--pretty=oneline ` 参数显示 commit id(版本号)

   ![git log](./images/git/git6.png 'git log')
- ## `git reset --hard HEAD^`
   在`Git`中，用`HEAD`表示当前版本 ,上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个^比较容易数不过来，所以写成 `HEAD~100`。

  **也可以这样**

  `git reset --hard 14f51fe`

  `hard` 后面版本号没必要写全，前几位就可以了， `Git` 会自动去找。

- ## `git reflog` 

    用来记录你的每一次命令

    ![git log](./images/git/git7.png 'git reflog')

- ## `git checkout -- `
    ![git log](./images/git/git8.png 'git reflog')

    在工作区的修改全部撤销  **`只是工作区的修改不包括缓存部分`**


- ## `git rm`

    删除某个文件

- ## `git branch`
    查看分支

- ## `git branch <name>`
    新建分支

- ## `git checkout <name>`

    切换分支

- ## `git checkout -b <name>`

    切换并创建分支

- ## `git merge <name>`

    合并某分支到当前分支

- ## `git branch -d <name>`

    删除分支

操作记录如下图：

![git log](./images/git/git9.png 'git reflog')


- ## 分支管理策略
 

    ![git log](./images/git/git10.png 'git reflog')

    上图可以看出操作，我们首先使用`git checkout develop`切换`develop`分支,修改文件，提交。在切回`master`分支，合并`develop`代码。

    ```
      git merge --no-ff -m "merge with no-ff" develop
    ```

    `--no-ff` 参数，表示禁用`Fast forward`模式，`Git`就会在`merge`时生成一个新的`commit`，这样，从分支历史上就可以看出分支信息。

    `-m` 表示把`commit`描述写进去。

    `git log --graph --pretty=oneline --abbrev-commit`查看分支记录。