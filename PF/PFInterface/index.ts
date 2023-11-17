// 接口
;(function () {
  // 描述一个对象类型
  // ! 不可重复
  type myType = {
    name: string
    age: number
  }

  /**
   * !接口用来定义一个类的结构, 用来定义一个类中应该包含那些属性和方法
   * !interface
   * !同时接口也可以当成类型声明去使用
   * ! 可重复
   *
   */
  interface myInterface {
    name: string
    age: number
  }

  interface myInterface {
    gender: string
  }

  const obj: myInterface = {
    name: 'sss',
    age: 111,
    gender: '男',
  }

  /**
   *!接口可以在定义类的时候去限制类的结构
   */

  interface myInter {
    name: string
    sayHello(): void
  }

  /**
   * !定义类，可以使类去实现一个接口
   */

  class MyClass implements myInter {
    name: string

    constructor(name: string) {
      this.name = name
    }
    sayHello() {
      console.log('hello')
    }
  }
})()
