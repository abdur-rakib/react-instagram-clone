import React, { Component } from "react";
import "./Profile.css";
import Header from "../components/Header";

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className="display-4 text-center my-auto">Profile</h1>
      </div>
    );
  }
}

export default Profile;
