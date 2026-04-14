import { Route, Routes } from "react-router-dom";
import LoginForm from "../feature/auth/components/LoginForm";
import ChatRoom from "../feature/chat/components/ChatRoom";

export default function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/chat-room" element={<ChatRoom />} />
    </Routes>
  );
}
