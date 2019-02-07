import SignUpReducer from "../../reducers/SignUpReducer";
import actionTypes from "../../actions/actionTypes";

const initialState = {
  message: ""
};

describe("test sign up reducer", () => {
  it("test empty state", () => {
    expect(SignUpReducer(undefined, {})).toEqual(initialState);
  });
  it("should test updated state", () => {
    const newState = {
      message: "user is there"
    };
    expect(
      SignUpReducer(initialState, {
        type: actionTypes.SIGNUP_SUCCESS,
        payload: newState
      })
    ).toEqual({
      message: {
        message: "user is there"
      }
    });
  });
});
