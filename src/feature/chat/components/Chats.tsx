import ChatSideBar from "./ChatSideBar";
import ChatContent from "./ChatContent";
import Modal from "../../../shared/components/Modal";
import { createContext, useContext, useMemo, useState } from "react";
import type {  ModalContextInterface, SocketContextInterface } from "../../../types/componentTypes";
import { ModalContextInitState, SocketContextInitState } from "../../../contants/initStates";
import useSocketHook from "../../../hooks/useSocketHook";
import { UserInfoContext } from "./ChatRoom";


export const ModalContext = createContext<ModalContextInterface>(ModalContextInitState);
export const SocketContext = createContext<SocketContextInterface>(SocketContextInitState);
export default function Chats() {
    const userInfo = useContext(UserInfoContext);
    const {
        joinRoom,
        sendMessage,
        messageList,
        setMessageList,
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
        sendMessage : (message : string) => sendMessage(message),
        messages: messageList,
        setMessageList,
        userInfo
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
