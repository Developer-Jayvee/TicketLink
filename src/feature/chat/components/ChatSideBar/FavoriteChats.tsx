import { ChatBubble } from "iconoir-react";

export default function FavoriteChats() {
  return (
    <div className="fav">
      <label className="font-bold text-lg text-gray-500">FAVORITES</label>
      <ul className="ml-4 mt-2">
        <li className="flex gap-2 items-center cursor-pointer">
          <ChatBubble className="text-sm text-gray-500" />
          <span>Group 1</span>
        </li>
      </ul>
    </div>
  );
}
