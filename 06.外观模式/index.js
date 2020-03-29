/*
    介绍：
    1. 为子系统中的一组接口提供一个高层接口
    2. 使用者使用这个高层接口

    示例：医院接待员帮你挂号 划价 取药
    多态
*/
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  }
  // ...
}
bindEvent(elem, 'click', '#div1', fn);
bindEvent(elem, 'click', fn);
