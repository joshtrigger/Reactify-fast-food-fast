import actionTypes from "./actionTypes";

export const LoginAction = (data) => dispatch => {
  return fetch("https://my-fast-food-api.herokuapp.com/api/v1/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: response
    })
  })
};

export default LoginAction;