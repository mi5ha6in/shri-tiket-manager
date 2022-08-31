import { STATUS_MAP } from "../data/const";
import { data } from "../data/data";

const filterTasksByStatus = (tasks, status) =>
  tasks.filter((task) => task.status === status);

export const getAllTasks = () => {
  const tasksTodo = filterTasksByStatus(data, STATUS_MAP.TODO);
  const tasksInProgress = filterTasksByStatus(data, STATUS_MAP.IN_PROGRESS);
  const tasksDone = filterTasksByStatus(data, STATUS_MAP.DONE);

  const allTasks = [
    {
      status: STATUS_MAP.TODO,
      tasks: tasksTodo,
    },
    {
      status: STATUS_MAP.IN_PROGRESS,
      tasks: tasksInProgress,
    },
    {
      status: STATUS_MAP.DONE,
      tasks: tasksDone,
    },
  ];

  return allTasks;
};
