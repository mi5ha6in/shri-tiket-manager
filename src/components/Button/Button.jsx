import style from "./button.module.css";
import classnames from "classnames";

export const Button = ({ children, view, size, icon, handlerClick }) => {
  return (
    <button
      className={classnames(
        style.button,
        style[`button_view_${view}`],
        style[`button_size_${size}`]
      )}
      onClick={handlerClick}
    >
      <span
        className={classnames(
          style[`button__text`],
          style[`button__text_icon_${icon}`]
        )}
      >
        {children}
      </span>
    </button>
  );
};
