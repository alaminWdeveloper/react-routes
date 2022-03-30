import React from "react";
import CustomeLink from "../CustomeLink/CustomeLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome to React Website!!</h1>
      <nav className="header-container">
        <CustomeLink to="/">Home</CustomeLink>
        <CustomeLink to="/friends">Friends</CustomeLink>
        <CustomeLink to="/about">About</CustomeLink>
      </nav>
    </div>
  );
};

export default Header;
