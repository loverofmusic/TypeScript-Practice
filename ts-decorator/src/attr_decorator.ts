// function nameDecorator(target: any, key: string):any {
//   target[key] = 'zhangcong'//改的是原型上的属性
// }

// class Test {
//   @nameDecorator
//   name = 'zxcccc';//实例上的属性
// }

// const t = new Test();
// // t.name = 'zhangcong';
// console.log(t.name)
// console.log((t as any).__proto__.name);