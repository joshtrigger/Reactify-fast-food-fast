import { combineReducers } from "redux";
import SignUpReducer from "./SignUpReducer";
import LoginReducer from "./LoginReducer";

const rootReducer = combineReducers({
  signup: SignUpReducer,
  login: LoginReducer
});

export default rootReducer;
