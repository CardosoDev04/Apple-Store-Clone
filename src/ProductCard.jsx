import React from 'react';

const ProductCard = ({product, onClick}) => {
    return (
        <div className="product" onClick={onClick}>
            <div>
                <img
                    className="product-image"
                    src={product.image} alt={product.name}
                    onClick={() => {

                    }}
                />
            </div>
            <div>
                <h3 className="product-title">{product.name}</h3>
            </div>
        </div>
    );
};

export default ProductCard;