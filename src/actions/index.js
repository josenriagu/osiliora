import axios from 'axios';

export const REQUESTING = "REQUESTING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

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
      localStorage.setItem("token", res.data.token);
      dispatch(success());
   }).catch(err => {
      dispatch(failure(err.message));
   })
}