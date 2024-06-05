import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineProduct } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { IoBagCheckOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/"><div className="text-white text-2xl font-bold">MyShop</div></Link>
                <div className="flex space-x-8 text-white text-lg">
                    <Link to="/" className="flex items-center hover:text-indigo-300 transition duration-300">
                        <AiOutlineProduct className="mr-2" /> Products
                    </Link>
                    <Link to="/cart" className="flex items-center hover:text-indigo-300 transition duration-300">
                        <FiShoppingCart className="mr-2" /> Cart
                    </Link>
                    <Link to="/checkout" className="flex items-center hover:text-indigo-300 transition duration-300">
                        <IoBagCheckOutline className="mr-2" /> Checkout
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
