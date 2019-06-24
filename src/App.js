import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { GlobalStyle } from './styled/GlobalStyles';
import Login from './components/userAuth/Login';
import Register from './components/userAuth/Register';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Route
          path="/login"
          render={props => {
            return <Login {...props} />
          }}
        />
        <Route
          path="/register"
          render={props => {
            return <Register {...props} />
          }}
        />
      </>
    );
  };
};