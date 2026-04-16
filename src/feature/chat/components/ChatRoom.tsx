import { Outlet } from "react-router-dom";
import Aside from "./SideNav";
import Nav from "./Nav";



export default function ChatRoom() {
  
  return <>
      <Nav/>
      <Aside/>
      <main className=" bg-white ml-20 pt-13 select-none   h-screen">
        <Outlet/>
      </main>
  </>
 
 
}
