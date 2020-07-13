import React from "react";
import "./User.css";

const User = () => {
  return (
    <div className="col-md-5 col-sm-12 user mx-auto">
      <div className="user__header">
        <img
          className="user__avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
        />
        <p className="mx-4">
          <strong>Rakib</strong>
        </p>
      </div>
    </div>
  );
};

export default User;
