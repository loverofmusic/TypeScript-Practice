// function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   descriptor.writable = false//不允许设置set
//   //不能同时装饰get set
// }

// class Test {
//   private _name: string;
//   constructor(name: string){
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   @visitDecorator
//   set name(name: string) {
//     this._name = name;
//   }

// }

// const t = new Test('zxccc')
// t.name = '2333333333';
// console.log(t.name)