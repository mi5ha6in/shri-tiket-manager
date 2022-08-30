import { Select } from "../../components/SelectTag/SelectTag";
import { TicketCard } from "../../components/TicketCard/TicketCard";
import { Filter } from "./components/Filter/Filter";
import { Comment } from "../../components/Comment/Comment";
import { optionsData } from "./optionsData";
import { Button } from "../../components/Button/Button";
import { List } from "./components/List/List";
import { data } from "../../data/data";
import { STATUS_MAP } from "../../data/const";

export const MainPage = () => {
  // const tags = [
  //   "red",
  //   "blue",
  //   "green",
  //   "green",
  //   "red",
  //   "blue",
  //   "green",
  //   "red",
  // ];
  // return (
  //   <>
  //     <Filter />
  //     <TicketCard
  //       title="Нарисовать иллюстрации"
  //       tags={tags}
  //       isComments
  //       isDescription
  //     />
  //     <div>
  //     <Button view='primary' icon='add'>Добавить тикет</Button>
  //     </div>
  //     <Select options={optionsData} title="Выбрать тег" />
  //     <Comment
  //       userName="Иван Иванов"
  //       comment={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}
  //     />
  //   </>
  // );

  return(
    <List tasks={data} status={STATUS_MAP.TODO}/>
  )

};
