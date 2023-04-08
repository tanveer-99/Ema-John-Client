import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {previousCart} = useLoaderData();
    
    const [cart, setCart] = useState(previousCart);

    const handleRemoveItem = (id)=> {
        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    >
                    </ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/shipping">Proceed Shipping</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;