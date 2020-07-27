import {
  SET_POSTS,
  SET_COMMENTS,
  SET_POST,
  SET_LIKED,
  SET_UNLIKED,
} from "../types";

const initState = {
  posts: null,
  post: null,
  comments: [],
  liked: false,
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
    default:
      return state;
  }
}
