//JSX表达式
//这是一种react发明的或者说扩展的JS语法
//这种语法浏览器是不能直接运行，如果要执行要先经过babel编译
//babel会把这段代码 React.createElement()
//react 核心库 react-dom这是渲染DOM相关的库
import React from './react';
import ReactDOM from './react-dom';
//let element = <h1 id="ele">12</h1>;
//babel转议
 var element = React.createElement(
     "h1",
     { id: "ele" },
     "hello ",React.createElement('span',null,'word')
 );
 console.log(element);
ReactDOM.render(element,document.querySelector('#root'));