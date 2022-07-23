import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../components/ProgressBar";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Transport = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden">
      <ProgressBar completed={0} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form className="mx-16 flex flex-col gap-8 text-white">
          <div>
            <h5 className="text-white font-bold text-2xl">
              1 - Transportation
            </h5>
            <p className="font-light mt-2 text-gray-200">
              How far you use these vehicle in a day as your transportation
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-2">
            <div className="flex flex-col">
              <h5 className="text-xl">
                Walking🚶<span className="text-sm">(km)</span>
              </h5>
              <input
                min={0}
                type="number"
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xl">
                Bike🚲 <span className="text-sm">(km)</span>
              </h5>
              <input
                min={0}
                type="number"
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xl">
                Motorcycle🛵 <span className="text-sm">(km)</span>
              </h5>
              <input
                min={0}
                type="number"
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xl">
                Bus🚌 <span className="text-sm">(km)</span>
              </h5>
              <input
                min={0}
                type="number"
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xl">
                Car🚗 <span className="text-sm">(km)</span>
              </h5>
              <input
                min={0}
                type="number"
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xl">
                Train🚂 <span className="text-sm">(km)</span>
              </h5>
              <input
                min={0}
                type="number"
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            {/* <button
              onClick={() => navigate("/")}
              className="bg-gray-800 py-[10px] px-7 rounded text-gray-200"
            >
              Previous
            </button> */}
            <button
              onClick={() => navigate("/app/measure/flight", {replace: true})}
              className="bg-blue-500 w-full font-medium py-[10px] px-7 rounded text-white"
            >
              Continue
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Transport;
