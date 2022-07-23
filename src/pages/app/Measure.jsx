import React from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";

function Measure() {
  return (
    <>
      <Helmet>
        <title>Measure Your Carbon Footprint | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-auto">
        <PageNavigation />
      </div>
    </>
  );
}

export default Measure;
