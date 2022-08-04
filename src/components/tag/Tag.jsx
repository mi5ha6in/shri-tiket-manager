import classnames from "classnames";
import style from "./tag.module.css";

export const Tag = ({ color, size }) => {
  return (
    <>
      <div>
        <div
          className={classnames(
            style.tag,
            style[`tag_color_${color}`],
            style[`tag_size_${size}`]
          )}
        />
      </div>
    </>
  );
};
