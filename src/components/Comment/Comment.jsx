import classnames from "classnames";
import style from "./comment.module.css";
import { ReactComponent as DeleteIcon } from "./closeIcon.svg";
import { Button } from "../Button/Button";

export const Comment = ({ userName, comment }) => {
  const onButtonClick = () => {
    console.log("Клик по крестику");
  };

  return (
    <div className={classnames(style[`comment`])}>
      <h3 className={classnames(style[`comment__name`])}>
        {userName}
        <Button
          handlerClick={onButtonClick}
          iconText="Удалить"
        >
          <DeleteIcon />
        </Button>
      </h3>
      <p className={classnames(style[`comment__text`])}>{comment}</p>
    </div>
  );
};
