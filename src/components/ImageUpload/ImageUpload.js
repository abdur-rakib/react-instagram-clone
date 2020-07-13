import React, { Component } from "react";
import { storage, db } from "../../firebase/utils";
import firebase from "firebase/app";
import { connect } from "react-redux";

const initState = {
  caption: "",
  progress: 0,
  image: null,
  showProgressBar: false,
};
class ImageUpload extends Component {
  state = {
    ...initState,
  };
  handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    // if (e.target.files[0]) {
    //   this.setState({ image: e.target.files[0] });
    // }
    if (e.target.name === "caption") {
      this.setState({ caption: e.target.value });
    }
    if (e.target.name === "image") {
      this.setState({ image: e.target.files[0] });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showProgressBar: true });
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //   progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            return db.collection("posts").add({
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              caption: this.state.caption,
              imageUrl: url,
              username: this.props.user.displayName,
            });
          })
          .then(() => {
            this.setState(initState);
          });
      }
    );
  };
  render() {
    // const { displayName } = this.props.user;
    return (
      <div className="mt-3">
        <form
          action=""
          onSubmit={this.handleSubmit}
          className=" d-flex align-items-center"
        >
          <input
            className="form-control mr-2"
            type="text"
            placeholder="Enter caption..."
            name="caption"
            value={this.state.caption}
            onChange={this.handleChange}
            required
          />
          <input
            type="file"
            name="image"
            id=""
            className="form-control-file mx-2"
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="btn btn-md btn-primary px-3">
            Post
          </button>
        </form>
        {this.state.showProgressBar && (
          //   <div className="progress  mt-3">
          //     <div
          //       className="progress-bar"
          //       role="progressbar"
          //       style={{ width: this.state.progress }}
          //       aria-valuenow={this.state.progress}
          //       aria-valuemin="0"
          //       aria-valuemax="10"
          //     ></div>
          //   </div>
          <progress
            className="progress-bar w-100 mt-3 bg-primary"
            value={this.state.progress}
            max="100"
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(ImageUpload);
