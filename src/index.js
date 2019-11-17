import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';


const player1Items = {
  "Apple Pie": {
    "Apples": null,
    "Crust": {
      "Milk": null,
      "Flour": null
    },
    "Sugar": null
  },
  "Chicken Pot Pie": {
    "Chicken": null,
    "Crust": {
      "Milk": null,
      "Flour": null
    },
    "A Pot": null
  },
};

const player2Items = {
  "ApplePie": {
    "Apples": null,
    "Crust": {
      "Milk": null,
      "Flour": null
    },
    "Sugar": null
  },
  "Chicken Pot Pie": {
    "Chicken": null,
    "Crust": {
      "Milk": null,
      "Flour": null
    },
    "A Pot": null
  },
};


ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Redirect to="/player1" />
    </Route>
    <Route path="/player1">
      <App items={player1Items} />
    </Route>
    <Route path="/player2">
      <App items={player2Items} />
    </Route>
  </Router>
  , document.getElementById('root'));
