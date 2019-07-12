// 13297006700 替换成132****6700

let teleReg = /1(\d{2})\d{4}(\d{4})/g,
    str = '13297006700',
    result;
result = str.replace(teleReg, '1$1****$2')
console.log(result) // 132****6700