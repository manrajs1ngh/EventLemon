import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-contact">
          <h3>Get in touch</h3>
          <p>
            We take a fresh approach to connecting event vendors with event
            curators. If you would like to get in contact with us, reach out
            below:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:support@eventlemon.com">support@eventlemon.com</a>
          </p>
          <p>
            Phone: <a href="tel:+61433971442">+61 433 971 442</a>
          </p>
        </div>

        <div className="footer-links">
          <ul>
            <h3>Navigate to</h3>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
