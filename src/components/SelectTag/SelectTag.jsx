import classnames from "classnames";
import style from "./selectTag.module.css";
import { OptionTag } from "./OptionTag";
import { ReactComponent as ArrowIcon } from "./arrowIcon.svg";
import { Button } from "../Button/Button";
import { useState } from "react";
import { TAG_MAP } from "../../data/const";
import { useCallback } from "react";

const defaultOptions = Object.values(TAG_MAP);

export const SelectTag = ({ title, options = defaultOptions, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onButtonClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const isOpenSelectClass = isOpen ? "select_open" : "select_close";

  return (
    <div
      className={classnames(
        style.select,
        style[`${isOpenSelectClass}`],
        className
      )}
    >
      <h3 className={classnames(style[`select__title`])}>
        <Button
          className={classnames(style[`select__button`])}
          size="max"
          handlerClick={onButtonClick}
        >
          {title} <ArrowIcon className={style[`select__arrow`]} />
        </Button>
      </h3>
      <div className={classnames(style[`select__options`])}>
        {options.map((color) => {
          return (
            <OptionTag
              color={color}
              key={color}
              id={color}
              className={classnames(style[`select__option`])}
            />
          );
        })}
      </div>
    </div>
  );
};
