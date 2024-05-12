import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import "./index.css";

const UserCard = (props) => {
  const { newDetails, toggleEdit } = props;
  const today = new Date();
  const birthDateObj = new Date(newDetails.dob);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  const [newAge, setAge] = useState(age);
  const [newCountry, setCountry] = useState(newDetails.country);
  const [newGender, setGender] = useState(newDetails.gender);
  const [newDescription, setDescription] = useState(newDetails.description);

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeGender = (event) => {
    setGender(event.target.value);
  };

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const onChangeTextArea = (event) => {
    setDescription(event.target.value);
  };

  const onToggleOpen = () => {
    toggleEdit();
  };
  return (
    <>
      <h1 className="open-heading">Edit State</h1>{" "}
      <div className="Open-user-container">
        <div className="open-card-container">
          <img
            src={newDetails.picture}
            alt="card-user"
            className="user-image"
          />
          <span className="list-span">
            {newDetails.first + " " + newDetails.last}
          </span>
          <MdKeyboardArrowUp className="dropdown" />
        </div>
        <div className="open-body-container-1">
          <div className="age-container">
            <label className="age-para" htmlFor="age">
              Age
            </label>
            <input
              className="caluted-age-1"
              placeholder={newAge + " Years"}
              onChange={onChangeAge}
              id="age"
            />
          </div>
          <div className="age-container">
            <label className="age-para" htmlFor="gender">
              Gender
            </label>
            <input
              className="caluted-age-1"
              placeholder={newGender}
              onChange={onChangeGender}
              id="gender"
            />
          </div>
          <div className="age-container">
            <label className="age-para" htmlFor="country">
              Country
            </label>
            <input
              className="caluted-age-1"
              placeholder={newCountry}
              onChange={onChangeCountry}
              id="country"
            />
          </div>
        </div>
        <div className="description-container-1">
          <label className="description-para" htmlFor="description">
            Description
          </label>
          <textarea
            className="description-1"
            placeholder={newDescription}
            onChange={onChangeTextArea}
            id="description"
          ></textarea>
        </div>
        <div className="open-icon-container">
          <RxCrossCircled className="delete-icon-1" onClick={onToggleOpen} />
          <IoIosCheckmarkCircleOutline className="edit-icon-1" />
        </div>
      </div>
    </>
  );
};

export default UserCard;
