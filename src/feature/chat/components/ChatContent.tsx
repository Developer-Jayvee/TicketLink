import { Attachment, Send } from "iconoir-react";
import MessageBubble from "./MessageBubble";
import { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "./Chats";

interface ChatContentInterface {
  isChatOpen ?: boolean;
}
export default function ChatContent({
  isChatOpen = false
} : ChatContentInterface) {
  const { sendMessage, messages , userInfo } = useContext(SocketContext);
  const [messageContext, setMessageContext] = useState("");
  
  const chatRef = useRef(null)

  const handleSendMessage = () => {
    if(messageContext.trim() === "") return;

    sendMessage(messageContext);
    setMessageContext("")
   
   
  }
  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && !e.shiftKey){
      handleSendMessage()
    }
  } 

  useEffect(() => {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [messages]);


  if(!isChatOpen) return null;
  return (
    <div ref={chatRef} className=" h-full grid grid-rows-[60px_1fr_80px] w-full">
      <div className="chat-header flex items-center px-4 border-0 border-b border-gray-300 shadow-sm ">
        <span className="font-mono font-semibold text-lg">#Group 1</span>
      </div>
      <div className="chat-body flex flex-col-reverse px-4 py-6  min-h-0 overflow-y-auto ">
        <div className="flex flex-col" id="chat-list">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No messages yet. Start the conversation!
            </div>
          ) : (
            messages.map((val, index) => (
              <MessageBubble
                key={index}
                replyUserInfo={val.user}
                isReplyMessage={userInfo.username !== val.user.username}
                message={val.message}
              />
            ))
          )}
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
            value={messageContext}
            onKeyDown={handleKeyDown}
            onChange={(e) => setMessageContext(e.currentTarget.value)}
          />
        </div>
        <button onClick={handleSendMessage}  className="bg-blue-500 transition-colors hover:bg-blue-600 text-white rounded-full cursor-pointer  p-2">
          <span>
            <Send />
          </span>
        </button>
      </div>
    </div>
  );
}
