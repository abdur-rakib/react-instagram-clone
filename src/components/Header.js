import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActions";

const Header = (props) => {
  const { authenticated, displayName } = props.user;
  const renderProfile = authenticated ? (
    <div className="d-flex">
      <Link to="/profile" title={displayName}>
        <img
          className="avatar profile"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
        />
      </Link>

      <Link to="/">
        <AiOutlineLogout
          onClick={props.logout}
          size={32}
          className="text-danger ml-2"
        />
      </Link>
    </div>
  ) : null;
  return (
    <div className="app__header pl-md-4">
      <div className="col-md-11 mx-auto d-flex justify-content-between">
        <Link to="/">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
            className="app__headerImage "
          />
        </Link>
        {renderProfile}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {
  logout,
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
