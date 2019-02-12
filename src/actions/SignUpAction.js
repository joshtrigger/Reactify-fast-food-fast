import actionTypes from "./actionTypes";

export const SignUpAction = (data) => dispatch => {
  return fetch("https://my-fast-food-api.herokuapp.com/api/v1/auth/signup", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    dispatch({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: response
    })
  })
  .catch(err=>err)
};

export default SignUpAction;
