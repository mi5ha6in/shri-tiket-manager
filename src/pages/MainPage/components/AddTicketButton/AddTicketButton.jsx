import { Button } from "../../../../components/Button/Button";

export const AddTicketButton = ({isShow, onClickAddButton}) => {
  const button = isShow && (
    <Button
      icon="add"
      view="primary"
      size="max"
      handlerClick={onClickAddButton}
    >
      Добавить тикет
    </Button>
  );

  return <>{button}</>;
};
