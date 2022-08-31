import style from "./mainPage.module.css";
import classnames from "classnames";
import { Filter } from "./components/Filter/Filter";
import { Board } from "./components/Board/Board";
import { getAllTasks } from "../../serverApi/serverApi";

const allTasks = getAllTasks();

export const MainPage = () => {
  return (
    <main className={classnames(style[`page`])}>
      <Filter className={classnames(style[`page__filter`])} />
      <Board lists={allTasks}></Board>
    </main>
  );
};
