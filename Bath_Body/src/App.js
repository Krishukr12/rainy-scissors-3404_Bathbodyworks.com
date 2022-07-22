import MainRoutes from "./Routing/Routes";
import { Navbar } from "./Components/Navbar";
import AllCare from './Pages/AllCare'
// import Login from './bharat_page/Login'
function App() {
  return (
    <div className="App">
       <Navbar/>
      {/* <MainRoutes/> */}
     <AllCare/>
     {/* <Login/> */}
    </div>
  );
}

export default App;