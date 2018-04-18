import React,{Component} from 'react';
export default class Message extends Component{
    constructor(){
        super();
        this.state = {time:''};
    }
    tick = ()=>{
        let diff = (Date.now() - (+new Date(this.props.message.createAt)))/1000;
        this.setState({
            time: diff<60?`${Math.max(Math.floor(diff),1)}秒前`:`${Math.floor(diff/60)}分钟前`
        });
    }
    //组件将要挂载的时候
    componentWillMount(){
        this.tick();
       this.timerId = setInterval(this.tick,5000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        let message = this.props.message;
        return (
            <li key={message.id} className="list-group-item">
                {message.username}:{message.content}
                <button
                    onClick={()=>this.props.delMessage(message.id)}
                    className="btn btn-danger btn-xs">删除</button>
                <span className="pull-right">
                    {this.state.time}
                </span>
            </li>
        )
    }
}