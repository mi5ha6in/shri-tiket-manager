import style from "./board.module.css";
import classnames from "classnames";
import { STATUS_MAP } from "../../../../data/const";
import { List } from "../List/List";

const filterTasksByStatus = (tasks, status) =>
  tasks.filter((task) => task.status === status);

export const Board = ({ lists }) => {
  const tasksTodo = filterTasksByStatus(lists, STATUS_MAP.TODO);
  const tasksInProgress = filterTasksByStatus(lists, STATUS_MAP.IN_PROGRESS);
  const tasksDone = filterTasksByStatus(lists, STATUS_MAP.DONE);

  return (
    <div className={classnames(style[`board`])}>
      <List
        tasks={tasksTodo}
        status={STATUS_MAP.TODO}
        className={classnames(style[`board__list`])}
      />
      <List
        tasks={tasksInProgress}
        status={STATUS_MAP.IN_PROGRESS}
        className={classnames(style[`board__list`])}
      />
      <List
        tasks={tasksDone}
        status={STATUS_MAP.DONE}
        className={classnames(style[`board__list`])}
      />
    </div>
  );
};
