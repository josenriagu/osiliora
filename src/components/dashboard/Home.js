import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInventory, toggleEdit, setEdit } from '../../actions/';
import InventoryItem from './InventoryItem';
import { HomeDiv } from '../../styled/dashboardStyles'

class Home extends Component {
   state = {
      displayMenu: false
   }

   componentDidMount() {
      this.props.fetchInventory(this.props.userId)
   }

   showDropdownMenu = (event) => {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
         document.addEventListener('click', this.hideDropdownMenu);
      });
   }

   hideDropdownMenu = () => {
      this.setState({ displayMenu: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu);
      });

   }

   clickHandler = id => {
      this.props.toggleEdit(true);
      const itemToEdit = this.props.inventory.filter(item => item.itemId === id)
      console.log(itemToEdit);
      this.props.setEdit(itemToEdit);
      this.props.history.push("/edit-inventory")
   }
   render() {
      return (
         <HomeDiv>
               {
                  this.props.inventory.map((item, index) => {
                     return <InventoryItem
                        index={index}
                        item={item}
                        clickHandler={this.clickHandler}
                     />
                  })
               }
         </HomeDiv>
      );
   }
}

const mapStateToProps = state => {
   return {
      userId: state.userReducer.userId,
      inventory: state.userReducer.inventory
   }
}

export default connect(mapStateToProps, { fetchInventory, toggleEdit, setEdit })(Home);