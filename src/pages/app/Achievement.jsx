import React from "react";
import { Helmet } from "react-helmet";

const d = ["Bravian", "Nadine", "Samantha", "Nevin", "Emir"]

function Achievement() {
  return (
    <>
      <Helmet>
        <title>Your Achievements | Carbon Buddy</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center my-12 mx-auto max-w-6xl">
        <h5 className="text-5xl font-semibold">Your Achievements 🏅</h5>
        <div className="flex items-center gap-5 mt-14">
          {d.map(c=>(
            <div className="w-44 h-44 flex-col bg-gray-800 rounded-md flex items-center justify-center">
              <h5 className="text-xl font-medium">Locked</h5>
              <p className="text-gray-300">{c} Medal</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Achievement;
