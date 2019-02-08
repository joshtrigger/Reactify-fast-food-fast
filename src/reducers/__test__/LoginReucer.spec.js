import LoginReducer from "../../reducers/LoginReducer";
import actionTypes from "../../actions/actionTypes";

const initialState = {
  message: ""
};

describe("test login reducer", () => {
  it("test empty state", () => {
    expect(LoginReducer(undefined, {})).toEqual(initialState);
  });
  it("should test updated state", () => {
    const newState = {
      message: "user is there"
    };
    expect(
      LoginReducer(initialState, {
        type: actionTypes.LOGIN_SUCCESS,
        payload: newState
      })
    ).toEqual({
      message: {
        message: "user is there"
      }
    });
  });
});


