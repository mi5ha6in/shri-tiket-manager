import style from "./list.module.css";
import classnames from "classnames";
import { STATUS_MAP } from "../../../../data/const";
import { useModal } from "../../../../hooks/useModal";
import { ModalTicketEditor } from "../ModalTicketEditor/ModalTicketEditor";
import { TicketCards } from "../TicketCards/TicketCards";
import { AddTicketButton } from "../AddTicketButton/AddTicketButton";

export const List = ({ tasks, status, className }) => {
  const [showModal, onClickAddButton, onClickCloseButton] = useModal();
  const isAddButton = status !== STATUS_MAP.DONE;

  return (
    <div className={classnames(style[`list`], className)}>
      <h2 className={classnames(style[`list__status`])}>{status}</h2>
      <div className={classnames(style[`list__content`])}>
        <TicketCards tickets={tasks}/>
        <AddTicketButton isShow={isAddButton} onClickAddButton={onClickAddButton}/>
      </div>
      <ModalTicketEditor
        title="Создать тикет"
        showModal={showModal}
        onClickCloseButton={onClickCloseButton}
      />
    </div>
  );
};
