// 没由扩展名时,node会按照js、.json、.node的次序补足扩展名，
var math = require("./math") 
// exports对象是通过形参的方式传入的
exports.increment = function (val) {
    return math.add(val, 1,3);
}
