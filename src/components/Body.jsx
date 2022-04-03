import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import './Body.css';
import Carousel from './Carousel';

const Body = () => {
    return (
        <div className='body-container'>
            <div className='upper'>
                <div className='upper__content'>
                    <div className='card'>
                        <p>Thousands of trivia questions on hundreds of topics.</p>
                        <a>play</a>
                    </div>
                </div>
            </div>
            <div className='lower'>
                <div className='lower__content'>
                    <div className='carousel'>
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body