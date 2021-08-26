import React, { useState } from "react";
import axios from "axios";
import "./resetpassword.css";
import logo from "../../images/Code Queen Logo.png";
const Resetpassword = ({match}) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const Token = match.params.token
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            password,
            confirmPassword
        };
        axios
            .post(`http://localhost:5000/resetpassword/${Token}`, data)
            .then((res) => {
                setSuccess(true);
                console.log(res);
                setTimeout(() => {
                    setSuccess(false);
                }, 9000)
            })
            .catch((err) => {
                setError(true);
                console.log(err);
                setTimeout(() => {
                    setError(false);
                }, 9000)
            });
        setPassword('');
        setConfirmPassword('');
    };

    return (
    <div>
 <div class="logo">
                <img src={logo} alt="CodeQueen logo" width="200px" />
            </div>
            {success && (
                <div class="alert alert-success" role="alert">
                    Password reset successful, check your email for confirmation
                </div>
            )}
            {error && (
                <div class="alert alert-danger" role="alert">
                    Error in resetting password
                </div>
            )}

<div class="cover">
        <h1 class="title">Reset your Password</h1>
        <div class="container"> 
            <form class="form" onSubmit={handleSubmit} id="myform"> 
                <div class ="input">
                    <input type="password"
                           class="ifield"
                           id="password"
                           name="password"
                           autofocus
                           placeholder="Enter new password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class ="input">
                     <input type="password"
                           class="ifield"
                           id="cfmpassword"
                           name="confirmPassword"
                           autofocus
                           placeholder="Confirm password"
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}/> 
                </div>
                <div class="buttons">
                    <button class="submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}

export default Resetpassword











