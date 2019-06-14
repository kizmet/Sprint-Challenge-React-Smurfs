import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

import './index.css';
import App from './App';
import 'normalize.css';


const AppWithRouter = withRouter(App);



ReactDOM.render(
    <Router>
    <AppWithRouter />
    </Router>
    , 
    document.getElementById('root')
);