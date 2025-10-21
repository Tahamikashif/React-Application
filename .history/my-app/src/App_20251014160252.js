import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import LatestProduct from './Component/LatestProduct';
import ProductDetail from './Component/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topup from './Component/Topup';
import Footer from './Component/Footer';
import Carts from "./Cartpages";
import { CartProvider } from './Cartcontext';

function App() {
  return (
     <div>
    <CartProvider>
    <Router>
      {/* Common layout hamesha render hoga */}
      <Header />
      <Navbar />
      <Hero />
    
     
    
      

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
          <Route path='/Carts' element />
       
          {/* <Route path='/cart' element={<Carts/>}/> */}
      
         
      </Routes>
    </Router>
     </CartProvider>
        
     
     </div>
  );
}

export default App;
