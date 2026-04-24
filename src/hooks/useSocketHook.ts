import { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import type { MessageList } from "../types/componentTypes";
import { UserInfoContext } from "../feature/chat/components/ChatRoom";
import { CONST_ACCESS_TOKEN } from "../contants/defaultValues";

export default function useSocketHook() {
  const userInfo = useContext(UserInfoContext);
  const socketRef = useRef(null);
  const [messageList, setMessageList] = useState<MessageList[]>(
    [],
  );
  const [hasJoinRoom , setHasJoinRoom] = useState<boolean>(false);
  const [isConnected, setConnected] = useState<boolean>(false);

 
  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_BACKEND_SERVER, {
      transports: ["websocket", "polling"],
      withCredentials: true,
      auth:{
        token: localStorage.getItem(CONST_ACCESS_TOKEN)
      }
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

  const sendMessage = (message) => {
      socketRef.current.emit("send-message",{
        message : message,
        user : userInfo
      })

      setMessageList( (prev) => [...prev,{message : message , user: userInfo}]);
  }
  const joinRoom = (roomID) => {
    console.log(`Joined  ${roomID}`);
    setHasJoinRoom(roomID);
    socketRef.current.emit("join-channel",roomID);
  }

  return {
    socketRef,
    messageList,
    setMessageList,
    isConnected,
    sendMessage,
    joinRoom,
    hasJoinRoom
  };
}
