import actionTypes from "../actions/actionTypes";

const initialState = {
  message: "",
  token: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        token: action.payload.token
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        message: action.payload.message
      };
    default:
      return state;
  }
}
