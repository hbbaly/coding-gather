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

