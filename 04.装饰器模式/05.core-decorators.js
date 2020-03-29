/*
    第三方开源lib
    提供常用的装饰器

    首先安装 npm i core-decorators --save
*/
import { readonly } from 'core-decorators';
class MyClass {
  constructor() {
    this.first = 'will';
    this.last = 'Duan';
  }
  @readonly
  name() {
    console.log(`${this.first} ${this.last}`);
  }
}
