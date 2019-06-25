import * as types from '../actions';

const initialState = {
   requesting: false,
   error: null
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.REQUESTING:
         return {
            ...state,
            requesting: action.payload
         }
      case types.SUCCESS:
         return {
            ...state,
            requesting: action.payload
         }
      case types.FAILURE:
         return {
            ...state,
            requesting: false,
            error: action.payload
         }
      default:
         return state
   }
}

export default authReducer;