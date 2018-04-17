import React,{Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import 'bootstrap/dist/css/bootstrap.css';
export default class MessageApp extends Component{
    constructor(props){
        super(props);
        //两个同级的子组件需要通信，不能直接通信，需要把状态定义在它们共同的父组件里
        this.state = {messages:[
            {username:'张三',content:'今天很热',createAt:new Date()},
            {username:'李四',content:'明天更热',createAt:new Date()}
        ]};
    }
    addMessage = (message)=>{
      this.setState({messages:[...this.state.messages,message]});
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="text-center">欢迎来到珠峰聊天室</h3>
                            </div>
                            <div className="panel-body">
                                <MessageList messages = {this.state.messages}/>
                            </div>
                            <div className="panel-footer">
                                <MessageForm addMessage={this.addMessage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}