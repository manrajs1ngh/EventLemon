import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/get-listed">Get Listed</Link>
        </li>
        <li>
          <Link to="/vendors">Find a Vendor</Link>
        </li>
        </ul>
    </footer>
  );
}

export default Footer;
