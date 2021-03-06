import React, { Component } from "react";
import "./Signup.css";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  signUpWithEmailPassword,
  clearError,
} from "../../redux/actions/userActions";
import { connect } from "react-redux";

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpWithEmailPassword(this.state);
  };
  componentWillUnmount() {
    this.props.clearError();
  }
  render() {
    const { email, name, password } = this.state;
    const { error } = this.props.user;
    const { loading } = this.props.ui;
    return (
      <div className="row  d-flex flex-column">
        <div className="col-sm-5 mx-auto auth-form text-center mb-0">
          <div className="signup__header">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Instagram"
              className="signup__image mb-3"
            />
            <p className="lead">
              Sign up to see photos and videos from your friends.
            </p>
            <button className="btn btn-block btn-primary mb-3">
              <FaGoogle className="mr-1" /> Log in with Google
            </button>
            <div className="line mb-3">
              <div className="single-line"></div>
              <div className="lead or">OR</div>
              <div className="single-line"></div>
            </div>
          </div>
          {error && <p className="lead text-danger">{error}</p>}
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="form-control my-3"
              name="email"
              onChange={this.handleChange}
              value={email}
              required
            />

            <input
              type="text"
              placeholder="Username"
              className="form-control my-3"
              name="name"
              onChange={this.handleChange}
              value={name}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
              value={password}
              required
            />
            <button
              className="btn btn-block btn-primary my-3"
              disabled={loading}
            >
              {loading ? "Signing up" : "Sign up"}
            </button>
          </form>
          <div className="footer__text mt-4">
            <p className="lead">
              By signing up, you agree to our{" "}
              <strong>Terms , Data Policy and Cookies Policy .</strong>
            </p>
          </div>
        </div>
        <div className="col-sm-5 mx-auto auth-form text-center py-2 pt-3 mt-3">
          <p className="lead">
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    ui: state.ui,
  };
};

const mapActionsToProps = {
  signUpWithEmailPassword,
  clearError,
};

export default connect(mapStateToProps, mapActionsToProps)(Signup);
