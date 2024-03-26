# Maketics

## Intro
e-Commerce of raw materials, utensils and packaging to make natural cosmetics at home.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGl5dXB2NGIwN2N0c2s1M2cxNW9iMmlxbzJkeWxrZXlvbWN4YXh0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UkywKrH8teJYA/giphy.gif)

## Functional Description

This project is an e-commerce designed for the sale of products, utensils and packaging for the production of natural cosmetics. In addition, it will provide a section dedicated to sharing recipes for the creation of homemade cosmetics.

### Use Cases

User anonimo

- Visualizar los productos y recetas de la tienda.
- Visualizar detalles de un producto.
- Buscar productos por nombre.
- Filtrar recetas por categorías.

User registrado

- Visualizar los productos y recetas de la tienda.
- Visualizar detalles de un producto. (toggle)
- Buscar productos por nombre.
- Filtrar recetas por categorías. (dropdown)
- Añadir/quitar producto de la lista de deseos. (toggle)
- Añadir/quitar producto del carrito. (toggle)
- Añadir/quitar unidades de producto en el carrito. (toggle)
- Pagar orden de compra. (simulado)
- Visualizar ordenes. 
- Gestión de perfil (Borrar cuenta, cambio de contraseña y email) (Si da tiempo)
- Reviews (si da tiempo)


## Technical Description



### Data Model

User
* id (string)
* name (string)
* email (string)
* password (string)
* favs (array de Product.id)

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

Order
* id (string)
* date (Date)
* products (array de Product.id)



Technologies using JavaScript as a programming language;
- Frontend: HTML | CSS | React
- Backend: Node.js | Express
- Database: MongoDB
- Testing: Mocha y Chai