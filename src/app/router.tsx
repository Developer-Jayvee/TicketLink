import { Route, Routes } from "react-router-dom";
import LoginForm from "../feature/auth/components/LoginForm";
import ChatForm from "../feature/chat/components/ChatForm";

export default function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/chat-room" element={<ChatForm/>} />
    </Routes>
  );
}
