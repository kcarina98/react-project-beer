import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./assets/pages/Landingpage";
import AllBeers from "./assets/pages/AllBeers";
import BeerDetails from "./assets/pages/BeerDetails";
import Random from "./assets/pages/Random";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/allbeers" element={<AllBeers />} />
          <Route path="/allbeers/:id" element={<BeerDetails />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
