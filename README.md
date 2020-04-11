# TypeScript-Practice

### 理解 typescript 是什么

JS 超集，有自己的静态类型，衍生语法，同时不能自己运行，需要编译成普通的 JS 才能运行

### 编译运行过程

- 安装 typescript
  npm i typescript@3.6.4 -g
- 编译 运行
  - tsc demo-start.ts（将 ts 编译成 js）
  - node demo-start.js（运行 js）

### 简化上述过程

- 安装 ts-node
  - npm i ts-node@8.4.1 -g
- 编译 运行
  - ts-node demo-start.ts（编译运行一步到位）

### 静态类型的理解(demo-5)

- 类型不能修改
- 这个变量上的属性和方法基本也就确定了（编辑器就可以给你很好的提示）

### 基础类型 和 对象类型（demo-6）

### 类型推断 和 类型注解（demo-7）

### 函数相关类型（demo-8）

## 装饰器
1. 生成基本结构：
  - cd TypeScript-Practice
  - mkdir ts-decorator
  - cd ts-decorator
  - npm init -y
  - npm i ts-node -D
  - npm i typescript -D
  - tsc --init
  - mkdir src
  - touch index.ts => test-code...
  - package.json => scripts => 'dev'
  - npm run dev
