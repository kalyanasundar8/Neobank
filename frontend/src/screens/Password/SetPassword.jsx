import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SetPassword = () => {
  return (
    <div className="bg-gradient">
      <div className="form-container">
        <div className="form-header">
          <h1 className="title">Set Password</h1>
          <Link to="/" className="logo"><FontAwesomeIcon icon={faGlobeAsia} className="logo-icon"/><span>NeoBank</span></Link>
        </div>
        <div className="form-fields">
          <form action="#">
            <div className="input-box">
              <input type="password" placeholder="password" className="input"/>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Confirm Password" className="input"/>
            </div>
            <div className="input-box">
              <input type="submit" value="Set password" className="primary-btn input" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SetPassword
