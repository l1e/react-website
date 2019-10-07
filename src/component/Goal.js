import React from 'react';
import '../style/Goal.css';
import goalImg from '../img/goal.jpg';

function Goal() {
    return (
        <div className="goal">
            <div className="goal_left">
                <h1 className="goal_title">THE RESULT IS OUR GOAL</h1>
                <p className="goal_text">
                    We don't stop our growing with every new task. Each time making all to get the best results with the maximum quality from our side
                </p>
            </div>
            <div className="goal_right">
                <img className='goal_img' src={goalImg} alt=""/>
            </div>
            <svg className="goal_shadow_bottom" preserveAspectRatio="none" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>
        </div>
    );
}

export default Goal;
