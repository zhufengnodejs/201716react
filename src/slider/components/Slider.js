import React,{Component} from 'react';
export default class Slider extends Component{
    constructor(){
        super();
        this.state = {index:0};
    }
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState({index:this.state.index+1});
        },this.props.delay*1000);
    }
    render(){
        let style = {
           width:this.props.images.length*400+'px',
           left:this.state.index*-400+'px',
           transition:`left ${this.props.speed}s linear`
        }
        return (
            <div className="slider-wrapper">
                <ul className="sliders" style={style}>
                    {
                        this.props.images.map((image,index)=>(
                            <li className="slider">
                                <img src={image}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
