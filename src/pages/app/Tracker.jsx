import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import Challenges from "../../components/Challenges";
import { useLocation } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestoreDb } from "../../firebase";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../atoms/userAtom";

const data = [1, 2, 3, 4, 5, 6, 7];
const challengesMe = [
  "reduce water use for the next 7 days",
  "drink off reusable bottles for the whole day",
  //   "throw recyclable objects in recycle bins",
];

function Tracker() {
  const location = useLocation();
  const [challenges, setChallenges] = useState("");
  const user = useRecoilValue(userAtom)

  useEffect(() => {
    if (!location.pathname.includes("/tracker")) navigate("/app/home");
    getChallenges()
  }, []);

  const getChallenges= async () => {
    const id = Math.floor(Math.random() * 22) + 1;
    const res = await fetch(
      "https://x8ki-letl-twmt.n7.xano.io/api:e4LWH0US/challenges/" + id
    );
    const json = await res.json();
    setChallenges({ ...json });
    // console.log(json)
  };

  const addHandler = async () =>{
    try{
      await addDoc(collection(firestoreDb, "challenges"),{
        userId: user.uid,
        name: challenges.title,
        difficulty: challenges.difficulity,
        createdAt: serverTimestamp()
      })
    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
      <Helmet>
        <title>Track Habit | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-6 xl:mx-20 2xl:mx-auto">
        <PageNavigation />

        {/* CHALLENGES GENERATOR */}
        <div className="pb-2 my-8 border-b-[1px] border-b-gray-700 flex items-center  justify-between">
          <h5 className="text-xl font-medium">
            {challenges === "" ? "Generating Some Challenges..." : <>{challenges.title}</>}
          </h5>
          <div className="flex items-center gap-3">
            <button 
            onClick={()=>addHandler()}
            className="bg-blue-500 hover:bg-blue-600 py-2 px-5 font-medium rounded">
              Accept Challenge
            </button>
            <button 
            onClick={()=>getChallenges()}
            className="bg-white text-blue-600 p-[6px] hover:bg-gray-200 rounded">
              <Icon icon="ic:sharp-restart-alt" width={28} />
            </button>
          </div>
        </div>

        {/* CHALLENGES TRACKER */}
        <div className="border-[0.8px] border-gray-600">
          <div className="grid grid-cols-12">
            <h5 className="col-span-2 border-gray-600 border-[0.8px] text-lg font-medium text-center flex items-center justify-center">
              Habits
            </h5>
            <div className="col-span-10 grid grid-cols-7">
              {data.map((d, i) => (
                <div
                  className={`col-span-1 flex flex-col items-center border-gray-600 border-[0.8px] py-2 border-t-gray-600 ${
                    i === 6 && "bg-blue-500"
                  }`}
                >
                  <p
                    className={`text-[15px] text-gray-300 ${
                      i === 6 && "!text-gray-50"
                    }`}
                  >
                    {dayjs()
                      .subtract(6 - i, "day")
                      .format("D")}
                  </p>
                  <h5 className="text-xl">
                    {i === 6 ? (
                      <>Today</>
                    ) : (
                      <>
                        {dayjs()
                          .subtract(6 - i, "day")
                          .format("ddd")}
                      </>
                    )}
                  </h5>
                </div>
              ))}
            </div>
          </div>
          {challengesMe.map((c) => (
            <Challenges c={c} data={data} />
          ))}
        </div>

        {/* <div className="flex my-20 items-center justify-center flex-col">
            <h3 className="text-3xl font-semibold">Try This Out</h3>
            <div className="flex items-center my-4 gap-4 justify-center">
                <div>

                </div>
            </div>
        </div> */}
      </div>
    </>
  );
}

export default Tracker;
