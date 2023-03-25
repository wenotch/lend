import React from "react";
import logo from "../../assests/img/Lendsqr-Logo.png";
import pablo from "../../assests/img/pablo.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function Login() {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [showPassword, setShowPassword] = React.useState(false);
  let navigate = useNavigate();
  let handleLogin = (e: any) => {
    e.preventDefault();
    localStorage.setItem("token", "true");
    navigate("/dashboard");
  };
  return (
    <div className="login">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="Lendsqr" className="logo-image" />
          {/* <h2>Lendsqr</h2> */}
        </div>
        <div className="img-wrapper">
          <img src={pablo} alt="Sign In" />
        </div>
      </div>
      <div className="right">
        <h2>Welcome</h2>
        <p className="heading">Enter details to login.</p>
        <form>
          <div className="input-wrapper">
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              SHOW
            </p>
          </div>
          <p>FORGOT PASSWORD?</p>
          <div className="button-wrapper">
            <button onClick={(e) => handleLogin(e)}>LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
}
