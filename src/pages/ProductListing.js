import React, { useContext } from 'react';
import { CartContext } from '../App';
import ProductItem from '../components/ProductItem';

const products = [
    { id: 1, name: 'Apple iPhone 14', price: 79900.00, image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708674029/Croma%20Assets/Communication/Mobiles/Images/300665_0_vveh9a.png"},
    { id: 2, name: 'Samsung Galaxy S23', price: 50099.00, image: 'https://m.media-amazon.com/images/I/519nePwnpIL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, name: 'Google Pixel 8 Pro', price: 101999.00, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/a/s/x/-original-imagtwh4snkqfdam.jpeg?q=90&crop=false' },
    { id: 4, name: 'OnePlus 11 ', price: 50999.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe44qS3XsYY3DsNTObV_QjxYGRvI18DGfEcg&s' },
    { id: 5, name: 'Sony WH-1000XM4', price: 29990.00, image: 'https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF' },
];



const ProductListing = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product, quantity) => {
        addToCart(product, parseInt(quantity));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Product Listing</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};


export default ProductListing;
