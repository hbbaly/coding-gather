## fetch简单封装，包含超时请求
```

  function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
function request (url, method = 'get', body = {}, timeout = 3000) {
  let requestPromise
  if (method === 'get' || method === 'GET') {
    requestPromise = new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      })
        .then(checkStatus)
        .then((response) => response.json())
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  } else {
    let [str, len] = ['', 0]
    for (let key in body) {
      if (len >= 1) {
        str += '&'
      }
      len++
      str += encodeURI(`${key}=${body[key]}`)
    }
    let head = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    requestPromise = new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: head,
        body: str
      })
        .then(checkStatus)
        .then((response) => response.json())
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  let aboutFn = null
  // 这是一个可以被reject的promise
  let abortPromise = new Promise(function (resolve, reject) {
    aboutFn = function () {
      reject(new Error('request timeout'))
    }
  })
  // 这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  let abortablePromise = Promise.race([
    requestPromise,
    abortPromise
  ])

  setTimeout(function () {
    aboutFn()
  }, timeout)
  // post请求
  return abortablePromise
}
export default request


```
**使用示例**

```
  request(url, 'post', data).then(res => {
    console.log(res)
  }).catch(err => {})
```
```
  request(url).then(res => {}).catch(err => {})
```