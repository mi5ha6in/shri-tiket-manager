import style from "./board.module.css";
import classnames from "classnames";
import { List } from "../List/List";

export const Board = ({ lists }) => {
  return (
    <div className={classnames(style[`board`])}>
      {lists.map((list) => {
        return (
          <List
            {...list}
            className={classnames(style[`board__list`])}
            key={list.status}
          />
        );
      })}
    </div>
  );
};
