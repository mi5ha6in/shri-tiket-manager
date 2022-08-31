import { createPortal } from "react-dom";
import style from "./modal.module.css";
import classnames from "classnames";
import { Button } from "../Button/Button";
import { ReactComponent as DeleteIcon } from "./closeIcon.svg";

const modalRootElement = document.getElementById("modal");

export const Modal = ({ children, className, onCloseClick }) => {
  return createPortal(
    <div
      className={classnames(style[`modal`], className)}
      onClick={(event) => {
        event.currentTarget === event.target && onCloseClick();
      }}
    >
      <div className={classnames(style[`modal__content`])}>
        <Button
          className={classnames(style[`modal__button-close`])}
          handlerClick={onCloseClick}
          iconText="Закрыть"
        >
          <DeleteIcon />
        </Button>
        {children}
      </div>
    </div>,
    modalRootElement
  );
};
