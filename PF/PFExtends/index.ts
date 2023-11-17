// ts会检测不同文件中的变量名重复，直接用立即执行函数划出单独作用域避免冲突
// ! dog 和 cat 除了 sayHello 不一样之外，其他的都一样，此时如何减少重复代码？
// ! 共享公用共同部分

;(function () {
  // 定义一个animal的类
  class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayHello() {
      console.log('叫什么')
    }
  }

  // 定义一个表示狗的类
  // ! 继承的好处就是 可以在不修改原类的基础上 去再新类的上添加属性等
  // ! 扩展
  class Dog extends Animal {
    run() {
      console.log('狗狗在跑')
    }
    // ! 子类覆盖父类方法，但也只是再此改变，不会改变Animal的属性
    // ! 方法的重写：
    sayHello() {
      console.log('啊啊啊啊啊啊啊啊啊啊啊')
    }
  }

  // 定义一个猫的类
  class Cat {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayHello() {
      console.log('喵喵')
    }
  }

  const dog = new Dog('旺财', 5)
  const cat = new Cat('咪咪', 3)
  console.log(dog)
  console.log(cat)
  dog.sayHello()
  dog.run()
  cat.sayHello()
})()
