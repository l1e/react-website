import React from 'react';
import './style/App.css';

import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import Services from './pages/Services';


import {BrowserRouter  as Router ,Route, Link, Switch} from "react-router-dom";
import './style/bootstrap_neded.sass';
import Menu from "./component/Menu";



function App() {
  return (
        <Router>
            <div className="App">
                <Menu/>
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/AboutUs">
                        <AboutUs />
                    </Route>

                    <Route path="/Contact">
                        <Contact />
                    </Route>

                    <Route path="/OurWork">
                        <OurWork />
                    </Route>

                    <Route path="/Services">
                        <Services />
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
