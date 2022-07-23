import React from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";

const data = [1, 2, 3, 4, 5, 6, 7];

function Tracker() {
  const nowDay = parseInt(dayjs().format("D"));

  return (
    <>
      <Helmet>
        <title>Track Habit | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-auto">
        <PageNavigation />
        <div className="pb-2 my-8 border-b-[1px] border-b-gray-700 flex items-center  justify-between">
          <h5 className="text-xl font-medium">Our Challenges From API</h5>
          <div className="flex items-center gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 font-medium rounded">
              Accept Challenge
            </button>
            <button className="bg-white text-blue-600 p-[6px] hover:bg-gray-200 rounded">
              <Icon icon="ic:sharp-restart-alt" width={28} />
            </button>
          </div>
        </div>
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
          <div className="grid grid-cols-12">
            <h5 className="col-span-2 flex p-[10px] text-gray-200 border-[0.8px] border-gray-600 text-[15px] items-center justify-center">
              reduce water use for the next 7 days
            </h5>
            <div className="col-span-10 grid grid-cols-7">
              {data.map((d, i) => (
                <div className="col-span-1 hover:bg-gray-700 cursor-pointer flex flex-col items-center py-2 border-b-gray-600 border-b-[0.8px]"></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-12">
            <h5 className="col-span-2 flex p-[10px] text-gray-200 border-[0.8px] border-gray-600 text-[15px] items-center justify-center">
              drink off reusable bottles for the whole day
            </h5>
            <div className="col-span-10 grid grid-cols-7">
              {data.map((d, i) => (
                <div className="col-span-1 hover:bg-gray-700 cursor-pointer flex flex-col items-center py-2 border-b-gray-600 border-b-[0.8px]"></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-12">
            <h5 className="col-span-2 flex p-[10px] text-gray-200 border-[0.8px] border-gray-600 text-[15px] items-center justify-center">
              throw recyclable objects in recycle bins
            </h5>
            <div className="col-span-10 grid grid-cols-7">
              {data.map((d, i) => (
                <div className="col-span-1 hover:bg-gray-700 cursor-pointer flex flex-col items-center py-2 border-b-gray-600 border-b-[0.8px]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracker;
