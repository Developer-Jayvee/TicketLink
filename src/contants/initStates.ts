import type { ModalContextInterface } from "../types/componentTypes";

export const ModalContextInitState: ModalContextInterface = {
  isModalOpen: false,
  openModal: () => true,
  closeModal: () => false,
};
