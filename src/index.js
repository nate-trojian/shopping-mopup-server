import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';


const player1Items = {"Tuna Casserole":{"Canned Tuna":null,"Pasta":null,"Onions":null},"Sloppy Joes":{"Ground Beef":null,"Tomato Sauce":{"Tomatoes":null,"Garlic":null},"Bread":null},"Lasagna":{"Pasta":null,"Tomato Sauce":{"Tomatoes":null,"Garlic":null},"Cheese":null,"Lasagna Filling":{"Ground Beef":null}},"Egg Salad Sandwich":{"Bread":null,"Eggs":null,"Mayonaise":null},"Chili":{"Ground Beef":null,"Canned Beans":null,"Tomatoes":null,"Garlic":null,"Onions":null},"Bread Pudding":{"Bread":null,"Sugar":null,"Eggs":null,"Milk":null},"Apple Pie":{"Pie Crust":{"Flour":null,"Butter":null},"Apples":null,"Sugar":null}};

const player2Items = {"Tuna Sandwich":{"Canned Tuna":null,"Mayonaise":null,"Bread":null},"Pasta Salad":{"Pasta":null,"Mayonaise":null,"Onions":null,"Tomatoes":null},"Lasagna":{"Pasta":null,"Tomato Sauce":{"Tomatoes":null,"Garlic":null},"Cheese":null,"Lasagna Filling":{"Ground Beef":null}},"Carrot Cake":{"Flour":null,"Butter":null,"Sugar":null,"Carrots":null},"Beef Stew":{"Ground Beef":null,"Potatoes":null,"Carrots":null,"Onions":null},"Apple Pie":{"Pie Crust":{"Flour":null,"Butter":null},"Apples":null,"Sugar":null},"Quiche":{"Pie Crust":{"Flour":null,"Butter":null},"Eggs":null,"Cheese":null,"Quiche Filling":{"Spinach":null}}};


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
