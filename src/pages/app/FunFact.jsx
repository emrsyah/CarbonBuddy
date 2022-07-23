import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageNavigation from "../../components/PageNavigation";

function FunFact() {
  const [fact, setFact] = useState(null);

  const getData = async () => {
    const random = Math.floor(Math.random() * (13 - 1 + 1) + 1);
    const res = await fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:A6ftamzV/fun_facts/${random}`
    );
    const json = await res.json();
    setFact(json);
  };

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const clickHandler = () => {
    getData();
  };

  return (
    <>
      <Helmet>
        <title>Fun Facts | Carbon Buddy</title>
      </Helmet>
      <div className="my-8 max-w-6xl mx-6 xl:mx-20 2xl:mx-auto">
        <PageNavigation />
        <div className="my-24 flex flex-col gap-16">
          <h3 className="text-5xl leading-normal relative">
            {fact?.Fact ? (
              <>
                <span className="text-6xl -top-[10px] -left-7 rotate-12 absolute">
                  "
                </span>
                {fact.Fact}"
              </>
            ) : (
              <>Getting Some Facts For You😴😴</>
            )}
          </h3>
          <button
            onClick={() => clickHandler()}
            className="text-xl py-3 px-10 font-medium bg-blue-500 hover:bg-blue-600 rounded"
          >
            More Fact Please 😮
          </button>
        </div>
      </div>
    </>
  );
}

export default FunFact;
