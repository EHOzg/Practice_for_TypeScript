// ! 属性的封装
;(function () {
  // 定义一个表示人的类
  class Person {
    private name: string
    private age: number
    private weight: number
    // TS前可以添加属性的修饰符
    // ! 1、public 可以任意修改
    // ! 2、private 私有 只能本身自己修改，
    // ! 3、protect 受保护的属性，只能再当前类的子类中使用
    // ! 再未开启  当有错误时不生成编译文件  "noEmitOnError": true 的条件下 修改私有属性在JS文件中仍可执行！！！
    // ! 通过在类中添加方法使得私有属性可以被外部访问
    constructor(name: string, age: number, weight: number) {
      this.name = name
      this.age = age
      this.weight = weight
    }

    // ! getter方法用来读取属性setter方法用来设置愿性它们被称为属性的存取器
    // 定义方法，再用来获取name 突破private属性去访问
    getName() {
      return this.name
    }
    // 定义方法，用来设置name属性
    setName(value: string) {
      this.name = value
    }
    // !规则
    getAge(value: number) {
      return this.age
    }
    // !自己控制age年龄不会是负数，即控制
    setAge(value: number) {
      if (value >= 0) {
        this.age = value
      }
    }
    // !完全掌握在自己手里的属性，降低了代码出错的机率
    // !但是 上述getter setter 仍比较麻烦
    get this_weight() {
      return this.weight
    }
    set this_weight(value: number) {
      this.weight = value
    }
  }

  const per = new Person('wdd', 12, 53)
  console.log(per)
  // 错误 console.log(per.name)
  console.log(per.getName())
  // !仍然可以改 ？ 那么优势在哪里呢？
  // !即可以通过控制方法来控制该属性是可读或者正则等等
  per.setName('Allay')
  // !用起来和属性一样，但实际确实方法，这样也方便了习惯不麻烦
  console.log(per.this_weight)

  /**
   * !现在属性是在对象中设置的，属性可以任意的被修改
   * !将会导致对象中的数据交得非常不安全
   */
  // per.name = 'saFri'
  // per.age = 5678
  console.log(per)

  class A {
    num: number

    constructor(num: number) {
      this.num = num
    }
  }

  class B extends A {
    test() {
      // B 继承 A 再看又是公开 可以访问
      console.log(this.num)
    }
  }
})()
