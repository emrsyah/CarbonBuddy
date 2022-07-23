import React from "react";
import { Icon } from "@iconify/react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/userAtom";

function NavApp() {
  const user = useRecoilValue(userAtom)
  console.log(user)
  return (
    <nav className="py-3 px-12 flex items-center justify-between border-b-gray-600 border-b-[1px]">
      <h5 className=" text-xl font-semibold">CarbonBuddy🌏</h5>
      <div className="flex items-center gap-8">
        <Icon icon="carbon:trophy" width={32} />
        <img src={user.image} alt="profile" className="w-10 h-10 rounded-full border-2 border-blue-500" />
      </div>
    </nav>
  );
}

export default NavApp;
