import React from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";

// todo mungkin buat direveal ini berapa itu berapa bisa lewat toast

function HighLow() {
  return (
    <>
      <Helmet>
        <title>Higher Lower | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-auto">
        <PageNavigation />
        <div className="grid grid-cols-11 gap-4 my-10">
          <div className="bg-gray-800 col-span-5 hover:bg-blue-500 cursor-pointer h-80 flex justify-center items-center text-xl p-6 rounded-md">
            Sleep in hotel at paris for one night
          </div>
          <div className="col-span-1 flex items-center justify-center text-xl font-medium">OR</div>
          <div className="bg-gray-800 col-span-5 hover:bg-blue-500 cursor-pointer h-80 flex justify-center items-center text-xl p-6 rounded-md">
            Sea traveling using a ferry
          </div>
        </div>
        <h5 className="text-center text-2xl font-medium">Select the one you thing created <span className="text-blue-500 font-bold">higher</span> carbon footprint</h5>
      </div>
    </>
  );
}

export default HighLow;
