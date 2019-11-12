var message: string = "Hello World"
console.log(message);

class side {
    name(): void {
        console.log("my name wuwenxiang")
    }
}
var obj = new side()
obj.name();

// 任意类型
let x: any = 1;
x = 'any';
x = false;
let y: number | null | undefined;
y = 1;
y = null
y = undefined;

function add(x: number, y: number): number {
    return x + y;
}
console.log(add(10, 50))


function selectOption(firstName: string, ...nums: string[]) {
    var i: number;
    var num: string[] = [];
    for (i = 0, i < nums.length; i++;) {

        num.push(nums[i])
    }
    console.log(nums);
}
selectOption("wwx", 'cdd', 'yr', 'ssdsdas');
(function () {
    var x = "我是匿名函数自掉用!!";
    console.log(x)
})();

var myFunction = new Function("a", "b", "return a*b")
var myfunction = myFunction(4, 9);
console.log(myfunction);

var lambda = (x: number) => 10 + x;
console.log(lambda(100));
var arrNumber: number[] = [11, 12];
var [m, p] = arrNumber;
console.log(m, p)


interface IPerson {
    firstName: string;
    lastNmae: string;
    sayHi: () => string;
};
var customer: IPerson = {
    firstName: 'wuwx',
    lastNmae: 'xxx',
    sayHi: (): string => { return 'sadadsadsadsad' }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastNmae);
console.log(customer.sayHi());
var employee: IPerson = {
    firstName: "Jim",
    lastNmae: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}
console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastNmae)


class Car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
    disp(): void {
        console.log(this.engine)
    }
}
// 创建一个对象
var objCar = new Car("XXSY1")

// 访问字段
console.log("读取发动机型号 :  " + objCar.engine)

// 访问方法
objCar.disp();


class Shape {
    Area: number
    constructor(a: number) {
        this.Area = a;
    }
};
class Circle extends Shape {
    disp(): void {
        console.log("圆的面积" + this.Area)
    }
};
var circlesss = new Circle(123)
circlesss.disp();

class Root {
    str: string;
}
class Child extends Root { };
class Leaf extends Root { };
var leaf = new Leaf();
leaf.str = "机器人";
console.log(leaf);

class PrinterClass {
    doPrint(): void {
        console.log("父类构造方法")
    }
}
class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint();
        console.log("子类构造方法")
    }
};
class StaticMem {
    static num: number;
    static disp(): void {
        console.log(`name值为${StaticMem.num}`)
    }
}
StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法
class Encapsulate {
    str1: string = "hello"
    private str2: string = "world"
}

var objpre = new Encapsulate()
console.log(objpre.str1);
// /// <reference path = "IShape.ts" />   
// /// <reference path = "Circle.ts" /> 
// function drawAllShapes(shape:Drawing.IShape) { 
//     shape.draw(); 
// } 
// drawAllShapes(new Drawing.Circle());
