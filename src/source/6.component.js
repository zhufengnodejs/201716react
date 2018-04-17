import React from 'react';
import ReactDOM from 'react-dom';
function Avatar(props){
    return <img className="Avatar"
         src={props.avatarUrl}
         alt={props.name}
    />
}
function formatDate(date){
    return date.toLocaleString();
}
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar {...props.author}/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
let comment= {
    author:{//作者
        name:'zfpx',//用户名
        avatarUrl:'http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg'//用户头像地址
    },
    text:'好图',
    date:new Date()
}
//把comment的属性依次传递给Comment
ReactDOM.render(<Comment {...comment}/>, document.getElementById('root'));