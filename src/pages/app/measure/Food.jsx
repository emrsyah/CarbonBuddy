import React, { useState } from "react";
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

const Food = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(40);
  setTimeout(() => {
    setCompleted(55);
  }, 50);
  return (
    <div className="overflow-hidden">
      <ProgressBar completed={completed} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form className="mx-16 flex flex-col gap-8 text-white">
          <div>
            <h5 className="text-white font-bold text-2xl">
              2 - Food & Beverages
            </h5>
            <p className="font-light mt-2 text-gray-200">
              How much you consume this food and beverages today, please fill
              with the corresponding unit.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-y-10 gap-x-2">
            <div className="flex flex-col">
              <h5 className="text-lg">
                Fish Products🐠<span className="text-sm"> (times)</span>
              </h5>
              <input
                type="number"
                min={0}
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg">
                Beef🥩 <span className="text-sm">(times)</span>
              </h5>
              <input
                type="number"
                min={0}
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg">
                Poultry Products🦆 <span className="text-sm">(times)</span>
              </h5>
              <input
                type="number"
                min={0}
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg">
                Pork🥓 <span className="text-sm">(times)</span>
              </h5>
              <input
                type="number"
                min={0}
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg">
                Dairy Products🥛 <span className="text-sm">(bottle)</span>
              </h5>
              <input
                type="number"
                min={0}
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg">
                Regular Water <span className="text-sm">(bottle)</span>
              </h5>
              <input
                type="number"
                min={0}
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            {/* <button
              onClick={() => navigate('/ship')}
              className="bg-gray-800 py-[10px] px-7 rounded text-gray-200"
            >
              Previous
            </button> */}
            <button
              onClick={() => navigate("/app/measure/smoke", {replace: true})}
              className="bg-blue-500 hover:bg-blue-600 w-full font-medium py-[10px] px-7 rounded text-white"
            >
              Continue
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Food;
