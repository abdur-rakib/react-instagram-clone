import { db } from "../../firebase/utils";
import { SET_POSTS, SET_COMMENTS, SET_POST } from "../types";
// import firebase from "firebase/app";

export const getPosts = () => (dispatch) => {
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      let posts = [];
      snapshot.docs.map((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
        return doc;
      });
      dispatch({ type: SET_POSTS, payload: posts });
    });
};

export const createPost = (postData) => (dispatch) => {};

// get comments
export const getComments = (postId) => (dispatch) => {
  db.collection("posts")
    .doc(postId)
    .collection("comments")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      let comments = [];
      snapshot.docs.map((doc) => comments.push(doc.data()));
      console.log(comments);
      dispatch({ type: SET_COMMENTS, payload: comments });
    });
};

// post comments
export const postComment = (id, commentData) => (dispatch) => {
  db.collection("posts").doc(id).collection("comments").add({
    comment: commentData.comment,
    username: commentData.username,
    createdAt: new Date().toISOString(),
  });
};

// get single post
export const getSinglePost = (id) => (dispatch) => {
  db.collection("posts").onSnapshot((snapshot) => {
    // eslint-disable-next-line
    snapshot.docs.find((doc) => {
      if (doc.id === id) {
        dispatch({ type: SET_POST, payload: doc.data() });
      }
    });
  });
};
