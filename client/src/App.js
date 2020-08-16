import React, { Fragment } from 'react';
import './App.css';

import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends React.Component {
  componentDidMount() {
    document
      .querySelector(':root')
      .style.setProperty('--vh', window.innerHeight / 100 + 'px');
  }
  render() {
    return (
      <AuthState>
        <AlertState>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        </AlertState>
      </AuthState>
    );
  }
}

export default App;
