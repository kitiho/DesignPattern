const EventEmitter = require('events').EventEmitter;

const emitter1 = new EventEmitter();
emitter1.on('some', () => {
  console.log('some1');
});
emitter1.on('some', () => {
  console.log('some2');
});
emitter1.emit('some');

//继承
class Dog extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}
let dog1 = new Dog('simon');
dog1.on('fight', function() {
  console.log('fight', this.name);
});
dog1.emit('fight');
