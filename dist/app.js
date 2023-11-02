"use strict";
function fn(a, b) {
    return a + b;
}
function fn2() {
    alert(this);
}
let box1 = document.getElementById('box1');
box1?.addEventListener('click', function () {
    alert('hello');
});
let b = 20;
let c = 'hello';
console.log('week');
let a = 10;
