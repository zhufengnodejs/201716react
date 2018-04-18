import React from 'react';
import ReactDOM from 'react-dom';
function MailBox(props){
  //如果布尔表达式为true,就显示提示，如果为false,则没有提示
  return (
      <div>
         <h1>欢迎来到126邮箱</h1>
          {props.unReadMessages.length>0 && <h2>你有{props.unReadMessages.length}条未读消息</h2>}
      </div>
  )
}
let messages = [1,2,3];
ReactDOM.render(<MailBox unReadMessages={messages}/>,document.querySelector('#root'));