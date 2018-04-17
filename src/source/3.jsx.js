import React from 'react';
import {render} from 'react-dom';
import './3.jsx.css'
// tab index 索引
/**
 * 1.属性的值可以是字符串也可以是表达式
 * 2.属性名和原生DOM不一样，应该用驼峰命名法 tab-index=>tabIndex
 * 3.有些属性名跟JS关键字冲突了，所以需要改名
 *    class->className
 *    for=>htmlFor
 * 4.style是一个对象而非字符串
 *
 */
let style = {border:'1px solid green'};
render(<div>
    <label htmlFor="username" style={style}>username</label>
    <input type="text" id="username"/>
    <p className={'content'}>content</p>
    <button tabIndex="1">1</button>
    <button tabIndex={"3"}>3</button>
    <button tabIndex="2">2</button>
</div>,document.querySelector('#root'));