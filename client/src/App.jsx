import "./App.css";
import "./Components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Servicios from "./Components/Servicios";
import CrearProducto from "./Components/CrearProducto";
import Products from "./Components/Products";
import Cart from "./Components/Cart";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            {/* <Route path="/" element={<NavBar/>}/> */}
            <Route path="/" element={<Products />} />
            <Route path="/catalogo" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productos" element={<CrearProducto />}/>
            
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
