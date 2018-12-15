# vue-code-standard  (仅供参考)
## 文件命名

<!-- -	 **目录名**: 小驼峰
-	 **js文件名**: 全小写(可用.,-)
-	 **组件名**: 大驼峰(页面也算组件)
-	 **路由**: 全小写
-	 **公共组件**: XXX-XXX -->

### 文件夹命名规则
- **由名词组成**
- **单词只能有一个**
- **命名采用小写**
  
### 文件名称规则
- **vue文件代表着页面的名字**
- **放在页面文件夹之下**
- **文件名尽量是名词**
- **以大写开头的驼峰命名，开头的单词是模块的名字，例: OrderDetail,OrderList**
- **常用结尾词有（Detail、Edit、List、Info、Report）**
- **以View结尾的代表是页面或页面子组件 （CarListView,CarInfoView）**
  
## Vue页面结构

```
  <template>
    <div>

      <!--必须在div中编写页面-->

    </div>
  </template>
  <script>
    export default {
      components : {

      },
      data () {
        return {

        }
      },
	    mounted() {
	    
      },
      methods: {

      },
    }
  </script>
  <!--声明语言，并且组件内必须添加scoped-->
  <style lang="less" scoped>
  </style>
```
  ### **方法声明顺序**
```
  components

  - name    首字母大写，大驼峰命名规则
  - props
  - components
  - data
  - filter
  - computed
  - watch
  - created
  - activited
  - mounted
  - beforeRouterEnter
  - beforeRouteUpdate
  - beforeRouterLeave
  - methods
  ```
  ## 页面/组件结构规则
  ### **页面**
  ```
    <div class="page page-XXX">
	    <header class="header">
	    </header>
	    <div class="container">
	    </div>
	    <footer class="footer"></footer>
    </div>
  ```
  每个页面最外层都会有一个page、page-XXX类名
  每个页面结构类似


  |部分|代码|
  |---|:--:|
  |头部|`<header class="header"></header>`|
  |身体 |```<div class="container"></div>```|
  |底部 |```<footer class="footer"></footer>```|

  ### **组件**
  ```
    <div class="module-name">
	    <div class="__hd">
	    </div>
	    <div class="__bd">
	    </div>
	    <div class="__ft">
	    </div>
    </div>
  ```

  每个组件结构类似

  
  |部分|代码|
  |---|:--:|
  |头部|`<div class="__hd"></div>`|
  |身体 |`<div class="__bd"></div>`|
  |底部 |`<div class="__ft"></div>`|

 ### **组件分类**
  - 系统级组件
  
    这类组件俱备不同项目之间通用，通常包括一些基础级通用形组件。
  - 页面级组件

    通常只在一个项目中实现通用，不具备项目级的移植性。
  
  - 普通功能级组件
    某个页面功能模块，不具备复用性，但是通过他可以实现业务功能的分离，降低耦合，以降低维护和分治目的。

### **创建组件注意事项**
  - 组件保证功能单一，不要一个组件兼顾多个功能(避免后期调整时候冗杂，增加代码耦合度)
  - 通用组件传值，尽可能单个传递,多传几个。
  - 每个组件尽可能预留一个slot，为后期拓展预留。





### `vue`组件命名

系统级、页面级通用组件放置于 `src` 下 `components` 目录。

局部功能组件，存放于页面 `vue` 页面同级目录下的 `components` 目录下

`view`文件夹下是由以页面为单位的文件夹或模块文件夹组成，放在 `src` 目录下，与`components` 和 `assets` 同级。

**组件命名采用 大驼峰**