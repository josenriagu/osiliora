import * as types from '../actions';

const initialState = {
   userId: "",
   inventory: [],
   category: ["All", "Fruits", "Vegetables", "Meats", "Grains", "Spices", "Utensils", "Dishware", "Appliances"],
   editMode: false,
   itemToEdit: null
}

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.SAVE_ID:
         return {
            ...state,
            userId: action.payload
         }
      case types.FETCH_INVENTORY:
         return {
            ...state,
            inventory: action.payload
         }
      case types.TOGGLE_EDIT:
         return {
            ...state,
            editMode: action.payload
         }
      case types.SET_EDIT:
         return {
            ...state,
            itemToEdit: action.payload
         }
      default:
         return state
   }
}

export default userReducer;