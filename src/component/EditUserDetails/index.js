import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineEdit,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import UserCard from "../UserCard";
import DeleteUserDetails from "../DeleteUserDetails";

import "./index.css";

const EditUserDetails = (props) => {
  const [isCardOpen, setCardOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteCLick, setDeleteClick] = useState(false);
  const { details, passData } = props;
  console.log(details);

  const onTogglePassData = () => {
    passData();
    setCardOpen(!isCardOpen);
  };

  const onToggleEditOption = () => {
    setEditOpen(!isEditOpen);
  };

  const onToggleDeleteOption = () => {
    setDeleteClick(!isDeleteCLick);
  };
  const today = new Date();
  const birthDateObj = new Date(details.dob);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return (
    <>
      <h1 className="open-heading">Close State</h1>
      <ul className="list-view-container">
        <li className="view-list" onClick={onTogglePassData} key={details.id}>
          <img src={details.picture} alt="card-user" className="user-image" />
          <span className="list-span">
            {details.first + " " + details.last}
          </span>
          <MdKeyboardArrowDown className="dropdown" />
        </li>
      </ul>
      {isCardOpen && (
        <>
          <h1 className="open-heading">Open State</h1>
          <div className="Open-user-container">
            <div className="open-card-container">
              <img
                src={details.picture}
                alt="card-user"
                className="user-image"
              />
              <span className="list-span">
                {details.first + " " + details.last}
              </span>
              <MdOutlineKeyboardArrowUp className="dropdown" />
            </div>
            <div className="open-body-container">
              <div className="age-container">
                <p className="age-para">Age</p>
                <p className="caluted-age">{age + " "} Years</p>
              </div>
              <div className="age-container">
                <p className="age-para">Gender</p>
                <p className="caluted-age">{details.gender}</p>
              </div>
              <div className="age-container">
                <p className="age-para">Country</p>
                <p className="caluted-age">{details.country}</p>
              </div>
            </div>
            <div className="description-container">
              <p className="description-para">Description</p>
              <p className="description">{details.description}</p>
            </div>
            <div className="open-icon-container">
              <RiDeleteBinLine
                className="delete-icon"
                onClick={onToggleDeleteOption}
              />
              <MdOutlineEdit
                className="edit-icon"
                onClick={onToggleEditOption}
              />
            </div>
          </div>
        </>
      )}
      {isEditOpen && (
        <UserCard newDetails={details} toggleEdit={onToggleEditOption} />
      )}
      {isDeleteCLick && (
        <DeleteUserDetails onToggleDelete={onToggleDeleteOption} />
      )}
    </>
  );
};

export default EditUserDetails;
