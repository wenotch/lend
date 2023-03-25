import React from "react";
import "./style.scss";
import DashboardMenu from "../../components/DashboardMenu";
import loanUsers from "../../assests/img/loan-users.svg";
import hdot from "../../assests/img/h-dots.svg";
import savingUsers from "../../assests/img/saving-users.svg";
import usersIcon from "../../assests/img/users-icon.svg";
import activeUsers from "../../assests/img/active-users.svg";
import filterImg from "../../assests/img/filter-img.svg";
import Pagination from "../../components/Pagination";
import resultFilter from "../../utils/resultFilter";
import { Link } from "react-router-dom";
export default function Dashboard() {
  let [userData, setUserData] = React.useState<any[]>();
  let [orgName, setOrgName] = React.useState<string>("");
  let [email, setEmail] = React.useState<string>("");
  let [date, setDate] = React.useState<string>("");
  let [phone, setPhone] = React.useState<string>("");
  let [filterObject, setFilterObject] = React.useState<object>({});
  let [userStatus, setUserStatus] = React.useState<string>();
  const [PageSize, setPageSize] = React.useState<number>(25);
  const [userName, setUserName] = React.useState<string>("");

  const [currentPage, setCurrentPage] = React.useState(1);
  let [showFilter, setShowFilter] = React.useState(true);
  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (userData !== undefined) {
      return userData.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, userData, PageSize]);
  const handleChange = (e: any) => {
    setPageSize(e.target.value);
  };
  React.useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => res.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.log(error));
  }, []);

  let filterAction = (e: any) => {
    e.preventDefault();
    setFilterObject({
      orgName,
      userName,
      email,
      createdAt: date,
      phoneNumber: phone,
    });
    setShowFilter(!showFilter);
  };
  let resetFilter = (e: any) => {
    e.preventDefault();
    setFilterObject({});
    setShowFilter(!showFilter);
  };
  return (
    <div className="dashboard">
      <DashboardMenu />
      <div className="right">
        <h2 className="heading">Users</h2>
        <div className="top">
          <div className="card">
            <img alt="card-icon" src={usersIcon} />
            <p>Users</p>
            <h4>2,453</h4>
          </div>
          <div className="card">
            <img alt="card-icon" src={activeUsers} />
            <p>Active Users</p>
            <h4>2,453</h4>
          </div>
          <div className="card">
            <img alt="card-icon" src={loanUsers} />
            <p>Users with loans</p>
            <h4>12,453</h4>
          </div>
          <div className="card">
            <img alt="card-icon" src={savingUsers} />
            <p>Users with savings</p>
            <h4>102,453</h4>
          </div>
        </div>
        <div className="bottom">
          <table>
            <thead>
              <tr className="table-heading">
                <th className="theading">
                  <p>Organization</p>
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
                <th className="theading">
                  Username{" "}
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
                <th className="theading">
                  Email{" "}
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
                <th className="theading mobile">
                  Phone{" "}
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
                <th className="theading desktop">
                  Phone number{" "}
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
                <th className="theading mobile">
                  Joined{" "}
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
                <th className="theading desktop">
                  Date Joined{" "}
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
                <th className="theading">
                  Status{" "}
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
                <th style={{ display: "none" }}>
                  dot{" "}
                  <img
                    src={filterImg}
                    alt="filter"
                    onClick={() => {
                      setShowFilter(!showFilter);
                    }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {!showFilter && (
                  <div className="filter">
                    <form>
                      <div className="input-wrapper">
                        <p>Organization</p>
                        {userData ? (
                          <select
                            onChange={(e) => {
                              setOrgName(e.target.value);
                            }}
                          >
                            <option selected={true} disabled={true}>
                              Choose Organization
                            </option>
                            {userData.map((item) => {
                              return (
                                <option value={item.orgName}>
                                  {item.orgName}
                                </option>
                              );
                            })}
                          </select>
                        ) : (
                          <p>One</p>
                        )}
                      </div>
                      <div className="input-wrapper">
                        <p>Username</p>
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => {
                            setUserName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="input-wrapper">
                        <p>Email</p>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>{" "}
                      <div className="input-wrapper">
                        <p>Date</p>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>{" "}
                      <div className="input-wrapper">
                        <p>Phone Number</p>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                      </div>
                      <div className="input-wrapper">
                        <p>Status</p>
                        <select
                          onChange={(e) => {
                            setUserStatus(e.target.value);
                          }}
                          value={userStatus}
                        >
                          <option value={0}>Inactive</option>{" "}
                          <option value={1}>Pending</option>{" "}
                          <option value={2}>Blacklisted</option>{" "}
                          <option value={3}>Active</option>
                        </select>
                      </div>
                      <div className="button-wrapper">
                        <button
                          onClick={(e) => {
                            resetFilter(e);
                          }}
                        >
                          Reset
                        </button>
                        <button
                          onClick={(e) => {
                            filterAction(e);
                          }}
                        >
                          Filter
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </tr>
            </tbody>

            {currentTableData ? (
              currentTableData
                .filter(resultFilter(filterObject))
                .map((item: any, index: number) => {
                  return <TableRow item={item} key={index} />;
                })
            ) : (
              <p>Loading...</p>
            )}
          </table>
          {userData ? (
            <div className="pagination-holder">
              <div className="showing">
                <p>Showing</p>
                <select name="pageSize" id="pagesize" onChange={handleChange}>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <p>out of {userData.length}</p>
              </div>
              <div className="pagination-display-holder">
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={
                    userData.filter(resultFilter(filterObject)).length
                  }
                  pageSize={PageSize}
                  onPageChange={(page: React.SetStateAction<number>) =>
                    setCurrentPage(page)
                  }
                />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

const TableRow = ({ item }: { item: any }) => {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let createdDate = new Date(item.createdAt);
  let randomStatus = () => {
    let status = ["Inactive", "Pending", "Blacklisted", "Active"];
    return status[item.id % 4];
    // return status[Math.floor(Math.random() * 4)];
    // return
  };
  function formatAMPM() {
    var hours = createdDate.getHours();
    var minutes: any = createdDate.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  let status = randomStatus();
  return (
    <tr className="table-body">
      <td>
        <Link to={`/user/${item.id}`}>{item.orgName}</Link>
      </td>
      <td>
        <Link to={`/user/${item.id}`}>{item.userName}</Link>
      </td>
      <td>
        <Link to={`/user/${item.id}`}>{item.email}</Link>
      </td>
      <td>
        <Link to={`/user/${item.id}`}>{item.phoneNumber}</Link>
      </td>
      <td>
        <Link to={`/user/${item.id}`}>
          {month[createdDate.getMonth()]} {createdDate.getDay()},{" "}
          {createdDate.getFullYear()} {formatAMPM()}
        </Link>
      </td>
      <td>
        <Link to={`/user/${item.id}`}>
          <p className={status}>{status}</p>
        </Link>
      </td>
      <td>
        <Link to={`/user/${item.id}`}>
          <img src={hdot} alt="options" />
        </Link>
      </td>
    </tr>
  );
};
