import React from 'react';
import '../style/Wwd.css';
import wwd_php from '../img/wwd_php.png';
import wwd_javascript from '../img/wwd_javascript.png';
import wwd_react_native from '../img/wwd_react_native_b-1.png';
import wwd_html from '../img/wwd_html-5-logo.png';
import wwd_css from '../img/wwd_css-3.png';
import wwd_photoshop from '../img/wwd_adobe-photoshop.png';


function Wwd() {
    return (
        <div className="Wwd">
            <h1 className="wwd_title"> What we do</h1>
            <p className="wwd_desc">Our capibilities</p>
            <div className="boxes">
                <div className="box">
                    <img src={wwd_php} alt="" className="box_img"/>
                    <p className="box_text">javascript</p>
                </div>
                <div className="box">
                    <img src={wwd_javascript} alt="" className="box_img"/>
                    <p className="box_text">React native</p>
                </div>
                <div className="box">
                    <img src={wwd_react_native} alt="" className="box_img"/>
                    <p className="box_text">php</p>
                </div>
            </div>
            <div className="boxes">
                <div className="box">
                    <img src={wwd_html} alt="" className="box_img"/>
                    <p className="box_text">html</p>
                </div>
                <div className="box">
                    <img src={wwd_css} alt="" className="box_img"/>
                    <p className="box_text">css</p>
                </div>
                <div className="box">
                    <img src={wwd_photoshop} alt="" className="box_img"/>
                    <p className="box_text">photoshop</p>
                </div>
            </div>
            <a className='wwd_button' href='#'>
                List of services
            </a>
            <svg className="wwd_shadow_bottom" preserveAspectRatio="none" viewBox="0 0 100 100"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 C 50 100 80 100 100 0 Z" ></path>
            </svg>
        </div>
    );
}

export default Wwd;

