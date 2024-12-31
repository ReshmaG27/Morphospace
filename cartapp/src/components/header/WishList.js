import React, { useContext } from 'react';
import { WishlistContext } from './WishListContext';
import './WishList.css';

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);

    return (
        <div>
            <h1 className='title'>MY WISHLIST</h1>
            <div className="wishlist-container">
                {wishlist.length > 0 ? (
                    wishlist.map((item) => (
                        <div key={item.id} className="wishlist-card">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.name}</h3>
                            <p>Rs.{item.price}</p> {/* Add the price for visibility */}
                            <button className="remove-btn" onClick={() => removeFromWishlist(item.id)} >Remove</button>
                        </div>
                    ))
                ) : (
                    <p>Your wishlist is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;