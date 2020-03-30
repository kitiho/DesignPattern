/*
    概念：
    1. 各个对象通过中介访问
*/
class Media {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  setA() {
    this.a.setNumber(this.b.number * 100);
  }
  setB() {
    this.b.setNumber(this.a.number * 100);
  }
}
class A {
  constructor() {
    this.number = 0;
  }
  setNumber(number, m) {
    this.number = number;
    if (m) {
      m.setB();
    }
  }
}
class B {
  constructor() {
    this.number = 0;
  }
  setNumber(number, m) {
    this.number = number;
    if (m) {
      m.setA();
    }
  }
}
// 测试
let a = new A();
let b = new B();
let m = new Media(a, b);
a.setNumber(100, m);
b.setNumber(100, m);
console.log(a.number, b.number);
