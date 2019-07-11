// 每隔四位用空格拼接

let str = 'dcnjhvfjhbfbsjvkdfhjgbjfghbf123'
let result = str.replace(/(.{4})/g, "$1 ")
// let result = str.match(/(.{4})/g)
console.log(result)

// 字符串中数字与字符串隔开
let str1 = '12sdf13sdg2efthw34ggsdv12'
// 将str1中数字与字符串用空格隔开,
let result1 = str1.replace(/(\d+)/g, ' $1 ').trim()
console.log(result1)