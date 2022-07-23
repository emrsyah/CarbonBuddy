import { Icon } from "@iconify/react";
import React from "react";

function Navbar() {
  return (
    <nav className="py-7 px-12 flex items-center justify-between">
      <h5 className=" text-xl font-semibold">CarbonBuddy🌏</h5>
      <button className="flex items-center gap-2 border-blue-500 py-2 px-4 rounded font-medium border-[1.2px] hover:text-blue-600 text-blue-500 hover:border-blue-600">
        <Icon icon="akar-icons:google-fill" />
        <p>Login Google</p>
      </button>
    </nav>
  );
}

export default Navbar;
