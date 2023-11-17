import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

// 控制游戏
class GameControl {
  // 蛇
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  // 创建一个属性存储蛇的按键方向(也就是按键的方向)
  direction: string = 'Right'
  isLive: boolean = true
  // 蛇是否还活着？
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(10, 2)

    this.init()
  }

  // 游戏初始化
  init() {
    // 绑定键盘的按下按上
    // 改变this指向
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    // 调用run
    // !如何反复调用？
    this.run()
  }

  // 将回调函数直接设置成响应方法，减少逻辑的耦合
  keydownHandler(event: KeyboardEvent) {
    // 检查是否按的上下左右
    // ! 此时的this 不是本函数的this！
    // 获取用户按键的名字 返回字符串
    // event.key
    this.direction = event.key
  }

  // 创建一个蛇移动的方法
  run() {
    // 根据方向(this.direction)来使蛇的位置改变
    // 向上 top 减少
    // 向下 top 增加
    // 向左 left 减少
    // 向右 left 增加
    // 获取蛇现在的坐标
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        // 向上移动 top 减少
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        // 向下移动 top 增加
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        // 向左移动 left 减少
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
    }

    // 检查蛇是否吃到食物
    this.checkEat(X, Y)

    // 修改蛇的X和Y的值
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e: any) {
      // 出现异常 游戏结束
      alert(e.message + 'GAME OVER!')
      this.isLive = false
    }

    // 开启定时调用 每一次执行就调用一次
    // 等级升高 速度越来越快
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  // 定义一个方法用来检测蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      console.log('吃到食物')
      // 食物的位置重置
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      // 蛇增加一截
      this.snake.addBody()
    }
  }
}

export default GameControl
