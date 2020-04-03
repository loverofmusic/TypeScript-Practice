//type annotation 类型注解 我们来告诉 ts 变量是什么类型
//type inference 类型推断 ts 会自动去尝试分析变量的类型

//如果ts能够自动分析变量类型，我们就什么也不需要做了
//如果ts无法分析变量类型的话，我们就需要使用类型注解

// let age: number;//声明赋值如果不在一行写的话，无法推断类型
// age = 35;

// let ageInference = 35;

const firstNumber = 1;
const secondNumber = 2;
const total1 = firstNumber + secondNumber; // 这种情况ts可以推断出total类型

function getTotal2(firstNumber: number, secondNumber: number) {
  // 这种情况ts不能推断出参数类型，所以要我们 注解！！！
  return firstNumber + secondNumber;
}
const total2 = getTotal2(1, 2); //这种情况ts可以推断出total2类型

const obj = {
  //obj ts 也可以自动推断里面属性的类型
  name: 'zxcczcc',
  age: 18
};
