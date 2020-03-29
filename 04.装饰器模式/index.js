/*
    介绍：
    1. 为对象添加新功能
    2. 不改变其原有结构和功能

    场景：
    1. ES7装饰器
        配置环境安装插件
         npm i babel-plugin-transform-decorators-legacy --save--dev -D
    2. core-decorators
*/
class Circle {
  draw() {
    console.log('画一个⭕️');
  }
}
class Decorator {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    this.setRedBorder(this.circle);
  }
  setRedBorder(circle) {
    console.log('设置红色边框');
  }
}

// 测试
let circle = new Circle();
circle.draw();
let dec = new Decorator(circle);
dec.draw();
