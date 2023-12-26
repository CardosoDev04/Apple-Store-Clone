import React from "react";

const ProductDetails = ({product}) => {
    return (
        <>
        <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image-detail"/>
        </div>
            <div className="product-details-container">
            <h2 className="product-title-details">{product.name}</h2>
                <h3 className="product-price-details">${product.price}</h3>
                <p className="product-description-details">
                    {product.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </>
    );
}

export default ProductDetails;