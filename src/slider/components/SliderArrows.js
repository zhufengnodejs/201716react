import React,{Component} from 'react';
export default class SliderArrows extends Component {
    render() {
        return (
            <div className="slider-arrows">
                <span className="slider-arrow arrow-left">&lt;</span>
                <span className="slider-arrow arrow-right">&gt;</span>
            </div>
        )
    }
}