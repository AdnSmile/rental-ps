import { Outlet, useLocation } from "react-router-dom";
import AuthService from "../../utils/AuthService";
import { Card, List } from "@material-tailwind/react";
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import Header from "./header";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  HiChartPie,
  HiClipboard,
  HiPlay,
  HiShoppingCart,
  HiSquares2X2,
  HiXMark,
} from "react-icons/hi2";

const roleItem = {
  Admin: [
    {
      to: "dashboard",
      name: "Dashboard",
      icon: <HiSquares2X2 />,
    },
    {
      to: "kelola-ps",
      name: "Kelola Data PS",
      icon: <HiPlay />,
    },
    {
      to: "#",
      name: "Reservasi PS",
      icon: <HiClipboard />,
    },
    {
      to: "kelola-menu",
      name: "Kelola Makan Minum",
      icon: <HiShoppingCart />,
    },
    {
      to: "#",
      name: "Laporan",
      icon: <HiChartPie />,
    },
  ],

  Owner: [
    {
      to: "dashboard",
      name: "Dashboard",
      icon: <LuLayoutDashboard />,
    },
  ],
};

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const role = JSON.parse(AuthService.getUser()).role;
  return (
    <div className="flex w-full">
      <Card
        className={`absolute left-0 top-0 z-[9999] flex h-screen rounded-none bg-[#141943] p-4 transition-all duration-300 lg:static lg:translate-x-0 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute right-4 top-4 block lg:hidden"
        >
          <HiXMark
            size={28}
            className="rounded-full border border-white text-white p-1"
          />
        </button>
        <div className="mb-2 flex items-center justify-center gap-4 p-4 pt-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1H7DVuEWjMYtzGkGgUm7Yk9mc3pkGjbLcpw&s"
            alt="brand"
            className="h-20"
          />
        </div>
        <List>
          {roleItem[role].map((item, index) => (
            <SidebarItem
              key={index}
              pathname={pathname}
              to={item.to}
              name={item.name}
              icon={item.icon}
            >
              {item.icon}
            </SidebarItem>
          ))}
        </List>
      </Card>
      <div className="relative flex h-screen flex-1 flex-col overflow-y-auto overflow-x-hidden bg-gray-200 print:h-auto">
        <Header sidebarOpen={showSidebar} setSidebarOpen={setShowSidebar} />
        <div className="w-full px-12">
          <div className="mx-auto max-w-7xl py-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
