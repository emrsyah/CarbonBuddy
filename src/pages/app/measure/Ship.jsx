import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

const Ship = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(25);
  setTimeout(() => {
    setCompleted(40);
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
          <div className="flex flex-col items-center">
            <h5 className="text-white overflow-hidden text-center font-bold text-4xl">
              Do You Use a Ferry Today🛳️
            </h5>
            <p className="font-light mt-2 text-gray-200">
              did you use a ferry for traveling today?
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 justify-between mt-10">
            <button
              onClick={() => navigate("/app/measure/food", {replace: true})}
              className="bg-blue-500 hover:bg-blue-600 font-medium w-full py-[10px] px-7 rounded text-white"
            >
              Yes, i took once today
            </button>
            <button
              onClick={() => navigate("/app/measure/food", {replace: true})}
              className="bg-gray-800 py-[10px] w-full px-7 rounded text-gray-200"
            >
              No, i dont use any today
            </button>
            <p className="my-2 text-gray-400">
              Or if you use ferry more than once today
            </p>
            <div className="flex flex-col w-full gap-2">
              <input
                type="number"
                min={0}
                className="border-[1px] outline-none px-4 text-center w-full py-[10px] border-gray-600 bg-gray-900 rounded"
              />
              <button
                onClick={() => navigate("/app/measure/food", {replace: true})}
                className="border-blue-500  border-2 font-medium w-full py-[10px] px-7  rounded text-blue-500"
              >
                I took a ferry with the amount above
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Ship;
