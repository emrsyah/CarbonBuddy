import React from "react";
import dayjs from "dayjs";
import { firestoreDb } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

function Challenges({ name, data, tracker, id }) {
  // console.log(tracker)
  const clickHandler = async (tgl) => {
    var usersUpdate = {};
    usersUpdate[`data.${tgl}`] = true;
    const ref = doc(firestoreDb, "challenges", id, "tracker", tracker.name);
    await updateDoc(ref, usersUpdate);
    window.location.reload(false);
  };

  return (
    <div className="grid grid-cols-12">
      <h5 className="col-span-2 flex p-[10px] text-gray-200 border-[0.8px] border-gray-600 text-[15px] items-center justify-center">
        {name}
      </h5>
      <div className="col-span-10 grid grid-cols-7">
        {data.map((d, i) => (
          <div
            onClick={() => {
              if (i === 6) {
                clickHandler(
                  parseInt(
                    dayjs()
                      .subtract(6 - i, "day")
                      .format("D")
                  )
                );
              }
            }}
            key={i}
            className={`col-span-1 ${
              i == 6 &&
              "hover:bg-gray-700 cursor-pointer border-l-[0.8px] border-l-gray-600"
            } flex flex-col items-center py-2 border-b-gray-600 border-b-[0.8px]
            ${
              tracker.data !== undefined && tracker?.data[
                parseInt(
                  dayjs()
                    .subtract(6 - i, "day")
                    .format("D")
                )
              ] && "bg-blue-400"
            }
            ${
              tracker.data !== undefined && tracker?.data[
                parseInt(
                  dayjs()
                    .subtract(6 - i, "day")
                    .format("D")
                )
              ] &&
              i === 6 &&
              "hover:bg-blue-500"
            }
            `}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Challenges;
