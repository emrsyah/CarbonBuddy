import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./pages/app/Layout";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Tracker from "./pages/app/Tracker";
import { RecoilRoot } from "recoil";
import Measure from "./pages/app/measure/Measure";
import FunFact from "./pages/app/FunFact";
import HighLow from "./pages/app/HighLow";
import { AnimatePresence } from "framer-motion";
import Transport from "./pages/app/measure/Transport";
import Flight from "./pages/app/measure/Flight";
import Ship from "./pages/app/measure/Ship";
import Food from "./pages/app/measure/Food";
import Smoke from "./pages/app/measure/Smoke";
import Holiday from "./pages/app/measure/Holiday";
import Result from "./pages/app/measure/Result";

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
              <Route path="measure/transport" element={<Transport />} />
              <Route path="measure/flight" element={<Flight />} />
              <Route path="measure/ship" element={<Ship />} />
              <Route path="measure/food" element={<Food />} />
              <Route path="measure/smoke" element={<Smoke />} />
              <Route path="measure/holiday" element={<Holiday />} />
              <Route path="measure/result" element={<Result />} />
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
