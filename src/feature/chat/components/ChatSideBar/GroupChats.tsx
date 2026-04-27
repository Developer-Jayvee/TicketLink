import { ChatBubble } from "iconoir-react";
import { useContext } from "react";
import { ChatSideContext, SocketContext } from "../Chats";
import type { GroupChatResponseInterface } from "../../../../types/responseTypes";



export default function GroupChats() {
  const { joinRoom  } = useContext(SocketContext);
  const { groupList } = useContext(ChatSideContext);
  if (!groupList) return <></>;

  return <div className="groups">
    <label className="font-bold text-lg text-gray-500">GROUPS</label>
    <ul className="ml-4 mt-2">
      {
        groupList.map((val: GroupChatResponseInterface , index : number) => (
          <li className="mb-2 border-0 border-b-2 border-b-gray-300 flex justify-between items-center" key={index}>
            <button className="hover:bg-gray-300 hover:font-bold hover:text-white p-2 w-full flex gap-2 items-center cursor-pointer" onClick={() => joinRoom(val)}>
              <ChatBubble className="text-sm text-gray-500" />
              <span>{val.name}</span>
             
            </button>
          </li>
        ))
      }

    </ul>
  </div>
}