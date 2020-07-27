import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Recovery from "./components/Recovery";
import { auth, db } from "./firebase/utils";
import { CREATE_USER } from "./redux/types";
import Profile from "./Profile/Profile";
import SinglePost from "./components/SinglePost/SinglePost";
import store from "./redux/store";

class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        this.setState({ authenticated: true });
        db.doc(`users/${userAuth.uid}`)
          .get()
          .then((doc) => {
            store.dispatch({
              type: CREATE_USER,
              payload: {
                uid: userAuth.uid,
                name: doc.data().name,
                bio: doc.data().bio,
                address: doc.data().address,
                website: doc.data().website,
              },
            });
          });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={() =>
              !this.state.authenticated ? <Redirect to="/login" /> : <Home />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.state.authenticated ? <Redirect to="/" /> : <Signup />
            }
          />
          <Route
            exact
            path="/login"
            render={() =>
              this.state.authenticated ? <Redirect to="/" /> : <Login />
            }
          />
          {/* <Route
            exact
            path="/profile"
            render={() =>
              !this.state.authenticated ? <Redirect to="/login" /> : <Profile />
            }
          /> */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/reset" component={Recovery} />
          <Route exact path="/post/:id" component={SinglePost} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
