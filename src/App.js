import React from 'react';
import './App.css';
import './components/pages/home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/pages/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

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
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </AlertState>
      </AuthState>
    );
  }
}

export default App;
