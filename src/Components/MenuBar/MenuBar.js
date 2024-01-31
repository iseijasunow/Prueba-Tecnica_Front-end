import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.scss";

export default function MenuBar() {
  return (
    <Link to="/" className="menu-item">
      <h1>GITHUB USERS</h1>
    </Link>
  );
}
