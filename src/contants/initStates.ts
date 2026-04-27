import type {
  ChatSideInterface,
  GroupChatInterface,
  ModalContextInterface,
  SocketContextInterface,
} from "../types/componentTypes";
import type { UserInterface } from "../types/responseTypes";

export const ModalContextInitState : ModalContextInterface<GroupChatInterface> = {
  isModalOpen: false,
  handleInputChange: () => false,
  formData : { name : ""},
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

export const ChatSideInitState : ChatSideInterface = {
  groupList: []
}

