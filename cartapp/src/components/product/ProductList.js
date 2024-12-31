import React, { useState, useRef, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../cart/CartContext';
import { WishlistContext } from '../../components/header/WishListContext';
import { products } from '../../products'; // Assuming the products array is imported from this file

const ProductList = ({ category }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { addToWishlist, removeFromWishlist, wishlist } = useContext(WishlistContext);

    const [addedToCart, setAddedToCart] = useState(null);
    const [resizeStart, setResizeStart] = useState(false);
    const productListRef = useRef(null);

    // Filter products based on category
    const filteredProducts = products.filter(product => product.category === category);

    const isInWishlist = (id) => wishlist.some(item => item.id === id);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedToCart(product.id);
        setTimeout(() => setAddedToCart(null), 2000);
    };

    const handleWishlistToggle = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const handleImageClick = (id) => {
        navigate(`/product/${id}`);
    };

    const handleMouseDown = (e) => {
        setResizeStart(true);
        document.body.style.cursor = 'ew-resize';
        e.preventDefault();

        const onMouseMove = (e) => {
            if (resizeStart && productListRef.current) {
                const newWidth = e.clientX - productListRef.current.getBoundingClientRect().left;
                productListRef.current.style.width = `${newWidth}px`;
            }
        };

        const onMouseUp = () => {
            setResizeStart(false);
            document.body.style.cursor = 'default';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>{category} Products</h1>
            
            <div
                ref={productListRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '20px',
                    resize: 'horizontal',
                    overflow: 'auto',
                    position: 'relative',
                    width: '100%',
                }}
            >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '16px',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                backgroundColor: 'white',
                                position: 'relative',
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer' }}
                                onClick={() => handleImageClick(product.id)}
                            />
                            <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
                            <p style={{ fontSize: '18px', color: '#555' }}>Rs.{product.price}</p>
                            <span
                                onClick={() => handleWishlistToggle(product)}
                                style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    left: '10px',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: isInWishlist(product.id) ? 'red' : '#007bff',
                                }}
                            >
                                {isInWishlist(product.id) ? '❤️' : '🤍'}
                            </span>
                            <span
                                onClick={() => handleAddToCart(product)}
                                style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: addedToCart === product.id ? '#28a745' : '#007bff',
                                }}
                            >
                                {addedToCart === product.id ? '✔️' : '🛒'}
                            </span>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', fontSize: '18px', color: '#888' }}>No products available in this category.</p>
                )}
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    cursor: 'ew-resize',
                    width: '10px',
                    height: '100%',
                    backgroundColor: '#ccc',
                }}
                onMouseDown={handleMouseDown}
            />
        </div>
    );
};

export default ProductList;
