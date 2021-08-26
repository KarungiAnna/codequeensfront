import React from 'react';
import {Link} from "react-router-dom";
const Profile = ({history}) => {
    const user = JSON.parse(localStorage.getItem('user'));

   /* const editUser =()  => {
        localStorage.setItem("user", JSON.stringify(res.data));
    }*/

    const logout = () => {
        localStorage.removeItem('user');
        history.push("/login")
    };
   
    return (
        <div className="container">
            <div className="btn-group" > <Link to={`/editstudent/${user.user._id}`}>
            <button className="btn btn-primary">Editprofile</button>
            </Link></div>
            <h2>{user.user.firstname}</h2>
            <p>Lastname: {user.user.lastname}</p>
            <p>Username: {user.user.username}</p>
            <p>Email: {user.user.email}</p>
            <p>Token: {user.token}</p>
            <div className="btn-group">
                <button onClick={logout} className="btn btn-primary">Logout</button>
            </div>
            <hr />
        </div>
    )
}

export default Profile;
