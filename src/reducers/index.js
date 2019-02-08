import SignUpReducer from "./SignUpReducer";
import LoginReducer from "./LoginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  signup: SignUpReducer,
  login: LoginReducer
});

export default rootReducer;
