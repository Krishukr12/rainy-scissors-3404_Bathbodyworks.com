import MainRoutes from "./Routing/Routes";
import { Navbar } from "./Components/Navbar";
import Cart from "./Components/Cart";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Cart/>
      
    </div>
  );
}

export default App;