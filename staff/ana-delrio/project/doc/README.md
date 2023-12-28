# READ TOGETHER 📕📗📙

## Summary

Esta aplicación web permitirá a los usuarios compartir, explorar libros y participar en clubes de lectura. Con una interfaz intuitiva, fomentará la interacción social en torno a la pasión por la lectura, creando una comunidad y facilitando el intercambio de ideas literarias.

![](https://media4.giphy.com/media/3otPonSG56cvNy9BNm/giphy.gif?cid=ecf05e47gvggq50e2f9prkuop2kzvw28umn3atjnaujhutd5&ep=v1_gifs_related&rid=giphy.gif&ct=g)


## Functional Description

### Use Cases

- search books
- add books
- share (reviews, exchange intention)
- Comments other's users reviews
- Make make own list (read, want to read, reading)
- add friends
- make like
- view history
- publish post


## Views

Home: 
    * Search books
    * Friends activity
    * like
    * comment
    * notification 

- Search: 
    * Want to read | Currently Reading | Read
    * Community Rating and reviews 
    * Comments

- My fav list book
    * lists: want to read, read
    * Reading challenge 

- More: 
    * My profile
    * Reading challenge
    * Add friends
    * Groups
    * Scan books
    * Settings

- Reading club
    * Novel
    * Hystoric
    * Clasics 
    * Science fiction / fantasy

- Change books 
    * chat ¿
    
## Technical Description

## Data Model

User
User
- id (string)
- name (string)
- email (string)
- password (string)

Socks
- id (string)
- name (string)
- size (string)
- theme (string)
- brand (string)
- model (string)
- price (number)

Cart
- id (string)
- user (User.id)
- items ([Socks.id])

Order
- id (string)
- user (User.id)
- date (Date)
- items ([Socks.id])







