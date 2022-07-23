import React from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";

function FunFact() {
  return (
    <>
      <Helmet>
        <title>Fun Facts | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-auto">
        <PageNavigation />
        <div className="my-24 grid grid-rows-4 gap-7 ">
          <h3 className="text-4xl col-span-3">
            The Ocean Absorbs Most of the Heat We Produce
          </h3>
          <button className="col-span-1 text-xl py-[10px] px-5 font-medium bg-blue-500 hover:bg-blue-600 rounded">
                More Fact Please
          </button>
        </div>
      </div>
    </>
  );
}

export default FunFact;
