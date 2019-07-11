# 正则表达式

|方法|描述|
|---|:--|
|exec|一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。|
|test |一个在字符串中测试是否匹配的RegExp方法，它返回true或false。|
|match |一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。|
|search |一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。|
|replace |一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。|
|split |一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。|
	
## 检查一个字符串是否全是数字

```js
let reg = /\D+/g,
    str = '23456bb33456',
    bool;
bool = reg.test(str)
console.log(bool) // true保含非数字
```

## 获取一个字符串中的数字字符，并按数组形式输出

```js
let reg1 = /\d+/g,
    str1 = 'dgfhfgh254bhku289fgdhdy675gfh',
    sumArr;

sumArr = str1.match(reg1)

console.log(sumArr) // [ '254', '289', '675' ]
```
## 判断数字出现的位置

```js
let reg2 = /\d+/g,
    str2 = 'dgfhfgh254bhku289fgdhdy675gfh',
    index;

index = str2.search(reg2)

console.log(index) //   7
```

## 替换某个字符

```js
// 空格全部替换成‘hbb’
let str3 = 'as bd qwe ',
    result;

result = str3.replace(/\s/g, 'hbb')
console.log(result) // ashbbbdhbbqwehbb
```
[源代码](./demo/1.js)

## 提取代码里面的注释

```js
let commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
    str = '/***注释1****/ let name = "aty", /***注释2****/let age = 26',
    result;
result = str.match(commentRegExp)
console.log(result) //  [ '/***注释1****/', '/***注释2****/' ]

// (\/\*([\s\S]*?)\*\/  提取 /* 匹配非空白字符和空白字符 */
// ([^:]|^)\/\/(.*)$) 或者是以^,/开头， 已/结尾
```
`/m`代表多行模式`multiline`，如果目标字符串中不含有换行符`\n`，即只有一行，那么`/m`修饰符没有任何意义。

## 每隔四位用空格拼接

```js
let str = 'dcnjhvfjhbfbsjvkdfhjgbjfghbf123'
let result = str.replace(/(.{4})/g, "$1 ")
console.log(result)
```

## 字符串中数字与字符串隔开

```js
let str1 = '12sdf13sdg2efthw34ggsdv12'
// 将str1中数字与字符串用空格隔开,
let result1 = str1.replace(/(\d+)/g, ' $1 ').trim()
console.log(result1)
```

## 过滤表情

```js
let reg = /[[\u4e00-\u9fa5]|\w|[-，。？！,\.\?\!]]*/g,
    str = 'hot👌哈哈哈👌😄好的✈️sd🇺🇸，☎️',
    result = str.match(reg).join('')
console.log(result) // hot哈哈哈好的sd，
```

把一些特殊字符过滤掉，保留我们要的东西

## 数字正则表达式

```js
验证数字：^[0-9]*$ 
验证n位的数字：^\d{n}$ 
验证至少n位数字：^\d{n,}$ 
验证m-n位的数字：^\d{m,n}$ 
验证零和非零开头的数字：^(0|[1-9][0-9]*)$ 
验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$ 
验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$ 
验证非零的正整数：^\+?[1-9][0-9]*$ 
验证非零的负整数：^\-[1-9][0-9]*$ 
验证非负整数（正整数 + 0） ^\d+$ 
验证非正整数（负整数 + 0） ^((-\d+)|(0+))$ 
验证长度为3的字符：^.{3}$ 
验证由26个英文字母组成的字符串：^[A-Za-z]+$ 
验证由26个大写英文字母组成的字符串：^[A-Z]+$ 
验证由26个小写英文字母组成的字符串：^[a-z]+$ 
验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$ 
验证由数字、26个英文字母或者下划线组成的字符串：^\w+$ 
验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。 
验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+ 
验证汉字：^[\u4e00-\u9fa5],{0,}$ 
验证Email地址：/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$ 
验证电话号码：^(\d3,4|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-

XXXXXXXX，XXXXXXX，XXXXXXXX。 
验证身份证号（15位或18位数字）：^\d{15}|\d{}18$ 
验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12” 
验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。 
整数：^-?\d+$ 
非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$ 
正浮点数 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$ 
非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$ 
负浮点数 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$ 
浮点数 ^(-?\d+)(\.\d+)?$
```

## 匹配出所有图片及图片地址src

```js
// 匹配出所有图片及图片地址src
// 匹配出img标签
let imgReg = /<img.*?(?:>|\/>)/gi,
    srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i,
    str = `this is test string <img src="http:yourweb.com/test.jpg" width='50' > 123 and the end <img src="所有地址也能匹配.jpg" /> 33! <img src="/uploads/attached/image/20120426/20120426225658_92565.png" alt=\"\" />`,
    sumSrc= [],
    result;
    result = str.match(imgReg)
    console.log(result)
// [ '<img src="http:yourweb.com/test.jpg" width=\'50\' >',
//   '<img src="所有地址也能匹配.jpg" />',
//   '<img src="/uploads/attached/image/20120426/20120426225658_92565.png" alt="" />' ]
    result.forEach(val => {
      let re = val.match(srcReg)
      sumSrc.push(re[1])
    })
    console.log(sumSrc)
    // [ 'http:yourweb.com/test.jpg',
    // '所有地址也能匹配.jpg',
    // '/uploads/attached/image/20120426/20120426225658_92565.png' ]
```