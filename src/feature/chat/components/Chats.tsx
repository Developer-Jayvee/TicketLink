import ChatSideBar from "./ChatSideBar";
import ChatContent from "./ChatContent";
import Modal from "../../../shared/components/Modal";
import { createContext, useMemo, useState } from "react";
import type { ModalContextInterface } from "../../../types/componentTypes";
import { ModalContextInitState } from "../../../contants/initStates";


export const ModalContext = createContext<ModalContextInterface>(ModalContextInitState);
export default function Chats() {
    const [isModalOpen , setModalOpen] = useState(false);
    const modalValue = useMemo( () => ({
        isModalOpen,
        openModal: () => setModalOpen(true),
        closeModal: () => setModalOpen(false)
    }),[isModalOpen])
  return (
    <div className="h-full grid grid-cols-[300px_1fr] grid-rows-1 ">
        <ModalContext.Provider value={modalValue}>
            <ChatSideBar />
            <ChatContent />
          <Modal isOpen={isModalOpen} closeModal={modalValue.closeModal}/>
        </ModalContext.Provider>
    </div>
  );
}
