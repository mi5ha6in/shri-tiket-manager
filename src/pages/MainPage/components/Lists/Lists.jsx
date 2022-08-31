import { List } from "../List/List";

export const Lists = ({lists, className}) => {
  return (
    <>
      {lists.map((list) => {
        return <List {...list} key={list.status} className={className} />;
      })}
    </>
  );
};
