import { db } from "../../firebase/utils";
import {
  SET_POSTS,
  SET_COMMENTS,
  SET_POST,
  SET_LOADING,
  CLEAR_LOADING,
  SET_USERPOSTS,
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

// export const likeUnlikePost = (postId, username) => (dispatch) => {
//   db.doc(`posts/${postId}`)
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         const liked = doc.data().likes.indexOf(username);
//         console.log(liked);
//         if (liked === -1) {
//           db.doc(`/posts/${postId}`).update({
//             likes: [...doc.data().likes, username],
//           });
//           console.log("added");
//         } else {
//           doc.data().likes = [1, 2, 3];
//           console.log(doc.data().likes);
//           db.doc(`/posts/${postId}`)
//             .update({
//               likes: ["a", "b", "c"],
//             })
//             .then(() => console.log("removed"))
//             .catch((err) => console.log(err));
//         }
//       }
//     })
//     .catch((err) => console.log(err));
// };

export const likePost = (postId, name) => (dispatch) => {
  db.doc(`posts/${postId}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const likeCount = doc.data().likeCount;
        db.collection("likes")
          .add({
            postId: postId,
            username: name,
          })
          .then(() => {
            db.doc(`posts/${postId}`).update({
              likeCount: likeCount + 1,
            });
          });
      }
    })
    .catch((err) => console.log(err));
};
export const unlikePost = (postId, name) => (dispatch) => {
  db.doc(`posts/${postId}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const likeCount = doc.data().likeCount;
        db.collection("likes")
          .where("username", "==", name)
          .where("postId", "==", postId)
          .limit(1)
          .get()
          .then((data) => {
            db.doc(`/likes/${data.docs[0].id}`)
              .delete()
              .then(() => {
                db.doc(`posts/${postId}`).update({
                  likeCount: likeCount - 1,
                });
              });
          });
      }
    })
    .catch((err) => console.log(err));
};

export const likedPost = (postId, name) => (dispatch) => {
  db.doc(`posts/${postId}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        db.collection("likes")
          .where("username", "==", name)
          .where("postId", "==", postId)
          .limit(1)
          .get()
          .then((data) => {
            if (data.empty) {
              return false;
            } else {
              return true;
            }
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
      querySnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch({ type: SET_USERPOSTS, payload: posts });
    });
};
