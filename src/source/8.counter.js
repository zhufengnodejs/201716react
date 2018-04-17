import React from 'react';
import ReactDOM from 'react-dom';
//写一个计数器的组件
/**
 * 1. 不要直接更新状态
 */
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number:0};
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));