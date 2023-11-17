class Snake {
  // 表示蛇头
  head: HTMLElement
  // 蛇身(包含蛇头)
  bodies: HTMLCollection
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
  }

  // 获取蛇头的X坐标
  get X() {
    return this.head.offsetLeft
  }
  // 获取蛇头的Y坐标
  get Y() {
    return this.head.offsetTop
  }

  set X(value: number) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.X === value) {
      return
    }
    // X的范围0-290之间
    if (value < 0 || value > 290) {
      // 蛇撞墙
      throw new Error('撞墙了')
    }

    // 向左移动时不能向右掉头
    // !先检查有没有第二截身体 value 为要设置的新值
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      // 不让蛇掉头 继续向前进方向
      if (value > this.X) {
        // value > 旧值
        // 说明蛇要向右，但不能让他向右，继续向左
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }
    //移动身体
    this.moveBody()

    this.head.style.left = value + 'px'

    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  set Y(value: number) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.Y === value) {
      return
    }

    // 向上移动时不能向下掉头
    // !先检查有没有第二截身体 value 为要设置的新值
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 不让蛇掉头 继续向前进方向
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }

    //移动身体
    this.moveBody()

    this.head.style.top = value + 'px'

    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  // 增加身体
  addBody() {
    // 向element中添加div
    // 在他的结束标签之前的位置
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 移动身体
  moveBody() {
    // !将后边的身体设置为前边的 从后往前
    // ! 不用修改蛇头
    // 遍历从后往前 length-1 最大索引
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前面身体的位置
      // !原this.bodies[i - 1]为element 是一个接口 HTMLElement为element的子接口或子类 此时 做类型断言
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop

      // 将这个值设置到当前的身体上
      ;(this.bodies[i] as HTMLElement).style.left = X + 'px'
      ;(this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
  }

  checkHeadBody() {
    // 获取所有的身体 是否和蛇头的坐标重叠
    for (let i = 0; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入判断说明蛇头撞到身体
        throw new Error('撞到自己了！')
      }
    }
  }
}
export default Snake
