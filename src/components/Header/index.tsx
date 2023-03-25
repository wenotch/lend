import React from "react";
import "./style.scss";
import logo from "../../assests/img/logo.svg";
import magnify from "../../assests/img/magnify.svg";
import notify from "../../assests/img/notify.png";
import warren from "../../assests/img/warren.jpeg";
import caretDown from "../../assests/img/caret-down.svg";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextType } from "../../types/types.d";
import "./style.scss";

export default function Header() {
  const { showLeftMenu, setShowLeftMenu } = React.useContext(
    AuthContext
  ) as AuthContextType;

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Lendsqr" />
        <h2>Lendsqr</h2>
      </div>
      <div className="search-bar">
        <div className="input-wrapper">
          <input type="text" placeholder="Search for anything" />
        </div>
        <div className="search-button">
          <img src={magnify} alt="search" />
        </div>
      </div>
      <div className="user-info">
        <a href="/#">Docs</a>
        <img src={notify} alt="notify" className="notify" />
        <div className="user-caret">
          <img src={warren} alt="user" className="user"    onClick={() => {
              setShowLeftMenu(!showLeftMenu);
            }}/>
          <p>Waren</p>
          <img
            src={caretDown}
            alt="caretdown"
            onClick={() => {
              setShowLeftMenu(!showLeftMenu);
            }}
          />
        </div>
      </div>
    </div>
  );
}
