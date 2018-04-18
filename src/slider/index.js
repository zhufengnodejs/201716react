import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';
import './index.css'
let images = [
    require('./images/1.jpg'),
    require('./images/2.jpg'),
    require('./images/3.jpg')
]
/**
 * images 所有的图片
 * delay 每隔几秒轮播一次
 * speed 每次轮播的时间
 * autoPlay 是否启动自动轮播
 * arrows 是否显示箭头
 * dots 是否显示点状导航
 */
ReactDOM.render((
    <Slider
        images={images}
        delay={3}
        speed={1}
        autoPlay={true}
        arrows={true}
        dots={true}
    />
),document.querySelector('#root'));