import { Filter } from "./components/Filter/Filter";
import { data } from "../../data/data";
import { Board } from "./components/Board/Board";
import style from "./mainPage.module.css";
import classnames from "classnames";

export const MainPage = () => {
  return (
    <main className={classnames(style[`page`])}>
      <Filter className={classnames(style[`page__filter`])} />
      <Board lists={data}></Board>
    </main>
  );
};
