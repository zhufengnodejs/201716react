import React,{Component} from 'react';
export default class Slider extends Component{
    constructor(){
        super();
        this.state = {index:0};
    }
    componentDidMount(){
       this.go();
    }
    //移动的距离
    turn = (step)=>{
        let index = this.state.index+step;
        if(index>=this.props.images.length){
            index =  0;
        }
        this.setState({index});
    }
    //开始启动自动轮播
    go = ()=>{
        this.timerID = setInterval(()=>{
            this.turn(1);
        },this.props.delay*1000);
    }
    render(){
        let style = {
           width:this.props.images.length*400+'px',
           left:this.state.index*-400+'px',
           transition:`left ${this.props.speed}s linear`
        }
        return (
            <div
                className="slider-wrapper"
                onMouseOut={this.go}
                onMouseOver={()=>clearInterval(this.timerID)}>
                <ul className="sliders" style={style}>
                    {
                        this.props.images.map((image,index)=>(
                            <li key={index} className="slider">
                                <img src={image}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
