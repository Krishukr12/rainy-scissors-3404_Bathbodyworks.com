import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";


const MainRoutes = () => {
  return (
    <div>
     
      <Routes>
          <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      
    </div>
  );
};

export default MainRoutes;