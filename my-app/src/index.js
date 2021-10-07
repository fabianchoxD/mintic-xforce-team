import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Home from './components/Home';
import Users from './pages/Users';
import Sales from './pages/Sales';
import Products from './pages/Products';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/sales" component={Sales}/>
        <Route exact path="/products" component={Products}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

