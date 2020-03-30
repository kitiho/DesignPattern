/*
    概念：
    1. 执行命令时，发布者和执行者分开
    2. 中间加入命令对象。作为中转站

*/
class Receiver {
  constructor() {}
  exec() {
    console.log('执行');
  }
}
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }
  cmd() {
    console.log('执行命令');
    this.receiver.exec();
  }
}
class Invoker {
  constructor(command) {
    this.command = command;
  }
  invoke() {
    console.log('开始');
    this.command.cmd();
  }
}
let small = new Receiver();
let mid = new Command(small);
let big = new Invoker(mid);

big.invoke();
