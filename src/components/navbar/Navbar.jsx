import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import WavingHandIcon from "@mui/icons-material/WavingHand";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="name">
          <p className="surname">Hello Shahrukh</p>
          <WavingHandIcon className="icon" />
        </div>
        <div className="search">
          <SearchIcon className="icon"/>
          <input type="text " placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
