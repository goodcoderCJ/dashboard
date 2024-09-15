/* eslint-disable react/prop-types */
import { IoAlbumsOutline } from "react-icons/io5";
import { LuListTodo, LuUserSquare2 } from "react-icons/lu";
import { MdPostAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

const iconsAndLinks = [
  {
    icons: <IoAlbumsOutline className="text-[1.6rem] text-slate-500 h-6 w-6" />,
    navName: "Albums",
    id: 1,
    path: "/albums",
  },
  {
    icons: <MdPostAdd className="text-[1.6rem] text-slate-500 h-6 w-6" />,
    navName: "Posts",
    id: 2,
    path: "/posts",
  },
  {
    icons: <LuUserSquare2 className="text-[1.6rem] text-slate-500 h-6 w-6" />,
    navName: "Users",
    id: 3,
    path: "/users",
  },
  {
    icons: <LuListTodo className="text-[1.6rem] text-slate-500 h-5 w-5" />,
    navName: "Todos",
    id: 4,
    path: "/todos",
  },
];

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`sidebar md:flex flex-col   z-[100000] md:z-0 shadow-md pb-3 bg-white  transition-all duration-300 overflow-hidden ${
        !isSidebarOpen && "hidden"
      } md:w-[20%]  ${isSidebarOpen && "w-[20%] z-50 flex"}`}
    >
      <div className="flex-1 overflow-y-auto h-screen">
        <div className="logo-wrapp flex justify-center items-center">
          <div className="w-[100%] ">
            <div className=" border-b-[1px] border-slate-100 py-2 md:py-5 shadow-md  flex justify-between px-7">
              <p
                className={`font-bold logo transition-all duration-300 ${
                  isSidebarOpen && "hidden"
                }`}
              >
                Ethnos<span className="font-medium text-sm">Cyber</span>
              </p>
              {isSidebarOpen && (
                <p className="text-2xl font-bold text-blue-800">EC</p>
              )}
            </div>
          </div>
        </div>
        <div className="links  flex-1 pt-[3rem] px-7">
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
                <span className="hover flex flex-col gap-1">
                  {iconlink.icons}
                  {isSidebarOpen && (
                    <p className="text-slate-500 text-xs text-center">
                      {iconlink.navName}
                    </p>
                  )}
                </span>
                <p
                  className={`text-[1.1rem] text-slate-500 ml-3 transition-all duration-300 ${
                    isSidebarOpen && "hidden"
                  }`}
                >
                  {iconlink.navName}
                </p>
              </NavLink>
            ))}
          </div>
        </div>
        <div
          className={`rounded-design px-7 mt-10 ${
            isSidebarOpen && "hidden"
          } hidden md:block `}
        >
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
      </div>
    </aside>
  );
};

export default Sidebar;
