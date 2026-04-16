import { Home, LogOut } from "iconoir-react";
import { NavLink, useLocation } from "react-router-dom";

export default function Aside() {
  const location = useLocation();
  return (
    <aside className="bg-white shadow-lg flex flex-col items-center fixed top-13 left-0 bottom-0 overflow-hidden transition-all translate-x-[-80px] md:translate-x-0 w-20 border-0 shadow-r py-1 pt-7">
      <ul className="flex flex-col w-full items-center grow">
        <li className=" w-full ">
          <NavLink
            to="/chat-room"
            className={`${location.pathname === "chat-room" ? "" : ""} w-full flex justify-center py-3 relative`}
          >
            <p>
              <Home />
            </p>
          </NavLink>
        </li>
      </ul>
      <div className="">
        <button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-sm cursor-pointer">
            <LogOut  />
        </button>
      </div>
    </aside>
  );
}
