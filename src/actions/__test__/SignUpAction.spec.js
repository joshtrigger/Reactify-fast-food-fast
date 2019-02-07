import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { SignUpAction } from "../SignUpAction";
import actionTypes from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test signup action", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock signup action", () => {
    fetchMock.postOnce(
      "https://my-fast-food-api.herokuapp.com/api/v1/auth/signup",
      {
        headers: { "content-type": "application/json" },
        body: {
          username: "joshua",
          email: "josh@me.com",
          password: "qwerty"
        }
      }
    );
    const expectedActions = [
      {
        payload: {
          username: "joshua",
          email: "josh@me.com",
          password: "qwerty"
        },
        type: actionTypes.SIGNUP_SUCCESS
      }
    ];
    const store = mockStore();

    return store.dispatch(SignUpAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
