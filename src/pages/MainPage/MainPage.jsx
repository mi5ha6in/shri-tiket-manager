import { Filter } from "./components/Filter/Filter";
import { List } from "./components/List/List";
import { data } from "../../data/data";
import { STATUS_MAP } from "../../data/const";

export const MainPage = () => {
  return (
    <>
      <Filter />
      <List tasks={data} status={STATUS_MAP.TODO} />
    </>
  );
};