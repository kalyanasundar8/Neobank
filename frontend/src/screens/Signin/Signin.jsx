import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  return (
    <div className="bg-gradient">
      <div className="form-container">
        <div className="form-header">
          <h1 className="title">Sign In</h1>
          <Link to="/" className="logo"><FontAwesomeIcon icon={faGlobeAsia} className="logo-icon"/><span>NeoBank</span></Link>
        </div>
        <div className="form-fields">
          <form action="#">
            <div className="input-box">
              <input type="tel" placeholder="Mobile Number / Email" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Password" />
            </div>
            <div className="input-box">
              <input type="submit" value="Sign In" className="primary-btn" />
            </div>
            <div className="navigation">
              <p>I dont't have an account?</p>
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
