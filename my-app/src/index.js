import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Home from './components/Home';
import Users from './pages/Users';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/users" component={Users}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

