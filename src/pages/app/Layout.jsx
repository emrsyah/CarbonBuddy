import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../../atoms/userAtom";
import { auth } from "../../firebase";
import lottieJson from "../../assets/loading.json";
import Lottie from "lottie-web";

function Layout() {
  const setUser = useSetRecoilState(userAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          navigate("/", { replace: true });
          return;
        }

        setUser({
          uid: user.uid,
          displayName: user.displayName,
          image: user.photoURL,
          email: user.email,
        });
      });
    } catch (err) {
      console.error(err);
      navigate("/");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // console.count("loaded")
    const instance = Lottie.loadAnimation({
      container: document.querySelector("#lottie-container"),
      animationData: lottieJson,
    });
    return () => instance.destroy();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh] flex-col">
        {/* <img src={loading} alt="" /> */}
        {/* <img src={logo} alt="" className="h-14" /> */}
        <h6 className="text-2xl font-semibold">CarbonBuddy🌏</h6>
        <div id="lottie-container" className="w-28" />
        {/* {""} */}
        {/* <div>loading</div> */}
      </div>
    );
  } else {
    return (
      <main>
        <h1>Layout</h1>
        <Outlet />
      </main>
    );
  }
}

export default Layout;
