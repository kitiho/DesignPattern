function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
  }
class Person {
  constructor() {
    this.first = 'A';
    this.last = 'B';
  }
  // 装饰方法
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}

var p = new Person();
console.log(p.name());
p.name = function() {}; // 报错


