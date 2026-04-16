import type { MessageBubbleInterface } from "../../../types/componentTypes";
import FeedbackBubble from "./ChatBox/FeedbackBubble";
import UserBubble from "./ChatBox/UserBubble";


export default function MessageBubble({
    isReplyMessage,
    message
} : MessageBubbleInterface){
    if(isReplyMessage) return <FeedbackBubble message={message}/>

    return <UserBubble message={message}/>
}