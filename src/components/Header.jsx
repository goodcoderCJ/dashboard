/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import profile from "../assets/unsplash_DrVJk1EaPSc.png";
import { FaRegBell, FaMoon, FaSun, FaBars } from "react-icons/fa6";
import { useState } from "react";
const Header = ({ setIsSidebarOpen }) => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  //function for darkMode
  const handleTheme = () => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");

      setDarkMode(!darkMode);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(!darkMode);
    }
  };
  return (
    <header className="py-1 px-6">
      <div className="flex justify-between items-center">
        <div className="first-layout flex gap-4 justify-center items-center">
          <div className="bg-blue-800 rounded h-7 w-7 flex items-center justify-center shadow-sm md:hidden">
            <FaBars className="text-white flex" onClick={setIsSidebarOpen} />
          </div>
          <div className="">
            <span className="text-[0.7rem] text-slate-400">
              Pages {location.pathname}
            </span>
            <p className="font-bold text-blue-800">
              {location.pathname.toUpperCase()}
            </p>
          </div>
        </div>
        <div className="second-layout bg-white dark:bg-[#202c37] shadow-md rounded-[70px] p-2 ">
          <div className="layout-content flex gap-3 items-center justify-between">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search items..."
              className="rounded-[30px] bg-slate-100 pl-2 text-[0.8rem] py-2 border-0 outline-none hidden sm:block md:block lg:block"
            />
            <div className="icons-profile flex gap-1 items-center">
              <FaRegBell className="text-slate-400" />
              <button onClick={() => handleTheme()}>
                {darkMode ? (
                  <FaMoon className="text-slate-400" />
                ) : (
                  <FaSun className="text-slate-400" />
                )}
              </button>
              <img
                src={profile}
                alt="profile-image"
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
