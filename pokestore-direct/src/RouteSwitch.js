import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./Components/Homepage";
import Products from './Components/Products'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
