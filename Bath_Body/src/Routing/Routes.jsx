import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Arfeen/Footer/Footer";
import { Navbar } from "../Components/Navbar";
import SinglePage from "../Components/Arfeen/SinglePage";
import RequiredAuth from "../Hoc/RequiredAuth";
import AllCare from "../Pages/AllCare";
import Checkout from "../Pages/bharat_page/Checkout";
import Login from "../Pages/bharat_page/Login";
import Signup from "../Pages/bharat_page/Signup";
import { HomeFragnance } from "../Pages/Home Fragnance/HomeFragnance";
import  {Homepage}  from "../Pages/Homepage";
import Candle from "../Pages/Candle";
import HandSoap from "../Pages/HandSoap";
import PageNotFound from "../Components/Arfeen/PageNotFound";

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
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/checkout" element={<RequiredAuth>
          <Checkout/>
          </RequiredAuth>}/>
          <Route path="/allcareProducts/:id" element={<SinglePage/>}/>


          {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </div>
  </>
  )
}

export default MainRoutes;
