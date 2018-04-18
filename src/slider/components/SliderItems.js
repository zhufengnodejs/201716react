import React,{Component} from 'react';
export default class SliderItems extends Component{
    render(){
        let style = {
            width:this.props.images.length*400+'px',
            left:this.props.index*-400+'px',
            transition:`left ${this.props.speed}s linear`
        }
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((image,index)=>(
                        <li key={index} className="slider">
                            <img src={image}/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}