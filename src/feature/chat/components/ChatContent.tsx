import { Attachment, Send } from "iconoir-react";
import MessageBubble from "./MessageBubble";

export default function ChatContent() {
  return (
    <div className=" h-full grid grid-rows-[60px_1fr_80px] w-full">
      <div className="chat-header flex items-center px-4 border-0 border-b border-gray-300 shadow-sm ">
        <span className="font-mono font-semibold text-lg">#Group 1</span>
      </div>
      <div className="chat-body flex flex-col-reverse px-4 py-6  min-h-0 overflow-y-auto ">
        <div className="flex flex-col">
          {/* <MessageBubble isReplyMessage={true} />
          <MessageBubble isReplyMessage={false} /> */}
        </div>
      </div>
      <div className="chat-input  border-0 border-t border-gray-300 shadow-sm flex justify-between items-center px-2 gap-3">
        <span className="border transition-all border-gray-300 hover:border-gray-400 rounded-full p-2 cursor-pointer">
          <Attachment />
        </span>
        <div className="grow ml-2">
          <input
            className="pl-1 py-2 w-full h-full outline-0"
            type="text"
            placeholder="Type something to send"
          />
        </div>
        <button className="bg-blue-500 transition-colors hover:bg-blue-600 text-white rounded-full cursor-pointer  p-2">
          <span>
            <Send />
          </span>
        </button>
      </div>
    </div>
  );
}
