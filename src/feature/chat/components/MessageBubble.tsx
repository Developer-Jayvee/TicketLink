import FeedbackBubble from "./ChatBox/FeedbackBubble";
import UserBubble from "./ChatBox/UserBubble";

interface MessageBubbleInterface {
    isReplyMessage: boolean;
    message ?: string;
    user ?: string;
}
export default function MessageBubble({
    isReplyMessage
} : MessageBubbleInterface){
    console.log(isReplyMessage);
    
    if(isReplyMessage) return <FeedbackBubble/>

    return <UserBubble/>
}