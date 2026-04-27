import { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import type { MessageList } from "../types/componentTypes";
import { UserInfoContext } from "../feature/chat/components/ChatRoom";
import { CONST_ACCESS_TOKEN } from "../contants/defaultValues";
import type { GroupChatResponseInterface } from "../types/responseTypes";

export default function useSocketHook() {
  const userInfo = useContext(UserInfoContext);
  const socketRef = useRef(null);
  const [messageList, setMessageList] = useState<MessageList[]>(
    [],
  );
  const [hasJoinRoom , setHasJoinRoom] = useState<boolean>(false);
  const [isConnected, setConnected] = useState<boolean>(false);
  const [joinerDetails , setJoinerDetails] = useState<string>("");
 
  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_BACKEND_SERVER, {
      transports: ["websocket", "polling"],
      withCredentials: true,
      auth:{
        token: localStorage.getItem(CONST_ACCESS_TOKEN)
      }
    });
    // Connect response
    socketRef.current.on("connect", () => {
      console.log("Connected to server");
      setConnected(true);
    });

    // Disconnect Response
    socketRef.current.on("disconnect", () => {
      console.log("Disconnected...");
      setHasJoinRoom(false);
      setConnected(false);
    });

    // Send message
    socketRef.current.on("channel-message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });

    // Join Response
    socketRef.current.on("join-response", (data) => {
      console.log(`${userInfo.first_name} joined the room`);
      
    })

    //  Leave Response 
    socketRef.current.on("leave-channel", (data) => {
      console.log(`${userInfo.first_name} leaved the room`);
            
    })
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
  const joinRoom = (data : GroupChatResponseInterface) => {
    console.log(`Joined  ${data.id}`);
    setHasJoinRoom(!!data.id);
    setJoinerDetails(`${userInfo.first_name} ${userInfo.last_name}`);
    socketRef.current.emit("join-channel",data);
  }

  return {
    socketRef,
    messageList,
    isConnected,
    hasJoinRoom,
    joinerDetails,

    
    setMessageList,
    sendMessage,
    joinRoom,
  };
}
