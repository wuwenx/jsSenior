var name = 'wwx', age = 999;
function GetName(address, sex) {
    var name = 'wx'
    console.log(this.name, +this.age);
    console.log(address + sex);
}
// this 指向windows
GetName();
// this指向当前绑定对象
// call和bind传递参参数用逗号隔开 apply需要传递一个数组 
GetName.call({ name: '山西男人' }, '山西', '男')
GetName.apply({ name: 'asdsad', age: 123 }, ['成都', '男'])
// bind返回的是一個新的函数，需要（）调用执行
GetName.bind({ name: '吕梁男人', age: 23 }, 'lvlaing', 'nv')();

//由于call apply bind 可以改变执行上下问的特性可以使用基础类型对象的内置原型方法
Object.prototype.toString.call([]) == '[object Array]'
Object.prototype.toString.call("123") == '[object String]'

function add() {
    return [].slice.call(arguments)//.reduce((a, b) => a + b);

}

console.log(add(1, 3, 5, 7, 9))