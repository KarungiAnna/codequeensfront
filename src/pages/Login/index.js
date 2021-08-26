import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from '../../helpers/api';
import './login.css';
import logo from "../../images/Code Queen Logo.png";
const Login = ({history}) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
   // const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = { email, password };
      API.post("/login", data)
        .then((res) => {
          console.log("Login Response Data ====>", res)
          setSuccess(true);
          if (res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data));
            if(res.data.user.role==='admin'){
              history.push("/dashboard")
            }else{
              history.push("/profile")
            }
          }
          setTimeout(() => {
            setSuccess(false);
          }, 9000)
        })
        .catch((err) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 9000)
          console.log(err.message);
        });
    };
  
    // const logout = () => {
    //   localStorage.removeItem("user");
    // };
  
    // const getCurrentUser = () => {
    //   return JSON.parse(localStorage.getItem("user"));
    // };
  
    return (
      <>
        <div className="logo">
          <img
            src={logo}
            alt="CodeQueen logo"
            width="200px"
          />
        </div>
        {success && (
          <div className="alert alert-success" role="alert">
            Successfuly Logged on
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            Login Failed
          </div>
        )}
        <div className="big-one">
          <h1 className="form-title">Login</h1>
  
          <div className="container">
            <form className="form" onSubmit={handleSubmit} id="loginform">
              <div className="form-input-group">
                <input
                  type="text"
                  className="form-input"
                  name="email"
                  autoFocus
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-input-group">
                <input
                  type="password"
                  className="form-input"
                  id="security"
                  name="password"
                  autoFocus
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="forgotpass">
                {" "}
                <Link to="/forgotpassword" className="ml-auto mb-0 text-md">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="form-button">
                Submit
              </button>
              <p className="form-text">
                Don't have an account?{" "}
                <Link id="form-link" to="/signup">
                  Sign Up Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default Login;