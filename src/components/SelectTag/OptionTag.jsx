import classnames from "classnames";
import style from "./selectTag.module.css";
import { Checkbox } from "../Checkbox/Checkbox";
import { Tag } from "../Tag/Tag";

export const OptionTag = ({ color, id }) => {
  return (
    <label className={classnames(style[`select__option`])}>
      <Tag color={color} size="auto" />
      <Checkbox id={id} />
    </label>
  );
};
