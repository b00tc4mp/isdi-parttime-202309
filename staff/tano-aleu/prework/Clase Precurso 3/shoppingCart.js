const shoppingCart = [
{ id: 1, product: 'Shirt', price: 20, quantity: 2 },
{ id: 2, product: 'Pants', price: 30, quantity: 1 },
{ id: 3, product: 'Shoes', price: 50, quantity: 1 },
{ id: 4, product: 'Hat', price: 10, quantity: 3 },
{ id: 5, product: 'Socks', price: 5, quantity: 5 },
];

/* CALLBACKFN!!! */


/* productlist */
const productList = shoppingCart.map((shoppingCartItem) => {
    return shoppingCartItem.product
});

/* expensive-products */
const expensiveProducts = shoppingCart.filter(product => 
    product.price >= 30) 

/* target-prodcuts */
const targetProduct = shoppingCart.find(product => 
    product.id === 3);


/* total-price */
const totalPrice = shoppingCart.reduce((total, product) => 
total + product.price * product.quantity, 0);


