class A {
  constructor() {
      this.nameA = 'a'
  }
  validateA() {
      console.log("A")
  }
}

class B extends A {
  constructor() {
      super()
      this.nameB = 'b'
  }

  validateB() {
      console.log("B")
  }
}
class C extends B {
  constructor() {
      super()
      this.nameC = 'c'
  }

  validateC() {
      console.log("C")
  }
}
const c = new C()
// 找出c上面的方法名和属性名：
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
console.log(members)
