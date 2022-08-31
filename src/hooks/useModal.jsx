import { useState, useCallback } from "react";

export const useModal = (isOpenModal = false) => {
  const [showModal, setShowModal] = useState(isOpenModal);

  const onClickOpenElement = useCallback(() => {
    setShowModal((showModal) => (showModal = true));
  }, []);

  const onClickCloseElement = useCallback(() => {
    setShowModal((showModal) => (showModal = false));
  }, []);

  return [showModal, onClickOpenElement, onClickCloseElement]
};
