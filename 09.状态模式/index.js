
/*
    介绍：
    1. 一个对象有状态变化
    2. 每个状态变化都有逻辑
    3. 不能总是用if else来控制

    场景：
    1. 有限状态机
    2. 简单的Promise
*/
class State {
  constructor(color) {
    this.color = color;
  }
  handle(Context) {
    console.log(`切换到${this.color}`);
    Context.setState(this.color);
  }
}

class Context {
  constructor() {
    this.state = null;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}

// 测试
let rs = new State('red');
let gs = new State('green');
let context = new Context();
gs.handle(context);
console.log(context.getState());
rs.handle(context);
console.log(context.getState());