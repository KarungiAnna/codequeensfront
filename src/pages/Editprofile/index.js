import React, { useState, useEffect }from 'react';
import axios from 'axios';
import logo from "../../images/Code Queen Logo.png";
import './editprofile.css';

const Editprofile = ({ match, history }) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [image, setImage] = useState("");
    const [photo, setPhoto] = useState("");
    const [uploading, setUploading] = useState(false);
   // const user = JSON.parse(localStorage.getItem('user'));

    const userId = match.params.id
    useEffect(() => {
        axios.get(`http://localhost:5000/editstudent/${userId}`)
        .then(response => {
            console.log(response)
            setFirstName(response.data.firstname);
            setLastName(response.data.lastname);
            setUserName(response.data.username);
            setPhoto(response.data.photo);

        })
        .catch(error => {
            console.log(error)  
        })
    }, [userId]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
       // if (!firstname || !lastname ) return

        const data = { firstname, lastname, username, photo }

        try {
            const response = await axios.patch(`http://localhost:5000/editstudent/${userId}`, data);
            console.log("Updated Data ===>", response)
            history.push("/profile");
        } catch (error) {
            console.log('error', error);
        }
    }

    const handleCancel = () => {
        history.push("/profile");
    }
    return (
        <>
         <div className="logo">
          <img src={logo} alt="CodeQueen logo" width="200px" />
        </div>
        <div className="cover">
        <h1 className="title">Edit User</h1>  
        <div className="container" >
        
        <div className="form-group">
            <input
             type="file"
             className="form-control item"
             onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={uploadImage}>Add Profile Picture</button>
          </div>
          <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input name="title" type="text"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>LastName</label>
                    <input name="content"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input name="content"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control" />
                </div>
                <div className="btn-group">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                    <button type="button" id="btn" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
          </div>
          </div>
        </>
    )
}

export default Editprofile

