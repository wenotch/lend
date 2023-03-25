import React from "react";
import "./style.scss";
import backArrow from "../../assests/img/back-arrow.svg";
import filledStar from "../../assests/img/filled_star.svg";
import emptyStar from "../../assests/img/empty_star.svg";
import {Link} from "react-router-dom"

import DashboardMenu from "../../components/DashboardMenu";
import { useParams } from "react-router";

export default function UserDetail() {
  let { id } = useParams();
  let [userData, setUserData] = React.useState<any>();
  console.log(userData);
  React.useEffect(() => {
    fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    )
      .then((res) => res.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="user-detail">
      <DashboardMenu />
      <div className="right">
        <div className="one">
          <div className="top">
            <Link to="/dashboard">
              <img src={backArrow} alt="back" />
              <p>Back to Users</p>
            </Link>
          </div>
          <div className="bottom">
            <h3>User Details</h3>
            <div className="button-wrapper">
              <button>Blacklist User</button>
              <button className="sec">Activate User</button>
            </div>
          </div>
        </div>
        <div className="two">
          {userData ? (
            <div className="top">
              <img src={userData.profile.avatar} alt="Avatar" />
              <div className="user-name">
                <h3>
                  {userData.profile.firstName} {userData.profile.lastName}
                </h3>
                <p>{userData.accountNumber}</p>
              </div>
              <div className="user-tier">
                <p>User's Tier</p>
                <div className="stars">
                  <img src={filledStar} alt="star" />{" "}
                  <img src={emptyStar} alt="star" />{" "}
                  <img src={emptyStar} alt="star" />
                </div>
              </div>
              <div className="user-account">
                <h3>₦ {userData.accountBalance}</h3>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>
          ) : (
            <div className="top"></div>
          )}

          <div className="bottom">
            <p className="active">General Details</p>
            <p>Documents</p>
            <p>Bank Details</p>
            <p>Loans</p>
            <p>Savings</p>
            <p>App and System</p>
          </div>
        </div>
        {userData ? (
          <div className="three">
            <div className="personal">
              <div className="top">
                <h4>Personal Information</h4>
              </div>
              <div className="bottom">
                <div className="edu-item">
                  <p>full Name</p>

                  <h4>
                    {userData.profile.firstName} {userData.profile.lastName}
                  </h4>
                </div>

                <div className="edu-item">
                  <p>Phone Number</p>
                  <h4>{userData.profile.phoneNumber}</h4>
                </div>
                <div className="edu-item">
                  <p>Email Address</p>
                  <h4>{userData.email}</h4>
                </div>
                <div className="edu-item">
                  <p>Bvn</p>
                  <h4>{userData.profile.bvn}</h4>
                </div>
                <div className="edu-item">
                  <p>Gender</p>
                  <h4>{userData.profile.gender}</h4>
                </div>
                <div className="edu-item">
                  <p>Marital status</p>
                  <h4>Single</h4>
                </div>
                <div className="edu-item">
                  <p>Children</p>
                  <h4>None</h4>
                </div>
                <div className="edu-item">
                  <p>Type of residence</p>
                  <h4>Parent’s Apartment</h4>
                </div>
              </div>
            </div>

            <div className="education">
              <div className="top">
                <h4>Education and Employment</h4>
              </div>
              <div className="bottom">
                <div className="edu-item">
                  <p>level of education</p>
                  <h4>{userData.education.level}</h4>
                </div>
                <div className="edu-item">
                  <p>employment status</p>
                  <h4>{userData.education.employmentStatus}</h4>
                </div>
                <div className="edu-item">
                  <p>sector of employment</p>
                  <h4>{userData.education.sector}</h4>
                </div>
                <div className="edu-item">
                  <p>Duration of employment</p>
                  <h4>{userData.education.duration}</h4>
                </div>
                <div className="edu-item">
                  <p>office email</p>
                  <h4>{userData.education.officeEmail}</h4>
                </div>
                <div className="edu-item">
                  <p>Monthly income</p>
                  <h4>
                    ₦{userData.education.monthlyIncome[1]}- ₦
                    {userData.education.monthlyIncome[0]}
                  </h4>
                </div>
                <div className="edu-item">
                  <p>loan repayment</p>
                  <h4>₦{userData.education.loanRepayment}</h4>
                </div>
              </div>
            </div>
            <div className="socials">
              <div className="top">
                <h4>Socials</h4>
              </div>
              <div className="bottom">
                <div className="edu-item">
                  <p>Twitter</p>
                  <h4>{userData.socials.twitter}</h4>
                </div>
                <div className="edu-item">
                  <p>Facebook</p>
                  <h4>{userData.socials.facebook}</h4>
                </div>
                <div className="edu-item">
                  <p>Instagram</p>
                  <h4>{userData.socials.instagram}</h4>
                </div>
              </div>
            </div>

            <div className="guarantor">
              <div className="top">
                <h4>Guarantor</h4>
              </div>
              <div className="bottom">
                <div className="edu-item">
                  <p>full Name</p>
                  <h4>
                    {userData.guarantor.firstName} {userData.guarantor.lastName}
                  </h4>
                </div>
                <div className="edu-item">
                  <p>Phone Number</p>
                  <h4>{userData.guarantor.phoneNumber}</h4>
                </div>
                <div className="edu-item">
                  <p>Email Address</p>
                  <h4>debby@gmail.com</h4>
                </div>
                <div className="edu-item">
                  <p>Relationship</p>
                  <h4>Sister</h4>
                </div>
              </div>
            </div>
            <div className="last">
              <div className="bottom">
                <div className="edu-item">
                  <p>full Name</p>
                  <h4>
                    {userData.guarantor.firstName} {userData.guarantor.lastName}
                  </h4>
                </div>
                <div className="edu-item">
                  <p>Phone Number</p>
                  <h4>{userData.guarantor.phoneNumber}</h4>
                </div>
                <div className="edu-item">
                  <p>Email Address</p>
                  <h4>debby@gmail.com</h4>
                </div>
                <div className="edu-item">
                  <p>Relationship</p>
                  <h4>Sister</h4>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="three"></div>
        )}
      </div>
    </div>
  );
}
