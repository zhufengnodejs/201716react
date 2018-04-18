import React,{Component} from 'react';
import SliderItems from './SliderItems';
import SliderArrows from './SliderArrows';
import SliderDots from './SliderDots';
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
        if(index<0){
            index = this.props.images.length-1;
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

        return (
            <div
                className="slider-wrapper"
                onMouseOut={this.go}
                onMouseOver={()=>clearInterval(this.timerID)}>
                <SliderItems
                    images = {this.props.images}
                    index={this.state.index}
                    speed={this.props.speed}
                />
                <SliderArrows
                    turn={this.turn}
                />
                <SliderDots
                    images = {this.props.images}
                    index={this.state.index}
                    turn = {this.turn}
                />
            </div>
        )
    }
}
