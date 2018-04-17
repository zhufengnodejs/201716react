import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 组件和状态都是组件自身的数据，可以读取
 * 1. 属性是由父组件传入自身，不能修改。
 * 2  状态是自已维护的，组件自身的私有数据，自己初始化，自己维护 ，自己修改
 */
class Clock extends React.Component {
    constructor() {
        super();
        //可以在类的构造函数初始化状态对象
        this.state = {date: new Date()};
    }

    //此组件将要挂载的时候执行此方法
    componentWillMount() {
        console.log('componentWillMount');

    }

    /**
     * setState(newState){
     *     this.state = newState;
     * }
     */
    //组件已经挂载到页面后执行此方法
    //React16版本后 componentWillMount为了优化，可能会触发多次
    componentDidMount() {
        console.log('componentDidMount');
        this.timer = setInterval(() => {
            //设置状态，传入一个新的状态用来更新老状态
            //setState除了修改状态外，还有一个功能就是重新渲染,只有调用了setState页面才会重新刷新
            //Do not mutate state directly. Use setState()
            //this.state = {date:new Date()};
            this.setState({date: new Date()});
        }, 1000);
    }
    //组件将要被卸载
    //Can't call setState (or forceUpdate) on an unmounted component.
    // This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    //不能在一个已经卸载的组件上调用setState方法或forceUpate方法
    //这个可能会指示说你的应用中出现了内存泄露
    //为了修复，你在组件将要卸载的方法中需要取消所有的订阅和异步任务
    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timer);
    }

    /**
     * 1.事件名称是驼峰命名法 而非全小 onclick ->onClick  onkeydown=>onKeyDown
     * 2.事件的值是一个函数，而非字符串 onclick="handleClick()" onClick={}
     * @returns {*}
     */
    handleClick(){
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1>现在时间是</h1>
                <h2>时间:{this.state.date.toLocaleString()}</h2>
                <button onClick={this.handleClick} >销毁</button>
            </div>
        )
    }
}

ReactDOM.render(<Clock/>, document.querySelector('#root'));