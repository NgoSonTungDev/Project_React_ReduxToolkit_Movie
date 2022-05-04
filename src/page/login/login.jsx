import React from "react";
import "./login.scss";
import Navbar from "../../components/navbar/navbar";

const Login = () => {
  return (
    <div className="login-container">
      <Navbar />
      <div className="login-page">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "20px",
            color: "#0984e3",
          }}
        >
          LOGIN
        </h1>
        <div className="login-form">
          <label htmlFor="">Username</label>
          <br />
          <input
            type="text"
            className="input-login"
            placeholder="Type your usename"
            required
          />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input
            type="password"
            className="input-login"
            placeholder="Type your password"
            required
          />
          <br />
          <p className="forget">Forgot passwork?</p>
          <button className="btn-login">LOGIN</button>
          <br />
          <div className="login-social">
            <p>Or Sign up Using</p>
            <ul class="social-share">
              <li class="social-item social-item--facebook">
                <i class="fab fa-facebook-square" title="facebook"></i>
              </li>
              <li class="social-item social-item--twitter" >
                <i class="fab fa-twitter"  title="twitter"></i>
              </li>
              <li class="social-item social-item--intagram">
              <i class="fa-brands fa-instagram" title="intagram"></i>
              </li>
              <li class="social-item social-item--github">
                <i  class="fa-brands fa-github" title="github"></i>
              </li>
            </ul>
          </div>
          <div className="sign-up">
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

//Design by Son Tung Developer
