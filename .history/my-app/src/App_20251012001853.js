import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import LatestProduct from './Component/LatestProduct';
import ProductDetail from './Component/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topup from './Component/Topup';
import Footer from './Component/Footer';
importCartPages from "../src/Cartpage";


function App() {
  return (
     <div>

    <Router>
      {/* Common layout hamesha render hoga */}
      <Header />
      <Navbar />
      <Hero />
      <CartPages />
    
      

      {/* Routes ke andar pages aayenge */}
      <Routes>
        <Route path="/" element={
           <>
          <LatestProduct /> 
           <Topup />
            <Footer />
          
           </>
          } />
        <Route path="/product/:id" element={<ProductDetail />} />
       
      </Routes>
    </Router>
     
     
     </div>
  );
}

export default App;
