import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { climatiqAtom } from "../../../atoms/climatiqAtom";
import PageNavigation from "../../../components/PageNavigation";

const buttonVariants = {
  hover: {
    scale: 1.02,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

function Measure() {
  const navigate = useNavigate();
  const setClimatiqData = useSetRecoilState(climatiqAtom);

  useEffect(() => {
    setClimatiqData([]);
  }, []);

  return (
    <>
      <Helmet>
        <title>Measure Your Carbon Footprint | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-4 xl:mx-auto">
        <PageNavigation />
        <div className="flex flex-col my-28 gap-10 items-center w-full flex-grow justify-center">
          <div>
            <h5 className="text-white text-center font-semibold text-4xl overflow-hidden">
              How Much Carbon Footprint You've Made Today🤔?
            </h5>
            <p className="text-gray-300 mt-2 text-center">
              Answer a few simple questions to find out, isnt that easy.
            </p>
          </div>
          <motion.button
            onClick={() => navigate("transport")}
            variants={buttonVariants}
            whileHover="hover"
            className="py-[10px] px-10 text-lg items-center flex gap-[10px] font-medium text-white border-2 border-white rounded-full shadow-sm shadow-gray-500"
          >
            <p>Lets Find Out</p>
            <span className="text-2xl">🔍</span>
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Measure;
