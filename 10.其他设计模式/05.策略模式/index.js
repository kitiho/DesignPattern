/*
    概念：
    1. 不同策略分开处理
    2. 避免使用过多if else

*/
class NormalUser {
  buy() {
    console.log(`普通用户购买了`);
  }
}
class VipUser {
  buy() {
    console.log(`VIP用户购买了`);
  }
}
const u1 = new NormalUser();
u1.buy();
const u2 = new VipUser();
u2.buy();
