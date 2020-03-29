/*
    介绍：
    1. 使用者无权访问目标对象
    2. 中间加代理，通过代理做授权和控制

    场景：
    1. 网页事件代理 委托
    2. jQuery $.proxy
    3. ES6 Proxy
*/
class RealImg {
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk();
  }
  loadFromDisk() {
    console.log('loading。。  ' + this.fileName);
  }
  display() {
    console.log('display方法  ' + this.fileName);
  }
}
class ProxyImg {
  constructor(fileName) {
    this.realImg = new RealImg(fileName);
  }
  display() {
    this.realImg.display();
  }
}

// test
let proxyImg = new ProxyImg('1.png');
proxyImg.display();
