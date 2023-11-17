// 定义记分牌的类
class ScorePanel {
  // 用来记录
  score = 0
  level = 1
  // 分数和等级所在元素，在构造函数中进行初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement
  // 设置变量限制等级
  maxLevel: number
  // 设置升级分数
  upScore: number
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 设置一个加分的方法
  addScore() {
    // 分数自增
    this.scoreEle.innerHTML = ++this.score + ''
    // 判断分数是多少
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  // 等级提升
  levelUp() {
    // 小于10才会升级
    if (this.level < this.maxLevel) {
      // 等级自增 ++this.score => this.score++
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel
