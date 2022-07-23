import React from "react";
import { Route, Routes } from "react-router-dom";
import SinglePage from "../Components/Arfeen/SinglePage";
import RequiredAuth from "../Hoc/RequiredAuth";
import AllCare from "../Pages/AllCare";
import Checkout from "../Pages/bharat_page/Checkout";
import Login from "../Pages/bharat_page/Login";
import Signup from "../Pages/bharat_page/Signup";
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/checkout" element={<RequiredAuth>
          <Checkout/>
          </RequiredAuth>}/>
       </Routes>
    </div>
  );
};

export default MainRoutes;
