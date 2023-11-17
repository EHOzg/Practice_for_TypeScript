// 使用 class 关键字定义一个类
/**
 * ! 对象中主要包含两个部分: 属性、方法
 * ! 如果方法以 static 开头则方法就是类方法，可以直接通过类去调用
 */
class Person {
  // 定义属性
  // 只读属性 readonly
  readonly name: string = 'ally'
  static age: number = 18
  // static readonly age: number = 18

  // 定义方法
  static sayHello() {
    console.log('hello')
  }
}
const per = new Person()

console.log(per)
console.log(per.name)

// ! 类型“typeof Person”上不存在属性“age”
// ! 次属性称为：类属性或静态属性，但Person中不存在age的静态属性
// ! 在属性前使用static关键字可以定义静态属性
// ! 而一旦成为静态属性就需要通过实例对象的类去访问即 console.log(Person.age) 而不能通过 console.log( per.age)访问

console.log(Person.age)
// 非静态
// per.sayHello()
// 静态
Person.sayHello()
