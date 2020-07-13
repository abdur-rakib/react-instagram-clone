import React, { Component } from "react";
// import "./Signup.css";
import { Link } from "react-router-dom";

class Recovery extends Component {
  render() {
    return (
      <div className="row d-flex flex-column">
        <div className="col-sm-5 mx-auto auth-form text-center mb-0">
          <div className="signup__header">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Instagram"
              className="signup__image mb-3"
            />
          </div>
          <form action="">
            <input
              type="email"
              placeholder="Email"
              className="form-control my-3"
              name="email"
            />

            <button className="btn btn-block btn-primary my-3">
              Send email
            </button>
          </form>
        </div>
        <div className="col-sm-5 mx-auto auth-form text-center py-2 pt-3 mt-3">
          <p className="lead">
            Wanna go back login page? <Link to="/signup">Log in</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Recovery;
