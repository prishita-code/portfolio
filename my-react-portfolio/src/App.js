import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'isomorphic-fetch';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Skillset from './pages/Skillset';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/all.min.css';
import './styles/style.css';
import './styles/responsive.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/journey" component={Journey} />
                    <Route path="/technology" component={Technology} />
                    <Route path="/skillset" component={Skillset} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;