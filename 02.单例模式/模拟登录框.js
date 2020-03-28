class LoginForm {
  constructor() {
    this.state = 'hide';
  }

  show() {
    if (this.state === 'show') {
      return;
    }
    this.state = 'show';
    console.log('登录框已显示');
  }
  hide() {
    if (this.state === 'hide') {
      return;
    }
    this.state = 'hide';
    console.log('登录框已隐藏');
  }
}

LoginForm.getInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  };
})();

// 测试
let loginBox1 = LoginForm.getInstance()
loginBox1.show()
let loginBox2 = LoginForm.getInstance()
loginBox2.hide()
console.log(loginBox1.state);