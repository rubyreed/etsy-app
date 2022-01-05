import "./App.css";
import Home from "./pages/Home";
import Public from "./pages/Public";
import Protected from "./pages/Protected";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import Products_With_Seller from './components/Products_With_Seller';


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        {/* public routes go here */}
        <Route path="/public" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products_With_Seller/>}/>
        <Route element={<RequireAuth />}>
          {/* protected routes go here */}
          <Route path="/" element={<Home />} />
          <Route path="/protected" element={<Protected />} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
