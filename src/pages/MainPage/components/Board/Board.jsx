import style from "./board.module.css";
import classnames from "classnames";
import { Lists } from "../Lists/Lists";

export const Board = ({ lists }) => {
  return (
    <div className={classnames(style[`board`])}>
      <Lists lists={lists} className={classnames(style[`board__list`])}/>
    </div>
  );
};
