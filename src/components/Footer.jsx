import React from 'react';
import cl from './Footer.module.css';

const Footer = () => {
    return (
        <div className={cl.container}>
            <img src={require("./images/ellipse.png")} alt="" />
            <div className={cl.break}></div>
            <span>2022 - 2022 quizbox.net</span>
        </div>
    )
}

export default Footer