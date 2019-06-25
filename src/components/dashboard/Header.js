import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HeaderStyle } from '../../styled/dashboardStyles';

const Header = props => {
   return (
      <HeaderStyle>
         <div>
            <h2>I'll Serve Soup</h2>
         </div>
         <div>
            <NavLink
               to="/"
            >Inventory</NavLink>
            <NavLink
               to={
                  props.editMode
                     ?
                     "/edit-inventory"
                     :
                     "/add-inventory"
               }
            >Add Inventory</NavLink>
         </div>
      </HeaderStyle>
   );
}

const mapStateToProps = state => {
   return {
      editMode: state.userReducer.editMode
   }
}

export default connect(mapStateToProps, {})(Header);