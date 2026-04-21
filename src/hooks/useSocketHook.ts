import { useEffect, useId, useRef, useState } from "react";
import { io } from "socket.io-client";
import type { MessageList } from "../types/componentTypes";

export default function useSocketHook() {
  const socketRef = useRef(null);
  const [messageList, setMessageList] = useState<MessageList[]>(
    [],
  );
  const [isConnected, setConnected] = useState<boolean>(false);
  const tempID = Math.random() + 50;
  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_BACKEND_SERVER, {
      transports: ["websocket", "polling"],
      withCredentials: false,
    });
    socketRef.current.on("connect", () => {
      console.log("Connected to server");
      setConnected(true);
    });
    
    socketRef.current.on("disconnect", () => {
      console.log("Disconnected...");
      setConnected(false);
    });

    socketRef.current.on("channel-message", (data) => {
      console.log(data);
      setMessageList((prev) => [...prev, data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (message , from) => {
      socketRef.current.emit("send-message",{
        message : message,
        user : tempID
      })

      setMessageList( (prev) => [...prev,{message : message , user: from}]);
  }
  const joinRoom = (roomID) => {
    console.log(`Joined  ${roomID}`);
    
    socketRef.current.emit("join-channel",roomID);
  }

  return {
    socketRef,
    messageList,
    setMessageList,
    isConnected,
    sendMessage,
    joinRoom,
    tempID // for testing
  };
}
