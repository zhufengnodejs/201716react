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
        if(index>=this.props.images.length+1){
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = '0px';
            //强行重绘 重排,重新计算left
            window.getComputedStyle(this.sliders,null).left;
            //DOM是有优化的
            this.sliders.style.transition = `left ${this.props.speed}s linear`;
            index = 1;
            return  this.setState({index});
        }
        if(index<0){
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = this.props.images.length*-400+'px';
            window.getComputedStyle(this.sliders,null).left;
            this.sliders.style.transition = `left ${this.props.speed}s linear`;
            index = this.props.images.length-1;
            return  this.setState({index});
        }
        this.setState({index});
    }
    getSliders = (sliders)=>{
        this.sliders = sliders;
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
                    getSliders={this.getSliders}
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
