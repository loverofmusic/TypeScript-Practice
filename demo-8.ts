function add(first: number, second: number): number {
  //返回值约束为基本类型number
  return first + second;
}

function sayHello(): void {
  //返回值约束为空
  console.log('hello');
}

function errorEmitter(): never {
  throw new Error();
  console.log(123); //这边永远也执行不到，这个函数永远也执行不完
}

function errorEmitter2(): never {
  while (true) {}
  console.log(123); //这边永远也执行不到，这个函数永远也执行不完
}

//接受两个参数解构的例子
function add2({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total22 = add2({ first: 1, second: 2 });

//接受一个参数解构的例子
function getNumber({ first }: { first: number }): number {
  return first;
}
const cou = getNumber({ first: 1 });
