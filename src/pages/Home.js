import React, {Fragment} from 'react';

import Menu from '../component/Menu';
import Slider from '../component/Slider';
import Goal from '../component/Goal';
import Wwd from '../component/Wwd';
import Contact_us from '../component/Contact_us';




function Home() {
    return (
        <Fragment>
            <Slider/>
            <Goal/>
            <Wwd/>
            <Contact_us/>
        </Fragment>
    );
}

export default Home;
