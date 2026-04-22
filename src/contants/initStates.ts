import type {
  ModalContextInterface,
  SocketContextInterface,
} from "../types/componentTypes";
import type { UserInterface } from "../types/responseTypes";

export const ModalContextInitState: ModalContextInterface = {
  isModalOpen: false,
  openModal: () => true,
  closeModal: () => false,
};
export const UserInfoContextInitState: UserInterface = {
  first_name: "",
  last_name: "",
  age: 0,
  role: "BASIC",
  email: "",
  username: "",
};
export const SocketContextInitState: SocketContextInterface = {
  joinRoom: () => false,
  sendMessage: () => false,
  messages: [],
  setMessageList: () => [],
  userInfo : UserInfoContextInitState,
};


