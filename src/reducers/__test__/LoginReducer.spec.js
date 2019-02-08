import LoginReducer from "../LoginReducer";
import actionTypes from "../../actions/actionTypes";

const initialState = {
  message: "",
  token: ""
};

describe("test login reducer", () => {
  it("test empty state", () => {
    expect(LoginReducer(undefined, {})).toEqual(initialState);
  });
  it("should test updated state", () => {
    const newState = {
      message: "user is there",
      token: ""
    };
    expect(
      LoginReducer(initialState, {
        type: actionTypes.LOGIN_SUCCESS,
        payload: newState
      })
    ).toEqual({ message: "user is there", token: "" });
  });
  it("should test updated state", () => {
    const newState = {
      message: "user is there",
      token: ""
    };
    expect(
      LoginReducer(initialState, {
        type: actionTypes.LOGIN_FAILURE,
        payload: newState
      })
    ).toEqual({ message: "user is there", token: "" });
  });
});
