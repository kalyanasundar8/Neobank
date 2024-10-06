import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="bg-gradient">
      <div className="form-container">
        <div className="form-header">
          <h1 className="title">Sign Up</h1>
          <Link to="/" className="logo"><FontAwesomeIcon icon={faGlobeAsia} className="logo-icon"/><span>NeoBank</span></Link>
        </div>
        <div className="form-fields">
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Kalyanasundar" />
            </div>
            <div className="input-box">
              <input type="tel" placeholder="8248952135" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="sundar31100@gmail.com" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="0/00, Kovil Street" />
            </div>
            <div className="input-box">
              <select>
                <option>Female</option>
                <option>Male</option>
                <option>Trans</option>
              </select>
            </div>
            <div className="input-box">
              <input type="submit" value="Sign Up" className="primary-btn"/>
            </div>
            <div className="navigation">
                <p>Already have an account?</p>
                <Link to="/signin">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
