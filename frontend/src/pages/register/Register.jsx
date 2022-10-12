import Topbar from "../../components/topbar/Topbar";
import "./register.css";

export default function Register() {
  return (
    <>
      <Topbar />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h4 className="loginLogo">FatihSocial</h4>
            <span className="loginDesc">
              Connect with your friends around the world
            </span>
          </div>

          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Password Again" className="loginInput" />
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">
                Log Into Your Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
