import {
  SET_POSTS,
  SET_COMMENTS,
  SET_POST,
  SET_LIKED,
  SET_UNLIKED,
  SET_USERPOSTS,
  SET_USERLIKEDPOSTS,
} from "../types";

const initState = {
  posts: null,
  post: null,
  comments: [],
  liked: false,
  userPosts: null,
  userLikedPosts: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case SET_COMMENTS:
      // console.log(action.payload);
      return {
        ...state,
        comments: action.payload,
      };
    case SET_LIKED:
      return {
        ...state,
        liked: true,
      };
    case SET_UNLIKED:
      return {
        ...state,
        liked: true,
      };
    case SET_USERPOSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    case SET_USERLIKEDPOSTS:
      return {
        ...state,
        userLikedPosts: action.payload,
      };
    default:
      return state;
  }
}
