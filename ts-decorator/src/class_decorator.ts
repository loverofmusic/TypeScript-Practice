// function testDecorator<T extends new (...args: any[]) => any>(constructor: T) {
//   return class extends constructor {
//     name = 'zxccccccc';
//   }
// }

// function testDecorator(constructor: any) {
//   return class extends constructor {
//     name = 'zxccccccc';
//   }
// }

// @testDecorator
// class Test {
//   name: string;
//   constructor(name: string){
//     this.name = name;
//   }
// }

// const test = new Test('zhangcong');
// console.log((test as any).name);
