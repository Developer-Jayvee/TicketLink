import type { FeedbackInterface } from "../../../../types/componentTypes";
import { setParamsData, ucFirst } from "../../../../shared/utils/utilities";


export default function FeedbackBubble({
  message, replyUserInfo
} : FeedbackInterface) {
  
  return (
    <div className="relative" id="other-user">
      <p className="ml-16 my-2 font-mono text-gray-500">{ucFirst(replyUserInfo.first_name)}</p>
      <div className="absolute rounded-full overflow-hidden w-10 h-10 ">
        <img
          src={`https://ui-avatars.com/api/?name=${setParamsData(`${replyUserInfo.first_name} ${replyUserInfo.last_name}`)}`}
          className="w-full h-full object-cover"
          alt="Profile Image"
        />
      </div>
      <div className="">
        <p className="ml-15 bg-blue-100 py-1 border-0  shadow-lg px-5 rounded-2xl inline-block">{message}</p>
      </div>
    </div>
  );
}
