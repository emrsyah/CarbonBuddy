import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import Challenges from "../../components/Challenges";
import { useLocation } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { firestoreDb } from "../../firebase";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../atoms/userAtom";

const data = [1, 2, 3, 4, 5, 6, 7];

function Tracker() {
  const location = useLocation();
  const [challenges, setChallenges] = useState("");
  const user = useRecoilValue(userAtom);
  const [error, setError] = useState(false);
  const [firebaseChallenge, setFirebaseChallenge] = useState();
  const [status, setStatus] = useState("loading");

  const getFirebaseChallenges = () => {
    const unsubscribe = onSnapshot(
      query(
        collection(firestoreDb, "challenges"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      ),
      async (snapshot) => {
        if (snapshot.docs.length) {
          const withTrack = await Promise.all(
            snapshot.docs.map( async (document) => {
              return getDoc(
                doc(
                  firestoreDb,
                  "challenges",
                  document.id,
                  "tracker",
                  dayjs().format("MMMYYYY")
                )
              );
              // const data = docSnap?.data();
              // console.log({ ...document.data(), tracker: data });
              // return { ...document.data(), tracker: data };
            })
          );
          // console.log(withTrack[0].data())
          const trackers = withTrack.map(i => {
            return {
              ...i.data(),
              name: i.id
            }
          })
          const satuin = snapshot.docs.map((doc, i)=>{
            return({...doc.data(), id: doc.id, tracker: trackers[i]})
          })
          // console.log(satuin)
          setFirebaseChallenge(satuin);
          setStatus("finished");
        } else {
          setFirebaseChallenge();
          setStatus("no data");
        }
      }
    );
    return unsubscribe;
  };

  useEffect(() => {
    if (!location.pathname.includes("/tracker")) navigate("/app/home");
    try {
      getChallenges();
      getFirebaseChallenges();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getChallenges = async () => {
    try {
      const id = Math.floor(Math.random() * (25 - 4)) + 4;
      const res = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:IBNbZUaL/challenges/" + id
      );
      if (res.status !== 200) {
        throw new Error("Invalid status code: " + res.status);
      }
      const json = await res.json();
      setError(false);
      setChallenges({ ...json });
      // console.log(json)
    } catch (err) {
      console.error(err);
      setError(true);
      setChallenges({
        name: "There is something wrong, please try again in a few seconds",
      });
    }
  };

  const addHandler = async () => {
    try {
      // add main challenge
      const docRef = await addDoc(collection(firestoreDb, "challenges"), {
        userId: user.uid,
        name: challenges.name,
        difficulty: challenges.difficulty,
        createdAt: serverTimestamp(),
      });

      // add track
      await setDoc(
        doc(
          firestoreDb,
          "challenges",
          docRef.id,
          "tracker",
          dayjs().format("MMMYYYY")
        ),
        {
          data: {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            17: false,
            18: false,
            19: false,
            20: false,
            21: false,
            22: false,
            23: false,
            24: false,
            25: false,
            26: false,
            27: false,
            28: false,
            29: false,
            30: false,
            31: false,
          },
        }
      );
      getChallenges();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Track Habit | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-6 xl:mx-20 2xl:mx-auto">
        <PageNavigation />

        {/* CHALLENGES GENERATOR */}
        <div className="pb-2 my-8 border-b-[1px] border-b-gray-700 flex items-center  justify-between">
          <h5
            className={`text-xl font-medium ${
              challenges.name ===
                "There is something wrong, please try again in a few seconds" &&
              "!text-red-400"
            }`}
          >
            {challenges === "" ? (
              "Generating Some Challenges..."
            ) : (
              <>{challenges.name}</>
            )}
          </h5>
          <div className="flex items-center gap-3">
            <button
              disabled={error}
              onClick={() => addHandler()}
              className="bg-blue-500 hover:bg-blue-600 py-2 px-5 font-medium rounded"
            >
              Accept Challenge
            </button>
            <button
              onClick={() => getChallenges()}
              className="bg-white text-blue-600 p-[6px] hover:bg-gray-200 rounded"
            >
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
                  key={i}
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
          {status === "loading" ? (
            <div className="border-gray-600 flex justify-center text-gray-200 border-[0.8px] py-2">
              <p className="pl-4">Getting Your Data...</p>
            </div>
          ) : (
            <>
              {status === "no data" ? (
                <div className="border-gray-600 flex justify-center text-gray-200 border-[0.8px] py-2">
                  <p className="pl-4">No Data Yet, Accept Some Challenge</p>
                </div>
              ) : (
                <>
                  {firebaseChallenge?.map((c, i) => (
                    <div key={i}>
                      <Challenges id={c.id} name={c.name} data={data} tracker={c.tracker} />
                    </div>
                  ))}{" "}
                </>
              )}
            </>
          )}
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
