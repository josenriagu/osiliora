import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInventory, toggleEdit, setEdit, deleteInventoryItem } from '../../actions/';
import InventoryItem from './InventoryItem';
import { HomeWrapperDiv, FilterDiv, InventoryDiv } from '../../styled/dashboardStyles'

class Home extends Component {
   state = {
      category: 0
   }

   componentDidMount() {
      this.props.fetchInventory(this.props.userId)
   }

   filterCat = (event) => {
      const value = event.target.value;
      this.setState(state => {
         return {
            ...state,
            category: Number(value)
         }
      })
   }

   onEdit = id => {
      this.props.toggleEdit(true);
      const itemToEdit = this.props.inventory.find(item => item.itemId === id)
      this.props.setEdit(itemToEdit);
      this.props.history.push("/edit-inventory")
   }

   onDelete = itemId => {
      this.props.deleteInventoryItem(this.props.userId, itemId)
         .then(() => this.props.fetchInventory(this.props.userId))
   }
   
   render() {
      return (
         <HomeWrapperDiv>
            <FilterDiv>
               <p>Filter by Category</p>
               <select
                  name="categoryId"
                  required
                  onChange={this.filterCat}
               >
                  {
                     this.props.category.map((value, idx) => {
                        return <option key={idx} value={idx}>{value}</option>
                     })
                  }
               </select>
            </FilterDiv>
            <InventoryDiv>
               {
                  (this.props.inventory.length === 0)
                     ?
                     <h3>No items in inventory yet.</h3>
                     :
                     this.props.inventory.filter(item => this.state.category === 0 ? item : item.categoryId === this.state.category).map(item => {
                        return <InventoryItem
                           key={item.itemId}
                           category={this.props.category}
                           item={item}
                           onEdit={this.onEdit}
                           onDelete={this.onDelete}
                        />
                     })
               }
            </InventoryDiv>
         </HomeWrapperDiv>
      );
   }
}

const mapStateToProps = state => {
   return {
      userId: state.userReducer.userId,
      inventory: state.userReducer.inventory,
      category: state.userReducer.category
   }
}

export default connect(mapStateToProps, { fetchInventory, toggleEdit, setEdit, deleteInventoryItem })(Home);