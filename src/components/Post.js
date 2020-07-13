import React, { Component } from "react";
import "./Post.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { connect } from "react-redux";
import { getComments } from "../redux/actions/dataActions";
import { db } from "../firebase/utils";

import moment from "moment";
import CommentForm from "./CommentForm";
// import dayjs from "dayjs";

class Post extends Component {
  state = {
    comments: [],
  };
  componentDidMount() {
    // console.log(this.props.post.id);
    // if (this.props.post.id) {
    //   this.props.getComments(this.props.post.id);
    // }
    db.collection("posts")
      .doc(this.props.post.id)
      .collection("comments")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let comments = [];
        snapshot.docs.map((doc) => comments.push(doc.data()));

        setTimeout(() => console.log(comments), 5000);
        // dispatch({ type: SET_COMMENTS, payload: comments });
        this.setState({ comments: comments });
      });
  }
  render() {
    const { username, caption, imageUrl, createdAt } = this.props.post;
    const { comments } = this.state;
    // console.log(this.props.post.id, comments);
    const renderComments =
      comments.length === 0 ? (
        <p className="lead text-primary">No comments yet!</p>
      ) : (
        <>
          {comments.length > 3 ? (
            <p className="text-primary">View all {comments.length} comments</p>
          ) : (
            <p></p>
          )}
          {comments.map((comment, index) => (
            <p key={index} className="post__text">
              <strong>{comment.username} </strong>
              {comment.comment}
            </p>
          ))}
        </>
      );
    return (
      <div className="post">
        {/* header {avater + username + location} */}
        <div className="post__header">
          <img
            className="avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
          />
          <p className="mx-4">
            <strong>{username}</strong>
          </p>
        </div>
        {/* image */}
        <img src={imageUrl} alt="" className="post__image" />
        <div className="post__footer">
          {/* love, comment, share button */}
          <BsHeart size={32} className="icon" />
          <BsHeartFill size={32} className="icon" color="red" />
          {/* Number of likes */}
          <p>
            <strong>8122 likes</strong>
          </p>
          {/* Username + caption */}
          <p className="post__text mb-0">
            <strong>{username}</strong> {caption}
          </p>
          {renderComments}
          {/* posted time */}
          <p className="post__time">
            {moment(createdAt).startOf("day").fromNow()}
          </p>
        </div>
        {/* comments */}
        <hr className="mt-4" />
        <div className="comments">
          <CommentForm id={this.props.post.id} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapActionsToProps = {
  getComments,
};

export default connect(mapStateToProps, mapActionsToProps)(Post);
