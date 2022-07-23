import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "../../../components/ProgressBar";
import { useSetRecoilState } from "recoil";
import { climatiqAtom } from "../../../atoms/climatiqAtom";


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

const Holiday = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(70);
  const setData = useSetRecoilState(climatiqAtom);

  setTimeout(() => {
    setCompleted(85);
  }, 50);

  const clickHandler = () => {
    setData((prevState) => ({
      ...prevState,
      hotel: {
        emission_factor: {
          uuid: "abebbfea-3ed0-451e-9306-256fad320d56",
        },
        parameters: {
          number: 1,
        },
      },
    }));
    navigate("/app/measure/result", { replace: true });
  };

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
            <h5 className="text-white font-bold overflow-hidden text-4xl text-center">
              Do you stay on a hotel today🏨
            </h5>
            <p className="font-light mt-2 text-gray-200">
              did you on a vacation or anything and stay on hotel today?
            </p>
          </div>
          <div className="flex flex-col-reverse items-center gap-4 justify-between mt-10">
            <button
              onClick={() => navigate("/app/measure/result", { replace: true })}
              className="bg-gray-800 py-[10px] w-full px-7 rounded text-gray-200"
            >
              No, i dont
            </button>
            <button
              onClick={() => clickHandler()}
              className="bg-blue-500 hover:bg-blue-600 font-medium w-full py-[10px] px-7 rounded text-white"
            >
              Yes, i am staying on hotel today
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Holiday;
