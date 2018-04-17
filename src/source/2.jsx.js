import React from 'react';
import {render} from 'react-dom';
//如何使用表达式
//什么叫表达式，变量，运算符、函数调用等组合起就叫表达式，表达式需要放在大括号里面进行求值并显示
//表达式永远都要返回一个值
function formatUser(user){
    return user.firstName + user.lastName;
}
let user = {firstName:'张',lastName:'三'};
let element = <h1>hello {formatUser(user)+' xxx'}</h1>;
/**
 * 在JS中可以写HTML
 * 在HTML中可以写JS代码，但是只能写用花括号包裹起来的表达式
 */
render(element,document.querySelector('#root'));

