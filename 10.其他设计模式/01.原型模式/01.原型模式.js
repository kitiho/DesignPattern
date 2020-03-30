/*
    概念：
    1. clone自己，生成一个新对象
    2. java默认有clone接口，不用自己实现

    Object.create(prototype)

    对比JS的prototype：
    1. prototype是ES6 class的底层原理
    2. 而class是面向对象的基础，并不是服务某个模式
    3. 以后ES6普及，prototype会被忽略
    4. Object.create会保留
*/
let prototype = {
  getName: function() {
    return this.first + ' ' + this.last;
  },
  say: function() {
    console.log('hello');
  }
};

let x = Object.create(prototype);
x.first = 'A';
x.last = 'B';
x.say();
console.log(x.getName());
let y = Object.create(prototype)

