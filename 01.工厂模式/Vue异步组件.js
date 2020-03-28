Vue.component('async-example', function(resolve, reject) {
  setTimeout(() => {
    resolve({ template: '<div>I am async!</div>' });
  }, 1000);
});
//component就是一个工厂模式
