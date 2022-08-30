import style from "./list.module.css";
import classnames from "classnames";
import { TicketCard } from "../../../../components/TicketCard/TicketCard";
import { Button } from "../../../../components/Button/Button";
import { STATUS_MAP } from "../../../../data/const";

const checkPropExists = (prop) => (prop?.length > 0 ? true : false);

export const List = ({ tasks, status }) => {
  const isButton = status !== STATUS_MAP.DONE;
  return (
    <div className={classnames(style[`list`])}>
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
          <Button icon="add" view="primary" size="max">
            Добавить тикет
          </Button>
        )}
      </div>
    </div>
  );
};
