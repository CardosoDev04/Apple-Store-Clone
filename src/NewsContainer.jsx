import React from "react";
import {motion} from "framer-motion";
const NewsContainer = ({newProducts}) => {
    return (
<>
    <motion.div className="news-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut",  duration: 1.5 }}
    >
            <div className="new-product-image-container">
                <img className="new-product-image" src={newProducts[0].image} alt={newProducts[0].name}/>
            </div>
            <div className="new-product-details-container">
                <h2
                    className="new-product-title">{newProducts[0].name}</h2>
                <h3 className="new-product-price">
                    Starting at: <br/>
                    ${newProducts[0].price}</h3>
                <p className="new-product-description">
                    {newProducts[0].description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                <a href="#"></a>
            </div>
    </motion.div>
</>
    );
}
export default NewsContainer;