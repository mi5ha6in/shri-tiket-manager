import { useState } from "react";
import classnames from "classnames";
import style from "./checkbox.module.css";
import { useCallback } from "react";

export const Checkbox = ({ label, checked = false, disabled, id, name }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = useCallback(() => {
    setIsChecked((isChecked) => !isChecked);
  }, []);

  const classNameCheckbox = label
    ? ""
    : classnames(style[`checkbox_without-label`]);

  return (
    <div className={classnames(style.checkbox, classNameCheckbox)}>
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
