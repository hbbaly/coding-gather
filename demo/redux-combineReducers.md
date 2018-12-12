## `redux-combineReducers` 基本用法

如果应用中数据庞大，`State` 必然十分庞大，导致 `Reducer` 函数也十分庞大。

我们可以把 `Reducer `函数拆分。不同的函数负责处理不同属性，最终把它们合并成一个大的`Reducer` 即可。

**下图某个应用`reducers`拆分后的结构图**

![example1](./images/react/example1.png 'example1')

```
import {Focused,Blur} from './actionTypies'

const defaultState = {
  focused:false
}
export default (state=defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type===Focused){
    newState.focused = true
  }
  if(action.type===Blur){
    newState.focused = false
  }
  return newState
}
```
这里是一个某个应用头部搜索框是否聚焦的reducer

使用combineReducers进行reducers拆分

**第一步**

在`header`文件夹中新建`store`文件夹,分别新建对应的actionTypes,creators,index,以及reducers等js文件

把根目录下的`store`文件内容移植到`header`文件夹中的`store`中

重新编写 `header`文件夹的`store`中的reducers文件
```
import actionTypes from './actionTypies'

const defaultState = {
  focused:false
}
const headerReducer = (state=defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type===actionTypes.Focused){
    newState.focused = true
  }
  if(action.type===actionTypes.Blur){
    newState.focused = false
  }
  return newState
}
export default headerReducer
```
抛出 `headerReducer`

重新编写 `store`文件夹中的reducers文件
```
import HeaderReducer from '../common/header/store/reducers'
import { combineReducers } from 'redux'
export default combineReducers({
  header:HeaderReducer
})
```
使用 redux-devtools工具可以看到
![example2](./images/react/example2.png 'example2')

外面包裹着`header`  拆分成功
