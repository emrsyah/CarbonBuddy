import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../components/ProgressBar";
import { climatiqAtom } from "../../../atoms/climatiqAtom";
import {useRecoilState} from 'recoil'

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
  const [data, setData] = useRecoilState(climatiqAtom);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = (e.target.name.split(' ')[1])
    const uid = (e.target.name.split(' ')[0])
    setData((prevState) => ({
      ...prevState,
      [name]: {
        emission_factor: {
          uuid: uid,
        },
        parameters: {
          distance: parseInt(e.target.value),
        },
      },
    }));
  };

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
                Bicycle🚲 <span className="text-sm">(km)</span>
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
                onChange={handleChange}
                value={data?.motorcycle?.parameters?.distance || 0}
                name="91fc1718-88a1-4793-98c3-54ec3e6e63f4 motorcycle"
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
                onChange={handleChange}
                type="number"
                value={data?.bus?.parameters?.distance| 0}
                name="bb937415-ceb6-4cde-b465-3ff3285fffae bus"
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
                value={data?.car?.parameters?.distance| 0}
                onChange={handleChange}
                name="a94fb338-b9c4-419d-9803-af2f7ae03142 car"
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
                value={data?.train?.parameters?.distance || 0}
                onChange={handleChange}
                name="b1575ee1-87c9-4560-a09d-e423627c8548 train"
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
              onClick={() => navigate("/app/measure/flight", { replace: true })}
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

export default Transport;
