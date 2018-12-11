# vue-code-standard  (仅供参考)
## 文件命名

-	 **目录名**: 小驼峰
-	 **js文件名**: 全小写(可用.,-)
-	 **组件名**: 大驼峰(页面也算组件)
-	 **路由**: 全小写
-	 **公共组件**: XXX-XXX

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
  |身体 |`<div class="container"></div>`|
  |底部 |`<footer class="footer"></footer>`|



