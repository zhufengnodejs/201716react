import React from 'react';
import {render} from 'react-dom';
//1. 如何使用表达式
//2. 什么叫表达式，变量，运算符、函数调用等组合起就叫表达式，表达式需要放在大括号里面进行求值并显示
//3. 表达式永远都要返回一个值
function formatUser(user){
    return user.firstName + user.lastName;
}
let user = {firstName:'张',lastName:'三'};
// let element = (
//     <h1>
//        hello {formatUser(user)+' xxx'}
//     </h1>);
//JSX其实更像JS，所以它可以作为函数的参数，函数的返回值，也可以赋给其它变量
function greeting(user){
  if(user){
      //返回一个JSX元素
      return <h1>hello {formatUser(user)}</h1>;
  }else{
      return <h1>hello Stranger</h1>
  }
}
/**
 * 在JS中可以写HTML
 * 在HTML中可以写JS代码，但是只能写用花括号包裹起来的表达式
 */
let element = greeting(user);
render(element,document.querySelector('#root'));

