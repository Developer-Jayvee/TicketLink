import { useState } from "react";
import useSocketHook from "../../../hooks/useSocketHook";

export default function ChatForm() {
  const [inputMessage, setInputMessage] = useState<string>("");
  const { isConnected, socketRef, messageList } = useSocketHook();
  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() && isConnected) {
      socketRef.current.emit("chat message", {
        message: inputMessage,
      });
    }
    setInputMessage("");
  };
  return (
    <>
      <div className="flex justify-center items-center ">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            className="border"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button type="submit" className="border px-2 cursor-pointer">
            Send
          </button>
        </form>
      </div>
      <ul>
        {Object.values(messageList).map((val: any) => (
          <li>{val.message}</li>
        ))}
      </ul>
    </>
  );
}
