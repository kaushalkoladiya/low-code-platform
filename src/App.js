import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Login from "./Pages/Login/Login";
import PageList from "./Pages/PageList/PageList";
import Signup from "./Pages/Signup/Signup";

const App = (props) => {

  return (
    <div className="App">
      <Switch>        
        <Route exact path={'/register'} component={Signup} />
        <Route exact path={'/forgot-password'} component={ForgotPassword} />
        <Route exact path={'/page-list'} component={PageList} />
        <Route exact path={'/'} component={Login} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default withRouter(App);
