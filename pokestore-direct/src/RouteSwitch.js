import { Route, HashRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Homepage from "./Components/Homepage";
import ProductsClass from './Components/ProductsClass'

const RouteSwitch = () => {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsClass />} />


      </Routes>
    </Router>




  );
};

export default RouteSwitch;
