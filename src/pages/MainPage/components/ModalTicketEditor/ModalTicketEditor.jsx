import { Modal } from "../../../../components/Modal/Modal";
import { TicketEditor } from "../../../../components/TicketEditor/TicketEditor";

export const ModalTicketEditor = ({ showModal, onClickCloseButton, title }) => {
  const modalElement = showModal ? (
    <Modal onCloseClick={onClickCloseButton}>
      <TicketEditor title={title} />
    </Modal>
  ) : null;
  return (
    <>
      {modalElement}
    </>
  );
};
