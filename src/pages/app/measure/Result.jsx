import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import ProgressBar from "../../../components/ProgressBar";

const containerVariants = {
  hiddenTwo: {
    opacity: 0,
  },
  hiddenThree: {
    opacity: 1,
  },
  visibleTwo: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
      staggerDirection: 1,
      staggerChildren: 3,
    },
  },
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
      staggerChildren: 1.7,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Result = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(85);
  const [mode, setMode] = useState("calculating");
  const [showShare, setShowShare] = useState(false);
  setTimeout(() => {
    setCompleted(100);
  }, 50);
  setTimeout(() => {
    setMode("finished");
  }, 2500);

  if (mode === "calculating") {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <ProgressBar completed={completed} />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex-grow"
        >
          <div className="flex items-center my-36 justify-center">
            <h2 className="text-5xl overflow-hidden font-semibold text-white">
              Calculating...
            </h2>
          </div>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div className="overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="overflow-hidden mx-3 flex-col my-12 flex items-center justify-center text-white"
      >
        <div className="flex flex-col gap-4">
          <motion.h5
            variants={childVariants}
            className="text-4xl overflow-hidden font-medium"
          >
            {/* Test Text Saya */}
            Your Carbon Footprint is: 10 KgCO₂e
          </motion.h5>
          <motion.p variants={childVariants} className="text-xl text-gray-100">
            Its about 39% lower than average people in this world
          </motion.p>
          <motion.p variants={childVariants} className="text-xl text-gray-100">
            Which our system consider still in a Good Area😁
          </motion.p>
          <motion.p variants={childVariants} className="text-xl text-gray-100">
            Keep it up, here are a few things we suggest you to do
          </motion.p>
          <motion.div
            variants={childVariants}
            className="text-lg text-gray-100"
          >
            <li>Use Bike Next Time Go To Work🚴</li>
            <li>Start Gardening🪴</li>
            <li>Avoid Plastic Usage🚫</li>
            <li>Stop Smoking, Good For Your Health & Environment💪</li>
          </motion.div>
          <motion.div variants={buttonVariants} className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/app/measure")}
              className="text-lg hover:bg-blue-600 py-2 px-8 w-full bg-blue-500 rounded-md flex items-center justify-center font-semibold text-white"
            >
              Restart 🔁
            </button>
            {/* TODO Share kalo di pencet dia bakal munculin component logo twitter, facebook, ama logo copy link. List logo ini muncul dibawah button nanti animasi masuknya nge slide, mungkin bisa pake framer motion yg ngasih tau elemen ini udh masuk ato nggak lupa namanya */}
            {/* Nama library sharenya itu react-share */}
            <button
              onClick={() => setShowShare(true)}
              className="text-lg hover:bg-[#151c25] py-2 px-8 w-full bg-gray-800 border-blue-500 rounded-md flex items-center justify-center font-medium text-white"
            >
              Share 🔗
            </button>
          </motion.div>
          {showShare && (
            <motion.div
              variants={buttonVariants}
              className="mt-3 flex items-center gap-5"
            >
              <FacebookShareButton
                // className="!text-blue-600"
                url={"https://youtube.com"}
                quote={
                  "My estimated carbon footprint today is 10Co2Kg, Lets calculate yours easily using KarbonMe"
                }
                hashtag="#saveearth"
              >
                <FacebookIcon className="w-10 h-10 rounded-full" />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://youtube.com"}
                title="My estimated carbon footprint today is 10Co2Kg"
                related={["climatechange", "saveearth"]}
                hashtags={["saveearth", "climatechange"]}
              >
                <TwitterIcon className="w-10 h-10 rounded-full" />
              </TwitterShareButton>
              <TelegramShareButton
                url={"https://youtube.com"}
                title="My estimated carbon footprint today is 10Co2Kg"
              >
                <TelegramIcon className="w-10 h-10 rounded-full" />
              </TelegramShareButton>
              <LinkedinShareButton
                url={"https://youtube.com"}
                source={"https://youtube.com"}
                title="My estimated carbon footprint today is 10Co2Kg"
                summary="My estimated carbon footprint today is 10Co2Kg - See yours with answering simple question in KarbonMe"
              >
                <LinkedinIcon className="w-10 h-10 rounded-full" />
              </LinkedinShareButton>
            </motion.div>
          )}
        </div>
      </motion.div>
      </div>
    );
  }
};

export default Result;
