// 验证身份号码

let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    str = '14412345678901234x',
    result;
    result = reg.test(str)
    console.log(result)