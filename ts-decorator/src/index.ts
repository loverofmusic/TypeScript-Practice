const userInfo:any = undefined;

function catchError (msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor){
    const fn = descriptor.value;
    descriptor.value = function() {
      try {
        fn();
      } catch (e) {
        console.log(`${msg} 不存在`);
      }
    }
  }
}
  
class Test {
  @catchError('userInfo.name')
  getName(){
    return userInfo.name;
  }
  @catchError('userInfo.age')
  getAge(){
    return userInfo.age;
  }
}

const t = new Test();
t.getName();
t.getAge();