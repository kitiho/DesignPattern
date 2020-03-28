/*
    示例：登录框、购物车
    需要用到private特性 但是ES6中没有

    场景：
    1. jQuery只有一个$
    2. 模拟登录框
    3. 购物车
    4. vuex中的store
*/


class SingleObject {
  login() {
    console.log('login..');
  }
}
// 静态方法getInstance
SingleObject.getInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance;
  };
})();

let obj1 = SingleObject.getInstance();
let obj2 = SingleObject.getInstance();
console.log(obj1 === obj2); // true
// 不能使用new 只能用getInstance
let obj3 = new SingleObject();
console.log(obj1 === obj3); // false
