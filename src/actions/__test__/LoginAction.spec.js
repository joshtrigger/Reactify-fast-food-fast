import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { LoginAction } from "../LoginAction";
import actionTypes from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test login action", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock signup action", () => {
    fetchMock.postOnce(
      "https://my-fast-food-api.herokuapp.com/api/v1/auth/login",
      {
        headers: { "content-type": "application/json" },
        body: {
          username: "joshua",
          password: "qwerty"
        }
      }
    );
    const expectedActions = [
      {
        payload: {
          username: "joshua",
          password: "qwerty"
        },
        type: actionTypes.LOGIN_FAILURE
      }
    ];
    const store = mockStore();

    return store.dispatch(LoginAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
