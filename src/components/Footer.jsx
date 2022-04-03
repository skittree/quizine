import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={require("./images/ellipse.png")} alt="" />
            <div className='break'></div>
            <span>2022 - 2022 quizbox.net</span>
        </div>
    )
}

export default Footer