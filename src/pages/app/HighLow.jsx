import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";

// todo mungkin buat direveal ini berapa itu berapa bisa lewat toast

function HighLow() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [reveal, setReveal] = useState(false);
  const max = 22;

  const getRandomNumber = () => {
    const first = Math.floor(Math.random() * (max - 1 + 1) + 1);
    let second = Math.floor(Math.random() * (max - 1 + 1) + 1);
    if (first === second) {
      if (second !== max) {
        second++;
      } else {
        second--;
      }
    }
    return [first, second];
  };

  const getData = async () => {
    const number = getRandomNumber();
    const res1 = await fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:xHc2aQMr/high_low/${number[0]}`
    );
    const res2 = await fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:xHc2aQMr/high_low/${number[1]}`
    );
    const json1 = await res1.json();
    const json2 = await res2.json();
    setFirst(json1);
    setSecond(json2);
  };

  useEffect(() => {
    getData();
  }, []);

  const clickHandler = (choosen) => {
    setReveal(true);
    setTimeout(() => {
      setReveal(false);
      getData();
    }, 4000);
  };

  return (
    <>
      <Helmet>
        <title>Higher Lower | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-auto">
        <PageNavigation />
        <div className="grid grid-cols-11 gap-4 my-10">
          <button
            disabled={reveal || !first}
            onClick={() => clickHandler(1)}
            className="bg-gray-800 text-center col-span-5 border-[1.5px] border-gray-800 hover:border-white cursor-pointer h-80 flex flex-col gap-1 justify-center items-center p-6 rounded-md"
          >
            <h5 className="text-xl">
              {first?.Activity ? first.Activity : "Loading..."}
            </h5>
            <p className="text-blue-600 font-medium">
              {reveal && <>Carbon Footprint: <span className="font-semibold text-blue-500 underline">{first?.carbonAmount}</span> KgCO₂e</>}
            </p>
          </button>
          <div className="col-span-1 flex items-center justify-center text-xl font-medium">
            OR
          </div>
          <button
            disabled={reveal || !second}
            onClick={() => clickHandler(2)}
            className="bg-gray-800 text-center col-span-5 border-[1.5px] border-gray-800 hover:border-white cursor-pointer h-80 flex flex-col gap-1 justify-center items-center  p-6 rounded-md"
          >
            <h5 className="text-xl">
              {second?.Activity ? second.Activity : "Loading..."}
            </h5>
            <p className="text-blue-600 font-medium">
              {reveal && <>Carbon Footprint: <span className="font-semibold text-blue-500 underline">{second?.carbonAmount}</span> KgCO₂e</>}
            </p>
          </button>
        </div>
        <h5 className="text-center text-2xl font-medium">
          Select the one you think created{" "}
          <span className="text-blue-500 font-bold">higher</span> carbon
          footprint
        </h5>
      </div>
    </>
  );
}

export default HighLow;
