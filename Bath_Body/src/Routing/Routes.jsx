import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Arfeen/Footer/Footer";
import { Navbar } from "../Components/Navbar";
import SinglePage from "../Components/Arfeen/SinglePage";
import AllCare from "../Pages/AllCare";
import { HomeFragnance } from "../Pages/Home Fragnance/HomeFragnance";
import  {Homepage}  from "../Pages/Homepage";
import Candle from "../Pages/Candle";
import HandSoap from "../Pages/HandSoap";

const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <div>   
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path='/body-care' element={<AllCare/>}/>
          <Route path='/candle' element={<Candle/>}/>
          <Route path='/handsoap' element={<HandSoap/>}/>
          <Route path='/homefragrance' element={<HomeFragnance/>}/>
          <Route path="/allcareProducts/:id" element={<SinglePage/>}/>
      </Routes>
      <Footer/>
    </div>
  </>
  )
}

export default MainRoutes;
