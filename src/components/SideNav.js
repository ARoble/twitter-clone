import React from "react";
import Profile from "./Profile";
import {
  FaHome,
  FaBell,
  FaHashtag,
  FaEnvelope,
  FaUser,
  FaEllipsisH,
  FaFeatherAlt,
} from "react-icons/fa";
const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="nav">
        <img className="logo" src="/twitter.png" alt="Twitter Logo" />
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
