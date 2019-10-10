import React from 'react';

import Menu from '../component/Menu';
import Slider from '../component/Slider';
import Goal from '../component/Goal';
import Wwd from '../component/Wwd';
import Contact_us from '../component/Contact_us';
import Footer from '../component/Footer';



function Home() {
    return (
        <div>
            <Slider/>
            <Goal/>
            <Wwd/>
            <Contact_us/>
            <Footer/>
        </div>
    );
}

export default Home;
