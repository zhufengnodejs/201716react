import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 可以通过函数定义一个组件，一个函数就是一个组件
 *
 * @param props 属性对象
 * return 一个用来在界面上显示的React元素
 * @constructor
 */
/*function Welcome(props){
  return <h1>hello {props.name}</h1>;
}*/
//通过类来定义一个组件，类必须提供一个render方法，
//如何把一个函数式组件变成一个类组件，先声明一个类，类名就是函数名，类里定义一个render方法，里面的函数体就是原来的函数体，也要返回一个React元素
/**
 * 类组件是如何渲染的
 * 1. 如果发现Welcome是一个类
 * 2. 先封装属性对象 {name:'zfpx',age:9}
 * 3. 创建一个Welcome类的实例,   new Welcome({name:'zfpx',age:9})
 * 4. 调用实例的render方法返回一个React元素
 * 5. 渲染此React元素到真实DOM上
 */
class Welcome extends React.Component{
    constructor(props){
        super(props);
        //会把得到的属性对象传递给实例的props属性
        //this.props = props;
    }
    //render一定要返回并且只能返回一个顶级元素
    render(){
        return <h1>hello {this.props.name}</h1>;
    }
}
/**
 * 在React组件分为二种
 * 一种叫内置组件 span div p ，内置组件首字符都是小写
 * 一种叫自定义组件,这些组件需要返回一个内置组件,自定义组件首字母都是大写
 */
//Warning: The tag <welcome> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
//警告:welcome标签在浏览器中不能识别，如果你想渲染一个React组件的话，它的名字要以大写字母开头
//在render时候，会收集到用户传递给Welcome组件的的属性，然后封装成一个对象。{name:'zfpx',age:9}
/**
 * render
 * 1.得到这个组件函数。
 * 2. 封装属性对象
 * 3.执行此组件函数并且把属性对象传进去，然后得到返回的React元素，然后把返回的react元素变成真实的DOM元素并插入到容器内部。
 */
ReactDOM.render(<Welcome name='zfpx' age={9}/>, document.getElementById('root'));