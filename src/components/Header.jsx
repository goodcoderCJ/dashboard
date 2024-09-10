import { useLocation } from "react-router-dom";
import profile from "../assets/unsplash_DrVJk1EaPSc.png";
import { FaRegBell, FaMoon, FaSun } from "react-icons/fa6";
import { useState } from "react";
const Header = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  //function for darkMode
  const handleTheme = () => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
      setDarkMode(!darkMode);
    } else {
      setDarkMode(!darkMode);
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div className="py-1 px-6">
      <div className="flex justify-between items-center">
        <div className="first-layout ">
          <span className="text-[0.7rem] text-slate-400">
            Pages {location.pathname}
          </span>
          <p className="font-bold text-blue-800">{location.pathname.toUpperCase()}</p>
        </div>
        <div className="second-layout bg-white shadow-md rounded-[70px] p-2 ">
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
              {darkMode ? (
                <FaMoon
                  className="text-slate-400"
                  onClick={() => handleTheme()}
                />
              ) : (
                <FaSun
                  className="text-slate-400"
                  onClick={() => handleTheme()}
                />
              )}
              <img
                src={profile}
                alt="profile-image"
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
