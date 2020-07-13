import React, { Component } from "react";
import Home from "./pages/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Recovery from "./components/Recovery";
import { auth } from "./firebase/utils";
import { CREATE_USER } from "./redux/types";
import Profile from "./Profile/Profile";

class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        this.setState({ authenticated: true });
        store.dispatch({
          type: CREATE_USER,
          payload: { email: userAuth.email, displayName: userAuth.displayName },
        });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
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
            <Route
              exact
              path="/profile"
              render={() =>
                !this.state.authenticated ? (
                  <Redirect to="/login" />
                ) : (
                  <Profile />
                )
              }
            />
            <Route exact path="/reset" component={Recovery} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
