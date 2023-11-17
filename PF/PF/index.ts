// 泛型 // 在定义西数或是类时，如果遇到类型不明确就可以使用泛型
function fn<T>(a: T): T {
  return a
}

// 可以直接调用具有泛型的函数
// 不指定泛型
// 指定泛型
let res = fn(10)
let result = fn<string>('hello')

function fn2<T, K>(a: T, b: K): T {
  console.log(b)
  return a
}

fn2(123, 'hello')

interface Inter {
  length: number
}

//表示泛型T必须是Inter的实现类
function fn3<T extends Inter>(a: T): number {
  return a.length
}

fn3([1, 2, 3])

class MyClass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const mc = new MyClass<string>('1213')
