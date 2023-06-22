 import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions-type";
 import axios from "axios";

 const endpoint= 'http://localhost:3001/rickandmorty'

 export const addFav = (character) => {
    
    return async (dispatch) => {
       try {
         const {data} = await axios.post(`${endpoint}/fav`, character)
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       } catch (error) {
         return error.message 
       }
    };
 };
 

 export const removeFav = (id) => {
    return async (dispatch) => {
      try { 
      const {data} = await axios.delete(`${endpoint}/fav/${id}`)
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       } catch (error) {
         return error.message
    }
 }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
};


export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}

export const resetFav = (reset) => {
   return {
      type: RESET
   }
}



