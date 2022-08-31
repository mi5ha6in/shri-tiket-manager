import { Tag } from "../Tag/Tag";
import style from "./ticketCard.module.css";
import classnames from "classnames";
import { nanoid } from "nanoid";
import {Indicators} from "../Indicators/Indicators";
import { ModalTicketEditor } from "../../pages/MainPage/components/ModalTicketEditor/ModalTicketEditor";
import { useModal } from "../../hooks/useModal";
import { GoToEditButton } from "../GoToEditButton/GoToEditButton";

export const TicketCard = ({ title, tags = [], isComments, isDescription }) => {

  const [showModal, onClickTicket, onClickCloseButton] = useModal();

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
          <GoToEditButton className={classnames(style[`ticket__button-dots`])} />
          <div className={classnames(style[`ticket__indicators`])}>
            <Indicators className={classnames(style[`ticket__icon`])} isComments={isComments} isDescription={isDescription} />
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
