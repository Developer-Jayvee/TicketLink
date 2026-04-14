import { Bell, LogOut, NavArrowDown } from "iconoir-react";

export default function Nav() {
  return (
    <nav className="bg-blue-50 fixed top-0 left-0 right-0 h-13 border-0 shadow-md flex items-center justify-around">
      <div className="w-20  justify-center items-center  hidden sm:flex">
        <img
          className="w-10 h-20"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
        />
      </div>
      <div className="grow px-2 flex items-center justify-between">
          <p className="font-mono ">TicketLink</p>
          <div className="flex items-center gap-2 pr-2">
            <Bell className="mr-2"/>
            <div className="rounded-full w-9 h-9 border-0 bg-black overflow-auto">
                <img src="https://ui-avatars.com/api/?name=Jayvee+Hidlao" className="w-full h-full object-cover" alt="Profile Image" />
            </div>
            <p>Jayvee</p>
            <p>
                <NavArrowDown className="text-sm cursor-pointer"/>
            </p>
          </div>
      </div>
  
    </nav>
  );
}
