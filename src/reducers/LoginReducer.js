import actionTypes from "../actions/actionTypes";

const initialState = {
  message:  ''
}

export default function(state = initialState, action){
  switch(action.type){
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
} 
