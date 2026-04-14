import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function useSocketHook() {
  const socketRef = useRef(null);
  const [messageList, setMessageList] = useState<Array<{ message: string }>>(
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

    socketRef.current.on("chat message", (data) => {
      console.log(data);
      setMessageList((prev) => [...prev, data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return {
    socketRef,
    messageList,
    isConnected,
  };
}
