import { useContext } from "react"
import { ModalContext } from "../Chats"


export default function CreateGroupChat() {
    const { handleInputChange, formData } = useContext(ModalContext)
    return <>
        <input type="text" placeholder="Input new group name" onChange={(e) => handleInputChange('name', e.currentTarget.value)}  />
    </>
}