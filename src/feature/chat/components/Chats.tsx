import ChatSideBar from "./ChatSideBar";
import ChatContent from "./ChatContent";
import Modal from "../../../shared/components/Modal";
import { createContext, useContext, useMemo, useState } from "react";
import type {  GroupChatInterface, ModalContextInterface,  SocketContextInterface } from "../../../types/componentTypes";
import { ModalContextInitState, SocketContextInitState } from "../../../contants/initStates";
import useSocketHook from "../../../hooks/useSocketHook";
import { UserInfoContext } from "./ChatRoom";
import CreateGroupChat from "./ChatSideBar/CreateGroupChat";
import RequestHandler from "../../../shared/utils/requestHandlers";
import type { PayloadGroupChat } from "../../../types/payloadTypes";
import useInputHook from "../../../hooks/useInputHook";
import type { GroupChatResponseInterface } from "../../../types/responseTypes";

export const ModalContext = createContext<ModalContextInterface<GroupChatInterface>>(ModalContextInitState);
export const SocketContext = createContext<SocketContextInterface>(SocketContextInitState);
export default function Chats() {
    const userInfo = useContext(UserInfoContext);
    const { handleInputChange , formData } = useInputHook<GroupChatInterface>({ name : ""});
    const {
        postRequest
    } = RequestHandler()
    const {
        joinRoom,
        sendMessage,
        messageList,
        setMessageList,
        hasJoinRoom
    } = useSocketHook()
    const [isModalOpen , setModalOpen] = useState(false);
    const modalValue = useMemo( () => ({
        isModalOpen,
        handleInputChange,
        formData,
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

    const createGroupChat = async () => {
        const response = await postRequest<PayloadGroupChat,GroupChatResponseInterface>({ endpoint : '/save-group', payload : formData })
    }   
  
    
  return (
    <div className="h-full grid grid-cols-[300px_1fr] grid-rows-1 ">
        <ModalContext.Provider value={modalValue}>
            <SocketContext.Provider value={socketValue}>
                <ChatSideBar />
                <ChatContent isChatOpen={hasJoinRoom} />
                <Modal onsubmit={createGroupChat} isOpen={isModalOpen} closeModal={modalValue.closeModal}>
                    <CreateGroupChat/>
                </Modal>
            </SocketContext.Provider>
        </ModalContext.Provider>
    </div>
  );
}
