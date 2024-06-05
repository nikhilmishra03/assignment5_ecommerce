import React, { useContext } from 'react';
import { CartContext } from '../App';

const Cart = () => {
    const { cart } = useContext(CartContext);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Shopping Cart</h1>
            <div className="bg-white shadow-xl rounded-lg p-6">
                {cart.length > 0 ? (
                    <div>
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b pb-4 mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <p className="text-lg font-bold text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="text-right mt-4">
                            <h2 className="text-2xl font-semibold text-indigo-700">Total Quantity: {totalQuantity}</h2>
                            <h2 className="text-2xl font-semibold text-indigo-700">Total Price: ₹{totalPrice}</h2>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-600">Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
