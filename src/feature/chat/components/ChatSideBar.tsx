import {  Plus } from "iconoir-react";
import FavoriteChats from "./ChatSideBar/FavoriteChats";
import GroupChats from "./ChatSideBar/GroupChats";
import SearchInput from "../../../shared/components/SearchInput";
import { useContext } from "react";
import { ModalContext } from "./Chats";

export default function ChatSideBar() {
  const { openModal} = useContext(ModalContext)

  return (
    <aside className=" flex flex-col  gap-5 h-full p-4 bg-blue-50">
      <SearchInput/>
        <button onClick={() => openModal()} className="flex gap-2 bg-slate-500 hover:bg-slate-600 p-2 rounded-md shadow-md text-white font-semibold cursor-pointer">
            <Plus/>
            <span>Create New Group</span>
        </button>
      <FavoriteChats/>

      <GroupChats/>
    </aside>
  );
}
