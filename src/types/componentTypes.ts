import type { Dispatch, FormEvent, ReactNode, SetStateAction } from "react";
import type { UserInterface } from "./responseTypes";


export type InputTypes = "text" | "password";
export interface InputInterface {
    type : InputTypes;
    placeholder : string;
    inputName: string;
    onInputChange ?: (value : string , name : string) => void;
}

export interface AuthFormInterface {
    children : ReactNode;
    customCss ?: string;
    subTitle ?: string;
    onSubmitForm ?: (e : FormEvent<HTMLFormElement>) => void;
    isSubmitDisabled: boolean;
}

export type HandleInputChangeType<T> = (key : keyof T , value : string | number);
export interface ModalContextInterface<T>{
    isModalOpen : boolean;
    handleInputChange:HandleInputChangeType<T>
    formData : GroupChatInterface;
    openModal:() => void;
    closeModal:() => void;
}
export type MessageList = {
    message: string;
    user : UserInterface;
}
export interface SocketContextInterface {
    joinRoom : (roomID : string) => void;
    sendMessage : (message : string) => void;
    messages: MessageList[];
    setMessageList: Dispatch<SetStateAction<MessageList[]>>;
    userInfo: UserInterface
}
export interface MessageBubbleInterface {
    isReplyMessage ?: boolean;
    message ?: string;
    userInfo ?: UserInterface;
}

export interface FeedbackInterface extends MessageBubbleInterface {
  replyUserInfo : UserInterface;
}
export interface GroupChatInterface {
    name: string;
}