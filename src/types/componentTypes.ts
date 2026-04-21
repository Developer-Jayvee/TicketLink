import type { Dispatch, FormEvent, ReactNode, SetStateAction } from "react";


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

export interface ModalContextInterface{
    isModalOpen : boolean;
    openModal:() => void;
    closeModal:() => void;
}
export type MessageList = {
    message: string;
    user : string;
}
export interface SocketContextInterface {
    joinRoom : (roomID : string) => void;
    sendMessage : (message : string,from : string) => void;
    messages: MessageList[];
    setMessageList: Dispatch<SetStateAction<MessageList[]>>;
    tempID: number;
}
export interface MessageBubbleInterface {
    isReplyMessage ?: boolean;
    message ?: string;
    user ?: string;
}