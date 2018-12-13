# redux-thunk

## 安装
`npm install --save redux-thunk`

## 作用
允许你的action可以返回函数, 带有dispatch和getState两个参数。

## 用法

在`store`中引入`redux-thunk`

```
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'   //引入redux-thunk
import reducer from './reducers'
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
    const enhancer = composeEnhancers(
      applyMiddleware(thunk),
      // other store enhancers if any
    );
const store = createStore(reducer,enhancer) //use redux-thunk
export default store
```

在`action`函数里面使用

```
import actionTypes from './actionTypes'
import axios from 'axios'
const getInputChangeAction= (value)=> ({type:actionTypes.CHANGEINPUT,value})
const getAddItem = ()=> ({type:actionTypes.ADD})
const getDeleteItem = (index)=>({type:actionTypes.DELETE,index})
const getRequestData = (data)=>({type:actionTypes.REQUESTDATA,data})

const getVueList = ()=>{
  //返回一个 函数，，触发dispatch
  return dispatch => {
    axios.get('https://www.vue-js.com/api/v1/topics').then(res=>{
      const data = res.data.data
      const action = getRequestData(data)
      dispatch(action)
    })
  }
}
export default{
  getInputChangeAction,
  getAddItem,
  getDeleteItem,
  getRequestData,
  getVueList
}
```

