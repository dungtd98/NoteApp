import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../styles/register.css";
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  let { registerUser } = useContext(AuthContext);
  return (
    <div className="app-register">
      <h1>REGISTER</h1>
      <form action="" onSubmit={registerUser}>
        <input
          type="text"
          name="username"
          className="input"
          placeholder="Enter Username"
        />
        <input
          type="text"
          name="email"
          className="input"
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Enter Password"
        />
        <input type="submit" value="Register" id="register-button" />
        <div id="login">
          Already have account? 
          <span id="login-link">
            <Link to={"/login"}> Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
