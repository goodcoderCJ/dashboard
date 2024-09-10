import { IoAlbumsOutline } from "react-icons/io5";
import { LuListTodo, LuUserSquare2 } from "react-icons/lu";
import { MdPostAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const iconsAndLinks = [
  {
    icons: <IoAlbumsOutline className="text-[1.6rem] text-slate-500" />,
    navName: "Albums",
    id: 1,
    path: "/albums",
  },
  {
    icons: <MdPostAdd className="text-[1.6rem] text-slate-500" />,
    navName: "Posts",
    id: 2,
    path: "/posts",
  },
  {
    icons: <LuUserSquare2 className="text-[1.6rem] text-slate-500" />,
    navName: "Users",
    id: 3,
    path: "/users",
  },
  {
    icons: <LuListTodo className="text-[1.6rem] text-slate-500" />,
    navName: "Todos",
    id: 4,
    path: "/todos",
  },
];

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const setShow = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <section className={`sidebar flex flex-col  pb-3`}>
      <div className="logo-wrapp">
        <div className=" border-b-[1px] border-slate-100 py-5 shadow-md px-4 flex justify-between">
          <p className="font-bold logo">
            Ethnos<span className="font-medium text-sm">Cyber</span>
          </p>
          <div className="bg-blue-800 rounded p-1 flex items-center justify-between shadow-sm sm:flex md:hidden">
            {showSideBar ? (
              <FaBars className="text-white " onClick={() => setShow()} />
            ) : (
              <p className="text-white font-bold " onClick={() => setShow()}>
                X
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="links  flex-1 pt-[3rem] px-4">
        <div className="flex flex-col gap-7">
          {iconsAndLinks.map((iconlink) => (
            <NavLink
              key={iconlink.id}
              to={iconlink.path}
              className={(isActive) =>
                " flex gap-2 items-center" +
                (!isActive ? "text-blue-800" : "text-slate-100")
              }
            >
              <span>{iconlink.icons}</span>
              <p className="text-[1.1rem] text-slate-500">{iconlink.navName}</p>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="rounded-design px-4 mt-10">
        <div className="bg-blue-800 rounded">
          <div className="flex flex-col gap-3 p-3">
            <p className="text-white text-sm">We are Ethnos Cyber</p>
            <p className="text-white text-xs">
              Your reliable cybersecurity partner. We design, We Create{" "}
            </p>
            <button className="bg-blue-700 text-white shadow-md rounded-[30px] py-[0.7rem] mt-[0.8rem] font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
