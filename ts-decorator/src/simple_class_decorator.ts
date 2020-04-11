// 类的装饰器
// 装饰器本身是一个函数
// 装饰器接受的参数是类的构造函数
// 装饰器通过 @ 符号来使用
// 可以使用多个装饰器，注意执行顺序

// function testDecorator(constructor: any){
//   console.log(1)
// }

// function testDecorator1(constructor: any){
//   console.log(2)
// }

// function testDecorator(){
//   return function(constructor: any){
//     constructor.prototype.getName = () => {
//       console.log('zxcc')
//     }
//   }
// }

// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('zxcc');
//       };
//     };
//   } else {
//     return function (constructor: any) {};
//   }
// }

//注意testDecorator执行时机，不是在类实例化的时候，是在定义了类的时候
// @testDecorator
// @testDecorator1
// @testDecorator()
// @testDecorator(true)
// class Test {}

// const test = new Test();
// (test as any).getName();
