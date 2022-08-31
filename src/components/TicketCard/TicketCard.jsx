import { Tag } from "../Tag/Tag";
import style from "./ticketCard.module.css";
import classnames from "classnames";
import { nanoid } from "nanoid";
import {
  IndicatorComment,
  IndicatorDescription,
} from "../../components/Indicator/Indicator";
import { Button } from "../Button/Button";
import { ReactComponent as IconThreeDots } from "./threeDots.svg";
import { useState, useCallback } from "react";
import { ModalTicketEditor } from "../../pages/MainPage/components/ModalTicketEditor/ModalTicketEditor";

export const TicketCard = ({ title, tags = [], isComments, isDescription }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickTicket = useCallback( () => {
    setShowModal((showModal) => (showModal = true));
  }, []);

  const onClickCloseButton = useCallback(() => {
    setShowModal((showModal) => (showModal = false));
  }, []);

  return (
    <>
      <div className={classnames(style[`ticket`])} onClick={onClickTicket}>
        <div className={classnames(style[`ticket__content`])}>
          <h2 className={classnames(style[`ticket__title`])}>{title}</h2>
          <div className={classnames(style[`ticket__tags`])}>
            {tags.map((tag) => (
              <Tag color={tag} size="auto" key={nanoid()} />
            ))}
          </div>
        </div>
        <div className={classnames(style[`ticket__panel`])}>
          <Button
            iconText="Перейти на страницу редактирования"
            className={classnames(style[`ticket__button-dots`])}
          >
            <IconThreeDots />
          </Button>
          <div className={classnames(style[`ticket__indicators`])}>
            {isComments && (
              <IndicatorComment className={classnames(style[`ticket__icon`])} />
            )}
            {isDescription && (
              <IndicatorDescription
                className={classnames(style[`ticket__icon`])}
              />
            )}
          </div>
        </div>
      </div>
      <ModalTicketEditor
        title="Редактировать тикет"
        showModal={showModal}
        onClickCloseButton={onClickCloseButton}
      />
    </>
  );
};
