import React from "react";
import { Link, useLocation } from "react-router-dom";

function PageNavigation() {
  const location = useLocation();
  return (
    <nav className="flex items-center gap-3">
      <Link
        to="/app/tracker"
        className={` text-gray-400 font-normal ${
          location.pathname.includes("/tracker") &&
          "!font-medium cursor-pointer !text-blue-500"
        } `}
      >
        Tracker
      </Link>
      <div className="h-4 bg-white w-[1px]"></div>
      <Link
        to="/app/measure"
        className={` text-gray-400 font-normal ${
          location.pathname.includes("/measure") &&
          "!font-medium cursor-pointer !text-blue-500"
        } `}
      >
        Measurement
      </Link>
      <div className="h-4 bg-white w-[1px]"></div>
      <Link
        to="/app/fun-fact"
        className={` text-gray-400 font-normal ${
          location.pathname.includes("/fun-fact") &&
          "!font-medium cursor-pointer !text-blue-500"
        } `}
      >
        Fun-Fact
      </Link>
      <div className="h-4 bg-white w-[1px]"></div>
      <Link
        to="/app/high-low"
        className={` text-gray-400 font-normal ${
          location.pathname.includes("/high-low") &&
          "!font-medium cursor-pointer !text-blue-500"
        } `}
      >
        Higher-Lower
      </Link>
    </nav>
  );
}

export default PageNavigation;
