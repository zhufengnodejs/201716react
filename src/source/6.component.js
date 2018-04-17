import React from 'react';
import ReactDOM from 'react-dom';
//属性一般用来表示组件实例的固有的东西。
//人的性别 血型 DNA。自己可以读，但是不能改
function Avatar(props){
    //Cannot assign to read only property 'name' of object
    //props.name = 'xxxx';
    return <img className="Avatar"
         src={props.avatarUrl}
         alt={props.name}
    />
}
function formatDate(date){
    return date.toLocaleString();
}
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar {...props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
//author user
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
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