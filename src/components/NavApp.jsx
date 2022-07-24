import React from "react";
import { Icon } from "@iconify/react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/userAtom";
import { Link } from "react-router-dom";
import NavProfile from "./NavProfile";

function NavApp() {
  const user = useRecoilValue(userAtom)
  return (
    <nav className="py-3 px-12 flex items-center justify-between border-b-gray-600 border-b-[1px]">
      <Link to="/app/tracker" className=" text-xl font-semibold">CarbonBuddy🌏</Link>
      <div className="flex items-center gap-8">
        <Icon icon="carbon:trophy" width={32} />
        <NavProfile img={user.image}/>
        {/* <img src={user.image} alt="profile" className="w-10 h-10 rounded-full border-2 border-blue-500" /> */}
      </div>
    </nav>
  );
}

export default NavApp;
