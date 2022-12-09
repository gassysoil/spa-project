import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome></Welcome>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/product_detail/:productID"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
