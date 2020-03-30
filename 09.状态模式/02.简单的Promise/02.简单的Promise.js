/*
    Promise就是一个有限状态机

*/
import StateMachine from 'javascript-state-machine';
// 状态机模型
let fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve', // 事件名称
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject', // 事件名称
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve: function(state, data) {
      // state当前状态机实例；data fsm.resolve(xxx)传递的参数
      console.log(data);
      data.successList.forEach(fn => fn());
    },
    onReject: function(state, data) {
      // state当前状态机实例；data fsm.reject(xxx)传递的参数
      data.failList.forEach(fn => fn());
    }
  }
});

// 定义Promise的calss
class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];
    console.log(this);
    fn(
      function() {
        // resolve函数
        console.log(this);
        fsm.resolve(this);
      },
      function() {
        // reject函数
        fsm.reject(this);
      }
    );
  }
  then(successFn, failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }
}

// 测试代码
function loadImg(src) {
  const promise = new MyPromise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject();
    };
    img.src = src;
  });
  return promise;
}

let src = 'https://www.baidu.com/img/bd_logo1.png?where=super';
let res = loadImg(src);
res.then(
  () => {
    console.log('ok1');
  },
  () => {
    console.log('fail1');
  }
);
res.then(
  () => {
    console.log('ok2');
  },
  () => {
    console.log('fail2');
  }
);
