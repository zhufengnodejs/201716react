import React from 'react';
import ReactDOM from 'react-dom';
//写一个计数器的组件
/**
 * 1. 不要直接更新状态,必须用setState,否则页面不刷新
 * 2.
 */
function Show(props){
    return <h1>{props.number}</h1>
}
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number:0,name:'zfpx'};
        //不是在使用的时候bind,而是在构造函数里集中bind
        //this.add = this.add.bind(this);
    }

    /**
     * 1.bind
     * 2.在构造函数里集中bind,而不需要要使用的时候bind
     * 3.这是ES7属性初始化语法
     * 4.可以定义新的函数 {()=>this.add()}
     */
    add=()=>{
        //Cannot read property 'state' of undefined
        //默认情况下，类的方法直接调用的话this=undefined
        //构造函数 生命周期函数中(包括render) this都指向实例
        //this.state = {number:this.state.number+1};

        //setState可以有是异步的
       /* this.setState({number:this.state.number+1},()=>{
            this.setState({number:this.state.number+1},()=>{
                this.setState({number:this.state.number+1});
            });
        });*/
        //prevState是上一个状态对象，返回值是新的状态对象
        this.setState(prevState=>({number:prevState.number+1}));
        this.setState(prevState=>({number:prevState.number+1}));
        this.setState(prevState=>({number:prevState.number+1}));
    }
    minus=()=>{
        this.setState(prevState=>({number:prevState.number-1,name:undefined}));
    }

    /**
     * function setState(partialState){
     *   this.state = Object.assign({},this.state,partialState);
     * }
     *
     */
    render(){
        return (
            <div>
                <p>{this.state.name}:{this.state.number}</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
                <Show number={this.state.number}/>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));