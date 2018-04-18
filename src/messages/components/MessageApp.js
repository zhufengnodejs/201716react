import React,{Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
export default class MessageApp extends Component{
    constructor(props){
        super(props);
        //两个同级的子组件需要通信，不能直接通信，需要把状态定义在它们共同的父组件里
        this.state = {messages:[]};
    }
    addMessage = (message)=>{
      this.setState({messages:[...this.state.messages,message]});
    }
    delMessage= (id)=>{
        this.setState({messages:this.state.messages.filter(item=>item.id != id)});
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
                                <MessageList
                                    delMessage={this.delMessage}
                                    messages = {this.state.messages}/>
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