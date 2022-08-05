import classnames from "classnames";
import { useState } from "react";
import style from "./textInput.module.css";

const defaultLabel = "Type text";
const defaultIsMultiline = false;

export const TextInput = ({
  labe = defaultLabel,
  id,
  name,
  isMultiline = defaultIsMultiline,
  size,
}) => {
  const [value, setValue] = useState("");

  const handelChange = (event) => {
    setValue(event.target.value);
  };

  const inputProps = {
    value,
    id,
    name,
    placeholder: labe,
    onChange: handelChange,
    className: classnames(style.input, style[`input_size_${size}`])
  };

  const inputElement = isMultiline ? (
    <textarea {...inputProps} />
  ) : (
    <input {...inputProps} type="text" />
  );

  return (
    <>
      <label htmlFor={id} className="visually-hidden">
        {labe}
      </label>
      {inputElement}
    </>
  );
};
