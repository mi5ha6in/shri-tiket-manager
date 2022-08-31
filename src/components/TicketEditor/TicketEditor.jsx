import style from "./ticketEditor.module.css";
import classnames from "classnames";
import { TextInput } from "../TextInput/TextInput";
import { SelectTag } from "../SelectTag/SelectTag";
import { Button } from "../Button/Button";

export const TicketEditor = ({ title, className }) => {
  return (
    <div className={classnames(style[`ticket-editor`], className)}>
      <h3 className={classnames(style[`ticket-editor__title`])}>{title}</h3>
      <div className={classnames(style[`ticket-editor__content`])}>
        <div className={classnames(style[`ticket-editor__input`])}>
          <TextInput label="Название" isFocus={true} size="max" />
        </div>
        <div className={classnames(style[`ticket-editor__textarea`])}>
          <TextInput label="Описание" isMultiline={true} size="max" />
        </div>
        <SelectTag
          title="Выбрать тег"
          className={classnames(style[`ticket-editor__select`])}
        />
        <Button view="primary" size="max">
          Сохранить
        </Button>
      </div>
    </div>
  );
};
