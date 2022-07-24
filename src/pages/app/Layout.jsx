import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../../atoms/userAtom";
import { auth } from "../../firebase";
import lottieJson from "../../assets/loading.json";
import Lottie from "lottie-web";
import NavApp from "../../components/NavApp";
import logo from "../../assets/navLogo.svg";


function Layout() {
  const [user, setUser] = useRecoilState(userAtom);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

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

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center h-[100vh] flex-col">
        {/* <img src={loading} alt="" /> */}
        {/* <img src={logo} alt="" className="h-14" /> */}
        <img src={logo} alt="Logo" className="w-56" />
        <div id="lottie-container" className="w-28" />
        {/* {""} */}
        {/* <div>loading</div> */}
      </div>
    );
  } else {
    return (
      <>
        <NavApp />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default Layout;
