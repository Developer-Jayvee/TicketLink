import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import type { MessageList } from "../types/componentTypes";

export default function useSocketHook() {
  const socketRef = useRef(null);
  const [messageList, setMessageList] = useState<MessageList[]>(
    [],
  );
  const [isConnected, setConnected] = useState<boolean>(false);
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

    socketRef.current.on("room-message", (data) => {
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
        user : from
      })
  }
  const joinRoom = (roomID) => {
    console.log(`Joined  ${roomID}`);
    
    socketRef.current.emit("join-room",roomID);
  }

  return {
    socketRef,
    messageList,
    isConnected,
    sendMessage,
    joinRoom
  };
}
