;(function () {
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayHello() {
      console.log('动物在叫')
    }
  }

  class Dog extends Animal {
    age: number
    constructor(name: string, age: number) {
      // ! 派生类的构造函数必须包含 "super" 调用
      // ! 等于是把父类的构造函数覆盖了 ，即name属性没了
      // ! 必须对父类的构造函数调用
      super(name) // ! 调用父类构造函数
      this.age = age
    }
    sayHello() {
      // !super表示当前类的父类
      // !有一些情况添加属性
      super.sayHello()
    }
  }

  const dog = new Dog('旺财', 12)
  dog.sayHello()
})()
