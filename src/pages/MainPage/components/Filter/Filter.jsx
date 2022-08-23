import { Checkbox } from "../../../../components/Checkbox/Checkbox";

export const Filter = () => {
  return (
    <>
      <Checkbox
        label="Комментарий"
        id="filter_commentary"
        name="ticket-filter"
        checked
      />
      <Checkbox label="Описание" id="filter_description" name="ticket-filter" />
      <Checkbox label="Тег" id="filter_tag" name="ticket-filter" />
    </>
  );
};
