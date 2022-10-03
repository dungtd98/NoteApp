import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import API from "../ultis/API";

const AuthContext = createContext();
export default AuthContext;

export const ContextProvider = ({ children }) => {
  let localAuthToken = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;
  let localAuthUser = localStorage.getItem("authToken")
    ? jwt_decode(localStorage.getItem("authToken"))
    : null;
  const [authToken, setAuthToken] = useState(() => localAuthToken);
  const [user, setUser] = useState(() => localAuthUser);
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      let response = await API.post("token/", {
        username: e.target.username.value,
        password: e.target.password.value,
      });

      setAuthToken(response.data);
      setUser(jwt_decode(response.data.access));
      localStorage.setItem("authToken", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      logoutUser();
    }
  };

  const logoutUser = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const updateToken = async () => {
    try {
      let response = await API.post("token/refresh/", {
        refresh: authToken.refresh,
      });
      localStorage.setItem("authToken", JSON.stringify(response.data));
      setAuthToken(response.data);
      setUser(jwt_decode(response.data.access));
    } catch (error) {}

    if (loading) {
      setLoading(false);
    }
  };

  const registerUser = async (e)=>{
    e.preventDefault()
    try{
      let resp = await API.post(`register/`,{
        username:e.target.username.value,
        email:e.target.email.value,
        password:e.target.password.value
      })
      console.log(resp)
      navigate('/login')
    }catch(error){
      console.log(error)
      alert('Try again!!')
    }
  }
  const contextData = {
    user: user,
    authToken: authToken,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser:registerUser,
  };
  // eslint-disable-next-line
  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let interval = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, 1000 * 60 * 4);
    return () => clearInterval(interval);
  }, [authToken, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>loading...</p> : children}
    </AuthContext.Provider>
  );
};
