import MainRoutes from "./Routing/Routes";
import { Navbar } from "./Components/Navbar";
import AllCare from './Pages/AllCare'
import SinglePage from "./Components/Arfeen/SinglePage";
import Candle from "./Pages/Candle";
import HandSoap from "./Pages/HandSoap";
import { HomeFragnance } from "./Pages/Home Fragnance/HomeFragnance";
// import Login from './bharat_page/Login'
function App() {
  return (
    <div className="App">
       <Navbar/>
      <MainRoutes/>
      {/* <Candle/> */}
      {/* <HandSoap/> */}
     {/* <AllCare/> */}
     <HomeFragnance/>
     {/* <SinglePage/> */}
     {/* <Login/> */}
    </div>
  );
}

export default App;