import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import classnames from "classnames";

const Layout = () => {
  return (
    <div className="flex  bg-slate-100">
      <div className="bg-white shadow-md z-50 w-[15%] min-h-screen overflow-auto sticky">
        <Sidebar />
      </div>
      <div className="w-[100%] md:w-[85%]">
        <div className="flex flex-col min-h-screen ">
          <Header />
          <Hero />
          <main className="flex-1 px-6">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
