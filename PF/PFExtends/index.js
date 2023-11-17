// ts会检测不同文件中的变量名重复，直接用立即执行函数划出单独作用域避免冲突
// ! dog 和 cat 除了 sayHello 不一样之外，其他的都一样，此时如何减少重复代码？
// ! 共享公用共同部分
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
(function () {
    // 定义一个animal的类
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.prototype.sayHello = function () {
            console.log('叫什么');
        };
        return Animal;
    }());
    // 定义一个表示狗的类
    // ! 继承的好处就是 可以在不修改原类的基础上 去再新类的上添加属性等
    // ! 扩展
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.run = function () {
            console.log('狗狗在跑');
        };
        // ! 子类覆盖父类方法，但也只是再此改变，不会改变Animal的属性
        // ! 方法的重写：
        Dog.prototype.sayHello = function () {
            console.log('啊啊啊啊啊啊啊啊啊啊啊');
        };
        return Dog;
    }(Animal));
    // 定义一个猫的类
    var Cat = /** @class */ (function () {
        function Cat(name, age) {
            this.name = name;
            this.age = age;
        }
        Cat.prototype.sayHello = function () {
            console.log('喵喵');
        };
        return Cat;
    }());
    var dog = new Dog('旺财', 5);
    var cat = new Cat('咪咪', 3);
    console.log(dog);
    console.log(cat);
    dog.sayHello();
    dog.run();
    cat.sayHello();
})();
