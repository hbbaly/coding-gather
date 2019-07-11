# js代码搜集

## 找出某个对象上所有的属性及方法

`Reflect.ownKeys(target)`：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回**目标对象所有自身的属性的属性名**，而`Object.keys()`的返回结果**仅包括目标对象自身的可遍历属性**。
```js
function getAllmembers (instance) {
  // 递归依次获取对象的原型链上属性名及方法名
  function _getNames(instance) {
    if (instance.__proto__ === null) return []
  
    let names = Reflect.ownKeys(instance)
    return [...names, ..._getNames(instance.__proto__)]
  }
  return _getNames(instance)
}
let members = getAllmembers(c)
// 去重
members = Array.from(new Set(members))
```