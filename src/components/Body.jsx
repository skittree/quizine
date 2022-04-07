import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Body.module.css';
import Carousel from './Carousel';

const Body = () => {
    return (
        <div className={cl.container}>
            <div className={cl.upper}>
                <div className={cl.upper__content}>
                    <div className={cl.card}>
                        <p>Thousands of trivia questions on hundreds of topics.</p>
                        <Link to='/game' className={cl.link}>play</Link>
                    </div>
                </div>
            </div>
            <div className={cl.lower}>
                <div className={cl.lower__content}>
                    <div className={cl.carousel}>
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body