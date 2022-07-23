import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./pages/app/Layout";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Tracker from "./pages/app/Tracker";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="app" element={<Layout />}>
            <Route index element={<Tracker />} />
            <Route path="tracker" element={<Tracker />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
