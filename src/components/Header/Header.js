import React, { useState } from "react";
import "./header.css";
import { LOGO_URL } from "../../constants";

export const Logo = () => {
  return (
    <a href="/">
      <img className="logo-img" src={LOGO_URL} alt="Food Villa" />
    </a>
  );
};

const Header = function () {
  return (
    <div className="header-fixed">
      <div className="header">
        <Logo />
        {/* <Temp /> */}
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
