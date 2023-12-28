import {useState, useEffect} from 'react';
import CartIcon from './cart.svg';
import CartHoverIcon from './cart-hover.svg';
import AppleIcon from './apple.svg';
import './App.css';
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import About from "./About";
import myProducts from "./data/products";

function App() {



    const [isCartHovered, setCartHovered] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState("Store");
    const getProducts = () => {
        setProducts(myProducts);
    }

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handleNavClick = (page) => {
        setCurrentPage(page);
        setSelectedProduct(null);
    }

    const navLinks = [
        { page: "Home", label: "Home" },
        { page: "Store", label: "Store" },
        { page: "About", label: "About" },
        { page: "Support", label: "Support" }
    ];


    const renderProducts = () => {
        if (!selectedProduct) {
            return products.length > 0 ? (
                <div className="container">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => handleProductClick(product)}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No products found</h2>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <ProductDetails product={selectedProduct} />
                </div>
            );
        }
    }


    return (


        <div className="app">
            <div className="navbar">
                <div className="logo">
                    <img
                        className="apple-icon"
                        src={AppleIcon}
                        alt="Apple"
                    />
                </div>
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.page} href="#" className="nav-link" onClick={() => handleNavClick(link.page)}>
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="cart">
                    <img
                        className="cart-icon"
                        src={isCartHovered ? CartHoverIcon : CartIcon}
                        alt="Cart"
                        onMouseEnter={() => setCartHovered(true)}
                        onMouseLeave={() => setCartHovered(false)}
                        onClick={() => setCurrentPage("Cart")}
                    />
                </div>
            </div>
            {
                currentPage === "Store" ? (
                    !selectedProduct ? (
                        renderProducts()
                    ) : (
                        <div className="container">
                            <ProductDetails product={selectedProduct}/>
                        </div>
                    )
                ) : (
                    currentPage === "Home" ? (
                        <h2>Home</h2>
                    ) : (
                        currentPage === "About" ? (
                            <About/>
                        ) : (
                            currentPage === "Support" ? (
                                <h2>Support</h2>
                            ) : (
                                currentPage === "Cart" ? (
                                    <h2>Cart</h2>
                                ) : (
                                    <h2>404 Not Found</h2>
                                )
                            )
                        )
                    )

                )
            }
        </div>

    );
}

export default App;
