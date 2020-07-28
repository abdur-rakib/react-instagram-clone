import { db } from "../../firebase/utils";
import {
  SET_POSTS,
  SET_COMMENTS,
  SET_POST,
  SET_LOADING,
  CLEAR_LOADING,
  SET_USERPOSTS,
  SET_USERLIKEDPOSTS,
} from "../types";
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
      dispatch({ type: SET_COMMENTS, payload: comments });
    });
};

// post comments
export const postComment = (id, commentData) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  db.collection("posts")
    .doc(id)
    .collection("comments")
    .add({
      comment: commentData.comment,
      username: commentData.username,
      createdAt: new Date().toISOString(),
    })
    .then(() => {
      dispatch({ type: CLEAR_LOADING });
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

export const likePost = (postId, name) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  db.doc(`posts/${postId}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const likeCount = doc.data().likeCount;
        db.collection("likes")
          .add({
            name: name,
            postId: postId,
          })
          .then(() => {
            db.doc(`posts/${postId}`).update({
              likeCount: likeCount + 1,
            });
            dispatch({ type: CLEAR_LOADING });
          });
      }
    })
    .catch((err) => console.log(err));
};
export const unlikePost = (postId, name) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  db.doc(`posts/${postId}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const likeCount = doc.data().likeCount;
        db.collection("likes")
          .where("name", "==", name)
          .where("postId", "==", postId)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              db.doc(`/likes/${doc.id}`)
                .delete()
                .then(() => {
                  db.doc(`posts/${postId}`).update({
                    likeCount: likeCount - 1,
                  });
                  dispatch({ type: CLEAR_LOADING });
                });
            });
          });
      }
    })
    .catch((err) => console.log(err));
};

export const getUserPosts = (uid) => (dispatch) => {
  db.collection("posts")
    .where("uid", "==", uid)
    .get()
    .then((querySnapshot) => {
      let posts = [];
      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch({ type: SET_USERPOSTS, payload: posts });
    });
};
// export const getUserLikedPosts = (name) => (dispatch) => {
//   db.collection("likes")
//     .where("name", "==", name)
//     .get()
//     .then((querySnapshot) => {
//       let posts = [];
//       // console.log(querySnapshot);
//       querySnapshot.forEach((doc) => {
//         db.doc(`posts/${doc.data().postId}`)
//           .get()
//           .then((doc) => {
//             posts.push({
//               id: doc.id,
//               ...doc.data(),
//             });
//           });
//       });
//       dispatch({ type: SET_USERLIKEDPOSTS, payload: posts });
//     });
// };
export const getUserLikedPosts = (name) => (dispatch) => {
  db.collection("likes")
    .where("name", "==", name)
    .onSnapshot((snapshot) => {
      let posts = [];
      // eslint-disable-next-line
      snapshot.docs.map((doc) => {
        db.doc(`posts/${doc.data().postId}`)
          .get()
          .then((doc) => {
            posts.push({
              id: doc.id,
              ...doc.data(),
            });
          });
      });
      dispatch({ type: SET_USERLIKEDPOSTS, payload: posts });
    });
};
