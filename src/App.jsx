import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Mainbody from "./Components/Mainbody";
import Sentiment from "./Components/Sentiment";
import TrendingCoins from "./Components/TrendingCoins";

function App() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  );
}

function RouterContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const isRootRoute = window.location.pathname === "/";

    if (isRootRoute) {
      navigate("/bitcoin");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:coinId" element={<Mainbody />} />
      </Routes>
    </>
  );
}

export default App;
