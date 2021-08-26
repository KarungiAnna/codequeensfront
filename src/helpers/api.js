import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));

const axiosIntance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: user ? `Bearer ${user.token}` : "",
  },
});

export default axiosIntance;