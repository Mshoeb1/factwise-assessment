import { RxCrossCircled } from "react-icons/rx";
import "./index.css";

const DeleteUserDetails = (props) => {
  const { onToggleDelete } = props;
  const onToggleDeleteBox = () => {
    onToggleDelete();
  };

  return (
    <>
      <h1 className="open-heading">Delete Dialog Box</h1>
      <div className="delete-container">
        <div className="delete-body-container">
          <p className="delete-para">Are you sure you want to delete?</p>
          <RxCrossCircled className="delete-icon-1" />
        </div>
        <div className="delete-button-container">
          <button className="cancel" type="button" onClick={onToggleDeleteBox}>
            Cancel
          </button>
          <button className="delete" type="button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteUserDetails;
