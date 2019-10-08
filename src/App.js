import React from 'react';
import './style/App.css';
import Slider from './component/Slider';
import Goal from './component/Goal';
import Wwd from './component/Wwd';
import Contact_us from './component/Contact_us';
import Menu from './component/Menu';
import Footer from './component/Footer';
import './style/bootstrap_neded.sass';


function App() {
  return (
    <div className="App">
        <Menu/>
        <Slider/>
        <Goal/>
        <Wwd/>
        <Contact_us/>
        <Footer/>
    </div>
  );
}

export default App;
