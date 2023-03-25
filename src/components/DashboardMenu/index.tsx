import React from "react";
import "./style.scss";
import users from "../../assests/img/users.svg";
import briefcase from "../../assests/img/briefcase.svg";
import arrowDown from "../../assests/img/arrow-down.svg";
import dash from "../../assests/img/dash.svg";
import customer2 from "../../assests/img/customer-2.svg";
import customer3 from "../../assests/img/customer-3.svg";
import customer4 from "../../assests/img/customer-4.svg";
import customer5 from "../../assests/img/customer-5.svg";
import customer6 from "../../assests/img/customer-6.svg";
import customer7 from "../../assests/img/customer-7.svg";
import customer8 from "../../assests/img/customer-8.svg";
import business3 from "../../assests/img/business-3.svg";
import business4 from "../../assests/img/business-4.svg";
import business5 from "../../assests/img/business-5.svg";
import business6 from "../../assests/img/business-6.svg";
import business7 from "../../assests/img/business-7.svg";
import business8 from "../../assests/img/business-8.svg";
import business9 from "../../assests/img/business-9.svg";
import logOutSvg from "../../assests/img/log-out.svg";
import set1 from "../../assests/img/set-1.svg";
import set2 from "../../assests/img/set-2.svg";
import set3 from "../../assests/img/set-3.svg";
import set4 from "../../assests/img/customer-4.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextType } from "../../types/types.d";

export default function DashboardMenu() {
  const { showLeftMenu } = React.useContext(
    AuthContext
  ) as AuthContextType;

  let customers = [
    { title: "Users", img: users },
    { title: "Guarantors", img: customer2 },
    { title: "Loans", img: customer3 },
    { title: "Decision Models", img: customer4 },
    { title: "Savings", img: customer5 },
    { title: "Loan Requests", img: customer6 },
    { title: "Whitelist", img: customer7 },
    { title: "Karma", img: customer8 },
  ];
  let businesses = [
    { title: "Organization", img: briefcase },
    { title: "Loan Products", img: customer6 },
    { title: "Savings Products", img: business3 },
    { title: "Fees and Charges", img: business4 },
    { title: "Transactions", img: business5 },
    { title: "Services", img: business6 },
    { title: "Service Account", img: business7 },
    { title: "Settlements", img: business8 },
    { title: "Reports", img: business9 },
  ];
  let settings = [
    { title: "Preferences", img: set1 },
    { title: "Fees and Pricing", img: set2 },
    { title: "Audit Logs", img: set3 },
    { title: "Systems Messages", img: set4 },
    // { title: "Logout", img: logOutSvg },
  ];
  let navigate = useNavigate();
  let handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className={`dash-left ${showLeftMenu ? "" : "show-me"}`}>
      <div className="left-item">
        <img src={briefcase} alt="icon" />

        <h3>Switch Organization</h3>
        <img src={arrowDown} alt="icon" />
      </div>
      <div className="left-item">
        <Link to="/dashboard">
          <img src={dash} alt="icon" />
          <h4>Dashboard</h4>
        </Link>
      </div>
      <div className="customers">
        <div className="top">
          <h4>Customers</h4>
        </div>
        <div className="bottom">
          {customers.map((item: { title: string; img: any }, index) => {
            return (
              <div className="left-item" key={index}>
                <img src={item.img} alt="users" />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="businesses">
        <div className="top">
          <h4>Businesses</h4>
        </div>
        <div className="bottom">
          {businesses.map((item: { title: string; img: any }, index) => {
            return (
              <div className="left-item" key={index}>
                <img src={item.img} alt="users" />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="settings">
        <div className="top">
          <h4>Settings</h4>
        </div>
        <div className="bottom">
          {settings.map((item: { title: string; img: any }, index) => {
            return (
              <div className="left-item" key={index}>
                <img src={item.img} alt="users" />
                <p>{item.title}</p>
              </div>
            );
          })}
          <div
            className="left-item"
            onClick={() => {
              handleLogOut();
            }}
          >
            <img src={logOutSvg} alt="users" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
