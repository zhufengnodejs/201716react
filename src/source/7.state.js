import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
    render(){
        return (
            <div>
                <h1>现在时间是</h1>
                <h2>时间:{this.props.date.toLocaleString()}</h2>
            </div>
        )
    }
}
function tick(){
   ReactDOM.render(<Clock date={new Date()}/>,document.querySelector('#root'));
}
setInterval(tick,1000);