import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="h-32 w-32 bg-blue-600 absolute blur-[100px]"></div>
      <div className="h-32 w-32 bg-blue-600 absolute blur-[120px] bottom-0 right-0"></div>
      <div className="h-24 w-24 bg-teal-600 absolute blur-[80px] -bottom-12 left-24"></div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="max-w-3xl mx-auto text-center my-12 relative z-10">
        <h1 className="text-7xl font-bold roboto tracking-wide">
          <span className="text-blue-500 font-bold roboto">Curb Carbon</span>{" "}
          with Carbon Buddy
        </h1>
        <p className="text-gray-100 font-medium text-lg mt-3">
          Fight climate change and cut carbon footprint in easy and fun way.
        </p>
        <button className="bg-blue-500 text-xl font-semibold mt-8 py-3 px-8 rounded hover:bg-blue-600">
          Get Started Now - Its Free!
        </button>
        <div className="flex items-center gap-6 justify-center mt-6">
            <div className="flex items-center text-sm text-gray-400 gap-2">
                <h6 className="font-medium hover:text-teal-300 cursor-pointer">Environment Habit Tracker | </h6>
                <h6 className="font-medium hover:text-teal-300 cursor-pointer">Carbon Footprint Measurement | </h6>
                <h6 className="font-medium hover:text-teal-300 cursor-pointer">Climate FunFact | </h6>
                <h6 className="font-medium hover:text-teal-300 cursor-pointer">High Low Games</h6>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
