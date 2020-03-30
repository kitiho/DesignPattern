/*
    模板方法模式：
    概念：
    1. 把多个方法封装成一个方法

    职责链模式：
    1. 一步操作分为多个角色来完成
    2. 把角色分开用链串起来
    3. 发起者和各个处理者隔离

    JS的链式操作：
*/
class Action {
  constructor(name) {
    this.name = name;
    this.nextAction = null;
  }
  setNextAction(action) {
    this.nextAction = action;
  }
  handle() {
    console.log(`${this.name}审批`);
    if (this.nextAction) {
      this.nextAction.handle();
    }
  }
}

// 测试
let a = new Action('组长')
let c = new Action('CEO')
a.setNextAction(c)
a.handle()