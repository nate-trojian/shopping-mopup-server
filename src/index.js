import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';


const player1Items = {
  "Apple Pie": {
    "Pie Crust": {
      "Flour": null,
      "Butter": null
    },
    "Apples": null,
    "Sugar": null
  },
  "Lasagna": {
    "Pasta": null,
    "Tomato Sauce": {
      "Tomatoes": null,
      "Garlic": null
    },
    "Cheese": null,
    "Lasagna Filling": {
      "Ground Beef": null,
      "Spinach": null
    }
  },
  "Tuna Casserole": {
    "Canned Tuna": null,
    "Pasta": null,
    "Onions": null
  },
  "Egg Salad Sandwich": {
    "Bread": null,
    "Eggs": null,
    "Mayonnaise": null
  },
  "Sloppy Joes": {
    "Ground Beef": null,
    "Tomato Sauce": {
      "Tomatoes": null,
      "Garlic": null
    },
    "Bread": null
  },
  "Chili": {
    "Ground Beef": null,
    "Canned Beans": null,
    "Tomatoes": null,
    "Garlic": null,
    "Onions": null
  },
  "Bread Pudding": {
    "Bread": null,
    "Sugar": null,
    "Eggs": null,
    "Milk": null
  }
};

const player2Items = {
  "Apple Pie": {
    "Pie Crust": {
      "Flour": null,
      "Butter": null
    },
    "Apples": null,
    "Sugar": null
  },
  "Lasagna": {
    "Pasta": null,
    "Tomato Sauce": {
      "Tomatoes": null,
      "Garlic": null
    },
    "Cheese": null,
    "Lasagna Filling": {
      "Ground Beef": null,
      "Spinach": null
    }
  },
  "Tuna Sandwich": {
    "Bread": null,
    "Canned Tuna": null,
    "Mayonnaise": null
  },
  "Beef Stew":{
    "Ground Beef": null,
    "Potatoes": null,
    "Carrots": null,
    "Onions": null
  },
  "Carrot Cake": {
    "Flour": null,
    "Butter": null,
    "Sugar": null,
    "Carrots": null
  },
  "Quiche": {
    "Pie Crust": {
      "Flour": null,
      "Butter": null
    },
    "Eggs": null,
    "Cheese": null,
    "Quiche Filling": {
      "Spinach": null,
      "Spam": null
    }
  },
  "Pasta Salad": {
    "Pasta": null,
    "Mayonnaise": null
  }
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
