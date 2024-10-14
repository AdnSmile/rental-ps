/* eslint-disable react/prop-types */
import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
function SidebarItem({ pathname, to, children, name }) {
  return (
    <NavLink to={to}>
      <ListItem
        className={`text-white hover:bg-white hover:text-black focus:bg-white focus:text-black ${
          pathname.includes(to) && "bg-white text-black"
        }`}
      >
        <ListItemPrefix>{children}</ListItemPrefix>
        {name}
      </ListItem>
    </NavLink>
  );
}

export default SidebarItem;
