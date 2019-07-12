// 匹配style标签
let styleReg = /<style(.*?)<\/style>/gi,
str = 'this is test string <style>hbbaly</style>this is test string <style>hbbaly</style>this is test string <style>hbbaly</style>',
result;
// result = str.match(styleReg)
result = str.replace(styleReg, '<div$1</div>')

console.log(result)  // this is test string <div>hbbaly</div>this is test string <div>hbbaly</div>this is test string <div>hbbaly</div>
