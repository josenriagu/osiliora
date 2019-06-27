import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInventoryItem, updateInventoryItem } from '../../actions';
import { InventoryFormSection } from '../../styled/dashboardStyles';

class InventoryForm extends Component {

   state = {
      form: {
         name: "",
         description: "",
         qty: 0,
         categoryId: "",
         units: ""
      },
   }

   componentDidMount() {
      if (this.props.editMode) {
         this.setState(state => {
            return {
               form: {
                  ...state.form,
                  name: this.props.itemToEdit.name,
                  description: this.props.itemToEdit.description,
                  qty: this.props.itemToEdit.qty,
                  units: this.props.itemToEdit.units
               }
            }
         })
      }
   }

   inputChange = (field, value) => {
      this.setState(state => {
         return {
            form: {
               ...state.form,
               [field]: value
            }
         };
      });
   }
   changeHandler = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      this.inputChange(field, value);
   }
   onAdd = event => {
      event.preventDefault();
      const { name, qty, categoryId, units, description } = this.state.form;
      const newItem = {
         name: name,
         qty: qty,
         categoryId: categoryId,
         units: units,
         imageUrl: '',
         inStock: true,
         description: description
      }
      this.props.addInventoryItem(this.props.userId, newItem)
         .then(() => {
            this.props.history.push("/");
         })
   }
   onUpdate = event => {
      event.preventDefault()
      const { name, qty, categoryId, units, description } = this.state.form;
      const updatedItem = {
         name: name,
         qty: qty,
         categoryId: categoryId,
         units: units,
         imageUrl: '',
         inStock: true,
         description: description
      }
      this.props.updateInventoryItem(this.props.userId, this.props.itemToEdit.itemId, updatedItem)
         .then(() => {
            this.props.history.push("/");
         })
   }
   render() {
      return (
         <InventoryFormSection>
            {
               this.props.editMode
                  ?
                  <h3>Update Inventory Item</h3>
                  :
                  <h3>Add Inventory Item</h3>

            }
            <form onSubmit={event => this.props.editMode ? this.onUpdate(event) : this.onAdd(event)}>
               <div>
                  <label>Name</label>
                  <input
                     autoComplete="name"
                     required
                     type="text"
                     placeholder="Russet Potatoes"
                     name="name"
                     value={this.state.form.name}
                     onChange={this.changeHandler}
                  />
               </div>
               <div>
                  <label>Description</label>
                  <textarea
                     name="description"
                     value={this.state.form.description}
                     id="description"
                     cols="30"
                     rows="4"
                     type="text"
                     placeholder="Description(optional)"
                     onChange={this.changeHandler}
                  />
               </div>
               <div>
                  <label>Quantity</label>
                  <input
                     name="qty"
                     value={this.state.form.qty}
                     autoComplete="quantity"
                     required
                     type="number"
                     placeholder="minimum required is 1"
                     onChange={this.changeHandler}
                  />
               </div>
               <div>
                  <label>Unit</label>
                  <input
                     name="units"
                     value={this.state.form.units}
                     autoComplete="unit"
                     type="text"
                     placeholder="lbs or kilos or grams"
                     onChange={this.changeHandler}
                  />
               </div>
               <div>
                  <label>Select Category</label>
                  <select
                     name="categoryId"
                     required
                     onChange={this.changeHandler}
                  >
                     <option></option>
                     {
                        this.props.category.map((value, idx) => idx !== 0 ? <option key={idx} value={idx}>{value}</option> : null)
                     }
                  </select>
               </div>
               <div>
                  {
                     this.props.editMode
                        ?
                        <button
                           type="submit"
                        >Update Item</button>
                        :
                        <button
                           type="submit"
                        >Create Item</button>
                  }
               </div>
            </form>
         </InventoryFormSection>
      );
   }
}

const mapStateToProps = state => {
   return {
      userId: state.userReducer.userId,
      category: state.userReducer.category,
      editMode: state.userReducer.editMode,
      itemToEdit: state.userReducer.itemToEdit,
      requesting: state.authReducer.requesting
   }
}

export default connect(mapStateToProps, { addInventoryItem, updateInventoryItem })(InventoryForm);