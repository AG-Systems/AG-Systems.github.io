import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';


import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
//import Footer from "./components/Footer.jsx";

ReactDOM.render(
      <BrowserRouter >
          {/*<Route exact path="/*" render={(props) => <Navbar {...props} /> } />*/}
          <div id="content-main">
             <Route exact path="/" render={(props) => <Home {...props} /> } />
          </div>
          {/* <Route exact path="/*" render={(props) => <Footer {...props} /> } /> */}
      </BrowserRouter >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister(); default
serviceWorker.register();
