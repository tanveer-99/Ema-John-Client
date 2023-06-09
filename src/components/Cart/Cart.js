import React from 'react';
import './Cart.css'

const Cart = ({cart, children}) => {
    let total = 0;
    let quantity = 0;
    let shipping = 0;
    cart.map(product => 
        { 
            quantity = quantity + product.quantity;
            total = total+ (product.price*quantity);
            shipping = shipping + product.shipping;
            // eslint-disable-next-line no-sequences
            return total, shipping;
        }
        )
    const VAT = (total * 0.1).toFixed(2);
    const grand = total + shipping + parseFloat(VAT);
    
    return (
        <div className='cart'>
            <h4>Order Summary in cart</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>VAT: {VAT}</p>
            <h5>Grand Total: {grand.toFixed(2)}</h5>
            {children}
        </div>
    );
};

export default Cart;