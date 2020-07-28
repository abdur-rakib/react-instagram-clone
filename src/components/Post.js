import React, { Component } from "react";
import "./Post.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { connect } from "react-redux";
import {
  getComments,
  likePost,
  unlikePost,
} from "../redux/actions/dataActions";
import { db } from "../firebase/utils";
import { MdFiberManualRecord } from "react-icons/md";

import moment from "moment";
import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";

import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
// import dayjs from "dayjs";

class Post extends Component {
  state = {
    comments: [],
    liked: false,
  };
  componentDidMount() {
    db.collection("posts")
      .doc(this.props.post.id)
      .collection("comments")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let comments = [];
        snapshot.docs.map((doc) => comments.push(doc.data()));

        this.setState({ comments: comments });
      });

    db.doc(`posts/${this.props.post.id}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          db.collection("likes")
            .where("name", "==", this.props.user.name)
            .where("postId", "==", this.props.post.id)
            .limit(1)
            .get()
            .then((data) => {
              if (!data.empty) {
                this.setState({ liked: true });
              }
            });
        }
      });
  }

  like = () => {
    this.props.likePost(this.props.post.id, this.props.user.name);
    this.setState({ liked: true });
  };
  unlike = () => {
    this.props.unlikePost(this.props.post.id, this.props.user.name);
    this.setState({ liked: false });
  };
  render() {
    const {
      id,
      username,
      caption,
      imageUrl,
      createdAt,
      likeCount,
      uid,
    } = this.props.post;
    const { comments } = this.state;
    const renderComments =
      comments.length === 0 ? (
        <p className="lead text-primary">No comments yet!</p>
      ) : (
        <>
          {comments.length > 3 ? (
            <Link to={`/post/${id}`}>
              <p className="text-primary">
                View all {comments.length} comments
              </p>
            </Link>
          ) : (
            <p></p>
          )}
          {comments.slice(0, 3).map((comment, index) => (
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
          <div className="d-flex align-items-center">
            <img
              className="avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
            <p className="mx-4">
              <strong>{username}</strong>
            </p>
          </div>
          {uid === this.props.user.uid ? (
            // <BsThreeDotsVertical size={12} className="mr-4" />
            <DropdownButton as={ButtonGroup} title="..">
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2">Delete </Dropdown.Item>
            </DropdownButton>
          ) : null}
        </div>
        {/* image */}
        <img src={imageUrl} alt="" className="post__image" />
        <div className="post__footer">
          {/* love, comment, share button */}
          {this.state.liked ? (
            <button
              className="btn"
              disabled={this.props.ui.loading}
              onClick={this.unlike}
            >
              <BsHeartFill size={32} className="icon" color="red" />
            </button>
          ) : (
            <button
              className="btn"
              disabled={this.props.ui.loading}
              onClick={this.like}
            >
              <BsHeart size={32} className="icon" />
            </button>
          )}

          {/* Number of likes */}
          <p>
            <strong>{likeCount} likes</strong>
          </p>
          {/* Username + caption */}
          <p className="post__text mb-0">
            <MdFiberManualRecord color="orangered" className="mt-0 mb-1" />
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
    user: state.user,
    ui: state.ui,
  };
};

const mapActionsToProps = {
  getComments,
  likePost,
  unlikePost,
};

export default connect(mapStateToProps, mapActionsToProps)(Post);
