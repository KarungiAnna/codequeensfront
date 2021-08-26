import React, { useState} from "react";
import axios from "axios";
import "./signup.css";
import logo from "../../images/Code Queen Logo.png";
const Signup = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
  
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    const [image, setImage] = useState("");
    const [photo, setPhoto] = useState("");
    const [uploading, setUploading] = useState(false);
  
    const uploadImage = () => {
      setUploading(true);
  
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'mutuuzeApp');
      data.append('cloud_name', 'mutuuze');
  
      axios.post('https://api.cloudinary.com/v1_1/mutuuze/image/upload', data)
        .then(res => {
          console.log('Upload Image Response ====>', res);
          setPhoto(res.data.secure_url);
          alert('Image uploaded successfully!');
          setUploading(false);
        })
        .catch(err => {
          console.log("Image Upload Error ====>", err.message)
          setUploading(false);
        });
    };
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        firstname,
        lastname,
        email,
        username,
        password,
        passwordCheck,
        photo
      };
      axios
        .post("http://localhost:5000/signup", data)
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
        
        setFirstName("");
        setLastName("");
        setEmail('');
        setUsername("");
        setPassword("");
        setPasswordCheck("");
        setPhoto("");
        
    };
  
    return (
      <>
        <div class="logo">
          <img src={logo} alt="CodeQueen logo" width="200px" />
        </div>
        {success && (
          <div class="alert alert-success" role="alert">
            User successfully created
          </div>
        )}
        {error && (
          <div class="alert alert-danger" role="alert">
            Error Encountered while registering user
          </div>
        )}
  
        <div class="form-space">
          <h2 class="title">Sign up</h2>

          <div>
            {photo && (
              <img alt="pic" src={photo} width="100" />
            )}
          </div>
          <div class="form-group">
            <input
             type="file"
             class="form-control item"
             onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={uploadImage}>Upload Profile Picture</button>
          </div>

          <form class="form" onSubmit={handleSubmit}>
            <div class="form-area">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  name="firstname"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  name="lastname"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control item"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control item"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={passwordCheck}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-block create-account"
                  id="register-btn"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default Signup;
  