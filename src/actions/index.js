import axios from 'axios';
import enrichedAxios from '../axios';

export const REQUESTING = "REQUESTING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const SAVE_ID = "SAVE_ID";
export const FETCH_INVENTORY = "FETCH_INVENTORY";
export const TOGGLE_EDIT = "TOGGLE_EDIT";
export const SET_EDIT = "SET_EDIT"
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

export const requesting = () => {
   return {
      type: REQUESTING,
      payload: true
   }
}
export const success = () => {
   return {
      type: SUCCESS,
      payload: false
   }
}
export const failure = payload => {
   return {
      type: FAILURE,
      payload,
   }
}
export const saveId = payload => {
   return {
      type: SAVE_ID,
      payload,
   }
}
export const saveInventory = payload => {
   return {
      type: FETCH_INVENTORY,
      payload,
   }
}
export const toggleEdit = payload => {
   return {
      type: TOGGLE_EDIT,
      payload,
   }
}
export const setEdit = payload => {
   return {
      type: SET_EDIT,
      payload,
   }
}
export const signUp = newUser => dispatch => {
   dispatch(requesting());
   return axios.post('https://soup-server.herokuapp.com/auth/register', newUser)
      .then(() => {
         dispatch(success());
      }).catch(err => {
         dispatch(failure(err.message));
      })
}
export const login = user => dispatch => {
   dispatch(requesting());
   return axios.post('https://soup-server.herokuapp.com/auth/login', user)
      .then(res => {
         dispatch(success());
         localStorage.setItem("token", res.data.token);
         dispatch(saveId(res.data.userId))
         alert(res.data.message)
      }).catch(err => {
         dispatch(failure(err.message));
      })
}
export const fetchInventory = (userId) => dispatch => {
   dispatch(requesting());
   return enrichedAxios().get(`https://soup-server.herokuapp.com/users/${userId}/inventory`)
      .then(res => {
         dispatch(success());
         dispatch(saveInventory(res.data));
      }).catch(err => {
         dispatch(failure(err.message));
      })
}
export const addInventoryItem = (userId, item) => dispatch => {
   dispatch(requesting());
   return enrichedAxios().post(`https://soup-server.herokuapp.com/users/${userId}/inventory`, item)
      .then(() => {
         fetchInventory(userId);
      }).catch(err => {
         dispatch(failure(err.message));
      })
}
export const updateInventoryItem = (userId, itemId, item) => dispatch => {
   dispatch(requesting());
   return enrichedAxios().put(`https://soup-server.herokuapp.com/users/${userId}/inventory/${itemId}`, item)
      .then(() => {
         dispatch(toggleEdit(false));
         dispatch(setEdit(null));
         fetchInventory(userId);
      }).catch(err => {
         dispatch(failure(err.message));
      })
}
export const deleteInventoryItem = (userId, itemId) => dispatch => {
   dispatch(requesting());
   return enrichedAxios().delete(`https://soup-server.herokuapp.com/users/${userId}/inventory/${itemId}`)
      .catch(err => {
         dispatch(failure(err.message));
      })
}