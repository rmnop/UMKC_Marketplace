import React, { Component } from 'react';
import LoggedInNav from '../components/LoggedInNav';
import './Profile.css';
import { Button } from 'react-bootstrap';
import SlidingTabBar from '../components/SlidingTabs';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg", // Default profile picture path
      activeTab: "Personal" // Initialize activeTab state
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

  // Update the active tab state
  handleTabChange = (tabId) => {
    this.setState({ activeTab: tabId });
  }

  renderTabContent() {
    const { activeTab } = this.state;
    console.log("Active Tab:", activeTab);

    // Render different content based on the active tab
    switch (activeTab) {
      case "Personal":
        return (
          <div>
    <div className='data'>
      <div className='dataLabel'>First Name:</div>
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
        );
      case "Address":
        return (
          <div>
            {/* Content for Address tab */}
            {/* For example: Address details */}
            Address
          </div>
        );
      case "Contact":
        return (
          <div>
            {/* Content for Contact tab */}
            {/* For example: Contact details */}
            Contact Details
          </div>
        );
      case "Payment":
        return (
          <div>
            {/* Content for Payment tab */}
            {/* For example: Payment details */}
            Payment Methods
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <>
        <div className='App'>
          <LoggedInNav />
          <div className='profilePageWrapper'>
            <div className='title'> Welcome, {this.state.userData.fname}!</div>
            <img src={this.state.userData.profilePicture} alt="Profile" className='profilePic' />
            <div className='profileData'>
              <div className='dataLabel'>
                <div>Profile Picture: </div>
              <input type="file" onChange={this.handleProfilePictureChange} className='profilepicBox'/>
              </div>
              
              <div className='dataInfo'>
                <Button variant="primary btn-md" onClick={this.handleProfilePictureUpload}>Upload</Button>
              </div>
            </div>
            <SlidingTabBar activeTab={this.state.activeTab} onTabChange={this.handleTabChange} />
            {this.renderTabContent()}
          </div>
        </div>
      </>
    );
  }
}
