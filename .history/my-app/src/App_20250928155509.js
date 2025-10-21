
import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import LatestProduct from './Component/LatestProduct';

function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <Hero />
        <LatestProduct />
         <Router>
      <Routes>
        <Route path="/" element={<LatestProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
