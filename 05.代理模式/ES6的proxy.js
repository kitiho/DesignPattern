// 明星
let star = {
  name: 'DUAN',
  age: 25,
  phone: 'star13340257184'
};
let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      return 'agetnt4123123';
    }
    if (key === 'price') {
      return '10w';
    }
    return target[key];
  },
  set: function(target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        console.log('报价太低');
        return false
      } else {
        target[key] = val;
        return true;
      }
    }
  }
});

//test
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 15000