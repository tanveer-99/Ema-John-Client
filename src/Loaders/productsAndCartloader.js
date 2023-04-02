import { getShoppingCart } from "../utilities/fakedb";
export const productsAndCartLoader = async ()=> {
    // get product data
    const productData = await fetch('products.json');
    const products = await productData.json();
    // get cart data
    const savedCart = getShoppingCart();
    const previousCart = [];
    for(const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct) {
            addedProduct.quantity = savedCart[id] //quantity of saved item on local storage;
            previousCart.push(addedProduct);
        }
    }

    return {products, previousCart}; 
}