import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Nav from "./Nav";



export default function ChatRoom() {
  
  return <div className="">
      <Nav/>
      <Aside/>
      <main className=" bg-white ml-22 pt-13 ">
        <Outlet/>
      </main>
  </div>
 
 
}
