// import { hi } from 'imp.js'
// let a = 10
// console.log(hi)
// console.log(a)
function fn(a: number, b: number) {
  return a + b
}
function fn2(this: Window) {
  alert(this)
}
// 若 box1 不存在 则 bull.addEventListener 会报错
let box1 = document.getElementById('box1')
// if (box1 !== null) {
//   box1.addEventListener('click', function () {
//     alert('hello')
//   })
// }
box1?.addEventListener('click', function () {
  alert('hello')
})
