function log(target, name, descriptor) {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

const math = new Math();
const res = math.add(2, 4); //执行add时 会自动打印日志 因为有log装饰器
