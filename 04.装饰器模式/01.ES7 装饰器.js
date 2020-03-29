
// 第一种
@testDec // 装饰器语法
class Demo {}
function testDec(target) {
  target.isDec = true;
}
console.log(Demo.isDec); // true

// 第二种 可以自己传参 
function testDec(isDec) {
  return function(target) {
    target.isDec = isDec;
  };
}
@testDec(true)
class Demo {
  //..
}
console.log(Demo.isDec);// true
