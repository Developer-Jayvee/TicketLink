import { ChatBubble } from "iconoir-react";
import { useContext } from "react";
import { SocketContext } from "../Chats";


export default function GroupChats(){
  const { joinRoom , tempID } = useContext(SocketContext);

  return <div className="groups">
            <label className="font-bold text-lg text-gray-500">GROUPS</label>
            <ul className="ml-4 mt-2">
              <li >
                <button className="flex gap-2 items-center cursor-pointer" onClick={() => joinRoom('Test123')}>
                  <ChatBubble className="text-sm text-gray-500" />
                  <span>Group 2</span>
                </button>
              </li>
            </ul>
          </div>
}