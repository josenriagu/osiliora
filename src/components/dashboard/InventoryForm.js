import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInventoryItem } from '../../actions';
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
   onSubmit = event => {
      event.preventDefault()
      const newItem = {
         name: this.state.form.name,
         qty: this.state.form.qty,
         categoryId: this.state.form.categoryId,
         units: this.state.form.units,
         imageUrl: '',
         inStock: true,
         description: this.state.form.description
      }
      this.props.addInventoryItem(this.props.userId, newItem)
         .then(() => {
            this.props.history.push("/");
         })
   }
   render() {
      console.log(this.props.itemToEdit);
      return (
         <InventoryFormSection>
            {
               this.props.editMode
                  ?
                  <h3>Update Inventory Item</h3>
                  :
                  <h3>Add Inventory Item</h3>

            }
            <form onSubmit={event => this.onSubmit(event)}>
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
                     min="1"
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
                     <option value="1">Fruits</option>
                     <option value="2">Vegetables</option>
                     <option value="3">Meats</option>
                     <option value="4">Grains</option>
                     <option value="5">Spices</option>
                     <option value="6">Utensils</option>
                     <option value="7">Dishware</option>
                     <option value="8">Appliances</option>
                  </select>
               </div>
               <div className="form-footer">
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
      editMode: state.userReducer.editMode,
      itemToEdit: state.userReducer.itemToEdit,
      requesting: state.authReducer.requesting
   }
}

export default connect(mapStateToProps, { addInventoryItem })(InventoryForm);