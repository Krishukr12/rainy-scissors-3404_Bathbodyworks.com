
import MainRoutes from "./Routing/Routes";
import { Navbar } from "./Components/Navbar";
import Signup from "./Pages/bharat_page/Signup.jsx";
import Login from "./Pages/bharat_page/Login.jsx"
import Checkout from "./Pages/bharat_page/Checkout";


function App() {
  return (
    <div className="App">
      <Navbar />
       <MainRoutes /> 
      {/* <Login/>  */}
      {/* <Checkout/> */}
      {/* <Signup/>  */}
    </div>
  );
}

export default App;
