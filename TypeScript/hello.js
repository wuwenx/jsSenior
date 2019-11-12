var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Hello World";
console.log(message);
var side = /** @class */ (function () {
    function side() {
    }
    side.prototype.name = function () {
        console.log("my name wuwenxiang");
    };
    return side;
}());
var obj = new side();
obj.name();
// 任意类型
var x = 1;
x = 'any';
x = false;
var y;
y = 1;
y = null;
y = undefined;
function add(x, y) {
    return x + y;
}
console.log(add(10, 50));
function selectOption(firstName) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    var i;
    var num = [];
    for (i = 0, i < nums.length; i++;) {
        num.push(nums[i]);
    }
    console.log(nums);
}
selectOption("wwx", 'cdd', 'yr', 'ssdsdas');
(function () {
    var x = "我是匿名函数自掉用!!";
    console.log(x);
})();
var myFunction = new Function("a", "b", "return a*b");
var myfunction = myFunction(4, 9);
console.log(myfunction);
var lambda = function (x) { return 10 + x; };
console.log(lambda(100));
var arrNumber = [11, 12];
var m = arrNumber[0], p = arrNumber[1];
console.log(m, p);
;
var customer = {
    firstName: 'wuwx',
    lastNmae: 'xxx',
    sayHi: function () { return 'sadadsadsadsad'; }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastNmae);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastNmae: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastNmae);
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log(this.engine);
    };
    return Car;
}());
// 创建一个对象
var objCar = new Car("XXSY1");
// 访问字段
console.log("读取发动机型号 :  " + objCar.engine);
// 访问方法
objCar.disp();
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积" + this.Area);
    };
    return Circle;
}(Shape));
;
var circlesss = new Circle(123);
circlesss.disp();
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
;
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Root));
;
var leaf = new Leaf();
leaf.str = "机器人";
console.log(leaf);
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类构造方法");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("子类构造方法");
    };
    return StringPrinter;
}(PrinterClass));
;
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("name\u503C\u4E3A" + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var objpre = new Encapsulate();
console.log(objpre.str1);
/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
