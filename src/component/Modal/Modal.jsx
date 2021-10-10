import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Overlay, ModalBlock } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClick, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", hendelKeyDown);
    return () => {
      window.removeEventListener("keydown", hendelKeyDown);
    };
  });

  const hendelKeyDown = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };
  const hendelBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <Overlay className="Overlay" onClick={hendelBackdropClick}>
      <ModalBlock className="Modal">{children}</ModalBlock>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func,
};
