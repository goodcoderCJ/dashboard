import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex  bg-slate-100">
      <div className="bg-white shadow-md z-50 w-[15%] min-h-screen overflow-auto sticky">
        <Sidebar />
      </div>

      <div className="flex flex-col min-h-screen w-[85%]">
        <Header />
        <Hero />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-6">
          <div className="col-span-1 bg-white py-4 px-6 text-sm text-blue-600 text-bold">
            ETHNOS CYBER LTD.
          </div>
          <div className="col-span-1 bg-white py-4 px-6 text-sm text-blue-600 text-bold">
            YOUR GO TO FOR SECURED SERVICES
          </div>
          <div className="col-span-1 bg-white py-4 px-6 text-sm text-blue-600 text-bold">
            WE HOLD YOU ALL THE WAY
          </div>
        </div>
        <main className="flex-1 px-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
