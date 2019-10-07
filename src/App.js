import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import Slider from './component/Slider';
import Goal from './component/Goal';
import Wwd from './component/Wwd';
import Contact_us from './component/Contact_us';

function App() {
  return (
    <div className="App">
        <Slider/>
        <Goal/>
        <Wwd/>
        <Contact_us/>
    </div>
  );
}

export default App;
