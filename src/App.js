import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import ProductLayout from "./components/ProductLayout";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
