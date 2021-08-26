import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./forgotpassword.css";
import logo from "../../images/Code Queen Logo.png";
const Forgotpassword = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email
        };
        axios
            .post("http://localhost:5000/forgotpassword", data)
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
        setEmail('');
    };
    return (
        <div>
            <div class="logo">
                <img src={logo} alt="CodeQueen logo" width="200px" />
            </div>
            {success && (
                <div class="alert alert-success" role="alert">
                    Email sent successfully
                </div>
            )}
            {error && (
                <div class="alert alert-danger" role="alert">
                    User doesnt exist
                </div>
            )}
            <div class="cover">
                <h1 class="title">Forgot your Password?</h1>
                <div class="container">
                    <form class="form" onSubmit={handleSubmit} id="myform">
                        <input type="text"
                           class="form-control item"
                           id="email"
                           name="email"
                           placeholder="Enter your Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                        <div class="buttons">
                            <Link to="/login"><button class="back" type="button">Back</button></Link>
                            <button class="submit" type="submit" id="send-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgotpassword


