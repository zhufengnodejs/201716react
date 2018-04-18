import React,{Component} from 'react';
export default class SliderArrows extends Component {
    render() {
        return (
            <div className="slider-arrows">
                <span
                    onClick={()=>this.props.turn(-1)}
                    className="slider-arrow arrow-left">&lt;</span>
                <span
                    onClick={()=>this.props.turn(1)}
                    className="slider-arrow arrow-right">&gt;</span>
            </div>
        )
    }
}