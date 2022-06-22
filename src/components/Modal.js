import React from "react";
import EmailSrvc from "./EmailSrvc";

import { RiCloseLine } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";

const Modal = ({ onClose, isOpened }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <>
      <div className="darkBG" id="modal" onClick={onClose} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">
              <FaLightbulb className="bulb" /> Your Thoughts?
            </h5>
          </div>
          <button className="closeBtn" onClick={onClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <EmailSrvc />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={onClose}>
                Delete
              </button>
              <button className="cancelBtn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
