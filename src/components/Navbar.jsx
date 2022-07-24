import { Icon } from "@iconify/react";
import { signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestoreDb, googleProvider } from "../firebase";
import { toast } from "react-toastify";
import logo from '../assets/navLogo.svg'


function Navbar() {
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      const user = result.user;

      
      const q = query(
        collection(firestoreDb, "users"),
        where("userId", "==", user.uid)
      );
      const docSnap = await getDocs(q);
      const isAvailable = docSnap.docs.length;

      if (isAvailable) {
        navigate("/app/tracker");
        toast.success("Welcome Back Buddy")
      } else {
        await addDoc(collection(firestoreDb, "users"), {
          userId: user.uid,
          name: user.displayName,
          email: user.email,
          createdAt: serverTimestamp(),
          image: user.photoURL,
        });
        navigate("/app/tracker");
        toast.success("Success to join")
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };
  return (
    <nav className="py-7 px-12 flex items-center justify-between">
      <img src={logo} alt="Logo" className="w-48" />
      <button 
      onClick={loginHandler}
      className="flex items-center gap-2 border-blue-500 py-2 px-4 rounded font-medium border-[1.2px] hover:text-blue-600 text-blue-500 hover:border-blue-600">
        <Icon icon="akar-icons:google-fill" />
        <p>Login Google</p>
      </button>
    </nav>
  );
}

export default Navbar;
