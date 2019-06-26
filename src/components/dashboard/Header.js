import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { HeaderStyle } from '../../styled/dashboardStyles';

class Header extends Component {

   onLogout() {
      localStorage.clear();
      window.location.reload();
   }

   render() {
      return (
         <HeaderStyle>
            <div>
               <Link to="/">
                  <h2>I'll Serve Soup</h2>
               </Link>
            </div>
            <div>
               <NavLink
                  to="/"
               >Inventory</NavLink>
               <NavLink
                  to={
                     this.props.editMode
                        ?
                        "/edit-inventory"
                        :
                        "/add-inventory"
                  }>{this.props.editMode
                     ?
                     "Edit Inventory"
                     :
                     "Add Inventory"
                  }</NavLink>
            </div>
            <button onClick={() => this.onLogout()} >
               Logout
            </button>
         </HeaderStyle>
      );
   }
}

const mapStateToProps = state => {
   return {
      editMode: state.userReducer.editMode
   }
}

export default connect(mapStateToProps, {})(Header);