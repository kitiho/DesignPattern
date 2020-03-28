/*
    场景：
    1. jQuery
    2. React.createElment
    3. Vue的异步组件

*/


class Product {
  constructor(name) {
    this.name = name;
  }
  init() {}
  fn1() {}
  fn2() {}
}
class Creator {
  creat(name) {
    return new Product(name);
  }
}
