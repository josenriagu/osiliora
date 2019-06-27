import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { GlobalStyle } from './styled/GlobalStyles';
import Header from './components/dashboard/Header';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/userAuth/Register';
import Login from './components/userAuth/Login';
import Home from './components/dashboard/Home';
import InventoryForm from './components/dashboard/InventoryForm';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {
          localStorage.getItem('token')
            ?
            <Header />
            :
            null
        }
        <PrivateRoute
          exact
          path="/"
          render={props => <Home {...props} />}
        />
        <PrivateRoute
          exact
          path={
            this.props.editMode
              ?
              "/edit-inventory"
              :
              "/add-inventory"
          }
          render={props => <InventoryForm {...props} />}
        />
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

const mapStateToProps = state => {
  return {
    editMode: state.userReducer.editMode
  }
}

export default connect(mapStateToProps, {})(App);