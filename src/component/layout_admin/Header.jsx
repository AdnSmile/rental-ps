/* eslint-disable react/prop-types */
import Profil from "./Profil";

function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-[999] flex w-full border-2 border-blue-gray-100/20 bg-blue-gray-50 shadow-sm print:hidden">
      <button>
        <i
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fa-solid fa-bars p-4 text-2xl text-gray-700 lg:hidden"
        ></i>
      </button>
      <div className="shadow-2 flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="2xsm:gap-7 flex items-center gap-3"></div>
        <Profil />
      </div>
    </header>
  );
}

export default Header;
