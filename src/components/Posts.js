import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";

import { getPosts } from "../redux/actions/dataActions";
import { ClockLoader } from "react-spinners";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    // console.log(this.props.data.posts);
    const { posts } = this.props.data;
    const renderPosts =
      posts === null ? (
        <div className="col-md-12 mx-auto loading">
          <ClockLoader size={150} color="orange" />
        </div>
      ) : posts.length === 0 ? (
        <h1 className="display-5 mt-4 mb-2 text-center">No posts yet !!!</h1>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      );
    return <div className="col-md-7 col-sm-12">{renderPosts}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapActionsToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapActionsToProps)(Posts);
