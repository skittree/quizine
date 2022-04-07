import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./Game.css";

function Game() {
    return (
        <div className="GameApp">
            <Header></Header>
            <div className="game-wrapper">
                <div className="game-container">
                    <div className="question-container">
                        <div className="info-container">
                            <div className="info">
                                <h1 id="h1">Question 1</h1>
                                <h2 id="h2">Geography</h2>
                            </div>
                            <div className="timer">
                                <h1 id="h1">05:00</h1>
                            </div>
                        </div>
                        <div className="question-text">
                            <a id="text">Taiwan is a...</a>
                        </div>
                        <div className="correct-answer"></div>
                    </div>
                    <div className="answer-container">
                        <div className="input-container">
                            <input className="answer-bar" id="text"></input>
                            <div className="input-buttons">
                                <button className="submit" id="input-button">SUBMIT</button>
                                <button className="skip" id="input-button">SKIP</button>
                            </div>
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar">

                            </div>
                            <div className="question-count">
                                <a id="text">0/10</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;