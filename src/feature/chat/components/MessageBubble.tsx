import type { FeedbackInterface, MessageBubbleInterface } from "../../../types/componentTypes";
import FeedbackBubble from "./ChatBox/FeedbackBubble";
import UserBubble from "./ChatBox/UserBubble";


export default function MessageBubble({
    isReplyMessage,
    message,
    replyUserInfo
} : FeedbackInterface){
    if(isReplyMessage) return <FeedbackBubble replyUserInfo={replyUserInfo} message={message}/>

    return <UserBubble message={message}/>
}