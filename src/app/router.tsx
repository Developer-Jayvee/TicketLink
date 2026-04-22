import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../feature/auth/components/LoginForm";
import ChatRoom from "../feature/chat/components/ChatRoom";
import Chats from "../feature/chat/components/Chats";
import AuthRoute from "../middleware/AuthRoute";
import GuestRoute from "../middleware/GuestRoute";

export default function RouterPaths() {
  return (
    <Routes>
      <Route element={<GuestRoute index="/chat-room"/>}>
        <Route path="/" element={<LoginForm />} />
      </Route>
      <Route element={<AuthRoute/>}>
        <Route path="/chat-room" element={<ChatRoom />} >
          <Route index element={<Navigate to="chats" replace />} />
          <Route path="chats" element={<Chats/>}/>
        </Route>
      </Route>
    </Routes>
  );
}
