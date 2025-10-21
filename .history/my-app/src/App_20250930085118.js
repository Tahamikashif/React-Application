import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import LatestProduct from './Component/LatestProduct';
import ProductDetail from './Component/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Common layout hamesha render hoga */}
      <Header />
      <Navbar />
      <Hero />
      

      {/* Routes ke andar pages aayenge */}
      <Routes>
        <Route path="/" element={<LatestProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
