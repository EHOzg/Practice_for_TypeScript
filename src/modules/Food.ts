// 定义食物类
class Food {
  // 定义一个属性来表示食物所对应的元素
  element: HTMLElement
  constructor() {
    // 获取页面元素 并赋值
    // ! 不加 ‘！’则会存在element为空的可能性，‘！’表示此时该元素不会为空
    this.element = document.getElementById('food')!
  }
  // 获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft
  }

  // Y轴
  get Y() {
    return this.element.offsetTop
  }

  // 随机刷新位置
  change() {
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是10px
    // 所以食物的坐标必须是10的倍数
    // Math.random() 生成 0-1之间的随机数 不包括0也不包括1
    // Math.round() 四舍五入取整 既包括0也包括290了
    // * 29  0-29之间的数 再整体 * 10
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

export default Food
