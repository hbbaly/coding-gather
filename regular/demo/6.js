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