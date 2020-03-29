/*
    ES6的Iterator为什么存在？
    1. ES6中有序集合已经有很多
        Array Map Set String TypedArray arguments NodeList
    2. 需要有一个统一的遍历接口来遍历所有数据类型 

    ES6的Iterator是什么？
    1. 以上数据类型都有[Symbol.iterator]属性
    2. 属性值是函数，执行函数返回一个迭代器
    3. 这个迭代器就有next方法可顺序迭代子元素
    4. 可运行Array。prototype[Symbol.iterator]来测试

    ES6提供了新的语法 for of
    不用自己封装each方法

    ES6 Interator 和 Generator
    1. Iterator的价值不限于上述几个类型的遍历
    2. 只要具有Iterator的要求就可以使用
    3. Generator函数也有[Symbol.iterator]
*/
function each(data) {
  let iterator = data[Symbol.iterator]();
  let item = { done: false };
  while (!item.done) {
    item = iterator.next();
    if (!item.done) {
      console.log(item.value);
    }
  }
}
// let set = new Set([1, 3, 2, 5, 3]);
let map = new Map()
map.set('a','1')
map.set('b','2')
map.set('c','3')
each(map);
