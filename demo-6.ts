/**
 * 基础类型 number string boolean null undefined symbol + void
 * */
const size: number = 33;
let stuName: string = 'zxcc';
let temp: number | string = 123;
temp = '456';

/**
 * 对象类型
 * */

//对象
const teacher: {
  name: string;
  age: number;
} = {
  name: 'zc',
  age: 33
};

//数组
const numbers: number[] = [1, 2, 3];

//类
class Person {}
const nebulas: Person = new Person();

//函数
const getTotal1: () => number = () => {
  return 12;
};

//两种函数参数返回值类型定义的例子-1
const func1 = (str: string): number => {
  return parseInt(str, 10); //parseInt 可以推断出来，可以不写number
};

//两种函数参数返回值类型定义的例子-2
const func2: (str: string) => number = str => {
  //这个number不能省
  return parseInt(str, 10);
};

//日期
const date = new Date();

//其他case
interface Person {
  name: 'string';
}
const rawData = '{"name": "dell"}';
const newData: Person = JSON.parse(rawData); //这里不能推断出类型
