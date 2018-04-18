class ToggleBtn extends Component{
    constructor(props){
        super(props);
        //定义一个私有变量
        this.state = {isToggleOn:false};
    }

    handleClick(){
        this.setState({isToggleOn:!this.state.isToggleOn});
    }
    componentDidMount(){
        this.ele.querySelector('.content').addEventListener('click',this.handleClick.bind(this));
    }
    //用来表明页面上内容的样子
    render(){
        console.log(this.props);
       return (
           `<button class="toggleBtn">${this.props.name}:${this.state.isToggleOn?'关':'开'}
      <span class="content">内容</span>
</button>`
       )
    }
}