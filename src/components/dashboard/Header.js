import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { LoaderDiv, HeaderStyle } from '../../styled/dashboardStyles';

class Header extends Component {
   state = {
      isOpen: false
   }

   toggleOpen = () => {
      this.setState(state => {
         return {
            ...state,
            isOpen: !this.state.isOpen
         }
      })
   }

   onLogout = () => {
      localStorage.clear();
      window.location.reload();
   }

   render() {
      const style = { display: this.state.isOpen ? "flex" : "none" }
      if (this.props.requesting) {
         return <LoaderDiv>
            <Loader
               type="Circles"
               color="#6ea22c"
               height="50px"
               width="50px"
            /></LoaderDiv>
      }
      return (
         <HeaderStyle>
            <div>
               <Link to="/">
                  <h2>I'll Serve Soup</h2>
               </Link>
               <div onClick={this.toggleOpen}>
                  <img src="/assets/images/menu.png" alt="menu button" />
               </div>
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
            <button
               onClick={() => this.onLogout()} >
               Logout
            </button>
            {/* mobile menu section */}
            <section style={style}>
               <NavLink
                  onClick={this.toggleOpen}
                  to="/"
               >Inventory</NavLink>
               <NavLink
                  onClick={this.toggleOpen}
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
               <button
                  style={style}
                  onClick={() => this.onLogout()}>
                  Logout
               </button>
            </section>
         </HeaderStyle>
      );
   }
}

const mapStateToProps = state => {
   return {
      editMode: state.userReducer.editMode,
      requesting: state.authReducer.requesting
   }
}

export default connect(mapStateToProps, {})(Header);