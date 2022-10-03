import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./Components/Homepage";
import ProductsClass from './Components/ProductsClass'

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsClass />} />


      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
