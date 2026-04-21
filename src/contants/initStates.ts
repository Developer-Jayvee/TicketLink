import type { ModalContextInterface, SocketContextInterface } from "../types/componentTypes";

export const ModalContextInitState: ModalContextInterface = {
  isModalOpen: false,
  openModal: () => true,
  closeModal: () => false,
};

export const SocketContextInitState: SocketContextInterface = {
  joinRoom: () => false,
  sendMessage: () => false,
  messages: [],
  setMessageList: () => [],
  tempID : 0
}