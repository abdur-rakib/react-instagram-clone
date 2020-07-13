import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { postComment } from "../redux/actions/dataActions";

const CommentForm = (props) => {
  const [comment, setComment] = useState("");
  const handleChangle = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment Submitted");
    props.postComment(props.id, {
      comment: comment,
      username: props.user.displayName,
    });
    setTimeout(() => {
      setComment("");
    }, 500);
  };
  //   console.log(props.id);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add comment"
          className="form-control"
          value={comment}
          onChange={handleChangle}
        />
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {
  postComment,
};

export default connect(mapStateToProps, mapActionsToProps)(CommentForm);
