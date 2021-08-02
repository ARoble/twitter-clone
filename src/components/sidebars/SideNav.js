import React from "react";
import Profile from "../partials/Profile";
import {
  FaHome,
  FaBell,
  FaHashtag,
  FaEnvelope,
  FaUser,
  FaEllipsisH,
  FaFeatherAlt,
} from "react-icons/fa";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="nav">
        <Link to="/">
          <img className="logo" src="/twitter.png" alt="Twitter Logo" />
        </Link>

        <FaHome size={24} className="icons" />
        <FaBell size={24} className="icons" />
        <FaHashtag size={24} className="icons" />
        <FaEnvelope size={24} className="icons" />
        <FaUser size={24} className="icons" />
        <FaEllipsisH size={24} className="icons" />
        <FaFeatherAlt size={24} className="icons special" />
      </div>
      <div className="profile">
        <Profile value={"profile-image"} src={"/profile.jpg"} />
      </div>
    </div>
  );
};

export default SideNav;
