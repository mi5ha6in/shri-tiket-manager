import style from "./list.module.css";
import classnames from "classnames";
import { TicketCard } from "../../../../components/TicketCard/TicketCard";
import { Button } from "../../../../components/Button/Button";
import { STATUS_MAP } from "../../../../data/const";
import { useModal } from "../../../../hooks/useModal";
import { ModalTicketEditor } from "../ModalTicketEditor/ModalTicketEditor";

const checkPropExists = (prop) => (prop?.length > 0 ? true : false);

export const List = ({ tasks, status, className }) => {
  const isButton = status !== STATUS_MAP.DONE;

  const [showModal, onClickAddButton, onClickCloseButton] = useModal();

  return (
    <div className={classnames(style[`list`], className)}>
      <h2 className={classnames(style[`list__status`])}>{status}</h2>
      <div className={classnames(style[`list__content`])}>
        {tasks.map(({ id, title, tags, description, comments, status }) => {
          const isComments = checkPropExists(comments);
          const isDescription = checkPropExists(description);

          return (
            <TicketCard
              title={title}
              tags={tags}
              isComments={isComments}
              isDescription={isDescription}
              key={id}
            />
          );
        })}
        {isButton && (
          <Button
            icon="add"
            view="primary"
            size="max"
            handlerClick={onClickAddButton}
          >
            Добавить тикет
          </Button>
        )}
      </div>
      <ModalTicketEditor
        title="Создать тикет"
        showModal={showModal}
        onClickCloseButton={onClickCloseButton}
      />
    </div>
  );
};
