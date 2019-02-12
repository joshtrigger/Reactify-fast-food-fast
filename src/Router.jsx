import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import SignUp from "./views/SIgnUp/SignUp";
import NavbarPage from "./components/NavBar/NavBar";
import Login from "./views/Login/Login";
import landingPage from "./components/landing/landingPage"

const Routes = () => (
  <Provider store={store}>
    <Router>
      <div>
        <NavbarPage />
        <Switch>
          <Route path="/" component={SignUp} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/welcome" component={landingPage} exact />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Routes;
