import "./about.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import ProfileClass from "../Profile/ProfileClass";

const About = () => {
  const [url, setUrl] = useState("/about/profile");
  const [btnText, setBtnText] = useState("Show");
  const updateBtn = () => {
    url === "/about"
      ? (setUrl("/about/profile"), setBtnText("Show"))
      : (setUrl("/about"), setBtnText("Hide"));
  };
  return (
    <div className="about-page-container">
      <h1>About Us Page</h1>
      <Link to={url}>
        <button onClick={updateBtn} style={{ padding: "5px", margin: "5px" }}>
          {btnText} My Profile
        </button>
      </Link>
      <Outlet />
      <ProfileClass name_prop="Class" />
    </div>
  );
};
export default About;
