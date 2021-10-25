import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Home from './components/Home';
import Users from './pages/Users/Users';
import Sales from './pages/Sales/Sales';
import Products from './pages/Products/Products';
import Seller from './components/SellerHome';
import Pending from './components/PendingHome';

if(process.env.NODE_ENV !== 'production'){
  console.log("We're not ready to production yet.");
  require('dotenv').config();
}
ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/sales" component={Sales}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/seller" component={Seller}/>
        <Route exact path="/pending" component={Pending}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);