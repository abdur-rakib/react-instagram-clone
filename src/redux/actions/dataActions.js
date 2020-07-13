import { db } from "../../firebase/utils";
import { SET_POSTS, SET_COMMENTS } from "../types";

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
    .onSnapshot((snapshot) => {
      let comments = [];
      snapshot.docs.map((doc) => comments.push(doc.data()));
      // console.log(comments);
      dispatch({ type: SET_COMMENTS, payload: comments });
    });
};
