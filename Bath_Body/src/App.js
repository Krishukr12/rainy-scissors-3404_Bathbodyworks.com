// import MainRoutes from "./Routing/Routes";
import { Navbar } from "./Components/Navbar";
import { useSelector } from "react-redux";
import { HomeFragnance } from "./Pages/Home Fragnance/HomeFragnance";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <MainRoutes/> */}
      <HomeFragnance />
    </div>
  );
}

export default App;
