import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="product">
            <div>
                <img
                    className="product-image"
                    src={product.image} alt={product.name}
                />
            </div>
            <div>
                <h3 className="product-title">{product.name}</h3>
            </div>
        </div>
    );
};

export default ProductCard;