# e-Commerce

## Intro
e-Commerce de materia prima, utensilios y envases para elaborar cosmética natural en casa.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGl5dXB2NGIwN2N0c2s1M2cxNW9iMmlxbzJkeWxrZXlvbWN4YXh0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UkywKrH8teJYA/giphy.gif)

## Functional Description

Este proyecto es un e-commerce diseñado para la venta de productos, utensilios y envases destinados a la elaboración de cosmética natural. Además, proporcionará un apartado dedicado a compartir recetas para la creación de cosméticos caseros.

### Use Cases

- Registro de Usuarios
- Home (productos)
- Recetas (otra vista)
- Agregar Productos al Carrito
- Hacer el pago
- Gestión de Perfil

## Technical Description

Será una pagina web;
- Frontend: HTML, CSS, JavaScript (con React) 
- Backend: Node.js y Express
- Database: MongoDB
- Testing: Mocha y Chai

### Data Model

User
* id (string)
* name (string)
* email (string)
* password (string)

Product
* id (string)
* name (string)
* price (string)

Recipe
* id (string)
* name (string)

Order
* id (string)
