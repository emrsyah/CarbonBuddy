import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../components/ProgressBar";
import { climatiqAtom } from "../../../atoms/climatiqAtom";
import { useRecoilState } from "recoil";

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
  const [data, setData] = useRecoilState(climatiqAtom);
  const [completed, setCompleted] = useState(40);

  const handleChange = (e) => {
    const name = e.target.name.split(" ")[1];
    const uid = e.target.name.split(" ")[0];
    const harga = e.target.name.split(" ")[2];
    setData((prevState) => ({
      ...prevState,
      [name]: {
        emission_factor: {
          uuid: uid,
        },
        parameters: {
          money: (parseInt(e.target.value) * parseInt(harga)) / 15000,
        },
        amount: parseInt(e.target.value)
      },
    }));
  };

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
                onChange={handleChange}
                value={data?.fish?.amount || 0}
                name="04153823-6b76-4278-8ba6-f40bc02f9057 fish 25000"
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
                onChange={handleChange}
                value={data?.beef?.amount || 0}
                name="b5e96999-a595-4560-8d45-be9e22af4fe8 beef 32000"
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
                onChange={handleChange}
                value={data?.poultry?.amount || 0}
                name="6432cf0f-2639-46af-967d-74c319d3b697 poultry 20000"
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
                onChange={handleChange}
                value={data?.pork?.amount || 0}
                name="5ccf5c23-0404-4208-a933-1bb667e25732 pork 48000"
                type="number"
                min={0}
                className="bg-gray-900 w-fit p-1 border-b-[1px] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg">
                Milk Products🥛 <span className="text-sm">(bottle)</span>
              </h5>
              <input
                onChange={handleChange}
                value={data?.dairy?.amount || 0}
                name="112b3305-56d5-42f9-8561-06113045f9eb dairy 12000"
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
                onChange={handleChange}
                value={data?.water?.amount || 0}
                name="9334fce2-b509-4368-b26c-459be987e153 water 8000"
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
              onClick={() => navigate("/app/measure/smoke", { replace: true })}
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
