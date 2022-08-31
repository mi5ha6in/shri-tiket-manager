import classnames from "classnames";
import { useEffect, useRef } from "react";
import { useState } from "react";
import style from "./textInput.module.css";

const defaultLabel = "Type text";
const defaultIsMultiline = false;
const defaultFocus = false;

export const TextInput = ({
  label = defaultLabel,
  id,
  name,
  isMultiline = defaultIsMultiline,
  size,
  isFocus = defaultFocus,
  className,
}) => {
  const [value, setValue] = useState("");

  const ref = useRef();

  const handelChange = (event) => {
    setValue(event.target.value);
  };

  const inputProps = {
    value,
    id,
    name,
    placeholder: label,
    onChange: handelChange,
    className: classnames(style.input, style[`input_size_${size}`], className),
    ref,
  };

  useEffect(() => {
    if (isFocus) {
      ref.current.focus();
    }
  }, [isFocus]);

  const inputElement = isMultiline ? (
    <textarea {...inputProps} />
  ) : (
    <input {...inputProps} type="text" />
  );

  return (
    <>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      {inputElement}
    </>
  );
};
