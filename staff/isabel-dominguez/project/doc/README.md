# Maketics Shop

## Intro
Maketics is an e-commerce that offers the experience of creating your own beauty products from the comfort of your home. You'll be able to find ingredients from essential oils to organic butters and tools and materials to help you with their preparation. There is also a recipe section where you can follow the preparation step by step.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGl5dXB2NGIwN2N0c2s1M2cxNW9iMmlxbzJkeWxrZXlvbWN4YXh0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UkywKrH8teJYA/giphy.gif)

## Functional Description

Browse, shop and create your own homemade beauty products.

### Use Cases

Anonymous users:

- Visualize the products and recipes in the store.
- View details of a product.
- Visualize recipe preparation.

Registered user:

- Visualize the products and recipes in the store.
- View details of a product.
- Visualize recipe preparation.
- Add/remove product from wishlist.
- Add/remove product from cart.
- Add/remove product units in the cart.
- Display orders.
- Make a purchase. 
- Profile management (delete account, change password and email) (v.2.0)
- Reviews (v.2.0)


## Technical Description

### Data Model

User
* id (string)
* name (string)
* email (string)
* password (string)
* favs (array de Product.id)

Order
* id (string)
* User.id (string)
* products (array de Product.id y quantity)
* date (Date)

Product
* id (string)
* name (string) 
* description (string)
* image (string)
* price (number)
* type (string)

Recipe
* id (string)
* name (string)
* description (string)
* image (string)
* products (array de Product.id)
* type (string)




Technologies using JavaScript as a programming language;
- Frontend: HTML | CSS | React
- Backend: Node.js | Express
- Database: MongoDB
- Testing: Mocha y Chai