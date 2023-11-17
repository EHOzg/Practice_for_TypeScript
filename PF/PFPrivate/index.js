// ! 属性的封装
;(function () {
  // 定义一个表示人的类
  var Person = /** @class */ (function () {
    function Person(name, age) {
      this.name = name
      this.age = age
    }
    return Person
  })()
  var per = new Person('wdd', 12)
  console.log(per)
  /**
   * !现在属性是在对象中设置的，属性可以任意的被修改
   *
   */
  per.name = 'saFri'
  per.age = 5678
  console.log(per)
})()
