'use client';

import { createContext, useContext, useState } from "react";

// context/ModalContext.js
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(null);
  const [modalData, setModalData] = useState(null);

  const open = (modalName, data = null) => {
    setModalData(data);
    setOpenModal(modalName);
  };

  const close = () => {
    setOpenModal(null);
    setModalData(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, modalData, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
