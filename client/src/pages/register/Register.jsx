import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password dont match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log("success");
      try {
        await axios.post("/auth/register",{ params: user })
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              className="loginInput"
              type="text"
              placeholder="Username"
              required
              ref={username}
            />
            <input
              className="loginInput"
              type="email"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              required
              ref={password}
              minLength="6"
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password Again"
              required
              ref={passwordAgain}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Login into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
