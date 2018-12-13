# 注意事项

## 请求接口
 
请求接口获取数据展示,有时候 返回的数据缺失,导致在渲染时报错，可能会阻碍进程,造成页面空白。

在`vue`项目中我们会使用`filter`来进行过滤,取不到的值, 赋予一个默认值

```
<div class="_left">
  <span class="ui-text _model">{{ item|faultTolerant('item.title') }}</span>
  <span class="ui-text _problem">{{ item|faultTolerant('item.itemPro') }}</span>
</div>
```

### 过滤函数
```
import base from '../util/base'
const faultTolerant = (content, valString, defaultVal = '') => {
  // 返回的值是 string，number类型    number的时候，0 也要返回
  function faultTolerant (valArr, len) {
    if (valArr.length >= 2) {
      let joinVal = content[valArr[1]] || content[valArr[1]] === 0 ? content[valArr[1]] : defaultVal
      if (valArr.length > 2 && joinVal !== '') {
        for (let key = 2; key <= len - 1; key++) {
          joinVal = joinVal[valArr[key]] || content[valArr[key]] === 0 ? joinVal[valArr[key]] : defaultVal
        }
      }

      let val
      if (typeof joinVal === 'string') val = joinVal || defaultVal
      if (typeof joinVal === 'number') val = joinVal || defaultVal
      return val
    }
  }
  // content为数组的话 可以不用容错
  if (base.paramsType(content).indexOf('Object') >= 0) {
    try {
      let returnData = defaultVal
      if (Object.keys(content).length > 0) {
      // content里面有内容
        let valArr = valString ? valString.split('.') : []
        let length = valArr.length
        returnData = faultTolerant(valArr, length)
      }
      return returnData
    } catch (err) {
      return '数据有误'
    }
  }
}
export default faultTolerant
```
此过滤函数只适用对象,类似`item.user.name`这种类型 。`item.user[0].id`这种对象属性为数组的不适用