import React,{Component} from 'react';

/**
 * 受控组件和非受控组件
 * 受控组件 受控制 input受value控制
 */
export default class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',//用户名
            content:''//内容
        }
    }
    handleSubmit = (event)=>{
        event.preventDefault();//阻止默认事件 阻止 页面刷新
        this.props.addMessage({...this.state,id:Date.now(),createAt:new Date()});
        this.setState({content:''});
    }
    //当我们在文本框中进行输入的时候，会执行此方法
    /**
     * 1. 写二个函数
     * 2. 把要修改的参数名传过来
     * 3. 给DOM增加一个自定义属性进行区分
     * 4. 绑定参数 this.handleChange.bind(this,'username')
     */
    handleChange = (event)=>{
      let val = event.target.value;//取得事件源的value值
      let key = event.target.getAttribute('field');
      this.setState({[key]:val});
    }
    //当组件被挂载到页面之后执行此生命周期方法
    componentDidMount(){
        //this.content就指向了真实的DOM
        this.content.focus();
        this.username.value = localStorage.getItem('username')||'';
    }
    handleUsernameBlur = (event)=>{
        localStorage.setItem('username',event.target.value);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label" htmlFor="username">用户名</label>
                    <input
                        ref ={ref=>this.username = ref}
                        onBlur={this.handleUsernameBlur}
                        field="username"
                        value={this.state.username}
                           onChange={this.handleChange}
                           required={true} id="username" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="content">内容</label>
                    <textarea
                        ref={ref=>this.content = ref}
                        field="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        required={true} name="content" id="content" cols="30" rows="5" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}