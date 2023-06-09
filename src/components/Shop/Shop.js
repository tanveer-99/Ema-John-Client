import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const {products, count} = useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([])
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(()=> {
        const url = `https://ema-john-server-f175.onrender.com/products?page=${page}&size=${size}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCount(data.count);
            setProducts(data.products)
        })
    }, [page,size])
    
    const pages = Math.ceil(count/size);

    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        const ids = Object.keys(storedCart);
        fetch('https://ema-john-server-f175.onrender.com/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
        .then(res=> res.json())
        .then(data => {
            for(const id in storedCart) {
                const storedItem = data.find(product => product._id === id);
                if(storedItem) {
                    const quantity = storedCart[id];
                    storedItem.quantity = quantity;
                    savedCart.push(storedItem);
                    setCart(savedCart);
                }
            }
        })
        
      
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product._id === selectedProduct._id);
        let newCart = [];
        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">Review Orders</Link>
                </Cart>
            </div>
            <div className="pagination">
                {
                    [...Array(pages).keys()].map(number => <button
                    key={number} 
                    onClick={()=>setPage(number)}
                    className={page ===  number && 'selected'}
                    >
                        {number+1}
                    </button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                   <option value="5">5</option>
                   <option value="10" selected>10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;