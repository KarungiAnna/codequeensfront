import React from "react";
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    return (
        <Route 
        {...rest}
        render={(props) =>
        user ? <Component {...props} /> : <Redirect to = "/login" />
        }
    />
    );
}

export default ProtectedRoute;

