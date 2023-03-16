import React, { useState } from "react";
import "./header.css";
import { LOGO_URL } from "../../constants";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/Logo.jpeg";
export const Logo = () => {
  return (
    <Link to="/">
      <img className="logo-img" src={HeaderLogo} alt="Food Villa" />
    </Link>
  );
};

const Header = function () {
  return (
    <div className="header-fixed">
      <div className="header">
        <Logo />
        {/* <Temp /> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// For understanding state
const Temp = () => {
  const [title, setTitle] = useState("Title");

  return (
    <>
      {title}
      <button
        onClick={() => setTitle(title === "Title" ? "New Title" : "Title")}
      >
        change title
      </button>
    </>
  );
};

export default Header;
