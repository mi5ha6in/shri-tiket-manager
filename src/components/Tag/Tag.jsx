import classnames from "classnames";
import style from "./tag.module.css";

export const Tag = ({ color, size }) => {
  return (
    <>
      <div
        className={classnames(
          style.tag,
          style[`tag_color_${color}`],
          style[`tag_size_${size}`]
        )}
      >
        <span className="visually-hidden">{`${color} tag`}</span>
      </div>
    </>
  );
};
