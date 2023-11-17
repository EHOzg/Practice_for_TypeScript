// 使用 class 关键字定义一个类
/**
 * ! 对象中主要包含两个部分: 属性、方法
 */
var Person = /** @class */ (function () {
  function Person() {
    // 定义属性
    this.name = 'ally'
    this.age = 18
  }
  return Person
})()
var per = new Person()
console.log(per)
console.log(per.name, per.age)
