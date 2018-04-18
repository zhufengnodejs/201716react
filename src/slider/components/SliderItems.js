import React,{Component} from 'react';
export default class SliderItems extends Component{
    render(){
        let style = {
            width:(this.props.images.length+1)*400+'px',
            left:this.props.index*-400+'px',
            transition:`left ${this.props.speed}s linear`
        }
        return (
            <ul
                ref={this.props.getSliders}
                className="sliders" style={style}>
                {
                    this.props.images.map((image,index)=>(
                        <li key={index} className="slider">
                            <img src={image}/>
                        </li>
                    ))
                }
                <li key={this.props.images.length} className="slider">
                    <img src={this.props.images[0]}/>
                </li>
            </ul>
        )
    }
}