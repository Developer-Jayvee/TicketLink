import { Outlet } from "react-router-dom";
import Aside from "./SideNav";
import Nav from "./Nav";
import { createContext } from "react";
import { UserInfoContextInitState } from "../../../contants/initStates";
import type { UserInterface } from "../../../types/responseTypes";
import { AuthService } from "../../auth/services/AuthService";


export const UserInfoContext = createContext<UserInterface>({...UserInfoContextInitState})
export default function ChatRoom() {
  const userInfo = AuthService.getUserInfo();
  return <>
    <UserInfoContext.Provider value={{...userInfo}}>
      <Nav/>
      <Aside/>
      <main className=" bg-white ml-20 pt-13 select-none   h-screen">
        <Outlet/>
      </main>
    </UserInfoContext.Provider>
  </>
 
 
}
