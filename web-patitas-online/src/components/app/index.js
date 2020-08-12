import React from 'react';//ESTO TIENE QUE ESTAR SIEMPRE
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './index.css';

import NavBar from '../NavBar'
import Footer from '../Footer'
import Home from '../../pages/home';
import Nosotros from '../../pages/nosotros';
import Servicios from '../../pages/servicios';

function app() {

    return (
      <Router>
        <NavBar></NavBar>
        <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/nosotros">
            <Nosotros/>
          </Route>
          
          <Route path="/servicios">
            <Servicios/>
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
    );  
}

export default app;//hace q pueda ir a otro componente y exportarlo
