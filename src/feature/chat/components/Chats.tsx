import ChatSideBar from "./ChatSideBar";
import ChatContent from "./ChatContent";
import Modal from "../../../shared/components/Modal";
import { createContext, useEffect, useMemo, useState } from "react";
import type { MessageList,  ModalContextInterface, SocketContextInterface } from "../../../types/componentTypes";
import { ModalContextInitState, SocketContextInitState } from "../../../contants/initStates";
import useSocketHook from "../../../hooks/useSocketHook";


export const ModalContext = createContext<ModalContextInterface>(ModalContextInitState);
export const SocketContext = createContext<SocketContextInterface>(SocketContextInitState);
export default function Chats() {
    const {
        joinRoom,
        sendMessage,
        messageList,
        setMessageList,
        tempID // for testing
    } = useSocketHook()
    // const [messages,setMessages] = useState<MessageList[]>([])
    const [isModalOpen , setModalOpen] = useState(false);
    
    const modalValue = useMemo( () => ({
        isModalOpen,
        openModal: () => setModalOpen(true),
        closeModal: () => setModalOpen(false)
    }),[isModalOpen])

    const socketValue = useMemo( () =>({
        joinRoom : (roomID: string) => joinRoom(roomID),
        sendMessage : (message : string, from : string) => sendMessage(message,from),
        messages: messageList,
        setMessageList,
        tempID
    }),[messageList])

  
    
  return (
    <div className="h-full grid grid-cols-[300px_1fr] grid-rows-1 ">
        <ModalContext.Provider value={modalValue}>
            <SocketContext.Provider value={socketValue}>
                <ChatSideBar />
                <ChatContent />
                <Modal isOpen={isModalOpen} closeModal={modalValue.closeModal}/>
            </SocketContext.Provider>
        </ModalContext.Provider>
    </div>
  );
}
