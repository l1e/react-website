import React from 'react';
import '../style/Slider.css';

function Slider() {
    return (
        <div className="Slider">
            <div className="company-name">
                <p className="company-name__text">Vepbit</p>
            </div>
            <div className="slogan-center">
                <p className="slogan-center_text">Helping grow your business </p>
            </div>

            <div className="bottom-slogan">
                <p className="bottom-slogan_text">Imagine. Discuss. Develop.</p>
            </div>
            <svg className="slider_shadow_bottom" preserveAspectRatio="none" viewBox="0 0 100 100"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 C50 100 50 100 100 0 Z"></path>
            </svg>

        </div>
    );
}

export default Slider;
