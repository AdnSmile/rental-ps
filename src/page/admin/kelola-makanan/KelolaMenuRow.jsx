/* eslint-disable react/prop-types */
import blank from "../../../assets/img/blank.webp";
import {
  HiMiniPencilSquare,
  HiMiniTrash,
  HiOutlineEllipsisVertical,
} from "react-icons/hi2";
import Table from "../../../component/material-tailwind/Table";
import { BASE_URL_IMAGE } from "../../../utils/ApiService";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { number, rupiah } from "../../../utils/ClassFormatter";
function KelolaMenuRow({
  item: { id, menu_name, menu_type, price, stock, image },
  handleEdit,
  handleDelete,
}) {
  return (
    <Table.Row>
      {" "}
      <div>
        <img
          className="h-[100px] w-[100px] object-cover"
          src={image ? BASE_URL_IMAGE + image : blank}
          alt=""
        />
      </div>
      <div>{menu_name}</div>
      <div>{menu_type}</div>
      <div>{rupiah(price)}</div>
      <div>{number(stock)}</div>
      <Menu>
        <MenuHandler>
          <IconButton variant="text">
            <HiOutlineEllipsisVertical size={24} />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={() => handleEdit(id)}>
            <div className="flex gap-4">
              <HiMiniPencilSquare size={16} />
              <span>Edit</span>
            </div>
          </MenuItem>
          <MenuItem onClick={() => handleDelete(id)}>
            <div className="flex gap-4">
              <HiMiniTrash size={16} />
              <span>Delete</span>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    </Table.Row>
  );
}

export default KelolaMenuRow;
