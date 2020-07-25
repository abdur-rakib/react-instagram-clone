import React, { Component } from "react";
// import "./Signup.css";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signinWithEmail, clearError } from "../../redux/actions/userActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Sign up clicked");
    this.props.signinWithEmail(this.state);
    // this.props.history.push("/");
  };
  componentWillUnmount() {
    this.props.clearError();
  }
  render() {
    const { error } = this.props.user;
    const { loading } = this.props.ui;
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
          {error && <p className="lead text-danger">{error}</p>}
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="form-control my-3"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleChange}
            />
            <button
              className="btn btn-block btn-primary my-3"
              disabled={loading}
            >
              {loading ? "Logging in" : "Log in"}
            </button>
          </form>

          <div className="line mb-2">
            <div className="single-line"></div>
            <div className="lead or">OR</div>
            <div className="single-line"></div>
          </div>
          <button
            className="btn btn-block mb-2 text-primary"
            style={{ fontSize: "1.4rem" }}
          >
            <FaGoogle className="mr-1" /> Log in with Google
          </button>
          <Link
            to="/reset"
            className="
          text-secondary"
          >
            Forgot password?
          </Link>
        </div>
        <div className="col-sm-5 mx-auto auth-form text-center py-2 pt-3 mt-3">
          <p className="lead">
            Don't have an account? <Link to="/signup">Sign up</Link>
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
  signinWithEmail,
  clearError,
};
export default connect(mapStateToProps, mapActionsToProps)(Login);
