# `redux-saga`基本认知

## `install`

`npm install --save redux-saga`

## 简介

redux-saga是一个用于管理redux应用异步操作的中间件，redux-saga通过创建sagas将所有异步操作逻辑收集在一个地方集中处理，可以用来代替redux-thunk中间件。
sages 采用 Generator 函数来 yield Effects（包含指令的文本对象）。Generator 函数的作用是可以暂停执行，再次执行的时候从上次暂停的地方继续执行。
Effect 是一个简单的对象，该对象包含了一些给 middleware 解释执行的信息。你可以通过使用 effects API 如 fork，call，take，put，cancel 等来创建 Effect。([redux-sagaAPI](https://redux-saga-in-chinese.js.org/ 'redux-saga))

`store`中改写
```
import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'  //引入redux-saga中的createSagaMiddleware函数
import reducer from './reducers'
import mySaga from './sagas'   //引入sagas.js


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()  // 执行
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)  // // 执行mySaga
export default store
```
`sagas.js`中

```
import { takeEvery, put } from 'redux-saga/effects'  // 引入相关函数
import axios from 'axios'
import creators from './creators'
import actionTypes from './actionTypes'


function* fetchList (){  / 参创建函数返回action
  try{  // 容错
    const res = yield axios.get('https://www.vue-js.com/api/v1/topics')  //执行请求返回请求的内容
    const action = creators.getRequestData(res.data.data)  // 获得action
    yield put(action)   // dispatch一个action到reducer
  }catch(e){
    console.log('请求失败')
  }
}
function* mySaga() {
  yield takeEvery(actionTypes.GETVUELIST, fetchList);
}
export default mySaga
```

具体可以参考：[hbbaly](https://github.com/hbbaly/react-practice/tree/saga 'hbbaly')
