import {useState, useEffect} from 'react';
import CartIcon from './cart.svg';
import CartHoverIcon from './cart-hover.svg';
import AppleIcon from './apple.svg';
import './App.css';
import ProductCard from "./ProductCard";




function App() {
    const myProducts =
        [
            {
                "id": 1,
                "name": "iPhone 15",
                "price": 1500,
                "image": "https://i.ibb.co/J7q2v2f/1303-apple-iphone-15-pro-256gb-titanio-blanco-libre.jpg"
            },
            {
                "id": 1,
                "name": "iPad Pro",
                "price": 1500,
                "image": "https://i.ibb.co/5TwZngz/apple-ipad-pro-512gb-11.jpg"
            },
            {
                "id": 1,
                "name": "Macbook Pro",
                "price": 1500,
                "image": "https://img.pccomponentes.com/articles/66/663952/1726-apple-macbook-pro-apple-m1-max-32gb-1tb-ssd-162-gris-espacial.jpg"
            },
            {
                "id": 1,
                "name": "Apple Watch",
                "price": 1500,
                "image": "https://i.ibb.co/Jp7s4Mx/MT613ref-VW-34-FR-watch-49-titanium-ultra2-VW-34-FR-watch-face-49-trail-ultra2-VW-34-FR-1.png"
            },
            {
                "id": 1,
                "name": "Apple TV",
                "price": 1500,
                "image": "https://i.ibb.co/6WgmnTs/HQGK2.jpg"
            },
            {
                "id": 1,
                "name": "HomePod",
                "price": 1500,
                "image": "https://www.powerplanetonline.com/cdnassets/apple_homepod_2_altavoz_inteligente_blanco_04_ad_l.jpg"
            }
        ];


    const [isCartHovered, setCartHovered] = useState(false);
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        setProducts(myProducts);
    }

    useEffect(() => {
        getProducts();
    }, [getProducts]);

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
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Store</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Support</a>
                </div>
                <div className="cart">
                <img
                        className="cart-icon"
                        src= {isCartHovered ? CartHoverIcon : CartIcon}
                        alt="Cart"
                        onMouseEnter={() => setCartHovered(true)}
                        onMouseLeave={() => setCartHovered(false)}
                    />
                </div>
            </div>
            {
                products?.length > 0
                    ?(
                        <div className="container">
                            {products.map((product) => (
                                <ProductCard product={product}/>
                            ))}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No products found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;
