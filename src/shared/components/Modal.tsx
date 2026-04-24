import { Xmark } from "iconoir-react";
import type { ReactNode } from "react";

interface ModalActions {
  onsubmit: () => void;
}
interface ModalInterface extends ModalActions {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}
export default function Modal({ isOpen, closeModal, onsubmit, children }: ModalInterface) {

  return (
    <div
      className={`${isOpen ? "" : "hidden"} fixed flex justify-center items-center top-0 bottom-0 right-0 left-0 bg-black/30`}
    >
      <div className="bg-white  max-w-lg w-full rounded-lg flex flex-col  p-4">
        <div className="modal-header mb-2">
          <div className=" w-full flex justify-end ">
            <Xmark className="cursor-pointer" onClick={() => closeModal()} />
          </div>
        </div>
        <div className="modal-body w-full">
          {children}
        </div>
        <div className="modal-footer flex gap-3 justify-end mt-4">
          <button onClick={() => closeModal()} className="font-bold hover:outline px-4 py-2 rounded-lg cursor-pointer">
            Cancel
          </button>
          <button onClick={() => onsubmit()} className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
