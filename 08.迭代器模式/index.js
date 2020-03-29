/*
    介绍：
    1. 顺序访问一个结合
    2. 使用者无须知道集合内部结构    

    场景：
    1. jQuery each
    2. ES6 Iterator
*/
class Iterator {
  constructor(Container) {
    this.list = Container.list;
    this.index = 0;
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++];
    }
    return null;
  }
  hasNext() {
    if (this.index >= this.list.length) {
      return false;
    }
    return true;
  }
}

class Container {
  constructor(list) {
    this.list = list;
  }
  // 生成遍历器
  getIterator() {
    return new Iterator(this);
  }
}

var arr = [1, 2, 3, 4, 5, 6];
let container = new Container(arr);
let iterator = container.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
