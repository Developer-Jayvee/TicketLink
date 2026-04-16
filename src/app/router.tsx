import { Route, Routes } from "react-router-dom";
import LoginForm from "../feature/auth/components/LoginForm";
import ChatRoom from "../feature/chat/components/ChatRoom";
import Chats from "../feature/chat/components/Chats";

export default function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/chat-room" element={<ChatRoom />} >
        <Route path="chats" index element={<Chats/>}/>
      </Route>
    </Routes>
  );
}
