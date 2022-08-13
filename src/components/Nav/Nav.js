import React from "react";
import classes from "./Nav.css";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li onClick={() => props.onStateChange("Home")}>Home</li>
        <li onClick={() => props.onStateChange("Skills")}>Skills</li>
        <li onClick={() => props.onStateChange("Certs")}>Certifications</li>
        <li onClick={() => props.onStateChange("About")}>About</li>
      </ul>
    </nav>
  );
}
