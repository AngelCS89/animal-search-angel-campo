import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;