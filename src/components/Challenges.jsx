import React from "react";

function Challenges({c, data}) {
  return (
    <div className="grid grid-cols-12">
      <h5 className="col-span-2 flex p-[10px] text-gray-200 border-[0.8px] border-gray-600 text-[15px] items-center justify-center">
        {c}
      </h5>
      <div className="col-span-10 grid grid-cols-7">
        {data.map((d, i) => (
          <div className="col-span-1 hover:bg-gray-700 cursor-pointer flex flex-col items-center py-2 border-b-gray-600 border-b-[0.8px]"></div>
        ))}
      </div>
    </div>
  );
}

export default Challenges;
