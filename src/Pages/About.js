import React from "react";
import AboutBg from "../assets/blockbg.jpg";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Hi, Its me Akanksha.
        </p>
        <p>
            Am just trying to understand the frontend better and this is a small project to evaluate my skills, hope you liked it
        </p>
      </div>
    </div>
  );
}

export default About;