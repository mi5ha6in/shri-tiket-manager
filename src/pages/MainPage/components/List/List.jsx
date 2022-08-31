import style from "./list.module.css";
import classnames from "classnames";
import { TicketCard } from "../../../../components/TicketCard/TicketCard";
import { Button } from "../../../../components/Button/Button";
import { STATUS_MAP } from "../../../../data/const";
import { Modal } from "../../../../components/Modal/Modal";
import { useState, useCallback } from "react";
import { TicketEditor } from "../../../../components/TicketEditor/TicketEditor";

const checkPropExists = (prop) => (prop?.length > 0 ? true : false);

export const List = ({ tasks, status, className }) => {
  const isButton = status !== STATUS_MAP.DONE;
  const [showModal, setShowModal] = useState(false);

  const onClickAddButton = useCallback( () => {
    setShowModal((showModal) => (showModal = true));
  }, []);

  const onClickCloseButton = useCallback(() => {
    setShowModal((showModal) => (showModal = false));
  }, []);

  const modalElement = showModal ? (
    <Modal onCloseClick={onClickCloseButton}>
      <TicketEditor title="Создать тикет" />
    </Modal>
  ) : null;

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
      {modalElement}
    </div>
  );
};
