import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "../../../components/ProgressBar";
import { climatiqAtom } from "../../../atoms/climatiqAtom";
import { useSetRecoilState } from "recoil";

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

const Smoke = () => {
  const navigate = useNavigate();
  const setData = useSetRecoilState(climatiqAtom);
  const inputRef = useRef();
  const [completed, setCompleted] = useState(55);
  setTimeout(() => {
    setCompleted(70);
  }, 50);

  const clickHandler = () => {
    setData((prevState) => ({
      ...prevState,
      smoke: {
        emission_factor: {
          uuid: "530eb16e-dfea-40d2-86f3-b0664d729cae",
        },
        parameters: {
          money: 24000 / 15000,
        },
      },
    }));
    navigate("/app/measure/holiday", { replace: true });
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    setData((prevState) => ({
      ...prevState,
      smoke: {
        emission_factor: {
          uuid: "530eb16e-dfea-40d2-86f3-b0664d729cae",
        },
        parameters: {
          money: (24000 / 15000) * parseInt(inputRef.current.value),
        },
      },
    }));
    navigate("/app/measure/holiday", { replace: true });
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
        <div className="mx-16 flex flex-col gap-8 text-white">
          <div className="flex flex-col items-center">
            <h5 className="text-white  font-bold overflow-hidden text-4xl text-center">
              Do You Smoke Cigarettes Today🚬
            </h5>
            <p className="font-light mt-2 text-gray-200">
              did you smoke today?
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 justify-between mt-10">
            <button
              onClick={() => clickHandler()}
              className="bg-blue-500 hover:bg-blue-600 font-medium w-full py-[10px] px-7 rounded text-white"
            >
              Yes, i smoke once today
            </button>
            <button
              onClick={() =>
                navigate("/app/measure/holiday", { replace: true })
              }
              className="bg-gray-800 py-[10px] w-full px-7 rounded text-gray-200"
            >
              No, i dont smoke
            </button>
            <p className="my-2 text-gray-400">
              Or if you smoke more than once today
            </p>
            <form
              onSubmit={submitHandler}
              className="flex flex-col w-full gap-2"
            >
              <input
                type="number"
                ref={inputRef}
                min={0}
                className="border-[1px] outline-none px-4 text-center w-full py-[10px] border-gray-600 bg-gray-900 rounded"
              />
              <button
                type="submit"
                className="border-blue-500 border-2 font-medium w-full py-[10px] px-7  rounded text-blue-500"
              >
                I smoke with the amount above
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Smoke;
