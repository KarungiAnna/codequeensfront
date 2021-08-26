import React from 'react'
import {Link} from "react-router-dom";
import logo from "../../images/Code Queen Logo.png";
const Home = () => {
    return (
        <div>
            <h1>Welcome to CodeQueen homepage</h1>
            <div class="logo">
                <img src={logo} alt="CodeQueen logo" width="200px" />
            </div>
            <Link to="/login">
            <p>Login</p>
            </Link>
            <br></br>
            <Link to="/signup">
            <p>Signup</p>
            </Link>
        </div>
    )
}

export default Home;



