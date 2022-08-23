import { TicketCard } from "../../components/TicketCard/TicketCard";
import { Filter } from "./components/Filter/Filter";


export const MainPage = () => {
  const tags = [
    "red",
    "blue",
    "green",
    "green",
    "red",
    "blue",
    "green",
    "red",
    "blue",
    "green",
  ];
  return (
    <>
      <Filter />
      <TicketCard
        title="Нарисовать иллюстрации"
        tags={tags}
        isComments
        isDescription
      />
    </>
  );
};
