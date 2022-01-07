import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import ProductsWithSeller from "./pages/ProductsWithSeller";
import Protected from "./pages/Protected";
import Categories from "./pages/Categories";
import FindProduct from "./pages/FindProduct";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        {/* public routes go here */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsWithSeller/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/findproduct" element={<FindProduct/>}/>
        <Route element={<RequireAuth />}>
          {/* protected routes go here */}
          <Route path="/protected" element={<Protected />} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
