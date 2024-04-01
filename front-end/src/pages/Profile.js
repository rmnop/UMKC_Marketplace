import React, {Component} from 'react'
import LoggedInNav from '../components/LoggedInNav';
import './Profile.css'
export default class Profile extends Component  {
constructor(props){
    super(props);
    this.state={
        userData: "",
        profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" // Default profile picture path
    };
}
// Inside componentDidMount() of your Profile component
componentDidMount() {
    fetch("http://localhost:3000/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            token: window.localStorage.getItem("token"),
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data, "userData");
        // Set profilePicture to default only if userData.profilePicture is falsy
        const profilePicture = data.data.profilePicture ? data.data.profilePicture : "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";
        this.setState({ 
            userData: data.data,
            profilePicture: profilePicture
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}


    render(){
  return (
    <>
    <div className='App'>
    <LoggedInNav />
    <div className='profilePageWrapper'>
    <div className='title'> Welcome, {this.state.userData.fname}!</div>
    <img src={this.state.userData.profilePicture} alt="Profile" className='profilePic'/>
    <div className='data'>
            <div className='dataLabel'>Profile Picture: </div>
            <div className='dataInfo'>
                <input type="file" onChange={this.handleProfilePictureChange} />
                <button onClick={this.handleProfilePictureUpload}>Upload</button>
            </div>
        </div>
    <div className='dataWrapper'>
    <div className='dataTitle'>Your Information</div>
    <div className='data'>
      <div className='dataLabel'>First Name: </div>
      <div className='dataInfo'> {this.state.userData.fname}</div>
    </div>

    <div className='data'>
      <div className='dataLabel'>Last Name: </div>
      <div className='dataInfo'> {this.state.userData.lname}</div>
    </div>

    <div className='data'>
      <div className='dataLabel'>Email: </div>
      <div className='dataInfo'> {this.state.userData.email}</div>
    </div>



    </div>
    </div>
    </div>
    </>
  );
}
}

