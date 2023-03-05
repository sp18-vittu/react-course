import React from "react";
import "./header.css";
export const Logo = () => {
  return (
    <a>
      <img
        className="logo-img"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
    </a>
  );
};

const Header = function () {
  return (
    <div className="header-fixed">
      <div className="header">
        <Logo />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
