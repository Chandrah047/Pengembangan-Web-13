import React from 'react';
import './modal.css';

const Modal = ({ handleClose, show, children, handleOnClick }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-content">
        {children}
        <div className="modal-body">Apakah yakin data ini akan dihapus?</div>
        <button type="button" onClick={handleClose} className="float-end">
          Close
        </button>
        <button type="button" onClick={handleOnClick} className="float-end">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modal;
