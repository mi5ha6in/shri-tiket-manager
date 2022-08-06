import { useState } from "react";
import classnames from "classnames";
import style from "./checkbox.module.css";

export const Checkbox = ({ label, checked, disabled, id, name }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <div className={classnames(style.checkbox)}>
      <input
        className={classnames("visually-hidden", style["checkbox__input"])}
        checked={isChecked}
        type="checkbox"
        onChange={handleCheck}
        id={id}
        name={name}
        disabled={disabled}
      />
      <label className={classnames(style[`checkbox__label`])} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
