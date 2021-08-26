import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard"
import ProtectedRoute from "../helpers/ProtectedRoute";
import Forgotpassword from "../pages/Forgotpassword";
import Resetpassword from "../pages/Resetpassword";
import Editprofile from "../pages/Editprofile";
//import Layout from "../components/Layout"

const Routes = () => {
    return (
      //<Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/editstudent/:id" component={Editprofile} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/forgotpassword" component={Forgotpassword} />
        <Route exact path="/resetpassword/:token" component={Resetpassword} />
        <Route path="*" component={() => "404 NOT FOUND"} />
     
      </Switch>
     // </Layout>
    );
  };
  











export default Routes;