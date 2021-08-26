import React from 'react'
const Dashboard = ({history}) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const logout = () => {
        localStorage.removeItem('user');
        history.push("/login")
    };
    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
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

export default Dashboard;
