import React,{Component} from 'react';
export default class MessageList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((message)=>(
                        <li key={message.id} className="list-group-item">
                            {message.username}:{message.content}
                            <button className="btn btn-danger btn-xs">删除</button>
                            <span className="pull-right">{message.createAt.toLocaleString()}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}