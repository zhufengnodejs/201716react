import React,{Component} from 'react';
import Message from './Message';
export default class MessageList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((message)=>(
                        <Message delMessage={this.props.delMessage} key={message.id}  message={message}/>
                    ))
                }
            </ul>
        )
    }
}