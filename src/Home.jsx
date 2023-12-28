import React from "react";
import newProducts from "./data/newProducts";
import NewsContainer from "./NewsContainer";

const Home = () => {
    return(
        <NewsContainer newProducts={newProducts}/>
    );
}

export default Home;