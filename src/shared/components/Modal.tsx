import { Xmark } from "iconoir-react";
import Input from "./Input";

interface ModalInterface {
  isOpen: boolean;
  closeModal : () => void;
}
export default function Modal({ isOpen , closeModal }: ModalInterface) {
  
  return (
    <div
      className={`${isOpen ? "" : "hidden"} fixed flex justify-center items-center top-0 bottom-0 right-0 left-0 bg-black/30`}
    >
      <div className="bg-white  max-w-lg w-full rounded-lg flex flex-col  p-4">
        <div className="modal-header mb-2">
          <div className=" w-full flex justify-end ">
            <Xmark className="cursor-pointer" onClick={() => closeModal()}/>
          </div>
        </div>
        <div className="modal-body w-full">
          <Input
            type="text"
            inputName="group_name"
            labelName="Group"
            placeholder="Input new group name"
          />
        </div>
        <div className="modal-footer flex justify-end mt-4">
          <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
