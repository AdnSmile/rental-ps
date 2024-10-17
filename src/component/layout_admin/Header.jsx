/* eslint-disable react/prop-types */
import { HiBars3 } from "react-icons/hi2";
import Profil from "./Profil";

function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-[999] flex w-full bg-white shadow-sm print:hidden">
      <button>
        <HiBars3
          size={24}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ms-4 lg:hidden"
        />
      </button>
      <div className="shadow-2 flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="2xsm:gap-7 flex items-center gap-3"></div>
        <Profil />
      </div>
    </header>
  );
}

export default Header;
