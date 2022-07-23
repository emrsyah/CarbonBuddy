import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./pages/app/Layout";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Tracker from "./pages/app/Tracker";
import { RecoilRoot } from "recoil";
import Measure from "./pages/app/Measure";
import FunFact from "./pages/app/FunFact";
import HighLow from "./pages/app/HighLow";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <RecoilRoot>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="app" element={<Layout />}>
              <Route index element={<Tracker />} />
              <Route path="tracker" element={<Tracker />} />
              <Route path="measure" element={<Measure />} />
              <Route path="measure/transport" element={<Measure />} />
              <Route path="fun-fact" element={<FunFact />} />
              <Route path="high-low" element={<HighLow />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </AnimatePresence>
  );
}

export default App;
