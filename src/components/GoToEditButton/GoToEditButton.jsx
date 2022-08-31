import { Button } from "../Button/Button";
import { ReactComponent as IconThreeDots } from "./threeDots.svg";

export const GoToEditButton = (className) => {
  return (
    <Button
      iconText="Перейти на страницу редактирования"
      className={className}
    >
      <IconThreeDots />
    </Button>
  );
};
