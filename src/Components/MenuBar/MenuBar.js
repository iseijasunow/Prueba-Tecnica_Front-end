import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.scss";

export default function MenuBar() {
  return <Link to="/" className="menu-item">GITHUB USERS</Link>;
}
