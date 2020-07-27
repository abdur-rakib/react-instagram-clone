import React from "react";
import "./SinglePost.css";
import { connect } from "react-redux";
import Header from '../Header'
import {
  getSinglePost,
  getComments,
  postComment,
} from "../../redux/actions/dataActions";
import { useEffect } from "react";
import { useState } from "react";

import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdFiberManualRecord } from "react-icons/md";

import moment from "moment";
import CommentForm from "../CommentForm";

import { BeatLoader } from "react-spinners";

const SinglePost = (props) => {
  const [postId, setpostId] = useState(null);

  useEffect(() => {
    const path = props.location.pathname.split("/");
    setpostId(path[path.length - 1]);
    if (postId) {
      props.getSinglePost(postId);
      props.getComments(postId);
    }
    // eslint-disable-next-line
  }, [postId]);

  //   const { username, caption, imageUrl, createdAt } = props.data.post;
  const { comments } = props.data;
  // console.log(this.props.post.id, comments);
  const renderComments =
    comments.length === 0 ? (
      <p className="lead text-primary">No comments yet!</p>
    ) : (
      comments.map((comment, index) => (
        <p key={index} className="post__text">
          <strong>{comment.username} </strong>
          {comment.comment}
        </p>
      ))
    );
  const renderPost =
    props.post === null ? (
      <div className="col-md-12 mx-auto pt-5 mt-5 loading">
          <BeatLoader size={50} color="#007BFF" />
        </div>
    ) : (
      <div className="post">
        {/* header {avater + username + location} */}
        <div className="post__header">
          <img
            className="avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
          />
          <p className="mx-4">
            <strong>{props.post.username}</strong>
          </p>
        </div>
        {/* image */}
        <img src={props.post.imageUrl} alt="" className="post__image" />
        <div className="post__footer">
          {/* love, comment, share button */}
          <BsHeart size={32} className="icon" />
          <BsHeartFill size={32} className="icon" color="red" />
          {/* Number of likes */}
          <p>
            <strong>8122 likes</strong>
          </p>
          {/* Username + caption */}
          <p className="post__text mb-3">
            <MdFiberManualRecord color="orangered" className="mt-0" />
            <strong>{props.post.username}</strong> {props.post.caption}
          </p>
          {renderComments}
          {/* posted time */}
          <p className="post__time">
            {moment(props.post.createdAt).startOf("day").fromNow()}
          </p>
        </div>
        {/* comments */}
        <hr className="mt-4" />
        <div className="comments">
          <CommentForm id={postId} />
        </div>
      </div>
    );

  return (
    <>
    <Header />
    {renderPost}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    post: state.data.post,
  };
};

const maActionsToProps = {
  getSinglePost,
  getComments,
  postComment,
};

export default connect(mapStateToProps, maActionsToProps)(SinglePost);
