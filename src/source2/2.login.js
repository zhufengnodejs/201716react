import React from 'react';
import ReactDOM from 'react-dom';
function LoginButton(props){
    return <button onClick={props.xx}>登录</button>
}
function LogoutButton(props){
    return <button  onClick={props.xx}>退出</button>
}
class LoginPanel extends React.Component{
   constructor(props){
       super(props);
       this.state = {login:false};
   }
   toggleLogin = ()=>{
       console.log('this.state.login',this.state.login);
       this.setState({login:!this.state.login},()=>{
           console.log('this.state.login',this.state.login);
       });
   }
   render(){
     //let ele = this.state.login?<LogoutButton/>:<LoginButton/>;
       let ele;
       if(this.state.login){
           ele = <LogoutButton xx={this.toggleLogin}/>;
       }else{
           ele = <LoginButton xx={this.toggleLogin}/>;
       }
      // console.log(ele);//React元素
      return ele;
   }
}
ReactDOM.render(<LoginPanel/>,document.querySelector('#root'));