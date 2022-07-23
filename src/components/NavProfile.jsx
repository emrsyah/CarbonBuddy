import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function NavProfile({img}) {
  const logoutHandler = async () => {
    try {
      signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Menu className="relative" as="div">
      <Menu.Button className="flex rounded-full hover:scale-[103%] transition-all ease-out duration-100 p-[2px] border-2 border-blue-500 hover:border-blue-600 items-center gap-2 cursor-pointer w-full">
        <img src={img} className="w-10 h-10 rounded-full" alt="profile img" />
      </Menu.Button>
      <Menu.Items className="absolute text-black right-0 flex flex-col py-2 rounded bg-gray-800 gap-[2px] mt-1 w-36 shadowProfile text-sm font-medium z-10">
        {/* <Menu.Item>
          {({ active }) => (
            <Link
              className={` px-3 py-[6px] flex gap-2 ${active && "bg-gray-100"}`}
              to="/app/settings"
            >
              <Icon icon="carbon:settings" width="18" />
              <p>Settings</p>
            </Link>
          )}
        </Menu.Item> */}
        <Menu.Item>
          {({ active }) => (
            <button
              className={` px-3 py-[6px] flex gap-2 text-red-500 ${
                active && "bg-black"
              }`}
              onClick={logoutHandler}
            >
              <Icon icon="carbon:logout" width="18" />
              <p className="font-medium">Keluar</p>
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default NavProfile;
