import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import uiReducer from "./reducers/uiReducer";

const initState = {};
const middleWare = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
});

const store = createStore(
  reducers,
  initState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
