import { useContext } from "react";
import type { MessageBubbleInterface } from "../../../../types/componentTypes";
import { UserInfoContext } from "../ChatRoom";
import { setParamsData, ucFirst } from "../../../../shared/utils/utilities";

export default function UserBubble({
  message
}: MessageBubbleInterface) {
  const userInfo = useContext(UserInfoContext);
  return (
    <div className="relative" id="other-user">
      <p className="mr-16 my-2 font-mono text-right text-gray-500">{ucFirst(userInfo.first_name)}</p>
      <div className="absolute rounded-full overflow-hidden w-10 h-10 right-0">
        <img
          src={`https://ui-avatars.com/api/?name=${setParamsData(`${userInfo.first_name} ${userInfo.last_name}`)}`}
          className="w-full h-full object-cover"
          alt="Profile Image"
        />
      </div>
      <div className="flex justify-end">
        <p className="mr-15 bg-blue-100 py-1 border-0  shadow-lg px-5 rounded-2xl inline-block ">{message}</p>
      </div>
    </div>
  );
}
