import {React,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/login'; 
import HomePage from './pages/HomePage'; 
import RegisterPage from './components/auth/signup';
import CartPage from './components/cart/cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </Router> 
  );
}

export default App;
