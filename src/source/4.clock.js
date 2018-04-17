import React from 'react';
import ReactDOM from 'react-dom';
//花括号里永远不能放对象，只能放null 或者字符串
function tick(){
    //创建一个新的元素
  const element = (
      <div>
          <h1>hello</h1>
          <h2>现在是北京时间 {new Date().toLocaleString()}</h2>
      </div>
  )
    //渲染到页面上
  ReactDOM.render(element,document.querySelector('#root'));
}
setInterval(tick,1000);
