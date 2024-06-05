import React, { useContext, useState } from 'react';
import { CartContext } from '../App';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const handleConfirmOrder = () => {
        setOrderConfirmed(true);
        clearCart();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">Checkout</h1>
            <div className="bg-white shadow-2xl rounded-lg p-8">
                {orderConfirmed ? (
                    <div className="text-center">
                        <p className="text-3xl font-semibold text-green-600">Your order is confirmed!</p>
                        <p className="text-lg text-gray-700 mt-4">Thank you for your purchase. Your order will be processed shortly.</p>
                    </div>
                ) : cart.length > 0 ? (
                    <div>
                        <div className="divide-y divide-gray-200">
                            {cart.map((item, index) => (
                                <div key={index} className="py-4 flex justify-between items-center">
                                    <div>
                                        <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
                                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                                    </div>
                                    <p className="text-xl font-bold text-gray-800">₹ {(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-right">
                            <h2 className="text-2xl font-bold text-indigo-700">Total Quantity: {totalQuantity}</h2>
                            <h2 className="text-2xl font-bold text-indigo-700">Total Price: ₹ {totalPrice}</h2>
                        </div>
                        <div className="text-center mt-8">
                            <button 
                                onClick={handleConfirmOrder}
                                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                            >
                                Confirm Order
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-700 text-lg">Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default Checkout;
