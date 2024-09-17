import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useState } from "react";
import OverlayModal from "../components/OverlayModal";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //  const sideClosed
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`flex min-h-screen bg-slate-100 dark:bg-[#202c37]`}>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex flex-col min-h-screen w-[100%] sm:w-[100%] md:w-[80%] ${
          isSidebarOpen && "w-[80%]"
        }`}
      >
        <Header setIsSidebarOpen={toggleSidebar} />
        <Hero />
        <div className=" my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-6">
          <div className="col-span-1 bg-white dark:bg-[#304355] py-6 px-6 text-sm text-blue-600 dark:text-[white] text-bold shadow-md">
            ETHNOS CYBER LTD.
          </div>
          <div className="col-span-1 bg-white dark:bg-[#304355] py-6 px-6 text-sm text-blue-600 dark:text-[white] text-bold shadow-md">
            YOUR GO TO FOR SECURED SERVICE
          </div>
          <div className="col-span-1 bg-white dark:bg-[#304355] py-6 px-6 text-sm text-blue-600 dark:text-[white] text-bold shadow-md">
            WE HOLD YOU ALL THE WAY
          </div>
        </div>
        <main className="flex-1 px-6">
          <Outlet />
        </main>
        <Footer />
      </div>
      {isSidebarOpen && <OverlayModal toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default Layout;
