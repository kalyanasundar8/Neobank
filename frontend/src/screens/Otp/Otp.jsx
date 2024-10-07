import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

const Otp = () => {
  return (
    <div className="bg-gradient">
      <div className="form-container">
        <div className="form-header">
          <h1 className="title">Verify OTP</h1>
          <Link to="/" className="logo"><FontAwesomeIcon icon={faGlobeAsia} className="logo-icon"/><span>NeoBank</span></Link>
        </div>
        <div className="form-fields">
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Your OTP" />
            </div>
            <div className="input-box">
              <input type="submit" value="Verify" className="primary-btn" />
            </div>
            <div className="navigation">
              <p>Resend OTP</p>
              <Link to="#">Resend</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Otp
