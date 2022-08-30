import { Filter } from "./components/Filter/Filter";
import { data } from "../../data/data";
import { Board } from "./components/Board/Board";

export const MainPage = () => {
  return (
    <>
      <Filter />
      <Board lists={data}></Board>
    </>
  );
};
