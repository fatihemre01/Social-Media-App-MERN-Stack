import { useContext, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h4 className="loginLogo">FatihSocial</h4>
            <span className="loginDesc">
              Connect with your friends around the world
            </span>
          </div>

          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                className="loginInput"
                ref={email}
                required
              />
              <input
                placeholder="Password"
                type="password"
                className="loginInput"
                ref={password}
                required
                minLength="6"
              />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>

              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
