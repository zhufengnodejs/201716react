import React from 'react';
import ReactDOM from 'react-dom';
function UserGreeting(){
    return <h1>欢迎回来</h1>
}
function GuestGreeting(){
    return <h1>请登录</h1>
}
function Greeting(props){
    /*if(props.user){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/>
    }*/
    return props.user?<UserGreeting/>:<GuestGreeting/>;
}
ReactDOM.render(<Greeting user={'134'}/>,document.querySelector('#root'));