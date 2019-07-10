// 检查一个字符串是否全是数字
let reg = /\D+/g,
    str = '23456bb33456',
    bool;
bool = reg.test(str)
console.log(bool) // true  保含非数字


// 'dgfhfgh254bhku289fgdhdy675gfh' 

// 如何获取一个字符串中的数字字符，并按数组形式输出

let reg1 = /\d+/g,
    str1 = 'dgfhfgh254bhku289fgdhdy675gfh',
    sumArr;

sumArr = str1.match(reg1)

console.log(sumArr) // [ '254', '289', '675' ]


// search  正则去匹配字符串，如果匹配成功，就返回匹配成功的位置

let reg2 = /\d+/g,
    str2 = 'dgfhfgh254bhku289fgdhdy675gfh',
    index;

index = str2.search(reg2)

console.log(index) //   7

// 空格全部替换成‘hbb’
let str3 = 'as bd qwe ',
    result;

result = str3.replace(/\s/g, 'hbb')
console.log(result) // ashbbbdhbbqwehbb