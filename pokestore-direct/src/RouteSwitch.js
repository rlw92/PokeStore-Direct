import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./Components/Homepage";
import ProductsClass from './Components/ProductsClass'

const RouteSwitch = () => {
  return (
    <BrowserRouter basename='/app/'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsClass />} />


      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
