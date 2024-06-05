import React, { useState, createContext } from 'react';
import Navbar from './components/Navbar';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notification from './components/Notification';
export const CartContext = createContext();

const App = () => {
    const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState('');

    const addToCart = (product, quantity) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex >= 0) {
            const newCart = [...cart];
            newCart[existingProductIndex].quantity += quantity;
            setCart(newCart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
        setNotification(`${product.name} has been added to the cart`);
        setTimeout(() => setNotification(''), 3000);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            <Router>
                <Navbar />
                {notification && <Notification message={notification} />}
                <Routes>
                    <Route path="/" element={<ProductListing />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </CartContext.Provider>
    );
};

export default App;
