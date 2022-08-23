import style from "./button.module.css";
import classnames from "classnames";

export const Button = ({ children, view, size, icon, handlerClick, iconText, className }) => {
  const visuallyHiddenText = Boolean(iconText) && <span className="visually-hidden">{iconText}</span>

  return (
    <button
      className={classnames(
        style.button,
        style[`button_view_${view}`],
        style[`button_size_${size}`],
        className
      )}
      onClick={handlerClick}
    >
      <span
        className={classnames(
          style[`button__text`],
          style[`button__text_icon_${icon}`]
        )}
      >
        {visuallyHiddenText}
        {children}
      </span>
    </button>
  );
};
