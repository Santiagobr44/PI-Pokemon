// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
  return <div>Navbar</div>;
};

export default Navbar;
