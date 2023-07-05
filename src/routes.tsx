import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidenav from "./layout/Sidenav";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/user" element={<Sidenav />}>
        <Route index element={<Profile />} />
        <Route element={<Analytics />} path="analytics" />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
