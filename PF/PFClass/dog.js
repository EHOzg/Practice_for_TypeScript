var Dog = /** @class */ (function () {
    // ! 构造函数constructor，在对象创建时调用 即 new Dog() 当你每次 new Dog() 实际上就是在调用 constructor
    function Dog(name, age) {
        console.log('构造函数执行了~~~');
        // ! 在实例方法中，this就表示当前当前的实例
        // ! 这个 this 即表示不同的 dog 对象
        // ! 在构造函数中当前对象就是当前新建的那个对象
        console.log(this);
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        alert('汪汪汪!');
    };
    return Dog;
}());
// ! 创建对象的时候去给属性赋值
var dog = new Dog('小黑', 4);
var dog2 = new Dog('小白', 2);
console.log(dog);
console.log(dog2);
