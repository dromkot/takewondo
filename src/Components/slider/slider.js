import React, {Component} from 'react';
import Slider from "react-slick";
import slide__img from '../../img/home/index/slider-1.png'

const Slide__info=()=>{
    return(
        <div className='slide__info'>
            <span>
                Thailand, Russia Win Last Golds at 2018 Taoyuan World  Taekwondo Grand Prix
            </span>
        </div>
    )
};
class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay:true,
            autoplaySpeed: 3000
        };
        return (
            <Slider {...settings}>
                <div className='slide__item'>
                    <img src={slide__img} alt="img"/>
                    <Slide__info/>
                </div>
                <div className='slide__item'>
                    <img src={slide__img} alt="img"/>
                    <Slide__info/>
                </div>
                <div className='slide__item'>
                    <img src={slide__img} alt="img"/>
                    <Slide__info/>
                </div>
                <div className='slide__item'>
                    <img src={slide__img} alt="img"/>
                    <Slide__info/>
                </div>
                <div className='slide__item'>
                    <img src={slide__img} alt="img"/>
                    <Slide__info/>
                </div>
                <div className='slide__item'>
                    <img src={slide__img} alt="img"/>
                    <Slide__info/>
                </div>
            </Slider>

        );
    }
}

export default SimpleSlider;