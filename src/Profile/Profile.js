import React, { Component } from "react";
import "./Profile.css";
import Header from "../components/Header";
import { connect } from "react-redux";
import { FcInfo, FcAddressBook } from "react-icons/fc";
import { FiExternalLink } from "react-icons/fi";
import { Modal } from "react-bootstrap";
import {editUserDetails} from "../redux/actions/userActions"

class Profile extends Component {
  state = {
    name: "",
    website: "",
    address: "",
    bio: "",
    category: "yourPosts",
    show: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      name: this.state.name,
      bio: this.state.bio,
      website: this.state.website,
      address: this.state.address
    }
    this.props.editUserDetails(newUserData, this.props.user.uid)
    this.setState({show: this.props.ui.loading})
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     name: nextProps.user.name,
  //     bio: nextProps.user.bio,
  //     website: nextProps.user.website,
  //     address: nextProps.user.address,
  //   };
  // }
  componentDidMount() {
    this.mapUserDetailsToState(this.props.user);
  }
  mapUserDetailsToState = (user) => {
    this.setState({
      bio: user.bio,
      website: user.website,
      address: user.address,
      name: user.name,
    });
  };
  render() {
    let renderCategory;
    if (this.state.category === "yourPosts") {
      renderCategory = <h1>Your Posts</h1>;
    }
    if (this.state.category === "yourSavedPosts") {
      renderCategory = <h1>Your Saved Posts</h1>;
    }
    if (this.state.category === "yourLikedPosts") {
      renderCategory = <h1>Your Liked Posts</h1>;
    }

    const { loading } = this.props.ui;
    return (
      <>
        <Modal
          size="sm"
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          centered
        >
          <Modal.Header >
            <Modal.Title id="example-modal-sizes-title-sm">
              Edit Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Display name"
                className="form-control my-3"
                name="name"
                value={this.state.name}
                required
                onChange={this.handleChange}
              />
              <input
                type="text"
                placeholder="Address"
                className="form-control my-3"
                name="address"
                value={this.state.address}
                required
                onChange={this.handleChange}
              />
              <input
                type="text"
                placeholder="Website"
                className="form-control my-3"
                name="website"
                value={this.state.website}
                required
                onChange={this.handleChange}
              />
              <textarea
                type="text"
                placeholder="Bio"
                className="form-control my-3"
                name="bio"
                value={this.state.bio}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-block btn-primary my-3"
                disabled={loading}
              >
                {loading ? "Updating" : "Update"}
              </button>
            </form>
          </Modal.Body>
        </Modal>
        <Header />
        <div className="row mt-5 d-flex justify-content-center align-items-center">
          <div className="col-sm-3">
            <div className="profile__image mx-auto">
              <img
                className="img-fluid rounded-circle w-75 mx-auto"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
            </div>
          </div>
          <div className="col-sm-5 mt-md-0 mt-5">
            <div className="profile__details">
              <div className="username d-flex align-items-center">
                <h2 className="mb-0">{this.props.user.name}</h2>
                <button
                  onClick={() => this.setState({ show: true })}
                  className="btn border ml-3"
                >
                  Edit Profile
                </button>
              </div>
              <div className="profile__info mt-4 d-flex">
                <div className="profile__posts  mr-4">
                  <h3>
                    <span className="font-weight-bold">155</span> posts
                  </h3>
                </div>
                <div className="profile__following mr-4">
                  <h3>
                    <span className="font-weight-bold">255</span> following
                  </h3>
                </div>
                <div className="profile__follwer mr-4">
                  <h3>
                    <span className="font-weight-bold">120</span> follower
                  </h3>
                </div>
              </div>
              <div className="profile__bio">
                <p className="h4 mt-4 font-weight-light">
                    <FcInfo className="mr-2" style={{ fontSize: "1.6rem" }} />
                  <span className="font-weight-bold r">
                    Bio:
                  </span>{" "}
                  {this.props.user.bio}
                </p>
              </div>
              <div className="profile__address">
                <p className="h4 mt-4 font-weight-light">
                    <FcAddressBook className="mr-2" style={{ fontSize: "1.6rem" }} />
                  <span className="font-weight-bold">
                    Address:
                  </span>{" "}
                  {this.props.user.address}
                </p>
              </div>
              <div className="profile__website">
                <p className="h4 mt-4 font-weight-light">
                    <FiExternalLink className="mr-2" style={{ fontSize: "1.6rem" }} />
                  <span className="font-weight-bold">
                    Website:
                  </span>{" "}
                  {this.props.user.website}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-10  mx-auto">
            <div className="nav justify-content-center">
              <li
                onClick={() => this.setState({ category: "yourPosts" })}
                className="nav-item"
              >
                <span
                  to="yourPosts"
                  className={
                    this.state.category === "yourPosts"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Your Posts
                </span>
              </li>
              <li
                onClick={() => this.setState({ category: "yourSavedPosts" })}
                className="nav-item"
              >
                <span
                  to="yourSavedPosts"
                  className={
                    this.state.category === "yourSavedPosts"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Saved Posts
                </span>
              </li>
              <li
                onClick={() => this.setState({ category: "yourLikedPosts" })}
                className="nav-item"
              >
                <span
                  to="yourLikedPosts"
                  className={
                    this.state.category === "yourLikedPosts"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Liked Posts
                </span>
              </li>
            </div>
          </div>
          <div className="col-md-8 mt-4 mx-auto">{renderCategory}</div>
        </div>
      </>
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
  editUserDetails
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
