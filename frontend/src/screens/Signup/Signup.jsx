import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./Signup.css";

const Signup = () => {
  const schema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    mobileNumber: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Mobile number is not valid")
      .required("Mobilenumber is required"),
    email: Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
, "Enter a valid email").required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signup = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gradient">
      <div className="form-container">
        <div className="form-header">
          <h1 className="title">Sign Up</h1>
          <Link to="/" className="logo">
            <FontAwesomeIcon icon={faGlobeAsia} className="logo-icon" />
            <span>NeoBank</span>
          </Link>
        </div>
        <div className="form-fields">
          <form action="#" onSubmit={handleSubmit(signup)}>
            <div className="input-box">
              <input
                type="text"
                name="userName"
                placeholder="Kalyanasundar"
                className={`${errors.userName ? "error-border" : "input"}`}
                {...register("userName")}
              />
              {errors.userName && (
                <p className="validation-error-message">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div className="input-box">
              <input
                type="tel"
                name="mobileNumber"
                placeholder="8248952135"
                className={`${errors.mobileNumber ? "error-border" : "input"}`}
                {...register("mobileNumber")}
              />
              {errors.mobileNumber && (
                <p className="validation-error-message">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="sundar31100@gmail.com"
                className={`${errors.email ? "error-border" : "input"}`}
                {...register("email")}
              />
              {errors.email && (
                <p className="validation-error-message">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="input-box">
              <input type="text" name="address" placeholder="0/00, Kovil Street" className="input"/>
            </div>
            <div className="input-box input">
              <select>
                <option>Female</option>
                <option>Male</option>
                <option>Trans</option>
              </select>
            </div>
            <div className="input-box">
              <input type="submit" value="Sign Up" className="primary-btn input" />
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
