import SignUpReducer from "./SignUpReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  signup: SignUpReducer
});

export default rootReducer;
