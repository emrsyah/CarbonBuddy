import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";
import { toast } from "react-toastify";

// todo mungkin buat direveal ini berapa itu berapa bisa lewat toast

function HighLow() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [reveal, setReveal] = useState(false);
  const [score, setScore] = useState(0)
//   const [choosen]
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
    if (choosen[0] > choosen[1]) {
      toast.success("You Right🥳🥳🥳", {autoClose:3000, position: "top-center"})
      setScore(score=>score + 1)
    }else if(choosen[0] < choosen[1]){
        toast.error("Sorry You Wrong😿😿😿", {autoClose:3000, position: "top-center"})
        setScore(0)
    }else{
        toast.info("Its a Tie😯", {autoClose:3000, position: "top-center"})
    }
    setReveal(true);
    setTimeout(() => {
      getData();
      setReveal(false);
    }, 4000);
  };

  return (
    <>
      <Helmet>
        <title>Higher Lower | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-6 xl:mx-20 2xl:mx-auto">
        <PageNavigation />
        <div className="grid grid-cols-11 gap-4 my-10">
          <button
            disabled={reveal || !first}
            onClick={() =>
              clickHandler([first?.carbonAmount, second?.carbonAmount])
            }
            className="bg-gray-800 text-center col-span-5 border-[1.5px] border-gray-800 hover:border-white cursor-pointer h-80 flex flex-col gap-1 justify-center items-center p-6 rounded-md"
          >
            <h5 className="text-xl">
              {first?.Activity ? first.Activity : "Loading..."}
            </h5>
            <p className="text-blue-600 text-lg font-medium">
              {reveal && (
                <>
                  Carbon Footprint:{" "}
                  <span className="font-semibold text-blue-500 underline">
                    {first?.carbonAmount}
                  </span>{" "}
                  KgCO₂e
                </>
              )}
            </p>
          </button>
          <div className="col-span-1 gap-4 flex flex-col items-center justify-center">
            <h5 className="text-lg">Streak: <span className="text-blue-500 font-semibold">{score}</span></h5>
            <p className="text-xl font-medium text-xl">OR</p>
          </div>
          <button
            disabled={reveal || !second}
            onClick={() =>
              clickHandler([second?.carbonAmount, first?.carbonAmount])
            }
            className="bg-gray-800 text-center col-span-5 border-[1.5px] border-gray-800 hover:border-white cursor-pointer h-80 flex flex-col gap-1 justify-center items-center  p-6 rounded-md"
          >
            <h5 className="text-xl">
              {second?.Activity ? second.Activity : "Loading..."}
            </h5>
            <p className="text-blue-600 text-lg font-medium">
              {reveal && (
                <>
                  Carbon Footprint:{" "}
                  <span className="font-semibold text-blue-500 underline">
                    {second?.carbonAmount}
                  </span>{" "}
                  KgCO₂e
                </>
              )}
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
