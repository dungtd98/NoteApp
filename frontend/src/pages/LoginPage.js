import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import '../styles/LoginPage.css'

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className="app-login">
      <h1>LOGIN</h1>
      <form action="" onSubmit={loginUser}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter UserName"
          className="input"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="input"
        />
        <input type="submit" value="Login" id="login-button" />
        <div id="register">
          Don't have account? 
          <span id="register-link">
            <Link to={"/register/"}> Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
