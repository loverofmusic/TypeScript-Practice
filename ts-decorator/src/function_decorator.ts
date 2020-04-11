// 普通方法， target 对应的是类的 prototype
// 静态方法 target 对应的是类的 构造函数

// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // console.log(target, key);
  // Test { getName: [Function] } getName
  // [Function: Test] { getName: [Function] } getName
  // descriptor.writable = false
  // descriptor.value = () => {
  //   return '123'
  // }
// }

// class Test {
//   name: string;
//   constructor(name: string){
//     this.name = name;
//   }

//   @getNameDecorator
//   getName() {
//     return this.name;
//   }
  // @getNameDecorator
  // static getName() {
  //   return '123';
  // }
// }

// const t = new Test('zxccc')
// t.getName = () => {
//   return '123'
// }
// console.log(t.getName())