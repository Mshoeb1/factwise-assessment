import { Component } from "react";
import { IoIosSearch } from "react-icons/io";
import EditUserDetails from "../EditUserDetails";

import "./index.css";

class ListView extends Component {
  state = {
    users: [],
    searchName: "",
    filterUser: "",
    isEnter: false,
  };

  componentDidMount() {
    this.getData();
  }

  // fetching json file
  getData = async () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    };
    const response = await fetch("celebrities.json", options);

    if (response.ok === true) {
      const fetchedData = await response.json();
      this.setState({ users: fetchedData });
    }
  };

  // collecting input to get the user details
  searchUser = (event) => {
    this.setState({ searchName: event.target.value });
  };

  onKeyDownEnter = (event) => {
    if (event.key === "Enter") {
      this.getFilteredUser();
    }
  };

  // filtering user to render list of available user
  getFilteredUser = () => {
    const { searchName, users } = this.state;
    const filteredUsers = users.filter((each) => {
      return (
        each.first.toLowerCase().startsWith(searchName.toLocaleLowerCase()) ||
        each.last.toLowerCase().startsWith(searchName.toLocaleLowerCase())
      );
    });
    this.setState({ filterUser: filteredUsers });
  };

  searchIconClick = () => {
    this.getFilteredUser();
  };

  passData = () => {
    this.setState({ isEnter: true });
  };

  render() {
    const { filterUser, searchName, isEnter } = this.state;
    return (
      <div className="main-list-view-container">
        <ul className="first-list-view-container">
          {isEnter && filterUser !== ""
            ? filterUser.map((eachUser) => (
                <EditUserDetails
                  details={eachUser}
                  key={eachUser.id}
                  passData={this.passData}
                />
              ))
            : ""}
        </ul>
        <div className="show-list-container">
          <h1 className="list-heading">List View</h1>
          <div className="list-search-container">
            <IoIosSearch
              className="search-icon"
              onClick={this.searchIconClick}
            />
            <input
              type="text"
              placeholder="Search User"
              className="search-input"
              onChange={this.searchUser}
              onKeyDown={this.onKeyDownEnter}
              value={searchName}
            />
          </div>
          <ul className="list-view-container">
            {!isEnter && filterUser !== ""
              ? filterUser.map((eachUser) => (
                  <EditUserDetails
                    details={eachUser}
                    key={eachUser.id}
                    passData={this.passData}
                  />
                ))
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListView;
