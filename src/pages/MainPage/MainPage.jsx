import { Filter } from "./components/Filter/Filter";
import { List } from "./components/List/List";
import { data } from "../../data/data";
import { STATUS_MAP } from "../../data/const";

const filterTasksByStatus = (tasks, status) =>
  tasks.filter((task) => task.status === status);

const tasksTodo = filterTasksByStatus(data, STATUS_MAP.TODO);
const tasksInProgress = filterTasksByStatus(data, STATUS_MAP.IN_PROGRESS);
const tasksDone = filterTasksByStatus(data, STATUS_MAP.DONE);

export const MainPage = () => {
  return (
    <>
      <Filter />
      <List tasks={tasksTodo} status={STATUS_MAP.TODO} />
      <List tasks={tasksInProgress} status={STATUS_MAP.IN_PROGRESS} />
      <List tasks={tasksDone} status={STATUS_MAP.DONE} />
    </>
  );
};
