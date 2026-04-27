import { useEffect, useState } from "react";
import type { GroupChatResponseInterface } from "../types/responseTypes";
import type { PayloadGroupChat } from "../types/payloadTypes";
import RequestHandler from "../shared/utils/requestHandlers";

export default function useGroupChatHook() {
  const { postRequest , getAllRequest } = RequestHandler();
  const [groupList, setGroupList] = useState<GroupChatResponseInterface[]>([]);

  const createGroupChat = async (formData: PayloadGroupChat ) => {
     await postRequest<
      PayloadGroupChat,
      GroupChatResponseInterface
    >({ endpoint: "/group-chat", payload: formData })
    .then( (response )  => {
      if(response){
        setGroupList( (prev) => [...prev,response.data]);
      }
      
    })
    .catch(err => alert(`Error occured while saving.`));
  };

  const getAllGroupChat = async () => {
    await getAllRequest<GroupChatResponseInterface[]>({ endpoint: '/group-chat'})
    .then( (response) => {
        setGroupList(response );
    })
    .catch( err => alert(`${err}`))
  }
  useEffect( () => {
    const abortController = new AbortController();
    getAllGroupChat()

    return () => abortController.abort();
  },[])
  return {
    groupList,
    createGroupChat,
    getAllGroupChat
  };
}
