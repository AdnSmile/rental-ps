import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import AuthService from "../../utils/AuthService";
import { HiChevronDown, HiKey, HiPower } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Profil() {
  const user = JSON.parse(AuthService.getUser());
  const navigate = useNavigate();
  return (
    <>
      <Menu placement="bottom-end">
        <MenuHandler>
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <div className="flex flex-col items-end">
              <p className="text-sm">{user.username}</p>
              <p className="text-sm text-gray-600">{user.role}</p>
            </div>

            <span className="h-12 w-12 overflow-hidden rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1H7DVuEWjMYtzGkGgUm7Yk9mc3pkGjbLcpw&s"
                alt="User"
              />
            </span>

            <HiChevronDown />
          </div>
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center justify-start gap-2">
            <HiKey />
            Change Password
          </MenuItem>
          <hr className="my-3" />
          <MenuItem
            className="flex items-center justify-start gap-2 text-red-500 focus:text-red-500 active:text-red-500"
            onClick={() => navigate("/login")}
          >
            <HiPower />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>

      {/* <Dialog open={open} handler={handleOpen} size="sm">
        <DialogHeader>Ubah Kata Sandi</DialogHeader>
        <DialogBody>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Input
              variant="outlined"
              label="Password Lama"
              type="password"
              placeholder="Masukan Password Lama Anda"
              onChange={(e) =>
                setInput({ ...input, old_password: e.target.value })
              }
              value={input.old_password}
            />
            <Input
              variant="outlined"
              label="Password"
              type="password"
              placeholder="Masukan Password Anda"
              onChange={(e) =>
                setInput({ ...input, new_password: e.target.value })
              }
              value={input.new_password}
            />
            <Input
              variant="outlined"
              label="Konfirmasi Password"
              type="password"
              placeholder="Masukan Konfirmasi Password Anda"
              onChange={(e) =>
                setInput({ ...input, konfirmasiPassword: e.target.value })
              }
              value={input.konfirmasiPassword}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-pink-primary"
            loading={loading}
            onClick={handleSubmit}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog> */}
    </>
  );
}

export default Profil;
