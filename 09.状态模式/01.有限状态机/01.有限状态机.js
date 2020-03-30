/*
    有限状态机：
    1. 有限个状态 在这些状态之间变换
    2. 交通信号灯
    3. 开源lib  javascript-state-machine
*/
const StateMachine = require('javascript-state-machine');

//初始化状态机模型
let fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 监听执行收藏
    onDoStore: function() {
      alert('收藏成功'); // 可以post请求
      updateText();
    },
    // 监听取消收藏
    onDeleteStore: function() {
      alert('取消收藏成功'); // 可以post请求
      updateText();
    }
  }
});

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  if (fsm.is('收藏')) {
    fsm.doStore();
  } else {
    fsm.deleteStore();
  }
});

function updateText() {
  btn.innerText = fsm.state;
}

updateText();
