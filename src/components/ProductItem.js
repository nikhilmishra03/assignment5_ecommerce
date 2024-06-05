import { useRef } from "react";


const ProductItem = ({ product, handleAddToCart }) => {
    const quantityRef = useRef(1);

    const handleAddToCartClick = () => {
        handleAddToCart(product, quantityRef.current.value);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-700 mb-4">₹ {product.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">
                <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 p-2 border border-gray-300 rounded-md text-center mr-2"
                    ref={quantityRef}
                />
                <button
                    onClick={handleAddToCartClick}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};


export default ProductItem; 