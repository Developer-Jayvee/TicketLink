import ChatSideBar from "./ChatSideBar";
import ChatContent from "./ChatContent";
import Modal from "../../../shared/components/Modal";
import { createContext, useContext, useMemo, useState } from "react";
import type { ChatSideInterface, GroupChatInterface, ModalContextInterface, SocketContextInterface } from "../../../types/componentTypes";
import { ChatSideInitState, ModalContextInitState, SocketContextInitState } from "../../../contants/initStates";
import useSocketHook from "../../../hooks/useSocketHook";
import { UserInfoContext } from "./ChatRoom";
import CreateGroupChat from "./ChatSideBar/CreateGroupChat";
import useInputHook from "../../../hooks/useInputHook";
import useGroupChatHook from "../../../hooks/useGroupChatHook";
import type { GroupChatResponseInterface } from "../../../types/responseTypes";

export const ModalContext = createContext<ModalContextInterface<GroupChatInterface>>(ModalContextInitState);
export const SocketContext = createContext<SocketContextInterface>(SocketContextInitState);
export const ChatSideContext = createContext<ChatSideInterface>(ChatSideInitState);

export default function Chats() {
    const userInfo = useContext(UserInfoContext);
    const { handleInputChange, formData , resetFormData} = useInputHook<GroupChatInterface>({ name: "" });
    const { createGroupChat, groupList } = useGroupChatHook();
    const {
        joinRoom,
        sendMessage,
        messageList,
        setMessageList,
        hasJoinRoom
    } = useSocketHook()
    const [isModalOpen, setModalOpen] = useState(false);
    const modalValue = useMemo(() => ({
        isModalOpen,
        handleInputChange,
        formData,
        openModal: () => setModalOpen(true),
        closeModal: () => setModalOpen(false)
    }), [isModalOpen,formData])

    const socketValue = useMemo(() => ({
        joinRoom: (data : GroupChatResponseInterface) => joinRoom(data),
        sendMessage: (message: string) => sendMessage(message),
        messages: messageList,
        setMessageList,
        userInfo
    }), [messageList])

    const chatSideBarValue = useMemo(() => ({
        groupList
    }), [groupList])
    
    return (
        <div className="h-full grid grid-cols-[300px_1fr] grid-rows-1 ">
            <ModalContext.Provider value={modalValue}>
                <SocketContext.Provider value={socketValue}>
                    <ChatSideContext.Provider value={chatSideBarValue}>
                        <ChatSideBar />
                    </ChatSideContext.Provider>
                    <ChatContent isChatOpen={hasJoinRoom} />
                    <Modal onsubmit={ () =>createGroupChat(formData).then( () =>{ setModalOpen(false); resetFormData(); } )} isOpen={isModalOpen} closeModal={modalValue.closeModal}>
                        <CreateGroupChat />
                    </Modal>
                </SocketContext.Provider>
            </ModalContext.Provider>
        </div>
    );
}
