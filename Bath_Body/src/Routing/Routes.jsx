import React from "react";
import { Route, Routes } from "react-router-dom";
import SinglePage from "../Components/Arfeen/SinglePage";
import AllCare from "../Pages/AllCare";
import { HomeFragnance } from "../Pages/Home Fragnance/HomeFragnance";
import { Homepage } from "../Pages/Homepage";

const MainRoutes = () => {
  return (
    <div>   
      <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path='/body-care' element={<AllCare/>}/>
          <Route path='/homefragrance' element={<HomeFragnance/>}/>
          <Route path="/allcareProducts/:id" element={<SinglePage/>}></Route>
    </div>
  );
};

export default MainRoutes;
